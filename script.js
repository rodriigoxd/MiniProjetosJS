function mudarTexto () {
    document.querySelector("#p1").innerHTML = "Aula de Programação para Web";
    document.querySelector("#p6").innerHTML = "JavaScript não é Java";

}

function mudarCor () {
    let x;
    let y;
    let z;
    let i;
    let paragrafos = document.getElementsByTagName('p');

    x = document.querySelector("#p2");
    x.style.fontSize = "40px";

    y = document.querySelector("#p3");
    y.style.color = "blue";

    z = document.querySelector("#p4");
    z.style.textAlign = "center";

    for (i = 0; i < paragrafos.length; i++) {
        if (i % 2 == 0)
            paragrafos[i].style.backgroundColor = "yellow";
    }
}

function onLampada () {
        document.querySelector("#off").src = "imagens/lamp_on.gif";
}

function offLampada () {
    document.querySelector("#off").src = "imagens/lamp_off.gif";
}

function onLampada2 () {
    document.querySelector("#off2").src = "imagens/lamp_on.gif";
    document.querySelector("#btnLampada").value = "Desligar"
}

function calcular() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado;

    if (operacao === "somar") {
      resultado = valor1 + valor2;
    } 
    else if (operacao === "subtrair") {
      resultado = valor1 - valor2;
    } 
    else if (operacao === "multiplicar") {
      resultado = valor1 * valor2;
    } 
    else if (operacao === "dividir") {
      resultado = valor1 / valor2;
    } 
    else {
      alert("Operação inválida");
      return;
    }

    alert(`Resultado: ${resultado}`);
  }