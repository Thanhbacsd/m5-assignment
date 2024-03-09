// M5 assignment

// 1. Write a function called halfNumber() that accepts one argument (a number), 
//divide it by 2, and return the result.
function h_number() {
 let n = parseFloat(document.getElementById("h_number").value)
 document.getElementById('h_out').textContent = " Half of " + n + " is " + n/2 + "."
}

// 2. Write a function called squareNumber() that accepts one argument (a number),
// square that number, and return the result.

//import Math

function s_number() {
    let n = parseFloat(document.getElementById("s_number").value)
    document.getElementById('s_out').textContent = " The result of squaring the number " + n + " is " + n*n + "."
   }


// 3. Write a function called percentOf() that accepts two numbers, figure out 
// what percent the first number represents of the second number, and return the result.
function p_number() {
    let n1 = parseFloat(document.getElementById("p_number1").value)
    let n2 = parseFloat(document.getElementById("p_number2").value)
    document.getElementById('p_out').textContent = n1 * n2 / 100 + " is " + n1 + "% of " + n2 + "."
   }

// 4. Write a function called findModulus() that accepts two numbers. 
// Within the function write a statement that returns the modulus of the 
// first and second parameters.
function m_number() {
    let n1 = parseFloat(document.getElementById("m_number1").value)
    let n2 = parseFloat(document.getElementById("m_number2").value)
    //let n = n2 % n1
    document.getElementById('m_out').textContent = n2 % n1 + " is the modulus of " + n1 + " and " + n2 + "."
}

const rbtt = document.getElementById("rock")
const pbtt = document.getElementById("paper")
const sbtt = document.getElementById("scissors")
const m_out = document.getElementById("machineout")
let mCount = 0
let yCount = 0
function sreset() {
    mCount = 0
    yCount = 0
}
function rps_game(user) {
    let n = Math.round(Math.random()*2)
    let list = ["rock", "paper", "scissors"]
    let r = ['draw', 'You win', 'You failure']
    let result = ""
    m_out.textContent = list[n]
    if (user == "rock") {
        if (n == 0) {
            result = r[0]
        }
        else if(n == 1) {
            result = r[2]
        }
        else {result = r[1] }       
    } else if (user == "paper"){
        if (n == 0) {
            result = r[1]
        }
        else if(n == 1) {
            result = r[0]
        }
        else {result = r[2] } 
    } else {    //scissors
        if (n == 0) {
            result = r[2]
        }
        else if(n == 1) {
            result = r[1]
        }
        else {result = r[0] } 
    }
    if(result == r[1]) {
        yCount = yCount + 1
    }
    else if(result == r[2]) {
        mCount = mCount + 1
    }else{}

    document.getElementById('result').textContent = result
    document.getElementById('mscore').textContent = "'Machine's score: " + mCount + '   ***'
    document.getElementById('yscore').textContent = "||| Your score: " + yCount + "   ***"
}

rbtt.addEventListener('click', () => {rps_game('rock')})
pbtt.addEventListener('click', () => {rps_game('paper')})
sbtt.addEventListener('click', () => {rps_game('scissors')})

//The Basic Calculator

function myCalculator(opr) {
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)
    if(n1 == isNaN || n2 == isNaN) {
        alert('Data input is wrong!')
        return
    }
    let result = 0
    switch (opr) {
        case 'add':
            result = n1 + n2
            document.getElementById('operator').textContent = "+"
            break
        case 'subtract':
            result = n1 - n2
            document.getElementById('operator').textContent = "-"
            break
        case 'multiply':
            result = n1 * n2
            document.getElementById('operator').textContent = "*"
            break
        case "divide":
            if(n2 != 0) {
            result = n1 / n2
            document.getElementById('operator').textContent = ": (/)"
            break
            } else {
                alert('divided number equa 0!')
                break
            }
        case 'percent':
            result = n1 * n2 / 100
            document.getElementById('operator').textContent = "% of"
            break
        case 'square':
            result = n1 * n1
            document.getElementById('operator').textContent = "^"
            document.getElementById('n2').value = 2
            break
        default:
            //document.getElementById('operator').textContent = "rrr"
    }
    document.getElementById('output').textContent = result
}
const add_op = document.getElementById("plus")
const subtract_op = document.getElementById('subtract')
const multiply_op = document.getElementById('multiply')
const divide_op = document.getElementById('divide')
const percent_op = document.getElementById('percent')
const square_op = document.getElementById('square')

add_op.addEventListener('click', () => {myCalculator('add')})
subtract_op.addEventListener('click', () => {myCalculator('subtract')})
multiply_op.addEventListener('click', () => {myCalculator('multiply')})
divide_op.addEventListener('click', () => {myCalculator('divide')})
percent_op.addEventListener('click', () => {myCalculator('percent')})
square_op.addEventListener('click', () => {myCalculator('square')})