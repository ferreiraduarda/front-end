const video = document.getElementById("cameraFeed");
const canvas = document.getElementById("imagemCapturada");
const botao = document.getElementById("capturarBotao");
const contexto = canvas.getContext("2d");

//solicitar acesso à câmera
navigator.mediaDevices.getUserMedia({video: true})
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(erro => {
        console.error("Erro ao acessar a câmera: ", erro);
    });

//atribuir uma função para o botão de captura

botao.addEventListener("click", () => {
    //desenhar o quadro atual do vídeo na área do canvas
    contexto.drawImage(video, 0, 0, canvas.width, canvas.height);

    //obter a imagem como um URL de dados
    const imagemDataURL = canvas.toDataURL("image/png");
    //enviar a imagem para um servidor
    enviarImagem(imagemDataURL);
});

//função para enviar a imagem para um servidor
function enviarImagem(imagemDataURL){
    //simular o envio, salvando o dado no próprio computador
    console.log("Enviando imagem para o servidor...");

    fetch("/", {
        method: "POST",
        body: JSON.stringify({imagem: imagemDataURL}),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(resposta => resposta.json())
        .then(dados => {
            console.log("Resposta do servidor: ", dados);
        })
        .catch(erro => {
            console.error("Erro ao enviar a imagem: ", erro);
        })
}