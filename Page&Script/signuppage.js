function passwordverification(){
    var pwd = document.getElementById("password").value;
    var cpwd = document.getElementById("confirmpassword").value;
    if(pwd ==""){
     alert("Password cannot be empty");
     return false;
    }
    if(pwd.length < 8) {  
     alert("Password length must be atleast 8 characters"); 
     return false;  
  }  
  
 
if(pwd.length > 15) {    
     alert("Password length cannot be more than 15 characters")
     return false;  
  } else { 
         alert("Password is correct");
   
  }  
 }  
 