var hp = 0;
var aspirationvalue = 1;
var aspiratedhp = 0;
gearboxvalue = 0;

function engine(value) {
    hp = value;
    document.getElementById("hp").innerHTML = "HP: " +
        hp;
    console.log("engine selected");

}

function aspiration(value) {
    aspirationvalue = value;
    aspiratedhp = hp * value;
    document.getElementById("hp").innerHTML = "HP: " +
        Math.trunc(aspiratedhp);

    console.log(aspiratedhp, value);
}

function gearbox(value) {
    gearboxvalue = value;
    document.getElementById("gears").innerHTML = "Gears: " + gearboxvalue;

}

function drive() {







    console.log("aspiratedhp, value");

}