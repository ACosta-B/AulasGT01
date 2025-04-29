function calcular_imc(altura, peso) {
  let imc = peso / (altura * altura);
  return imc;
}

const calculoimc = function (altura, peso) {
  let imc = peso / (altura * altura);
  return imc;
};

const converterTemperatura = (tc) => tc * (9 / 5) + 32;

const classificarIdade = (idade, nome) => {
  if (idade >= 18) {
    return `${nome} é um adulto`;
  } else {
    return `${nome} não é um adulto`;
  }
};
function calcular_media(lista) {
  let soma = 0;
  console.log(lista.length)
  for(let i = 0; i < lista.length; i++) {
    soma = soma + lista[i]
    console.log(lista[i]);
  }
  console.log(soma);
  
  let media = soma / lista.length;
  return media
}

