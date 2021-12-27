//Vehicle constructor
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//initializing Vehicle objects
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
//returning an instance of a Vehcile object to the browser
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//changes state of text when button is clicked
function myFunctionTwo() {
    document.getElementById("New_and_This").innerHTML = "Button clicked!"
}

//a nested function that decrements once
function nested() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Start = 10;
        function Minus_one() {
            Start -= 1;
        }
        Minus_one();
        return Start;
    }
}