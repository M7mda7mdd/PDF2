
// 🔐 Redirect to login if not logged in
if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "home.html";
}

let logoutTimer;

function resetTimer() {
    clearTimeout(logoutTimer);
    logoutTimer = setTimeout(() => {
        sessionStorage.removeItem("loggedIn");
        alert("You were logged out due to 5 minutes of inactivity.");
        window.location.href = "login.html";
    }, 5 * 60 * 1000); // 5 minutes
}

// Events that reset the timer
window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeydown = resetTimer;
document.ontouchstart = resetTimer; // for mobile

// 🔓 Manual logout
function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}


// <!-- Logout button (moved outside script for proper rendering) -->