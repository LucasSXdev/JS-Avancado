/*funções async são uma forma mais fácil para trabalharmos com promises no javascript
elas permitem que criemos promises em precisar instanciar.*/

async function asyncSum(a, b) {
  return a + b;
}

async function asyncSubtract(a, b) {
  return a - b;
}

const sumResult = asyncSum(1, 1);
const subtractResult = asyncSubtract(2, 1);

//Podemos ver através do exemplo da anterior que elas funcionam da mesma forma, mesmo quando utilizamos o Promise.all():

Promise.all([sumResult, subtractResult]).then((results) => {
  console.log(results);
});
