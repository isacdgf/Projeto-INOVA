const prompt = require("prompt-sync")();

let time = [];
let contunuar = true;

function mostrarMenu(){
    console.log("1 - Cadastrar");
    console.log("2 - Deletar");
    console.log("3 - Mostrar Equipe");
    console.log("4 - Calcular Media da Equipe");
    console.log("5 - Buscar Jogador");
    console.log("6 - Sair");
    console.log("\n")
}

function cadastrarJogador(){
    let nomeJogador = prompt("Digite o nome do jogador:");
    let funcaoJogador = prompt("Digite a função no time: ");
    let pontuacaoJogador = Number(prompt("Digite a pontuação: "));

    if(isNaN(pontuacaoJogador)){
        console.log("Pontuação invalida!!");
        return;
    }
    else{
        let recruta = {
            nome: nomeJogador,
            funcao: funcaoJogador,
            pontuacao: pontuacaoJogador,
        }

        time.push(recruta);
        console.log("Jogador:"+ nomeJogador + " foi cadatrado com sucesso!!")
        console.log("-------------------------------"); 
    }

    
}

function deletarJogador(){
    if(time.length === 0){
        console.log("Nem um jogador cadastrado!!");
        return;
    }
    
    
    let nomeDeletado = prompt("Digite o nome a ser deletado: ");
    let indexDeletado = -1;
    

    for(let i = 0; i < time.length; i++){
        if(time[i].nome === nomeDeletado){
            indexDeletado = i;
            break;
        }
    }

    if(indexDeletado === -1){
            console.log("Jogador não encontrado!!");
            return;
    }
    
    time.splice(index, 1);
    console.log("Jogador deletado");
    
    
}
 
function mostarTime(){
    if(time.length === 0){
        console.log("Não ah jogadores no time!!");
        return;
    }

    console.log("------------EQUIPE------------")


    for(let i = 0; i < time.length; i++){
        let jogador = time[i];
        console.log((i+1)+" - "+jogador.nome + "| Função: " + jogador.funcao + " | Pontuação:"+ jogador.pontuacao);
    }
    console.log("------------------------------");

}

function sairDoPrograma(){
    console.log("Saindo...");
    contunuar = false;
}

function cauculoDaMedia(){
    if(time.length === 0 ){
        console.log("Nem um jogador encontrado.");
        return;
    }

    let totalpontos = 0;

    for(let i = 0; i < time.length; i++){
        totalpontos = totalpontos + time[i].pontuacao;
    }

    console.log("A media de pontos do time é: "+(totalpontos/time.length));

}

function buscarJogador(){
    if(time.length === 0){
        console.log("Não ah nem um jogador cadastrado!!");
        return;
    }

    let nomedesejado = prompt("Digite o nome do jogador: ");

    let encontrou = false;

    for(let i = 0; i < time.length; i++){
        let jogadorAtual = time[i];
        if(nomedesejado === jogadorAtual.nome){
            console.log("------------------------------");
            console.log("Jogador encontrado!!")
            console.log("------------------------------");
            console.log("Nome: "+jogadorAtual.nome+"|Função: "+jogadorAtual.funcao+"| Pontos: "+jogadorAtual.pontuacao);
            console.log("------------------------------");

            encontrou = true;

            break;

        }


    }
    if(encontrou === false){
        console.log("------------------------------");
        console.log("O jogador "+nomedesejado+ " não faz parte do nosso tine");
        console.log("------------------------------");
    }

}

while(contunuar === true){
    mostrarMenu();
    let opcao = prompt("Digite sua opção: ");

    if(opcao === "1"){
        cadastrarJogador();
    }
    else if(opcao === "2"){
        deletarJogador();
    }
    else if(opcao === "3"){
        mostarTime();
    }
    else if(opcao === "4"){
        cauculoDaMedia();
    }

    else if (opcao === "5"){
        buscarJogador();
    }
    else if(opcao === "6"){
        
        sairDoPrograma();
    }
    else{
        console.log("Opção Invalida!!");
    }
}