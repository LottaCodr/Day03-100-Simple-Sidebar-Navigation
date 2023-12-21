
const sidebar = document.querySelector(".sidebar");
const sideClose = document.querySelector('#sidebar-close');
const nav = document.querySelector(".nav-content");
const navItems = document.querySelectorAll(".subnav-item");
const subNavTitles = document.querySelectorAll(".subnav .nav-title");



sideClose.addEventListener("click", ()=> sidebar.classList.toggle("close"));

navItems.forEach((item, index) => {
    item.addEventListener("click", ()=> {
        nav.classList.add("subnav-active");
        item.classList.add("show-subnav");
        navItems.forEach((item2, index2)=> {
            if(index !== index2) {
                item2.classList.remove("show-subnav");
            }
        });
    });
});

subNavTitles.forEach((title)=> {
    title.addEventListener("click", ()=> {
        nav.classList.remove("subnav-active");
    });
});

