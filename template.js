var burgerDiv = document.getElementById('burgerDiv');
var menuList = document.getElementById('menuList');

burgerDiv.addEventListener("click", toggleBurger);

function toggleBurger(){
    menuList.toggle.className("menu-listers");
}
toggleBurger()
