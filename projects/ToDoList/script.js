document.addEventListener("DOMContentLoaded", () => {

    var submit = document.querySelector("#submit");
    var tasks = document.querySelector("tbody");
    var task = document.querySelector("#task");
    var input = document.querySelectorAll("input");
    var input_value = [];
    var und = document.querySelector('#down');
    var arrow = document.querySelector('#arrow');
    var msg = document.querySelector('#msg');
    var form = document.querySelector('form');
    var confirm_btn = document.querySelector('#confirm');
    var menu = document.querySelector('.menu');
    var sidebar = document.querySelector('.sidebar');
    var sidebarel = sidebar.children[0];
    var sidebartable = sidebar.children[1];
    var listitem = document.querySelectorAll('#sidebarel ul li');
    var counter = 0;

    // sidebarel..........................................
    menu.onclick = () => {
        if (menu.dataset.toggle === 'off') {
            sidebarel.children[0].style.opacity = '1';
            sidebarel.children[0].style.transitionDelay = '0.1s';
            sidebarel.children[1].style.opacity = '1';
            sidebarel.children[1].style.transitionDelay = '0.1s';
            sidebarel.style.width = '20%';
            menu.dataset.toggle = 'on';
        }
        else {
            sidebarel.style.width = '0';
            sidebarel.children[0].style.opacity = '0';
            sidebarel.children[0].style.transitionDelay = '0s';
            sidebarel.children[1].style.opacity = '0';
            sidebarel.children[1].style.transitionDelay = '0s';
            menu.dataset.toggle = 'off';
        }
        menu.classList.toggle('active');
    }
    listitem.forEach(listitem => {
        listitem.onclick = () => {
            if ( listitem.dataset.visible === "no" ) {
                sidebarel.style.width = '100%';
                listitem.dataset.visible = "yes";
            }
            else {
                sidebarel.style.width = '20%';
                listitem.dataset.visible = "no";
            }
        }
    });

    // Scroll Snap..........................................
    und.onmouseover = () => {
        msg.style.opacity = "1";
    }
    und.onmouseout = () => {
        msg.style.opacity = "0";
    }
    und.onclick = () => {
        if (und.dataset.toggle === "down") { 
            und.href = "#input-form";
            arrow.style.transform = "rotate(0deg)";
            und.dataset.toggle = "up";
            msg.style.opacity = "0";
            setTimeout(() => {
                msg.innerHTML = "See your List";
                msg.style.opacity = "1";
            },500);
        }
        else {
            und.href = "#list";
            arrow.style.transform = "rotate(180deg)";
            und.dataset.toggle = "down";
            msg.style.opacity = "0";
            setTimeout(() => {
                msg.innerHTML = "Back to Form";
                msg.style.opacity = "1";
            },500);
        }
    }

    // Submit Toggle..........................................
    submit.disabled = true;
    task.onkeyup = () => {
        if (task.value.length > 0) {
            submit.disabled = false;
            submit.style.opacity = "1";
            submit.style.cursor = "pointer";
            submit.onmouseover = () => {
                submit.style.boxShadow = "0 0 1px #fff, 0 0 2px #fff, 0 0 3px #f44336, 0 0 4px #f44336, 0 0 5px #f44336, 0 0 6px #f44336, 0 0 7px #f44336,0 0 8px #e91e63, 0 0 9px #e91e63, 0 0 10px #e91e63, 0 0 11px #e91e63, 0 0 12px #e91e63, 0 0 13px #e91e63";
            }
            submit.onmouseout = () => {
                submit.style.boxShadow = "none";
            }
        }
        else {
            submit.disabled = true;
            submit.style.opacity = "0.5";
            submit.style.cursor = "default";
            submit.onmouseover = () => {
                submit.style.boxShadow = "none";
            }
        }
    }

    // Task Addition..........................................
    form.onsubmit = () => {
        counter++;
        var tr = document.createElement("tr");
        var button = document.createElement("td");
        button.style.backgroundImage = "url('./delete.svg')";
        button.style.backgroundSize = "cover";
        button.style.backgroundRepeat = "no-repeat";
        button.style.width = "1.5rem";
        button.style.height = "1.5rem";
        button.style.cursor = "pointer";
        button.style.marginLeft = "10%";
        button.style.transform = "scale(1) translateY(0.125rem)";
        button.style.transition = "all 0.5s";
        button.onmouseover = () => {
            button.style.transform = "scale(1.2) translateY(0.125rem)";
        }
        button.onmouseout = () => {
            button.style.transform = "scale(1) translateY(0.125rem)";
        }
        input_value.push(counter);
        // input_value.push(Array.from(tr.parentNode.children).indexOf(tr));
        input.forEach((input) => {
            input_value.push(input.value[0].toUpperCase() + input.value.slice(1));
        });
        input_value.splice(input_value.length-1,1);
        for (let i = 0; i < 4; i++) {
            var td = document.createElement("td");
            td.innerHTML = input_value[i];
            tr.append(td);
        }
        tr.append(button);
        button.onclick = () => {
            button.parentElement.remove();
            tasknum--;
            console.log(tasknum);
        }
        tasks.append(tr);
        task.value = "";
        input_value = [];
        submit.disabled = true;
        submit.style.opacity = "0.5";
        submit.style.boxShadow = "none";
        submit.style.cursor = "default";
        // console.log(tasks.children.length);
        return false;
    }

    // Confirm Button..........................................
    confirm_btn.disabled = true;
    if (tasks.childElementCount > 0) {
        confirm_btn.disabled = false;
        confirm_btn.style.opacity = "1";
        confirm_btn.style.cursor = "pointer";
        confirm_btn.onmouseover = () => {
            confirm_btn.style.boxShadow = "0 0 1px #fff, 0 0 2px #fff, 0 0 3px #f44336, 0 0 4px #f44336, 0 0 5px #f44336, 0 0 6px #f44336, 0 0 7px #f44336,0 0 8px #e91e63, 0 0 9px #e91e63, 0 0 10px #e91e63, 0 0 11px #e91e63, 0 0 12px #e91e63, 0 0 13px #e91e63";
        }
        confirm_btn.onmouseout = () => {
            confirm_btn.style.boxShadow = "none";
        }
        confirm_btn.onclick = () => {
            tasks = tasks.children[0];
        }
    }
    else {
        confirm_btn.disabled = true;
        confirm_btn.style.opacity = "0.5";
        confirm_btn.style.cursor = "default";
        confirm_btn.onmouseover = () => {
            confirm_btn.style.boxShadow = "none";
        }
    }
});