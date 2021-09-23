var day = new Date();
var hr = day.getHours();
if (hr >= 0 && hr < 6) {
    document.getElementById("Middag").style.display = "none";
    document.getElementById("Avond").style.display = "none";
    document.getElementById("Morgen").style.display = "none";
    document.getElementById("12oclock").style.display = "none";
} else if (hr >= 6 && hr < 12) {
    document.getElementById("Middag").style.display = "none";
    document.getElementById("Avond").style.display = "none";
    document.getElementById("nacht").style.display = "none";
    document.getElementById("12oclock").style.display = "none";
} else if (hr == 12) {
    document.getElementById("Morgen").style.display = "none";
    document.getElementById("Middag").style.display = "none";
    document.getElementById("Avond").style.display = "none";
    document.getElementById("nacht").style.display = "none";
} else if (hr >= 12 && hr <= 17) {
    document.getElementById("Morgen").style.display = "none";
    document.getElementById("Avond").style.display = "none";
    document.getElementById("nacht").style.display = "none";
    document.getElementById("12oclock").style.display = "none";
} else {
    document.getElementById("Morgen").style.display = "none";
    document.getElementById("Middag").style.display = "none";
    document.getElementById("nacht").style.display = "none";
    document.getElementById("12oclock").style.display = "none";
}
