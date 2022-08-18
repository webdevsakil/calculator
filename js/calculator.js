

const button = document.querySelectorAll('.calculator button');
const screen = document.querySelector(".screen");
const equal = document.querySelector('.equal');
const clear = document.querySelector(".clear");
button.forEach(elem => {
    elem.addEventListener('click', function (e) {
        if (e.target.dataset.num) {
            screen.value += e.target.dataset.num;
        }
    })
})
equal.addEventListener('click', function () {
    screen.value = eval(screen.value)
})
clear.addEventListener("click", function () {
    document.querySelector(".screen").value = "";
})