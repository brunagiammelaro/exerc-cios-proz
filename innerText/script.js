const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo aos elementos
titulo.innerText = "Título da Página";
link.innerText = "Site da Proz";

listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

listaOrdenada.innerHTML = `
    <li><a href="https://google.com">Link 1</a></li>
    <li><a href="https://google.com">Link 2</a></li>
    <li><a href="https://google.com">Link 3</a></li>
`;