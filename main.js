/* html den elemanlari cek */
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");

/* menu btn tiklandiginda navbar kismina class ekle cikar */

menuBtn.addEventListener("click", ()=> {
    navbar.classList.toggle("active");
});