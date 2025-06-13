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

function media() {
    var val1 = parseFloat(document.getElementById('valor_1').value);
    var val2 = parseFloat(document.getElementById('valor_2').value);
    var val3 = parseFloat(document.getElementById('valor_3').value);
  
    var resultado = (val1 + val2 + val3) / 3;
    document.getElementById('result').textContent = 'Média dos valores: ' + resultado;
  }

  function moda() {
    var val1 = document.getElementById('valor_1').value;
    var val2 = document.getElementById('valor_2').value;
    var val3 = document.getElementById('valor_3').value;
  
    var valores = [val1, val2, val3];
  
    var contagem = {};
    valores.forEach(function(valor) {
      contagem[valor] = (contagem[valor] || 0) + 1;
    });
  
    var moda = valores[0];
    var maxContagem = contagem[moda];
  
    for (var valor in contagem) {
      if (contagem[valor] > maxContagem) {
        moda = valor;
        maxContagem = contagem[valor];
      }
    }
  
    if (maxContagem === 1) {
      document.getElementById('result').textContent = 'Não há moda (todos os valores são diferentes).';
    } else {
      document.getElementById('result').textContent = 'A moda é: ' + moda;
    }
  }