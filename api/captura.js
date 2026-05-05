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
    const imageDataURL = canvas.toDataURL("image/png");
    //enviar a imagem para um servidor
    enviarImagem(imageDataURL);
});

//função para enviar a imagem para um servidor
function enviarImagem(imageDataURL){
    //simular o envio, salvando o dado no próprio computador
    console.log("Enviando imagem para o servidor...");

    const base64String = imageDataURL.split(",")[1];

    fetch("http://DOP3080-1247456:8000/images", {
        method: "POST",
        body: JSON.stringify({image: base64String, mime_type: 'image/png'}),
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