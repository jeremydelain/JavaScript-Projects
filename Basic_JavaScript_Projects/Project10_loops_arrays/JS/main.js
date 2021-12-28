//a while loop that starts at 10, goes to 0
function Call_Loop() {
    index = 10;
    while(index > 0) {
        index--;
    }
    document.getElementById("Loop").innerHTML = index;
}

//utilizes a for loop to print the colors of a rainbow
var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
var rainbow = "";
var i;
function for_Loop() {
    for (i = 0; i < colors.length; i++) {
        rainbow += colors[i] + "<br>";
    }
    document.getElementById("rainbow").innerHTML = rainbow;
}

//builds an array and returns the first entry
function array_Function() {
    var state = [];
    state[0] = "Wisconsin";
    state[1] = "Tennesse";
    state[2] = "Oregon";
    document.getElementById("Array").innerHTML = "My home state is " + state[0] + ".";
}

//creates a Car object
function constant_function() {
    const Car = {
        color: "black",
        year: "2021",
        make: "Honda",
        model: "Civic"
    };
    Car.year = "2012";
    Car.miles = "160,000"
    document.getElementById("Constant").innerHTML = "My " + Car.year + " Honda Civic has " + Car.miles + " miles on it.";
}


//demonstrates the difference between function and block scope
function tryLet() {
    var result = "Function scope.";
    document.getElementById("Try_Let").innerHTML = result;
        {
            let result = "Block scope.";
            document.getElementById("Try_Let").innerHTML = result;
        }
        document.getElementById("Try_Let").innerHTML = result;
}

//created an instance of player and demonstrates use of a function
let player = {
    name: "Davante Adams",
    yards: "1,362",
    team: "Green Bay Packers",
    stats: function() {
        return this.name + " has " + this.yards + " yards with the " + this.team;
    }
};
document.getElementById("Football").innerHTML = player.stats();