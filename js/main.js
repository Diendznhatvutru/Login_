const loginButton = document.querySelector(".btn");
loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "/WebProject/home.html";
});
const sendResetMailButton = document.getElementById("sendmail");
sendResetMailButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "/Login_/WebProject/home.html";
});
const returnLogin = document.getElementById("returnlogin");
returnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "/Login_/WebProject/sendmail.html";
});
const success = document.getElementById("success");
success.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "/Login_/WebProject/home.html";
});
const register = document.getElementById("register");
register.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "/Login_/WebProject/home.html";
});
