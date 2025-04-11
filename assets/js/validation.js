 //preloader js start
 let loader = document.querySelector("#preloader")

 window.addEventListener('load', () =>{4
     //  loader.style.display = "none"
      loader.style.opacity = 0
      loader.style.height = "0vh"; // Ensure `loader` is defined
      loader.style.width = "0%";
      
 })
 
 // preloader js end
 
 
 function form() {
     let name = document.querySelector("#fname").value;
     let email = document.querySelector("#femail").value;
     let number = document.querySelector("#fnumber").value;
     let captcha = document.querySelector("#codeToenter").value;
     let code = document.querySelector("#captchCode").innerText.replace(/\s/g, "");
     let regex1 = /^[a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/;
     let regex2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     let regex3 = /^\d+$/;
     let regex4 = /[6-9][0-9]{9}/
 
 document.querySelector("#err1").innerHTML = "";
 document.querySelector("#err2").innerHTML = "";
 document.querySelector("#err3").innerHTML = "";
 document.querySelector("#err4").innerHTML = "";
 let isValid = true;
 // Name Validation
 if (name === "") {
 document.querySelector("#err1").innerHTML = "Please enter your name";
 isValid = false;
 } else if (!regex1.test(name)) {    
 document.querySelector("#err1").innerHTML = "Please enter a valid name";
 isValid = false;
 }
 // Email Validation
 if (email === "") {
 document.querySelector("#err2").innerHTML = "Please enter your email";
 isValid = false;
 } else if (!regex2.test(email)) {
 document.querySelector("#err2").innerHTML = "Please enter a valid email";
 isValid = false;
 }
 // Phone Number Validation
 if (number === "") {
 document.querySelector("#err3").innerHTML =
 "Please enter your phone number";
 
 isValid = false;
 } else {
 if (
 number.length !== 10 ||
 number === "1111111111" ||
 number === "2222222222" ||
 number === "3333333333" ||
 number === "4444444444" ||
 number === "5555555555" ||
 number === "6666666666" ||
 number === "7777777777" ||
 number === "8888888888" ||
 number === "9999999999" ||
 number === "0000000000" ||
 number === "1234567890" ||
 !regex3.test(number) || !regex4.test(number)
 ) {
 document.querySelector("#err3").innerHTML =
 "Please enter a valid phone number";
 isValid = false;
 }
 }
 if (captcha === "") {
 document.querySelector("#err4").innerHTML = "please enter captcha";
 isValid = false;
 } else if (captcha != code) {
 document.querySelector("#err4").innerHTML = "invalid captcha";
 isValid = false;
 }
 return isValid;
 }
 function GetNewCode() {
 document.getElementById("captchCode").innerHTML = Captcha();
 }
 document.querySelector("#RefreshCaptcha").addEventListener("click", function () {
 GetNewCode();
 });
 function Captcha() {
 var character ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
 var captcha = "";
 for (let i = 0; i < 6; i++) {
 captcha += character[Math.floor(Math.random() * 62)];
 }
 return captcha;
 }
 document.addEventListener("DOMContentLoaded", function () {
 GetNewCode(); // Generate CAPTCHA code once DOM content is loaded
 });
 // forenquiry page set id in button click
 document.querySelector('#sendEnq').addEventListener('click', function () {
     GetNewCode();
 })
 