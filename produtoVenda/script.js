let titulo = document.createElement("h1");

titulo.innerText = 'Site de Vendas'
titulo.id = 'titulo'

let listaDeProdutos = document.createElement("section")

let produto1 = document.createElement("div")
produto1.innerHTML = `
            <h2 class="nome-produto">Cadeira</h2>
            <img src="./IMG/cadeira.png" width = 100px>
            <p class="descricao-produto"><strong>Descrição:</strong> Cadeira para mesa de jantar</p>
            <p class="valor-produto"><strong>Preço:</strong> R$210,00</p>`

let produto2 = document.createElement("div")
produto2.innerHTML = `
            <h2 class="nome-produto">Mesa</h2>
            <img src="./IMG/mesa.png" width = 100px>
            <p class="descricao-produto"><strong>Descrição:</strong> Mesa de jantar</p>
            <p class="valor-produto"><strong>Preço:</strong> R$2.000,00</p>`

listaDeProdutos.appendChild(produto1)
listaDeProdutos.appendChild(produto2)

document.body.appendChild(titulo)
document.body.appendChild(listaDeProdutos)

