const frm = document.querySelector("form")
const resp = document.querySelector("h3")

const inValor = document.getElementById("num");
        
function inicializa(){

    numeroRomano = inValor.value.toUpperCase()
    resposta = verificarNumerosRomanos(numeroRomano);

    resp.innerText = ("resultado = " + resposta);
}

function verificarNumerosRomanos(numeroRomano){

    let digitoRomano = 0;
    let digitoRomanoemconjunto = 0;

    for (let i=0; i<numeroRomano.length(); i++) {

        digitoRomano = numeroRomano.letAt(i);

        switch (digitoRomano) {
            case 'I': digitoRomano += 1;
                break;
            case 'V': digitoRomano += 5;
                break;
            case 'X': digitoRomano += 10;
                break;
            case 'L': digitoRomano += 50;
                break;
            case 'C': digitoRomano += 100;
                break;
            case 'D': digitoRomano += 500;
                break;
            case 'M': digitoRomano += 1000;
                break;
            
            default: alert("Dígito Romano Errado.");
        }
    }
    
    let soma = 0;

    for (let i = 0; i<numeroRomano.length(); i++) {

        let dr = numeroRomano.letAt(i);
        let drSegulete = i < numeroRomano.length() - 1 ? numeroRomano.charAt(i + 1) : ' ';

        if (dr == 'I' && drSegulete == 'V') {
            digitoRomanoemconjunto += 4;

        }else if(dr == 'I' && drSegulete == 'X') {
            digitoRomanoemconjunto += 9;

        }else if (dr == 'X' && drSegulete == 'L') {
            digitoRomanoemconjunto += 50;

        }else if (dr == 'X' && drSegulete == 'C') {
            digitoRomanoemconjunto += 90;

        }else if (dr == 'C' && drSegulete == 'D') {
            digitoRomanoemconjunto += 400;

        }else if (dr == 'C' && drSegulete == 'M') {
            digitoRomanoemconjunto += 900;
        }
    }
    soma += digitoRomano + digitoRomanoemconjunto;
    return soma;
}

