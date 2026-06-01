/* =============================================
   auth.js — InternConnect Shared Auth Utility
   Har page pe include karo: <script src="auth.js"></script>
   ============================================= */

/* 1. Header ko login status ke hisaab se update karna */
function updateHeader() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const role = localStorage.getItem("role");
    const userName = localStorage.getItem("userName") || "User";

    // Header ka right section dhundho
    const headerRight = document.querySelector(".header-right");
    if (!headerRight) return;

    if (isLoggedIn) {
        // Role badge color
        const roleColors = {
            student:  "#4CAF50",
            employer: "#2196F3",
            admin:    "#F44336"
        };
        const roleColor = roleColors[role] || "#D4A943";

        // Login/Register hide karo, user info + logout dikhao
        headerRight.innerHTML = `
            <span class="logged-in-info" style="
                color: #fff;
                font-size: 14px;
                display: flex;
                align-items: center;
                gap: 8px;
            ">
                <i class="fa-solid fa-user" style="color: #D4A943;"></i>
                <span style="color:#D4A943; font-weight:600;">${userName}</span>
                <span style="
                    background: ${roleColor};
                    color: #fff;
                    font-size: 11px;
                    padding: 2px 8px;
                    border-radius: 20px;
                    font-weight: 600;
                    text-transform: capitalize;
                ">${role}</span>
            </span>
            <a href="profile.html" class="profile-link">
                <i class="fa-solid fa-user"></i>
            </a>
            <button onclick="logout()" style="
                background: transparent;
                border: 1px solid #D4A943;
                color: #D4A943;
                padding: 6px 14px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 13px;
                font-weight: 600;
                transition: all 0.2s;
            " onmouseover="this.style.background='#D4A943'; this.style.color='#000';"
               onmouseout="this.style.background='transparent'; this.style.color='#D4A943';">
                <i class="fa-solid fa-right-from-bracket"></i> Logout
            </button>
        `;
    }
    // Agar logged out hai toh header waise hi rahega (Login + Register buttons)
}


/* 2. Role-based page protection */
function requireRole(allowedRoles) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const role = localStorage.getItem("role");

    if (!isLoggedIn) {
        alert("Please login first!");
        window.location.href = "login.html";
        return false;
    }

    if (!allowedRoles.includes(role)) {
        // Role-specific message
        if (role === "student") {
            alert("❌ Students cannot access this page.\nOnly Employers and Admins can post jobs, internships, or manage company profiles.");
        } else {
            alert("❌ You don't have permission to access this page.");
        }
        window.history.back();
        return false;
    }
    return true;
}


/* 3. Student ko restricted buttons click karne se rokna */
function blockStudentAction(actionName) {
    const role = localStorage.getItem("role");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
        alert("Please login first!");
        window.location.href = "login.html";
        return true; // blocked
    }

    if (role === "student") {
        const messages = {
            "post_job":        "❌ Students cannot post jobs.\nOnly Employers can post job listings.",
            "post_internship": "❌ Students cannot post internships.\nOnly Employers can post internship listings.",
            "company_profile": "❌ Students cannot create a Company Profile.\nOnly Employers can manage company profiles.",
        };
        alert(messages[actionName] || "❌ You don't have permission for this action.");
        return true; // blocked
    }
    return false; // allowed
}


/* 4. Logout function */
function logout() {
    localStorage.removeItem("role");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully!");
    window.location.href = "index.html";
}


/* Auto-run when page loads */
document.addEventListener("DOMContentLoaded", function() {
    updateHeader();
});