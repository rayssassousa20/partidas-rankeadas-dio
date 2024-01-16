let saldoDeVitorias = victoryRank(110, 5)
let userLevel

if(saldoDeVitorias <= 10){
    userLevel = "Ferro"
} else if ((saldoDeVitorias >= 11)&& (saldoDeVitorias <= 20)){
    userLevel = "Bronze"
} else if ((saldoDeVitorias >= 21)&&(saldoDeVitorias <= 50)){
    userLevel ="Prata"
} else if ((saldoDeVitorias >= 51)&&(saldoDeVitorias <= 80)){
    userLevel = "Ouro"
} else if ((saldoDeVitorias >= 81)&&(saldoDeVitorias <= 90)){
    userLevel = "Diamante"
} else if ((saldoDeVitorias >= 91)&& (saldoDeVitorias <= 100)){
    userLevel = "Lendário"
} else {
    userLevel ="Imortal"
}


console.log("O Herói tem saldo de " + saldoDeVitorias + " e está no nível de " + userLevel)


function victoryRank(victories, losses){
    let victoryCalculator = victories - losses
    return victoryCalculator
}
