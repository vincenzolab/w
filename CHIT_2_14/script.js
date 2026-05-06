function validateForm(){

let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let mobile = document.getElementById("phone").value;
let address = document.getElementById("address").value;

let namePattern = /^[A-Za-z]+$/;
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]{2,}$/;
let mobilePattern = /^[0-9]{10}$/;

if(fname === ""){
    alert("First name shouldn't be empty");
    return false;
}

if(!namePattern.test(fname)){
    alert("First name should contain only characters");
    return false;
}

if(fname.length < 6){
    alert("First name should not be less than 6 characters");
    return false;
}

if(lname === ""){
    alert("Last name shouldn't be empty");
    return false;
}

if(password.length < 6){
    alert("Password length should be at least 6 characters");
    return false;
}

if(!emailPattern.test(email)){
    alert("Email should be in correct format");
    return false;
}

if(!mobilePattern.test(mobile)){
    alert("Mobile number should contain 10 digits");
    return false;
}

if(address === ""){
    alert("Address shouldn't be empty");
    return false;
}

alert("Registration Successful");
return true;

}