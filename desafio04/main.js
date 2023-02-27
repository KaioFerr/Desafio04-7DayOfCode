//função
function adivinha(){
    while (i<3){
        const numeroDoUsuario = prompt("Escolha um número")
        const acertou = numeroDoUsuario == numeroSecreto
        if (acertou){
            alert(msgAcertou)
            i = 3
        }
        else{
            i += 1
            let tentativas = 3 - i
            console.log(tentativas)
            if(tentativas < 1){
                alert(msgNumeroInicial)
                break
            }
            alert(`Você errou e possui mais ${tentativas} tentativas`)
                }
    
    }
}

//constantes
const numeroSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0)

//auxiliar
let i = 0

//mensagens
const msgAcertou = "Você acertou!"
const msgNumeroInicial = `O número inicial é ${numeroSecreto}`

adivinha(numeroSecreto)
