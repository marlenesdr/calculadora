var operacion;
var cifra1;
var cifra2;
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

    on.onclick=function(e){
      resetear();
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

  function teclear(tecla0){
      function desteclear(tecla0){
        var estado_inicial = document.getElementsByClassName('tecla');
        document.getElementsByClassName('tecla')[tecla0].style.width= estado_inicial[tecla0].style.width;
        document.getElementsByClassName('tecla')[tecla0].style.height= estado_inicial[tecla0].style.height;
      }
    var estado_inicial = document.getElementsByClassName('tecla');
   document.getElementsByClassName('tecla')[tecla0].style.width= estado_inicial[tecla0].style.width+30;
   document.getElementsByClassName('tecla')[tecla0].style.height= estado_inicial[tecla0].style.height+30;
   desteclear(tecla0);
 }

function resetear() {
  display.textContent='';
  cifra1 = 0;
  cifra2 = 0;
  operacion = '';
}
function calcular(){
  var respuestado = 0;
  switch (operacion) {
    case "+": respuestado = parseFloat(cifra1) + parseFloat(cifra2);
    break;

    case "-": respuestado = parseFloat(cifra1) - parseFloat(cifra2);
    break;

    case "*": respuestado = parseFloat(cifra1) * parseFloat(cifra2);
    break;

    case "/": respuestado = parseFloat(cifra1) / parseFloat(cifra2);
    break;
  }
  resetear();
  display.textContent = respuestado;
}
