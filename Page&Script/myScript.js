function passwordverification(){
   var pwd = document.getElementById("password").value;
   var cpwd = document.getElementById("passwordConfirm").value;
   if(pwd ==""){
    alert("Password cannot be empty");
    return false;
   }
   if(pwd.length < 8) {  
    alert("Password length must be atleast 8 characters"); 
    return false;  
 }  
 

 if(pwd.length > 15) {    
    alert("password length cannot be more than 15 characters")
    return false;  
 } else {
    if(cpwd==pwd){  
    alert("Password is valid");
    }
    else{
        alert("Password & Confirm Password does not match");
    }  
 }  
}  
