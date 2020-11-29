const numbers = document.querySelector('.buttons')
const display = document.querySelector('.screen')
const ops = document.querySelector('.ops')
const solve = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const coolScreen = document.querySelector('.cool-screen')
const calc = document.querySelector('.calc')
const backspace = document.querySelector('.swagbar')
const theScreens = document.querySelector('.the-screens')
const operators = ['+', '-', 'x', '/']
let a;
let b;
let op;
let selected;
let c

calc.addEventListener('click', (e) => {
    if (e.target !== clear && e.target !== solve && e.target !== display && e.target !== backspace && e.target !== theScreens
        && e.target !== coolScreen){
    coolScreen.innerHTML += `${e.target.innerHTML}`
    } else if (e.target == solve && c !== undefined){
        coolScreen.innerHTML = coolScreen.innerHTML
    }
})

backspace.addEventListener('click', (e) => {
    if (c === undefined) {
        coolScreen.innerHTML = coolScreen.innerHTML.substring(0, coolScreen.innerHTML.length-1)
        display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length-1)
       
    } else if (coolScreen.innerHTML.length < 1){
        reset()
    }

})
numbers.addEventListener('click', (e) => {
    if (e.target !== clear && e.target !== solve){
    display.innerHTML += e.target.innerHTML
    }

})

ops.addEventListener('click', (e) => {
    if (a === undefined){
        a = parseFloat(display.innerHTML)
        op = e.target.className
        display.innerHTML = ''
    } else if (c === undefined){
        b = parseFloat(display.innerHTML)
        operate(a,op,b)
        console.log(a ,b ,op, c)
        op = e.target.className
        display.innerHTML = ''
    } else {
        b = parseFloat(display.innerHTML)
        operate(c,op,b)
        console.log(a, b, op, c)
        op = e.target.className
        display.innerHTML = ''
    }

})

solve.addEventListener('click', (e) => {
    if (a === undefined) {
        display.innerHTML = display.innerHTML
    } else if (c === undefined) {
    b = parseFloat(display.innerHTML)
    display.innerHTML = operate(a,op,b)
    } else {
        b = parseFloat(display.innerHTML)
    display.innerHTML = operate(c,op,b)
    }
    op = undefined
})


operate = (a,op,b) => {

    switch (op) {
    case op = 'op-add': return c = a + b; 
    case op = 'op-subtract': return c = a - b;
    case op = 'op-multiply': return c = a * b;
    case op = 'op-divide': return c = a / b
    default: return 'ERROR'
    }
}

clear.addEventListener('click', (e) => {
    reset();
})

reset = () => {
    display.innerHTML = ''
    a = undefined
    b = undefined
    c = undefined
    op = undefined
    coolScreen.innerHTML = ''
}
