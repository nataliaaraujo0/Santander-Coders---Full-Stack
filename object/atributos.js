/**Restrigindo tipo de atributos
 * O js nao identifica se base e altura estao recebendo numeros, ento temos que fazer uma tratativa de erros.
 *  funcoes:
    isNaN -> nao é numerico
    throw -> lance 
 * 
 */
class Quadrado{
    constructor(base, altura){

      if(isNaN(base) || isNaN(altura)) throw "Informacao nao numerica"

        this.base = base;
        this.altura = altura;
        this.cor = undefined; 
    }
}
//const quadrado = new Quadrado('11','12');
const quadrado = new Quadrado(11,12);
quadrado.cor = 'black';
console.log(quadrado);