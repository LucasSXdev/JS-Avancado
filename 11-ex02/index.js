function showImc(weight, height) {
  IMC(weight, height)
    .then((result) => {
      console.log(`o resultado do IMC foi ${result}`);
      if (result <= 18.5) {
        console.log("magreza");
      } else if (result <= 24.9) {
        console.log("normal");
      } else if (result <= 29.9) {
        console.log("sobrepeso");
      } else if (result <= 39.9) {
        console.log("obesidade");
      } else {
        console.log("obesidade grave");
      }
    })
    .catch((err) => {
      console.log(err);
    });

  console.log("calculando...");
}

function IMC(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight != "number" || typeof height != "number") {
      reject("o peso e altura devem ser do tipo number");
    } else {
      resolve(weight / height ** 2);
    }
  });
}

showImc(71, 1.74);
showImc(48, 1.6);
showImc(71, "texto");
showImc(82, 1.72);
showImc(120, 1.8);
