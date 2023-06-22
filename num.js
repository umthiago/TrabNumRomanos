const h3 = document.querySelector("h3")


function inicializa(){
    const numero = document.querySelector("#num").value
    romanoadecimal(numero.toUpperCase())
}
function romanoadecimal(numeroromano) {
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
    const listaroman = valoresromanos[numeroromano[i]];
    const proximovalorromano = valoresromanos[numeroromano[i + 1]];

    if (proximovalorromano && listaroman < proximovalorromano) {
      numerodecimal += proximovalorromano - listaroman;
    } else {
      numerodecimal += listaroman;
    }
  }

  h3.innerText = `O número romano digitado, convetido para decimal é: ${numerodecimal}`
}
