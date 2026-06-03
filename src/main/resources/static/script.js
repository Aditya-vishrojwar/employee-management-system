// Load employee list when page opens
window.onload = function () {
    loadEmployees();
};

// Save employee
async function saveEmployee() {

    const employee = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value
    };

    await fetch("/employees/saveEmp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    });

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("department").value = "";

    loadEmployees();
}

// Fetch employees from backend
async function loadEmployees() {

    const response = await fetch("/employees/getAllEmp");

    const employees = await response.json();

    let output = "";

    employees.forEach(emp => {

        output += `
            <li>
                <b>ID:</b> ${emp.id}
                |
                <b>Name:</b> ${emp.name}
                |
                <b>Email:</b> ${emp.email}
                |
                <b>Department:</b> ${emp.department}
            </li>
        `;
    });

    document.getElementById("employeeList").innerHTML = output;
}