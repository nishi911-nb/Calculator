const input = document.querySelector('.form-control');

function display(number){
    input.value += number;
}

function result() {
    let x = input.value;
    let y = eval(x);
    input.value = y;
}

function clr() {
    input.value = '';
}