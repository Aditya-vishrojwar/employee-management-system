
// Navigation
function goHome(){
        window.location.href = "../home/home.html";
}

// Employee Form
document.getElementById("employeeForm")
.addEventListener("submit", async function(e){

    e.preventDefault();
    console.log("inside empDetails")
    const employee = {
        name:
        document.getElementById("name").value,

        email:
        document.getElementById("email").value,

        department:
        document.getElementById("department").value
    };

        // call backend api and save data to database
        const response = await fetch(
               "/employees/saveEmp",
               {
                   method: "POST",
                   headers: {
                       "Content-Type": "application/json"
                   },
                   body: JSON.stringify(employee)
               }
           );
        if (response.ok) {
               alert("Employee details added Successfully");
           } else {
               alert("try again...");
           }
           this.reset();
        const role = localStorage.getItem("role");

        if (role === "admin") {
            // Admin logic
            window.location.href = "../admin/dashboard.html";
        } else {
            // User logic
            window.location.href = "../home/home.html";
        }
});


