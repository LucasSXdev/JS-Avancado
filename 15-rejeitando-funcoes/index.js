//para rejeitarmos uma promise devemos utilizar o objeto global promise junto com o método reject

async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("arguments must be type of number");
  }
  return a + b;
}

async function asyncSubtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("arguments must be type of number");
  }
  return a - b;
}

asyncSum(10, "")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

asyncSubtract(20, 10)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
