let links = document.querySelector(".links");
let darkGreadent = document.querySelector(".dark-greadent");
// let showMenu = document.getElementById("showMenu");
// let hideMenu = document.getElementById("hideMenu")
function showMenu(){
    links.classList.add("show-menu")
    darkGreadent.classList.add("show-menu")
}
function hideMenu(){
    links.classList.remove("show-menu")
    darkGreadent.classList.remove("show-menu")
}
