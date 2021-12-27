//concatenates two Strings
function sentence() {
    var s1 = "Part one"
    var s2 = " and part two."
    document.getElementById("Concat").innerHTML = s1.concat(s2);
}

//utilizes .slice to return the word "button"
function slice() {
    s1 = "Click the button to return \"button\"";
    document.getElementById("Slice_Text").innerHTML = s1.slice(10,16);
}

//typecast a number to a String
function numberToString() {
    var num = 1;
    document.getElementById("Number_to_String").innerHTML = num.toString();
}

//round to display 6 digits
function precision() {
    var num = 1.23456789;
    document.getElementById("Precision").innerHTML = "Click to display 6 places: " + num.toPrecision(6);
}