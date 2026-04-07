function pagina(){
    const input = document.createElement("input");
    input.type = "text";
    input.id = "tarefaInput";
    input.placeholder = "Digite uma tarefa";

    const botao = document.createElement("button");
    botao.textContent = "Adicionar";
    botao.id = "botaoAdicionar";

    const div = document.querySelector(".container");
    const lista = document.createElement("ul");
    
    const titulo = document.createElement("h2");
    titulo.textContent = "Lista de Tarefas";
    
    div.appendChild(titulo);
    div.appendChild(input);
    div.appendChild(botao);
    div.appendChild(lista);

    botao.addEventListener("click", ()=>{
        // Criar elemento da lista
        const novaTarefa = document.createElement("li");
        const texto = input.value.trim(); // .trim() Remove os espaços antes e depois de uma string
        // .value É um atributo de input -  o que for digitado na caixa de texto vem pra cá
        if(texto === ""){
            alert("Digite algo!");
            return;
        }

        novaTarefa.textContent = texto; // Adicionar texto ao elemento da lista
        novaTarefa.classList.add('destaque'); // Adiciona a classe "destaque" ao li.
        novaTarefa.setAttribute("data-tarefa", texto.toLowerCase()); // Adiciona atributo personalizado
        novaTarefa.style.color = "#333"; // Muda a cor do texto
        console.log("Adicionando:", texto.toLowerCase());


        lista.appendChild(novaTarefa); // Adiciona elemento

        // Evento para remover item ao clicar
        novaTarefa.addEventListener("click", () => {
            const tarefa = novaTarefa.getAttribute("data-tarefa");
            console.log("Removendo:", tarefa);
            novaTarefa.classList.remove("destaque"); // Remove a classe HTML destaque 
            novaTarefa.classList.add("removido"); // Acrescenta a classe HTML removido
            novaTarefa.innerHTML += " (concluída)"; // Acrescenta o texto (concluída) ao texto da tarefa
            setTimeout(()=>{lista.removeChild(novaTarefa);}, 1000); // Remove tarefa depois de um 1 segundo

            input.value = "";

        })
    })
}