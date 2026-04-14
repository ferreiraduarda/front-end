const visualizador = (algo) => console.log(algo);

let minhaPromessa = new Promisse((resolve, reject) => {
    let ok = true;

    if (ok){
        resolve("Ok");
    }else{
        reject("Erro");
    }
});

minhaPromessa.then(
    (valor) => visualizador(valor),
    (razao) => visualizador(razao)
);