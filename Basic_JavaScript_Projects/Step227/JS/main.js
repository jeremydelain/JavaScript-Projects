function number() {
    var output;
    var number = document.getElementById("Input").value;
    switch (number) {
        case "1":
            output = number + " is not my number.";
        break;
        case "2":
            output = number + " IS MY NUMBER!";
        break;
        case "3":
            output = number + " is not my number.";
        break;
        case "4":
            output = number + " is not my number.";
        break;
        case "5":
            output = number + " is not my number.";
        break;
        default:
            output = "That is not 1, 2, 3, 4, or 5..."
    }
    document.getElementById("Output").innerHTML = output;
}