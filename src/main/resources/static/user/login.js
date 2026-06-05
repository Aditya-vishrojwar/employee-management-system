// Go Back Home
function goHome() {
    window.location.href = "../home/home.html";
}

// User Login
async function loginUser() {
    localStorage.setItem("role", "user");
    const login = {
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
    };

    const response = await fetch(
        "/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        }
    );

    if (response.ok) {

        alert("Login Successful");

        window.location.href =
            "../employeeDetails/empDetails.html";

    } else {

        const message = await response.text();
        alert(message);
    }
}
