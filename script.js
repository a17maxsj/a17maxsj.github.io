var checked = false;

function myFunction() {

    if (checked === false) {
        document.getElementById("menu").style.height = "200px";
        checked = true;
    } else {
        document.getElementById("menu").style.height = "50px";
        checked = false;
    }

}