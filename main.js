let result = document.querySelector('#results')

const random = ['rock', 'paper', 'scissors'];

let playerScore = 0
let computerScore = 0

let playerSelection
let computerSelection

const btns = document.querySelectorAll('button')
Array.from(btns).forEach(btn => btn.addEventListener('click', (e) => {
	playerSelection = btn.id
	computerSelection = computerPlay()
	updateGame()
	if(playerScore >= 5 || computerScore >= 5){
		result.remove()
		document.querySelector('#container').appendChild(document.createElement('h3')).innerHTML = `${game()}`
		btns.forEach(button => {
			button.disabled = true
		}) 
	}
	
}))

function computerPlay() {	
	// Randomly return rock, paper, scissors
	return random[Math.floor(Math.random() * random.length)];
}

const playRound = () => {
	
	if(playerSelection === computerSelection ){	
		return "It's a Tie!"
	} else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
		playerScore++	
		return "You have won! :)"
	} else  if (computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'scissors' && playerSelection === 'paper') {
		computerScore++	
		return 'Sorry, you lose :('
	}
}

function updateGame() {
	result.textContent = `Player has chosen ${playerSelection} || Computer has chosen ${computerSelection}`
	result.appendChild(document.createElement('p')).innerHTML = `${playRound()}`
	document.querySelector('#playerScore').textContent = `Player: ${playerScore}`
	document.querySelector('#computerScore').textContent = `Computer: ${computerScore}`
}

function game() {
	if(playerScore >= 5 ) {
		return "You are the Winner!"
	} else if (computerScore >= 5) {
		return "Sorry, you have lost the game!"
	}
}

