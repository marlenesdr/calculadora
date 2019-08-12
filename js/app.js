var operacion;
var cifra1;
var cifra2;
var iteracion = 0;
  function init(){
    var display = document.getElementById('display');
    var on = document.getElementById('on');
    var sing = document.getElementById('sign');
    var dividir = document.getElementById('dividido');
    var raiz = document.getElementById('raiz');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var multiplicar = document.getElementById('por');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var restar = document.getElementById('menos');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cero = document.getElementById('0');
    var punto = document.getElementById('punto');
    var igual = document.getElementById('igual');
    var sumar = document.getElementById('mas');

    uno.onclick=function(e){
      var valor_inicial = new Number(display.textContent);
      if (valor_inicial<1){
        display.textContent= "1"
      }
        else {
          display.textContent=display.textContent+"1";
        }
    }

    dos.onclick=function(e){
      var valor_inicial = new Number(display.textContent);
      if (valor_inicial<1){
        display.textContent= "2"
      }
        else {
          display.textContent=display.textContent+"2";
        }
    }

    tres.onclick=function(e){
      var valor_inicial = new Number(display.textContent);
      if (valor_inicial<1){
        display.textContent= "3"
      }
        else {
          display.textContent=display.textContent+"3";
        }
    }

    cuatro.onclick=function(e){
      var valor_inicial = new Number(display.textContent);
      if (valor_inicial<1){
        display.textContent= "4"
      }
        else {
          display.textContent=display.textContent+"4";
        }
    }

    cinco.onclick=function(e){
      var valor_inicial = new Number(display.textContent);
      if (valor_inicial<1){
        display.textContent= "5"
      }
        else {
          display.textContent=display.textContent+"5";
        }
    }

    seis.onclick=function(e){
      var valor_inicial = new Number(display.textContent);
      if (valor_inicial<1){
        display.textContent= "6"
      }
        else {
          display.textContent=display.textContent+"6";
        }
    }

    siete.onclick=function(e){
      var valor_inicial = new Number(display.textContent);
      if (valor_inicial<1){
        display.textContent= "7"
      }
        else {
          display.textContent=display.textContent+"7";
        }
    }

    ocho.onclick=function(e){
      var valor_inicial = new Number(display.textContent);
      if (valor_inicial<1){
        display.textContent= "8"
      }
        else {
          display.textContent=display.textContent+"8";
        }
    }

    nueve.onclick=function(e){
      var valor_inicial = new Number(display.textContent);
      if (valor_inicial<1){
        display.textContent= "9"
      }
        else {
          display.textContent=display.textContent+"9";
        }
    }

    cero.onclick=function(e){
      var valor_inicial = new Number(display.textContent);
      if (valor_inicial<1){
        display.textContent= "0"
      }
        else {
          display.textContent=display.textContent+'0';
        }
    }

    punto.onclick=function(e){
      var valor_inicial = new Number(display.textContent);
      if (valor_inicial<1){
        display.textContent= "0"
      }
        else {
          display.textContent=display.textContent+'.';
        }
    }

    on.onclick=function(e){
      resetear();
      display.textContent= "0";
    }

    sing.onclick=function(e){
      var valor_inicial = new Number(display.textContent);
      display.textContent= valor_inicial* (-1);;
    }
    sumar.onclick = function(e){
      operacion="+";
      cifra1=display.textContent;
      limpiar();
    }
    restar.onclick = function(e){
      operacion="-";
      cifra1=display.textContent;
      limpiar();
    }
    multiplicar.onclick = function(e){
      operacion="*";
      cifra1=display.textContent;
      limpiar();
    }
    dividir.onclick = function(e){
      operacion="/";
      cifra1=display.textContent;
      limpiar();
    }
    igual.onclick = function(e){
      cifra2=display.textContent;
      calcular();
    }
  }
  function limpiar(){
    display.textContent="";
  }
  function resetear() {
    display.textContent='';
    cifra1 = 0;
    cifra2 = 0;
    operacion = '';
  }
function calcular(){
  var resultado = 0;
    function validar(res) {
      var cadena;
      var valor;
      var punto;
        cadena=res.toString();
        if (cadena.length<=8){
          valor = res;
        }
        else{
          valor = cadena.substring(0, 8);
          punto = cadena.substring(7, 8);
          if (punto!="."){
            res = valor;
          }
          else{
            valor = cadena.substring(0, 7);
            res = valor;
          }
        }
          display.textContent = res;
    }
  switch (operacion) {
    case "+": resultado = parseFloat(cifra1) + parseFloat(cifra2);
    break;

    case "-": resultado = parseFloat(cifra1) - parseFloat(cifra2);
    break;

    case "*": resultado = parseFloat(cifra1) * parseFloat(cifra2);
    break;

    case "/": resultado = parseFloat(cifra1) / parseFloat(cifra2);
    break;
  }
    validar(resultado);
}
