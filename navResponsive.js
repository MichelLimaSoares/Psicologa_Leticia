const navBar = document.querySelector(".nav-menu-bars");
const navUl = document.querySelector(".nav-ul");
const navLinks = document.querySelectorAll(".nav-ul li");

function add_removeClass(){
  navBar.classList.toggle("nav-menu-bars-active");
  navUl.classList.toggle("nav-ul-active");
}
navBar.addEventListener("click", ()=> {
  add_removeClass();
});
navLinks.forEach((e)=>{
  e.addEventListener("click", ()=>{
    add_removeClass();
  });
});
function widthSize(){
  let ancho = window.innerWidth;
  if(ancho > 750){
    navBar.classList.remove("nav-menu-bars-active");
    navUl.classList.remove("nav-ul-active");  
  };
};
window.addEventListener("resize", widthSize);




