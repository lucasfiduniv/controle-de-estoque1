document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");

    const dados = document.getElementById("dados");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const nome = form.elements.nome.value;
      const descricao = form.elements.descrijcao.value;
      const codigo = form.elements.codigo.value;
      const preco = form.elements.preco.value;
      const quantidade = form.elements.quantidade.value;
      const fornecedor = form.elements.fornecedor.value;
      const pesquisaestoque = form.elements.pesquisaestoque.value;
      form.reset();

    console.log(nome,descricao,codigo,preco,quantidade,fornecedor);

const novoproduto = new Produto();
novoproduto.nome = nome;
novoproduto.descricao = nome;
novoproduto.codigo = codigo;
novoproduto.preco = preco;
novoproduto.quantidade = quantidade;
novoproduto.fornecedor = fornecedor;
console.log(novoproduto);
if(pesquisaestoque == novoproduto.nome){
    console.log(quantidade);
}else{
    console.log("esse  produto nao existe");
}
    });
  });


    


