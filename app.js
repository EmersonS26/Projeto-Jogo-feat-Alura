let listaDeNumerosSorteados = []
let numeroLimite = 10;
let numero = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}


function mensagemInicial(){
    exibirTextoNaTela("h1","Jogo do número secreto");
    exibirTextoNaTela("p","Escolha um número entre 1 e 10");

}
mensagemInicial()


function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute == numero){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativa > 1 ? "Tentativas" : "Tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute > numero){
        exibirTextoNaTela("p","O número secreto é menor");
    }else{
        exibirTextoNaTela("p","O número secreto é maior")
        }
    }
    tentativa++
    limparCampo();
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo(){
    numero = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensagemInicial()
    document.getElementById("reiniciar").setAttribute("disabled",true);

}