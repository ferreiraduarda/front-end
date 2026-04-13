const frutas = new Map();

frutas.set("maçã", 5);
frutas.set("banana", 7);
frutas.set("laranja", 10);

console.log("O preço do quilo da banana é " + frutas.get("banana") + " reais.");

const legumes = new Map([
    ["batata", 6],
    ["cenoura", 4],
    ["abobrinha", 8]
]);
console.log(`O preço do quilo da abobrinha é ${legumes.get("abobrinha")} reais.`);

frutas.set("manga", 12);
console.log("O preço do quilo da manga é " + frutas.get("manga") + " reais.");

console.log(frutas);

legumes.forEach((valor, chave) => console.log(`O preço do quilo da ${chave} é ${valor} reais.`));
for (const x of legumes.keys()){
    console.log(x);
};
//uma lista não ordenada