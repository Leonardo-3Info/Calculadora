function somar(){

    var val1 = parseFloat (document.getElementById('val1').value)
    var val2 = parseFloat (document.getElementById('val2').value)
document.getElementById('result').textContent=
  'o resultado da soma é igual a:' +val1 + val2;

}

function somar(){
 
    var val1 = parseFloat (document.getElementById('val1').value)
    var val2= parseFloat (document.getElementById('val2').value)
document.getElementById('result').textContent =
'O resultado da soma é igual a: ' + val1 + val2;
 
}
 
function subtrair(){
    var val1 = parseFloat (document.getElementById('val1').value)
    var val2= parseFloat (document.getElementById('val2').value)
document.getElementById('result').textContent =
'O resultado da soma é igual a: ' + val1 - val2;
}
 
function dividir(){
    var val1 = parseFloat (document.getElementById('val1').value)
    var val2= parseFloat (document.getElementById('val2').value)
document.getElementById('result').textContent =
'O resultado da soma é igual a: ' + val1 /val2;
}
 
function multiplicar(){
    var val1 = parseFloat (document.getElementById('val1').value)
    var val2= parseFloat (document.getElementById('val2').value)
document.getElementById('result').textContent =
'O resultado da soma é igual a: ' + val1 * val2;
}
 