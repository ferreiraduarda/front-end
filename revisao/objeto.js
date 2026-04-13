const pessoa = {
    nome: "João",
    sobrenome: "Roccella",
    idade: 40,
    cargo: "Instrutor"
};

console.log("A idade do(a) " + pessoa.nome + " é " + pessoa.idade + ".");
console.log("O sobrenome do(a) " + pessoa.nome + " é " + pessoa.sobrenome + ".");

const entidade = new Map([
    ["nome", "João"],
    ["sobrenome", "Roccella"],
    ["idade", 40],
    ["cargo", "Instrutor"]
]);

console.log(entidade.get("sobrenome"));

const professor = JSON.stringify(pessoa);
console.log(professor);

const aluno = '{"nome":"Bento", "sobrenome":"Andrade", "idade":25, "matricula":12345}';
const alunoObjeto = JSON.parse(aluno);
console.log(alunoObjeto);
console.log(alunoObjeto.nome);
console.log(alunoObjeto.matricula);