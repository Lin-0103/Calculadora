function Inteiro_mais_proimo() {
  let numero_sec_1 = document.getElementById('numero_sec_1').value;
  let resultado = Math.round(numero_sec_1);
  document.getElementById('resultado_sec_1').value = resultado;
}
function potenciacao() {
  let base = document.getElementById('Base_sec_2').value;
  let expoente = document.getElementById('Expoente_sec_2').value;
  let resultado = Math.pow(base, expoente);
  document.getElementById('resultado_sec_2').value = resultado;
}
function circulo() {
  let raio = document.getElementById('raio_sec_3').value;
  if (raio > 0) {
    let circunferencia = 2 * Math.PI * raio;
    let area = Math.PI * Math.pow(raio, 2);
    document.getElementById('area_sec_3').value = area;
    document.getElementById('area_sec_3').style.color = 'initial'
    document.getElementById('circunferencia_sec_3').value = circunferencia;
    document.getElementById('circunferencia_sec_3').style.color = 'initial'
  }
  else if (raio < 0) {
    document.getElementById('circunferencia_sec_3').value = 'Numero Invalido'
    document.getElementById('circunferencia_sec_3').style.color = 'red'
    document.getElementById('area_sec_3').value = 'Numero Invalido';
    document.getElementById('area_sec_3').style.color = 'red'
  }
  console.log(raio)
}
function cubo() {
  let aresta = document.getElementById('aresta_sec_4').value
  if (aresta > 0) {
    let area_base = Math.pow(aresta, 2);
    let area_total = area_base * 6;
    let volume = Math.pow(area_total, 3);
    document.getElementById('area_sec_4').value = area_base;
    document.getElementById('area_sec_4').style.color = 'initial';
    document.getElementById('area_total_sec_4').value = area_total;
    document.getElementById('area_total_sec_4').style.color = 'initial';
    document.getElementById('volume_sec_4').value = volume;
    document.getElementById('volume_sec_4').style.color = 'initial';
  }
  else {
    document.getElementById('area_sec_4').value = 'Numero Invalido';
    document.getElementById('area_sec_4').style.color = 'red';
    document.getElementById('area_total_sec_4').value = 'Numero Invalido';
    document.getElementById('area_total_sec_4').style.color = 'red';
    document.getElementById('volume_sec_4').value = 'Numero Invalido';
    document.getElementById('volume_sec_4').style.color = 'red';
  }
}
function Numero_Aleatorio() {
  let incio = document.getElementById('Intervalo_De').value;
  let fim = document.getElementById('Intervalo_Ate').value;
  let randomNumber = Math.floor(Math.random() * (parseFloat(fim) - parseFloat(incio)) + parseFloat(incio))
  document.getElementById('Numero_Gerado').value = randomNumber
  console.log(incio)
  console.log(fim)
  console.log(randomNumber)
}
