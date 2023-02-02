
function myInputFeet() {
    var feet = document.getElementById("feet").value;
    var inch = document.getElementById("inch");
    var ans = feet * 12;
    inch.value = ans;
}
function myInputInch() {
    var feet = document.getElementById("feet");
    var inch = document.getElementById("inch").value;
    var ans = inch / 12;
    feet.value = ans;
}