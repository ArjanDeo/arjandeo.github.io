function checkGayness() {
    var inputName = document.getElementById('inputName').value.toLowerCase();
    if (inputName === "tony deo" || inputName === "anuvinder deo") {
        var div = document.getElementById('identityDiv');
        div.style.display = "block";
    } else {
        alert("Not Gay");
    }
}