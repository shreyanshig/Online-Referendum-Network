/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let userid , password;
function connectUser()
{
    userid = $("#username").val();
    password = $("#password").val();
    if(validate() === false){
        swal("Access denied!", "All fields are mandatory", "error");
        return;
    }
    let data = {userid : userid,
                password : password
            };
    let xhr = $.post("LoginControllerServlet", data, processResponse);
    xhr.fail(handleError);
    
}
function validate()
{
    if(userid === "" || password === ""){
        swal("Access denied!", "All fields are mandatory", "error");
        return false;
    }
    return true;
}
function handleError(xhr)
{
    swal("Error!","Problem in server communication: "+xhr.statusText, "error");
}
function processResponse(responseText, textStatus, xhr)
{
    let result = responseText.trim();
    if(result === "error"){
        swal("Access denied!", "Invalid userid / password", "error");
    }
    else if(result.indexOf("jsessionid") !== -1){
        let pr = swal("Sucees", "Login Successful", "success");
        pr.then( (value) => {
            window.location = result;   //here, it will run only after swal()is completed because promises are synchronized
        });
    }
    else{
        swal("Access denied", "Some problem in the server occured:"+responseText, "error");
    }
}


