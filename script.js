function toggleOptions() {
    var checkBox = document.getElementById("Eitem");
    var numberOptions = document.getElementById("numberOptions");

    if (checkBox.checked == true) {
        numberOptions.style.display = "block";
    } else {
        numberOptions.style.display = "none";
        document.getElementById("selectedNumber").style.display = "none";
    }
}
function displaySelectedNumber() {
    var selectedNumber = document.getElementById("numberOptions").value;
    var display = document.getElementById("selectedNumber");

    display.style.display = "block";
    display.innerHTML = "You selected: " + selectedNumber;
}
