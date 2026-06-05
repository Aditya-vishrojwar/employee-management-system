// Navigation
function goHome(){
        window.location.href = "../home/home.html";
}


// User Login
async function signingUp(){
    console.log("entered in signup")

     const employee = {

            firstName:
            document.getElementById("FirstName").value,

            loginEmail:
            document.getElementById("loginEmail").value,

            loginPassword:
            document.getElementById("loginPassword").value
        };

    try {

           const response = await fetch(
               "/signUp",
               {
                   method: "POST",
                   headers: {
                       "Content-Type": "application/json"
                   },
                   body: JSON.stringify(employee)
               }
           );

           if (response.ok) {

               alert("Sign Up Successfully");

               window.location.href =
                   "../user/login.html";

           } else {

               alert("Registration Failed");
           }

       } catch (error) {

           console.error(error);

           alert("Server Error");
       }
}





