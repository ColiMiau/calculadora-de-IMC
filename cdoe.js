const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const aceptar = document.getElementById("aceptar");
const resultadoDiv = document.querySelector(".resultado");
const resultadoExtraDiv = document.querySelector(".resultadoExtra");

aceptar.addEventListener("click", () => {
  if (!peso.value || !altura.value) {
    alert("Favor de introducir un valor");
    return;
  }
  if (altura.value > 3) {
    alert("Recuerda poner tu altura en metros");
    return;
  }

  const imc = calcularIMC();
  resultado(imc);
  resultadoExtra(imc);
});

function calcularIMC() {
  kg = peso.value;
  m = altura.value * altura.value;

  const imc = (kg / m).toFixed(2);

  return imc;
}

function resultado(imc) {
  if (imc < 18.5) {
    resultadoDiv.textContent = "Bajo peso" + `. IMC=${imc}`;
    resultadoDiv.style.color = "#FF8C00";
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultadoDiv.textContent = "Peso normal (saludable)" + `. IMC=${imc}`;
    resultadoDiv.style.color = "#006400 ";
  } else if (imc >= 25.0 && imc <= 29.9) {
    resultadoDiv.textContent = "Sobrepeso" + `. IMC=${imc}`;
    resultadoDiv.style.color = "#8B4513 ";
  } else if (imc >= 30.0 && imc <= 34.9) {
    resultadoDiv.textContent = "Obesidad grado I" + `. IMC=${imc}`;
    resultadoDiv.style.color = "#8B0000 ";
  } else if (imc >= 35.0 && imc <= 39.9) {
    resultadoDiv.textContent = "Obesidad grado II" + `. IMC=${imc}`;
    resultadoDiv.style.color = "#b91c1c";
  } else if (imc >= 40.0) {
    resultadoDiv.textContent = "Obesidad grado III (mórbida)" + `. IMC=${imc}`;
    resultadoDiv.style.color = "#7f0000";
  }
}

function resultadoExtra(imc) {
  const imagen = document.createElement("img");

  resultadoExtraDiv.innerHTML = "";

  if (imc < 18.5) {
    imagen.src = "./img/peso1.jpg";
  } else if (imc >= 18.5 && imc <= 24.9) {
    imagen.src = "./img/peso2.jpg";
  } else if (imc >= 25.0 && imc <= 29.9) {
    imagen.src = "./img/peso3.jpg";
  } else if (imc >= 30.0 && imc <= 34.9) {
    imagen.src = "./img/peso4.jpg";
  } else if (imc >= 35.0 && imc <= 39.9) {
    imagen.src = "./img/peso5.jpg";
  } else if (imc >= 40.0) {
    imagen.src = "./img/peso6.jpg";
  }

  resultadoExtraDiv.appendChild(imagen);
}
