
// Navigation
function goHome(){
        window.location.href = "../home/home.html";
}

function loginAdmin(){
    localStorage.setItem("role", "admin");
    const username =
        document.getElementById("adminUser").value;

    const password =
        document.getElementById("adminPass").value;

    if(
        username === "admin" &&
        password === "admin123"
    ){

        window.location.href =
            "dashboard.html";
    }
    else{

        alert("Invalid Admin Credentials");
    }
}