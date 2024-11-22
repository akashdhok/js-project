function signup() {
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let country = document.querySelector("#country").value
    let number = document.querySelector("#number").value
    let password = document.querySelector("#password").value
    if (name === "") {
document.querySelector("#errorname").innerHTML = "Please Enter name";
let selectedname = document.querySelector("#name");
selectedname.style.borderColor = "red";
selectedname.style.outlineColor = "red";
}
else if (email === "") {
document.querySelector("#erroremail").innerHTML = "Please Enter Valid Email";
let selectedname = document.querySelector("#email");
selectedname.style.borderColor = "red";
selectedname.style.outlineColor = "red";
}
else if(!(email.includes('@') && email.includes(".com"))){
document.querySelector("#erroremail").innerHTML = "Please Enter Valid Email";
let selectedname = document.querySelector("#email");
selectedname.value = ""
selectedname.focus()
selectedname.style.borderColor = "red";
selectedname.style.outlineColor = "red";
}
else if (country === "") {
    document.querySelector("#errorcountry").innerHTML = "Please Enter country name";
    let selectedname = document.querySelector("#country");
    selectedname.style.borderColor = "red";
    selectedname.style.outlineColor = "red";
    }
else if (number === "") {
document.querySelector("#errornumber").innerHTML = "Please Enter Valid number";
let selectedname = document.querySelector("#number");
selectedname.style.borderColor = "red";
selectedname.style.outlineColor = "red";
}

else if (password === "") {
document.querySelector("#errorpassword").innerHTML = "Please Enter password";
let selectedname = document.querySelector("#password");
selectedname.style.borderColor = "red";
selectedname.style.outlineColor = "red";
}
else if(name===name && email===email && country===country && number===number && password===password )
{
    window.location.href = "./login.html"

}
localStorage.setItem("name" , name)
localStorage.setItem("email" , email)
localStorage.setItem("country" , country)
localStorage.setItem("number" , number)
localStorage.setItem("password" , password)
return false;
}