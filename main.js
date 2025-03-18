function round() {
    var a = Number(document.getElementById('a-value').value);
    document.getElementById("demo").innerHTML = Math.round(a);
}

function power() {
    var a = Number(document.getElementById('a-value').value);
    var b = Number(document.getElementById('b-value').value);
    document.getElementById("demo").innerHTML = Math.pow(a, b);
}

function square() {
    var a = Number(document.getElementById('a-value').value);
    document.getElementById("demo").innerHTML = Math.sqrt(a);
}

function random() {
    document.getElementById("demo").innerHTML = Math.round(Math.random() * 10);
}
