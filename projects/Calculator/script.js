document.addEventListener("DOMContentLoaded", () => {
    var calc = document.querySelector('.calc-body')
    var turn = document.querySelector("#turn");
    var trigo = document.querySelector(".trig");
    var screen = document.querySelector(".screen");
    var keypad = document.querySelector(".keypad");
    var b1 = document.querySelector(".b1");
    var b2 = document.querySelector(".b2");
    var numkey = document.querySelectorAll(".numkey");
    var unary_operator = document.querySelectorAll(".unarykey");
    var binary_operator = document.querySelectorAll(".binarykey");
    var result = document.querySelector("#result");
    var del = document.querySelector("#del");
    var clear = document.querySelector("#clear");

    turn.onclick = () => {
        calc.classList.toggle('.turn');
        if (turn.dataset.toggle === "down") { 
            turn.style.transform = "rotate(0deg)";
            turn.dataset.toggle = "up";
            trigo.style.display = "grid";
            setTimeout(() => {
                trigo.style.opacity = "1";
                calc.style.gridTemplateRows = 'repeat(11,1fr)';
                calc.style.gridTemplateAreas = '"1 1 1 1" "1 1 1 1" "1 1 1 1" "2 2 2 2" "3 3 3 3" "3 3 3 3" "4 4 4 4" "5 5 5 6" "5 5 5 6" "5 5 5 6" "5 5 5 6"';
                keypad.style.gridRow = "8 / span 4";
                b1.style.gridRow = "7";
                b2.style.gridRow = "8 / span 4";
            },0);
        }
        else {
            turn.style.transform = "rotate(180deg)";
            turn.dataset.toggle = "down";
            trigo.style.opacity = "0";
            setTimeout(() => {
                trigo.style.display = "none";
                calc.style.gridTemplateRows = 'repeat(9,1fr)';
                calc.style.gridTemplateAreas = '"1 1 1 1" "1 1 1 1" "1 1 1 1" "2 2 2 2" "4 4 4 4" "5 5 5 6" "5 5 5 6" "5 5 5 6" "5 5 5 6"';
                keypad.style.gridRow = "6 / span 4";
                b1.style.gridRow = "5";
                b2.style.gridRow = "6 / span 4";
            },300);
        }
    }

    clear.onclick = () => {
        screen.innerHTML = "";

    }

    del.onclick = () => {
        screen.innerHTML = screen.innerHTML.slice(0,screen.innerHTML.length-1);
    }

    numkey.forEach((numkey) => {
        numkey.onclick = () => {
            screen.innerHTML += numkey.innerHTML;
        }
    })

    binary_operator.forEach((binary_operator) => {
        binary_operator.onclick = () => {
            screen.innerHTML += binary_operator.innerHTML;
        }
    })

    unary_operator.forEach((unary_operator) => {
        unary_operator.onclick = () => {
            screen.innerHTML += unary_operator.innerHTML;
        }
    })

    result.onclick = () => {}
});