const numbers = document.querySelector('.buttons')
const display = document.querySelector('.screen')
const ops = document.querySelector('.ops')
const solve = document.querySelector('.swagbar')
let a;
let b;
let op;
let selected;

numbers.addEventListener('click', (e) => {
        display.innerHTML += e.target.innerHTML

})

ops.addEventListener('click', (e) => {
    if (a === undefined){
        a = parseInt(display.innerHTML)
        op = e.target.className
        display.innerHTML = ''
        e.target.style.color = 'red'
    }
})

solve.addEventListener('click', (e) => {
    b = parseInt(display.innerHTML)
    display.innerHTML = operate(a,op,b)
})

operate = (a,op,b) => {

    switch (op) {
    case op = 'op-add': return a + b; 
    case op = 'op-subtract': return a - b;
    case op = 'op-multiply': return a * b;
    case op = 'op-divide': return a / b
    default: return 'ERROR'
    }
}
