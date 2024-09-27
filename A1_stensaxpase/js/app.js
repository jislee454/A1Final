// Initialize scores
let playerScore = 0;
let aiScore = 0;

// Function to play the game
function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const aiChoice = choices[Math.floor(Math.random() * 3)];

  // Display player and AI choices
  document.getElementById('playerRollText').innerText = `Player Choice: ${playerChoice}`;
  document.getElementById('aiRollText').innerText = `AI Choice: ${aiChoice}`;

  // Determine the result
  let result = '';
  if (playerChoice === aiChoice) {
    result = 'Draw';
  } else if (
    (playerChoice === 'rock' && aiChoice === 'scissors') ||
    (playerChoice === 'paper' && aiChoice === 'rock') ||
    (playerChoice === 'scissors' && aiChoice === 'paper')
  ) {
    result = 'Player Wins!';
    playerScore++;
  } else {
    result = 'AI Wins!';
    aiScore++;
  }

  // Display the result and scores
  document.getElementById('result').innerText = `Result: ${result}`;
  document.getElementById('playerScoreText').innerText = `Player Score: ${playerScore}`;
  document.getElementById('aiScoreText').innerText = `AI Score: ${aiScore}`;
}
