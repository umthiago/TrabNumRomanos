const h3 = document.querySelector("h3")


function inicializa(){  //Aqui é criado uma função que ocorrerá um evento quando o botão for clicado
  const numero = document.querySelector("#num").value  // se obtém o valor inserido e é atribuido a variavel
  romanoadecimal(numero.toUpperCase())
}
function romanoadecimal(numeroromano) { // se obtém a conversão de um número romano e converte em decimal
const valoresromanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

let numerodecimal = 0;

for (let i = 0; i < numeroromano.length; i++) {
  const listaroman = valoresromanos[numeroromano[i]]; // se obtém o o valor decimal do caractere romano e atribui a variavel
    const proximovalorromano = valoresromanos[numeroromano[i + 1]]; 

    if (proximovalorromano && listaroman < proximovalorromano) {  // é verificado se o numero romano possui um valor decimal
      numerodecimal += proximovalorromano - listaroman; 
    } else {
      numerodecimal += listaroman;
    }
  }

  h3.innerText = `O número romano digitado, convetido para decimal é: ${numerodecimal}` // imprimir o resultado convertido em decimal 
}
