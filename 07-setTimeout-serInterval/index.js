//settimeout é uma função que serve como temporizador
//espera determinado tempo para executar um bloco de código
//é uma high order function que vai receber dois paramteros, o primeiro é uma callback function e o segundo é o tempo que vai esperar para executá-la.

const timeoutId = setTimeout(() => {
  console.log("execute esse código após 3 segundos");
}, 3 * 1000);

//setInterval funciona como o setTimeout, mas ele repete o bloco de código

let seconds = 0;
const IntervalId = setInterval(() => {
  seconds += 3;
  console.log(`já se passaram ${seconds}`);
}, 1000 * 3);
