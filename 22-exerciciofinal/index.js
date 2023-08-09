const transactions = [];

function createTransaction(id) {
  const transaction = document.createElement("div");
  transaction.classList.add("transaction");
  transaction.id == `transaction${id}`;
  return transaction;
}

function createTransactionTitle(name) {
  const title = document.createElement("span");
  title.classList.add("title");
  title.id = name;
  return title;
}

function createTransactionAmount(amount) {
  const span = document.createElement("span");

  const formater = Intl.NumberFormat("pt-BR", {
    //formatador numérico para moedas brasileiras
    compactDisplay: "long",
    currency: "BRL",
    style: "currency",
  });

  const formatedAmount = formater.format(amount);

  if (amount > 0) {
    span.textContent = `${formatedAmount}C`;
    span.classList.add("credit");
  } else {
    span.textContent = `${formatedAmount}D`;
    span.classList.add("debit");
  }

  return span;
}

function renderTransaction(transaction) {
  const container = createTransaction(transaction.id);
  const title = createTransactionTitle(transaction.name);
  const amount = createTransactionAmount(transaction.amount);

  container.append(title, amount);
  document.querySelector("#transactions").append(container);
}

async function fetchTransactions() {
  return await fetch("http://localhost:3000/transactions").then((resolve) =>
    resolve.json()
  );
}

function updateBalance() {
  const balanceSpan = document.querySelector("#balance");
  const balance = transactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  const formater = Intl.NumberFormat("pt-BR", {
    compactDisplay: "long",
    currency: "BRL",
    style: "currency",
  });

  balanceSpan.textContent = formater.format(balance);
}

async function setup() {
  const results = await fetchTransactions();
  transactions.push(...results);
  transactions.forEach(renderTransaction);
  updateBalance();
}

document.addEventListener("DOMContentLoaded", setup);
