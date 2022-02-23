// Randomly return rock, paper, scissors
const random = ['rock', 'paper', 'scissors'];
let playerScore = 0
let computerScore = 0

function game() {
	for (let i = 0; i <= 5; i++){
	   playRound()
	   console.log(playerScore, computerScore)
	   if(playerScore === 5) {
		   return "You have won the game!"
	   } else if (computerScore === 5) {
		   return "You have lost the game."
	   } 
   }
}

function computerPlay() {	
	return random[Math.floor(Math.random() * random.length)];
}

function playerPlay() {	
	// Prompt the player to choose rock, paper, or scissors
	const input =  () => prompt('Select rock, paper, or scissors!').toLowerCase();
	return input()
}

function playRound() {
	const playerSelection = playerPlay()
	const computerSelection = computerPlay()

	if(playerSelection === computerSelection ){
		return "It's a Tie!"
	} else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
		playerScore++
		return "You have won! :)"
	} else  {
		computerScore++
		return 'Sorry, you lose :('
	}
 }

game()

console.log(playerScore, computerScore)
console.log(game())
