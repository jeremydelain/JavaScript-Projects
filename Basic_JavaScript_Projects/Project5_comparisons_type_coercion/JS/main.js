//return type of value
x = 5;
document.write(typeof x);

//coercion
document.write(x + "two");

//displaying positive infinity
function PosInf() {
    document.getElementById("PosInf").innerHTML = 2E310;
}
//displaying negative infinity
function NegInf() {
    document.getElementById("NegInf").innerHTML = -2E310;
}

//greater than and less than comparison
document.write(1<2);
document.write(1>2);

//operation in dev console
console.log(2+2);

//basic comparison
document.write(1==1);
document.write(1==0);

//comparison of value and type
document.write(1 === 1);
document.write(1 === "2");
document.write(1 === "1");
document.write(1 === 2);

//AND and OR logic
document.write(1 == 1 && 2 == 2)
document.write(1 == 1 && 1 == 2);
document.write(1 == 0 || 1 == 1);
document.write(1 == 0 || 1 == 2);

//using NOT
document.write(!false);
document.write(!true);