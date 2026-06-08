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
                    <button class="delete-btn" onclick="deleteEmployee(${emp.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

async function deleteEmployee(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this employee?");

    if (!confirmDelete) {
        return;
    }

    const response = await fetch(
        `/employees/deleteEmp/${id}`,
        {
            method: "DELETE"
        }
    );

    if (response.ok) {

        alert("Employee deleted successfully");

        loadEmployees(); // Refresh table

    } else {

        alert("Failed to delete employee");
    }
}

function addEmployee() {

    window.location.href =
        "../employeeDetails/empDetails.html";
}

window.onload = loadEmployees;