let max = 60;
let min = 1;
let qtde = 0;
let limite = 7;
let numeros = [];
let sorteado;


function sorteia() {
    while (qtde != limite) {
      sorteado = Math.floor(Math.random() * (max - min + 1)) + min;

      if (numeros.includes(sorteado)) {
      } else {
        numeros.push(sorteado);
        qtde++;
      }
    }
    //Ordena os números de forma crescente
    // return numeros.sort(function (a, b) {
    //   return a - b;
    // });

    //forma reduzida
    return numeros.sort((a, b) => a - b);
  }
  sorteia()
  console.log()