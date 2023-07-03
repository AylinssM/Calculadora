function encender(){
    document.getElementById('calculadora').style.visibility = 'visible';
}
function apagar(){
    document.getElementById('calculadora').style.visibility = 'hidden';
}
function resetCal() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('result').value = '0';
}