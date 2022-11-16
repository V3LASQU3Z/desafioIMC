function peso() {
    var w = parseFloat(document.getElementById("w").value);
    var p = parseFloat(document.getElementById("p").value);
    var h = parseFloat(document.getElementById("h").value);
    var plg = p * 12;
    var n = 703 * (w / Math.pow(plg + h, 2));
    var IMC = n.toFixed(1);

    if (IMC > 30) {
        document.getElementById('resp').innerHTML = "Su valor de IMC es " + IMC + ", lo que lo clasifica con obesidad";
    } else {
        if (IMC > 25 && IMC <= 29.9) {
            document.getElementById('resp').innerHTML = "Su valor de IMC es " + IMC + ", lo que lo clasifica con exceso de peso";
        } else {
            if (IMC >= 18.5 && IMC <= 24.9) {
                document.getElementById('resp').innerHTML = "Su valor de IMC es " + IMC + ", lo que lo clasifica con un peso normal";
            } else {
                if (IMC >= 1 && IMC < 18.5) {
                    document.getElementById('resp').innerHTML = "Su valor de IMC es " + IMC + ", lo que lo clasifica con un peso bajo";

                }
            }
        }
    }
}