function execute() {
  return new Promise((resolve, reject) => {
    console.log("a promise está sendo executada!");
    setTimeout(() => {
      if (false) {
        reject("a promise deu erro");
      } else {
        console.log("a promise está sendo resolvida");
        resolve("42");
      }
    }, 1000);
  });
}

const promise = execute();

//Ao utilizarmos o then na nossa promise, ela vai retornar o resultado quando o estado da promise estiver em resolve
//Ao utilizarmos o catch na promise, ela vai retornar o reject da promise
//o finally vai retornar a finalização da promise, seja ela resolvida ou rejeitada.

promise
  .then((result) => {
    console.log(`A promise foi resolvida.O resultado foi: ${result}`);
  })
  .catch((err) => {
    console.log(`a promise foi rejeitada.Motivo:${err}`);
  })
  .finally(() => {
    console.log("a promise foi finalizada");
  });
