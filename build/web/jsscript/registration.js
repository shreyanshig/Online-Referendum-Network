/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let username, password, cpassword, city, address, adhar, email, mobile;
function addUser()
{
    username = $("#username").val();
    password = $("#password").val();
    cpassword = $("#cpassword").val();
    city = $("#city").val();
    address = $("#address").val();
    adhar = $("#adhar").val();
    email = $("#email").val();
    mobile = $("#mobile").val();
    if(validateUser()){
        if(password !== cpassword){
            swal("Error!", "Passwords should match", "error");
            return;
        }
        else{
            if(checkEmail() === false)
                return;
//            if(checkMobile() === false)
//                    return;
            let data = {username : username,
                        password : password,
                        city : city,
                        address : address,
                        userid : adhar,
                        email :email,
                        mobile : mobile
                    };
            let xhr = $.post("RegistrationControllerServlet", data, processresponse);
            xhr.error(handleError);
        }
    }
}
function processresponse(responseText, textStatus, xhr)
{
    let str = responseText.trim();
    if(str === "success"){
            swal("Success", "Registration done Successfully! You can now login", "success");
            setTimeout(redirectUser, 3000);
    }
    else if(str === "uap")
        swal("Error!","Sorry! the userid is already registered", "error");
    else
        swal("Error!", "Registration failed! Try again", "error");
}
function handleError(xhr)
{
    swal("Error!","Problem in server communication: "+xhr.statusText, "error");
}
function validateUser()
{
    if(username === "" || password === "" || cpassword === "" || city === "" || address === "" || adhar === "" || email === "" || mobile === ""){
        swal("Error!", "All fields are mandatory", "error");
        return false;
    }
    return true;
}
function checkEmail()
{
    let attheratepos = email.indexOf("@");
    let dotpos = email.indexOf(".");
    if(attheratepos < 1 || dotpos < attheratepos + 2 || dotpos +2 >= email.length){
        swal("Error", "Please enter a valid email", "error");
        return false;
    }
    return true;
}
function checkMobile()
{
    let n = email.length;
    if(n < 10){
        swal("Error", "Please enter a valid mobile number", "error");
        return false;
    }
    for(let i=0; i<n; i++){
        if(Number.isInteger(email.charAt(i)) === false){
            swal("Error", "Please enter a valid mobile number", "error");
            return false;
        }
    }
    return true;
}
function redirectUser()
{
    window.location = "login.html";
}


