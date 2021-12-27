function Add() {            //Adds two numbers on click
    result = 2 + 2;
    document.getElementById("Add").innerHTML = "2 + 2 = " + result;
}

function Subtract() {       //Subtracts two numbers on click
    result = 2 - 2;
    document.getElementById("Subtract").innerHTML = "2 - 2 = " + result;
}

function Multiply() {       //Multiplies two numbers on click
    result = 2 * 2;
    document.getElementById("Multiply").innerHTML = "2 x 2 = " + result;
}

function Divide() {         //Divides two numbers on click
    result = 2 / 2;
    document.getElementById("Divide").innerHTML = "2 / 2 = " + result;
}
                            
function Order() {          //Uses multiple operators on click
    document.getElementById("Order").innerHTML = 2 + 3*(6/2) -1;
}
                            
function Remainder() {      //calculates remainder on click
    document.getElementById("Remainder").innerHTML = 10 % 3;
}
                            
function Negator() {        //Flip negative on click
    x = 1;
    document.getElementById("Negator").innerHTML = "Click to negate: " + -x; 
}
                            
function Increment() {      //Increment on click
    x = 0;
    x++;
    document.getElementById("Increment").innerHTML = "Click to increment: " + x;
}
                            
function Decrement() {      //Decrement on click
    x = 1;
    x--;
    document.getElementById("Decrement").innerHTML = "Click to decrement: " + x;
}

function Random() {         //Generate random number 0-20 on button click with pop-up alert
    window.alert(Math.random() * 20);
}

function Pi() {             //Uses aprrox. of Pi from Math to calculate area of circle on click
    result = Math.PI * 2 * 2
    document.getElementById("Pi").innerHTML = "A = " + result;
}