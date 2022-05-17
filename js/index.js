const divPai = document.querySelector('.container-itens')

// const div = document.createElement('div')

// div.className = 'cards'

// const figure = document.createElement('figure')

// const img = document.createElement('img')

// const divDescription = document.createElement('div')

// divDescription.className = 'description'

// const categoriaProduto = document.createElement('p')

// categoriaProduto.className = 'Small-Detail'

// const tituloProduto = document.createElement('h2')

// tituloProduto.className = 'Title-3'

// const descricaoProduto = document.createElement('p')

// descricaoProduto.className = 'Body'

// const precoProduto = document.createElement('p')

// precoProduto.className = 'Body-Semi-Bold'

// const adicionarProduto = document.createElement('button')

// adicionarProduto.className = 'btnAdd'

// Percorrer cada objeto
// Atribuir a ele o valor 
console.log(divPai)
function adicionarProdutos(arrayProduto){
    divPai.innerHTML = ""
    for(let i = 0; i < arrayProduto.length; i++){
        divPai.innerHTML += `<div class="cards">
        <figure>
          <img src=${arrayProduto.img} alt=${arrayProduto.nameItem} />
        </figure>
        <div class="description">
          <p class="Small-Detail">${arrayProduto.tag}</p>
          <h2 class="Title-3">${arrayProduto.nameItem}</h2>
          <p class="Body">${arrayProduto.description}</p>
          <p class="Body-Semi-Bold">R$ ${arrayProduto.value}</p>
          <button class="btnAdd">Adicionar ao carrinho</button>
        </div>
        </div>`
        
    }
    console.log(divPai)
}
adicionarProdutos(data)
console.log(adicionarProdutos)


