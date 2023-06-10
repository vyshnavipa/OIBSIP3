function f1() {
    var t3 = 0;
    var t1 = parseFloat(document.getElementById("i1").value);
    if (isNaN(t1))
    { 
        alert("Enter only a number for degree");
        return;
    }
    var t2 = document.getElementById("i2").value;
    if (t2 === "Fahrenheit") {
        t3 = (t1 - 32) * (5 / 9);
        t3 = t3 + " C";
    } else if (t2 === "Celsius") {
        t3 = (t1 * (9 / 5)) + 32;
        t3 = t3 + " F"; 
    }
    else{
        alert("Choose type for Conversion");
        return;
    }

    var t4 = document.getElementById("i3");
    t4.value = t3;
}
function f2()
{
    i1.value="";
    i3.value=" ";
    i2.value="";

}