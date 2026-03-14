// Os Jogadores são dividos em nome, número de vitórias e número de derrotas
let resultado = partidasRankeadas("Felipão", 25000, 3)

function partidasRankeadas(nomeDoHeroi, vitorias, derrotas){    
    let saldoDeVitorias = vitorias - derrotas
    let nivel
        if (saldoDeVitorias <= 10){
            nivel = "Ferro"
        } else if (saldoDeVitorias <= 20){
            nivel = "Bronze"
        } else if (saldoDeVitorias <= 50){
            nivel = "Prata"
        } else if (saldoDeVitorias <= 80){
            nivel = "Ouro"
        } else if (saldoDeVitorias <= 90){
            nivel = "Diamante"
        } else if (saldoDeVitorias <= 100){
            nivel = "Lendário"
        } else {
            nivel = "Imortal"
        } 
    return [saldoDeVitorias, nivel]
}

console.log(`O Herói tem saldo de vitórias de ${resultado[0]} e está no nível de ${resultado[1]}.`)