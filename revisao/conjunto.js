const letras = new Set();

letras.add("a");
letras.add("b");
letras.add("c");

console.log(letras);
console.log(letras.has("e"));

const letrasGregas = new Set(["alpha", "beta", "gama"]);

letrasGregas.add("alpha"); //alpha já existe, não será adicionado novamente
letrasGregas.add("delta");

console.log(letrasGregas);
console.log(letrasGregas.has("alpha"));
