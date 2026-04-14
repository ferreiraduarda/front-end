export class Carro {
    constructor(nome, ano){
        this.nome = nome; // this.nome é a declaração de uma variavel, como propriedade
        this.ano = ano;
    }
    idade(){
        const data = new Date();
        return data.getFullYear() - this.ano;
    }
}

let variavel = true; // boolean é uma classe, variavel do tipo boolean 
// objeto criado a partir de uma classe

const meuCarro = new Carro("Opala", 1972); // Opala é o argumento passado para o parâmetro
const carroDaMariaE = new Carro("Corolla", 2019); // outro objeto do mesmo tipo 
// com parâmetros diferentes

console.log("O carro da Maria Eduarda é um " + carroDaMariaE.nome +
     " e tem " + carroDaMariaE.idade() + " anos.")
console.log(meuCarro.nome);
console.log(`A idade do meu carro é ${meuCarro.idade()} anos`);
