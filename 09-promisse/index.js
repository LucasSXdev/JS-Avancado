//A promise possui o estado pending inicialmente
//apos o resolve ser executado a promisse mudará de estado para resolvida
//O reject é quando a promise é rejeitada
//o uso mais comum das promises é dentro de outras funções

const p = new Promise((resolve) => {
  console.log("executando a promise");
  setTimeout(() => {
    console.log("resolvendo a promise");
    resolve(true); //A promise será terminada e resolvida
  }, 2 * 1000);
});

console.log(p);

setTimeout(() => {
  console.log(p);
}, 3 * 1000);
