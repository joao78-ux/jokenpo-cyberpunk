
const result = document.querySelector("#resultp")
const scoreHuman = document.querySelector('#score-human')
const scoreMachine = document.querySelector('#score-machine')
const painel = document.querySelector('section')

let pointHuman = 0
let pointMachine = 0

const restart = () => {
    scoreMachine.innerHTML = 0
    scoreHuman.innerHTML = 0
    pointHuman = 0
    pointMachine = 0
    return
}
const comparison = (human) => {

    TheVerdict(human, chosedoJavi())
    scoreboard()
}

const chosedoJavi = () => {

    const choice = ['rock', 'paper', 'scissors']
    const options = Math.floor(Math.random() * 3)

    return choice[options]
}

const TheVerdict = (human, machine) => {

    if ((human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper') ||
        (human === 'paper' && machine === 'rock')
    ) {
        result.innerHTML = "Voçê ganhou &#127894;"
        result.style.color = "#00ff88";
        result.style.animation = "glowGreew 1s infinite alternate";
        pointHuman++
        scoreHuman.innerHTML = pointHuman
        painel.style.animation = 'win 0.5s linear';
        setTimeout(() => {
            painel.style.animation = '';
        }, 500);
    }
    else if (human === machine) {
        result.innerHTML = "Deu empate !!&#128483;"
        result.style.color = "#f1c40f"
        result.style.animation = "pulseYellow 2s infinite";
    }
    else {
        result.innerHTML = "Voçê perdeu !!&#9760;"
        result.style.color = "#ff0055"
        result.style.animation = "flickerRed 1.5s infinite";
        pointMachine++
        scoreMachine.innerHTML = pointMachine
        painel.style.animation = 'shake 0.5s linear';
        setTimeout(() => {
            painel.style.animation = '';
        }, 500);
    }

}
const scoreboard = () => {
    if (pointHuman === 5) {
        result.innerHTML = ` Vitória! `
        result.style.color = "#00ff88";
        result.style.animation = "glowGreew 1s infinite alternate";
        painel.style.animation = 'win 0.5s linear';
        setTimeout(() => {
            painel.style.animation = '';
        }, 500);
        restart()
    } else if (pointMachine === 5) {
        result.innerHTML = "Game Over!"
        result.style.color = "#ff0055"
        result.style.animation = "flickerRed 1.5s infinite";
        painel.style.animation = 'shake 0.5s linear';
        setTimeout(() => {
            painel.style.animation = '';
        }, 500);
        restart()
    }

}









