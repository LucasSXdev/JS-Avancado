//Repare que se adicionarmos uma action e um method ao nosso form ele já consegue fazer requisições para o json-server, criando um novo artigo, e como a página é atualizada o novo artigo já aparece na tela. No entando, o que queremos é fazer as requisições POST através do javascript sem atualizar a página. Para isso podemos usar o fetch() novamente, dessa vez com algumas opções a mais:
const form = document.querySelector("form");

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const articleData = {
    title: document.querySelector("#title").value,
    author: document.querySelector("#author").value,
    content: document.querySelector("#content").value,
  };

  const response = await fetch("http://localhost:3000/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  });

  const savedArticle = await response.json();
  form.reset();
  renderArticle(savedArticle);

  console.log(savedArticle);
});
