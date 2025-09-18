const loginPage = "/index.html"; // login page
const mainPage = "/home.html";   // main page after login

function checkAuth() {
    const loggedIn = localStorage.getItem("loggedIn");
    const currentPath = window.location.pathname;

    // If not logged in and not on login page → redirect to login
    if (loggedIn !== "true" && currentPath !== loginPage) {
        window.location.href = loginPage;
    }

    // If logged in and on login page → redirect to main page
    if (loggedIn === "true" && currentPath === loginPage) {
        window.location.href = mainPage;
    }
}

// Auto logout after 5 minutes of inactivity
let logoutTimer;
function resetTimer() {
    clearTimeout(logoutTimer);
    logoutTimer = setTimeout(() => {
        localStorage.removeItem("loggedIn");
        alert("You were logged out due to 5 minutes of inactivity.");
        window.location.href = loginPage;
    }, 5 * 60 * 1000);
}

// Setup event listeners
function setupTimers() {
    window.addEventListener("load", resetTimer);
    document.addEventListener("mousemove", resetTimer);
    document.addEventListener("keydown", resetTimer);
    document.addEventListener("touchstart", resetTimer);
}

// Run on page load
checkAuth();
setupTimers();
