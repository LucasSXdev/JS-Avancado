function waitFor(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      return;
    }, seconds * 1000);
  });
}

const numbers = [4, 5, 9, 13, 77];
const squares = numbers.map(async (number) => {
  await waitFor(2);
  return number * number;
});
