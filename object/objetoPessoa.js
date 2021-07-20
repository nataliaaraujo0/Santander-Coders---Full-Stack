const pessoa = {
    nome:'natalia', //atributo
    idade: '25'
};

console.log(pessoa.idade);

//criando metodo para o objeto -> metodo é como se fosse um atributo que tem uma funcao

const quadrado = {
    base:'10',
    altura:'20',
    calculaArea: function() { 
        return this.base*this.altura
    }
};

//chamar metodo
console.log(quadrado.calculaArea());