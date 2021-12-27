//defining a global variable
var global_String = "GLOBAL";

//accessing global variable
function global() {
    document.getElementById("Global").innerHTML = 
    "Click for global: " + global_String;
}

//accessing a local variable
function local() {
    var local_String = "LOCAL";
    document.getElementById("Local").innerHTML =
    "Click for local: " + local_String;
}

//attempting to access a local variable outside of its scope 
function error() {
    document.getElementById("Error").innerHTML = 
    "Click for error: " + local_String;
}

//uses local time to determine if it is before noon
function noon() {
    const d = new Date();
    if (d.getHours() < 12) {
        document.getElementById("Noon").innerHTML = "Is it before noon? YES";
    }
    else {
        document.getElementById("Noon").innerHTML = "Is it before noon? NO";
    }
}

//determines whether 2 > 1
function greater() {
    if (2>1) {
        document.getElementById("Greater").innerHTML = "is 2 > 1 ? YES"
    }
    else {
        document.getElementById("Greater").innerHTML = "is 2 > 1 ? NO"
    }
}

//takes user input and determines if they are 21 or older
function Age() {
    var age = document.getElementById("Age_Input").value;
    if (age >= 21){
        document.getElementById("How_Old").innerHTML = "You are old enough to drink.";
    }
    else {
        document.getElementById("How_Old").innerHTML = "You are not old enough to drink.";
    }
}

//uses local time to display the time of day
function Time_of_Day() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 && time > 0) {
        reply = "morning.";
    }
    else if (time >= 12 && time < 18) {
        reply = "afternoon.";
    }
    else {
        reply = "evening."
    }
    document.getElementById("Time_Result").innerHTML = "It is " + reply;
}