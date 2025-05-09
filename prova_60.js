class Produto {
    nome;
    marca;
    preco;

    adicionar() {
        this.nome
        this.marca
        this.preco
        console.log('O produto foi adicionado ao estoque.')
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
console.log('Nome: ' + produto1.nome)
console.log('Marca: ' + produto1.marca)
console.log('Preço: R$' + produto1.preco)

produto1.adicionar();

console.log('\nProduto 2: ');
console.log('Nome: ' + produto2.nome)
console.log('Marca: ' + produto2.marca)
console.log('Preço: R$' + produto2.preco)

produto2.adicionar();