//reultilizar o codigo com class.

class Pessoa{
    constructor(nome,idade){ //método especial para criar e inicializar um objeto criado a partir de uma classe.
    this.nome = nome; //referenciando da class  = constructor
    this.idade = idade;
    }    
};

//criar de fato as pessoas -> variaveis -> criar um novo objeto
const pessoa1 = new Pessoa('natalia',25);
pessoa1.idade = 26; //fez aniversario
const pessoa2 = new Pessoa('Gabriella',21);
console.log(pessoa1);