document.addEventListener('DOMContentLoaded', () => {
    var menu = document.querySelector(".menu");
    var head = document.querySelector(".heading span");
    var title = document.querySelector("#title");
    var cmenu = document.querySelector(".fcmenui");
    var card = document.querySelector(".card")
    var heading = document.querySelector(".prjheading");
    var main = document.querySelectorAll(".main");

    // Menu......................................................
    cmenu.onclick = () => {
        cmenu.classList.toggle("active");
    }

    // Skills......................................................
    card.onclick = () => {
        card.classList.toggle("radial");
        if (heading.style.opacity === '0') {
            heading.style.opacity = '1';
        }
        else {
            heading.style.opacity = '0';
        }
    }

    // Slideshow......................................................
    function slideshow() {
        main.forEach(main => {
            main.style.opacity = '0';
        });
        var menulink = document.querySelectorAll(".fcmenui li a");
        menulink.forEach(menulink => {
            menulink.onclick = function() {
                document.querySelector(this.dataset.id).style.opacity = "1";
            }
        });
    }
    // slideshow();
});