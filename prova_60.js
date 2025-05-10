class Produto {
    nome;
    marca;
    preco;

    adicionar() {
        console.log('Nome: ' + this.nome);
        console.log('Marca: ' + this.marca);
        console.log('Preço: R$' + this.preco);
        console.log('O produto foi adicionado ao estoque.');
    }
}

const produto1 = new Produto();
const produto2 = new Produto();

produto1.nome = 'Celular';
produto1.marca = 'Motorola';
produto1.preco = 1299.99;

produto2.nome = 'Notebook';
produto2.marca = 'Dell';
produto2.preco = 3899.99;

console.log('Produto 1: ');
produto1.adicionar();

console.log('\nProduto 2: ');
produto2.adicionar();