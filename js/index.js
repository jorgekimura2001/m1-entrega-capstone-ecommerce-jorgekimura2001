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

// CRIANDO OS CARDS
data.forEach(function (produto) { // Percorre o array de objetos 
  const divCards = document.createElement('div') // cria uma div que é a cards 
  divCards.classList.add('cards') // adição de classe 
  // dai os filhos da div card eu posso fazer por innerHTML
  divCards.innerHTML = `<figure>  
  <img src=${produto.img} alt=${produto.nameItem} />
        </figure>
        <div class="description">
          <p class="Small-Detail">${produto.tag}</p>
          <h2 class="Title-3">${produto.nameItem}</h2>
          <p class="Body">${produto.description}</p>
          <p class="Body-Semi-Bold">R$ ${produto.value}</p>
          <button class="btnAdd">Adicionar ao carrinho</button>
        </div>`;
  divPai.appendChild(divCards) // como o pai é a divPai só dei um appendChild nele 
})




