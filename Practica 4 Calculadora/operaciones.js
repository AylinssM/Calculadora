function suma() {
    var resultado = parseInt(document.getElementById('numero1').value) + parseInt(document.getElementById('numero2').value);
    document.getElementById('result').value = resultado;
}

function resta() {
    var resultado = parseInt(document.getElementById('numero1').value) - parseInt(document.getElementById('numero2').value);
    document.getElementById('result').value = resultado;
}

function producto() {
    var resultado = parseInt(document.getElementById('numero1').value) * parseInt(document.getElementById('numero2').value);
    document.getElementById('result').value = resultado;
}

function division() {
    var resultado = parseInt(document.getElementById('numero1').value) / parseInt(document.getElementById('numero2').value);
    document.getElementById('result').value = resultado;
}