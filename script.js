const hamburger=document.getElementsById("hamburger");
const navMenu = document.getElementById("navMenu").querySelector("ul");

hamburger.addEventListener("click",() =>
{
    navMenu.classList.toggle("show");
});
document.getElementsById("contactform").addEventListener("submit",function (e){
e.preventDefault();
}
const status=document.getElementsById("formStatus");
status.textContent="Sending...";

setTimeout(() =>
{
    status.textContent ="Thanks";
    this.resizeTo();
},1000);
});