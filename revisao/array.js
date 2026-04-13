const carros = ["Fusca", "Corolla", "Gol", "Palio", "Chevette", "Opala"];
console.log(typeof carros); // Exibe o array completo
console.log(carros[1]);

for (i = 0; i < 6; i++) {
    console.log(carros[i]);
}

carros.forEach((valor) => console.log(valor));

const numeros = [45, 4, 9, 16, 25];
const acimaDe18 = numeros.filter(valor => valor > 18);
console.log(acimaDe18);

const menorDe18 = numeros.filter(valor => valor < 18);
console.log(menorDe18);

for (i = 0; i < 5; i++){
    if (numeros[i] > 18) {
        console.log(numeros[i]);
    }
}

console.log(numeros.reduce((total, valor) => total + valor));