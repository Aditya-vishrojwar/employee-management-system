function goHome(){
     const role = localStorage.getItem("role");
     window.location.href = "../home/home.html";
}

function loginAdmin(){


    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if(
        username === "admin" &&
        password === "admin123"
    ){

        window.location.href =
            "../admin/dashboard.html";
    }
    else{

        alert("Invalid Credentials");
    }
}
async function loadEmployees() {

    const response = await fetch(
        "/employees/getAllEmp"
    );

    const employees = await response.json();
    console.log(employees);
    const table =
        document.getElementById("employeeTable");

    table.innerHTML = "";

    employees.forEach(emp => {

        table.innerHTML += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.email}</td>
                <td>${emp.department}</td>
                <td>
                    <button class="update-btn">Update</button>
                    <button class="delete-btn">Delete</button>
                </td>
            </tr>
        `;
    });
}

function addEmployee() {

    window.location.href =
        "../employeeDetails/empDetails.html";
}

window.onload = loadEmployees;