// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cname) == 0) {
      return cookie.substring(cname.length, cookie.length);
    }
  }
  return "";
}

// Initialize player and AI scores from cookies if they exist
let playerScore = parseInt(getCookie("playerScore")) || 0;
let aiScore = parseInt(getCookie("aiScore")) || 0;

// Display initial scores
document.getElementById("playerScoreText").innerText = `Player Score: ${playerScore}`;
document.getElementById("aiScoreText").innerText = `AI Score: ${aiScore}`;

// Function
function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const aiChoice = choices[Math.floor(Math.random() * choices.length)];

  // Update choices on screen
  document.getElementById("playerRollText").innerText = `Player Choice: ${playerChoice}`;
  document.getElementById("aiRollText").innerText = `AI Choice: ${aiChoice}`;

  // Result
  let result = "";
  if (playerChoice === aiChoice) {
    result = "It's a draw!";
  } else if (
    (playerChoice === "rock" && aiChoice === "scissors") ||
    (playerChoice === "paper" && aiChoice === "rock") ||
    (playerChoice === "scissors" && aiChoice === "paper")
  ) {
    result = "You win!";
    playerScore++;
  } else {
    result = "AI wins!";
    aiScore++;
  }

  // Update the result on screen
  document.getElementById("result").innerText = `Result: ${result}`;

  // Update scores on screen
  document.getElementById("playerScoreText").innerText = `Player Score: ${playerScore}`;
  document.getElementById("aiScoreText").innerText = `AI Score: ${aiScore}`;

  // Set cookies to store the updated scores
  setCookie("playerScore", playerScore, 7);
  setCookie("aiScore", aiScore, 7);
}
