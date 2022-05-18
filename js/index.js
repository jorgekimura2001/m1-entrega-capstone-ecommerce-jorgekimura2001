const divPai = document.querySelector(".container-itens");
const divCarrinho = document.querySelector(".carrinho-itens-vazio");
const carrinhoTotal = document.querySelector(".carrinho");

const carrinho = [];

const divTotal = document.createElement('div')
      divTotal.classList.add('divEscondida')
carrinhoTotal.appendChild(divTotal)

const quantidadeProdutos = document.createElement('div')
quantidadeProdutos.className = 'quantidadeProdutos'

const precoTotal = document.createElement('div')
precoTotal.className = 'precoTotal'

divTotal.append(quantidadeProdutos, precoTotal)

function criarCard(produto) {
  const div = document.createElement("div");
  div.className = "cards";

  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = produto.img;
  img.alt = produto.nameItem;

  const divDescription = document.createElement("div");
  divDescription.className = "description";

  const categoriaProduto = document.createElement("p");
  categoriaProduto.className = "Small-Detail";
  categoriaProduto.innerText = produto.tag;

  const tituloProduto = document.createElement("h2");
  tituloProduto.className = "Title-3";
  tituloProduto.innerText = produto.nameItem;

  const descricaoProduto = document.createElement("p");
  descricaoProduto.className = "Body";
  descricaoProduto.innerText = produto.description;

  const precoProduto = document.createElement("p");
  precoProduto.className = "Body-Semi-Bold";
  precoProduto.innerText = `R$ ${produto.value},00`;

  const adicionarProduto = document.createElement("button");
  adicionarProduto.className = "btnAdd";
  adicionarProduto.innerText = "Adicionar ao carrinho";

  adicionarProduto.addEventListener("click", function () {
    carrinho.push(produto);
    divTotal.classList.remove('divEscondida')
    divTotal.classList.add('total')
    const esconderTitulo = document.querySelector(".Title-5");
    const esconderLink = document.querySelector(".linkAdd");

    if (carrinho !== []) {
      divCarrinho.classList.remove("carrinho-itens-vazio");
      divCarrinho.classList.add("carrinho-itens");
      esconderTitulo.classList.add("esconder");
      esconderLink.classList.add("esconder");

      const divItensCarrinho = document.createElement("div");
      divItensCarrinho.classList.add("itensDoCarrinho");
      console.log(divItensCarrinho)
      const divImagem = document.createElement("div");
      divImagem.classList.add("divImagem");

      const figureCarrinho = document.createElement("figure");
      const imgCarrinho = document.createElement("img");
      imgCarrinho.src = produto.img;
      imgCarrinho.alt = produto.nameItem;
      figureCarrinho.appendChild(imgCarrinho);
      divImagem.appendChild(figureCarrinho);

      const descricaoItemCarrinho = document.createElement("div");
      descricaoItemCarrinho.className = "itensCarrinho";

      const tituloProdutoCarrinho = document.createElement("h2");
      tituloProdutoCarrinho.innerText = produto.nameItem;
      tituloProdutoCarrinho.className = "tituloDoItem";

      const precoProdutoCarrinho = document.createElement("p");
      precoProdutoCarrinho.innerText = `R$ ${produto.value},00`;
      precoProdutoCarrinho.className = "precoDoItem";

      const btnRemover = document.createElement("button");
      btnRemover.innerText = "Remover produto";
      btnRemover.classList.add("btnRemover");

      // percorrer o carrinho e fazer a contagem de itens bem como a soma
      
      let soma = 0
      carrinho.forEach(function (produto){
        quantidadeProdutos.innerHTML = `<p class = 'quantidade'>Quantidade: </p> <p class = 'numero-quant'>${carrinho.length}</p>`
        soma+= produto.value  
        precoTotal.innerHTML = `<p class = 'quantidade'>Total: </p> <p class = 'numero-quant'>R$ ${soma},00</p>`
      })
      console.log(carrinho)

      btnRemover.addEventListener("click", function () {
        let subtrai = - produto.value
        carrinho.forEach(function (produto){
          quantidadeProdutos.innerHTML = `<p class = 'quantidade'>Quantidade: </p> <p class = 'numero-quant'>${carrinho.length - 1}</p>`
          subtrai += produto.value   
          if(subtrai < 0){
            precoTotal.innerHTML = `<p class = 'quantidade'>Total: </p> <p class = 'numero-quant'>R$ ${subtrai * -1},00</p>`
          }else{
          precoTotal.innerHTML = `<p class = 'quantidade'>Total: </p> <p class = 'numero-quant'>R$ ${subtrai},00</p>`
          }
        })
        divCarrinho.removeChild(divItensCarrinho);
        const divExcluir = carrinho.find(
          (element) => element.nameItem == produto.nameItem
        );
        carrinho.splice(carrinho.indexOf(divExcluir), 1);
        if (carrinho.length == 0) {
          divTotal.classList.remove('total')
          divTotal.classList.add('divEscondida')
          divCarrinho.classList.remove("carrinho-itens");
          divCarrinho.classList.add("carrinho-itens-vazio");
          esconderTitulo.classList.remove("esconder");
          esconderLink.classList.remove("esconder");
        }
      });

      descricaoItemCarrinho.append(
        tituloProdutoCarrinho,
        precoProdutoCarrinho,
        btnRemover
      );
      divItensCarrinho.append(divImagem, descricaoItemCarrinho);
      divCarrinho.appendChild(divItensCarrinho);
    }
  });
  figure.appendChild(img);
  divDescription.append(
    categoriaProduto,
    tituloProduto,
    descricaoProduto,
    precoProduto,
    adicionarProduto
  );
  div.append(figure, divDescription);
  return div;
}
data.forEach(function (produto) {
  // Percorre o array de objetos
  const card = criarCard(produto);
  divPai.appendChild(card);
});
// criar uma div abaixo do carrinho que deverá aparecer caso tenha itens lá caso não tenha não aparecer
// nessa div deve aparecer a quantidade de itens (count = 0 e irá sendo incrementado sempre que tiver o click) e a soma dos preços(soma = 0; soma+= produto.value)
