

const result = document.querySelector('.result')
const humanscore = document.querySelector('#human-score')
const machinescore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0



const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {

    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano:' + human + "Maquina:" + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate"
    }
    else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine == 'paper')) {

        humanScoreNumber++
        humanscore.innerHTML = humanScoreNumber

        result.innerHTML = "Você ganhou! &#127942;"
    }
    else {
        machineScoreNumber++
        machinescore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu! &#128514;"
    }
}

