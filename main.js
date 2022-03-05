let result = document.querySelector('#results')

const random = ['bulbasaur', 'charmander', 'squirtle'];

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
	} else if (playerSelection === 'bulbasaur' && computerSelection === 'squirtle' || playerSelection === 'charmander' && computerSelection === 'bulbasaur' || playerSelection === 'squirtle' && computerSelection === 'charmander'){
		playerScore++	
		return "You won this round"
	} else  if (computerSelection === 'bulbasaur' && playerSelection === 'squirtle' || computerSelection === 'charmander' && playerSelection === 'bulbasaur' || computerSelection === 'squirtle' && playerSelection === 'charmander') {
		computerScore++	
		return 'You lost this round'
	}
}

function updateGame() {
	result.textContent = `You chose ${playerSelection} - Computer chose ${computerSelection}`
	result.appendChild(document.createElement('p')).innerHTML = `${playRound()}`
	document.querySelector('#playerScore').textContent = `Player: ${playerScore}`
	document.querySelector('#computerScore').textContent = `Computer: ${computerScore}`
}

function game() {
	if(playerScore >= 5 ) {
		return "You won the battle!"
	} else if (computerScore >= 5) {
		return "Sorry, you have lost the battle"
	}
}

