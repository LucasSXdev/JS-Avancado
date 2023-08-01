async function imc(weight, height) {
  if (typeof weight != "number" || typeof height != "number") {
    return Promise.reject("arguments must be a type number");
  }
  weight / height ** 2;
}

async function showImc(weight, height) {
  try {
    console.log("calculando...");
    const result = await imc(weight, height);

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
  } catch (error) {
    console.log(error);
  }
}
