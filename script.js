let playerScore = 0;
let cpuScore = 0;
let round = 0;
const maxRounds = 3;

function play(playerChoice) {
  if (round >= maxRounds) return; 


  const choices = ["piedra", "papel", "tijera"];
  const cpuChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === cpuChoice) {
    result = "Empate!";
  } else if (
    (playerChoice === "piedra" && cpuChoice === "tijera") ||
    (playerChoice === "papel" && cpuChoice === "piedra") ||
    (playerChoice === "tijera" && cpuChoice === "papel")
  ) {
    result = "Ganaste esta ronda 🎉";
    playerScore++;
  } else {
    result = "Perdiste esta ronda ";
    cpuScore++;
  }

  round++;

  // actualizar marcador
  document.getElementById("player-score").textContent = "Jugador: " + playerScore;
  document.getElementById("cpu-score").textContent = "CPU: " + cpuScore;

  // mostrar resultado de la ronda
  document.getElementById("round-result").textContent =
    `Ronda ${round}: Tú elegiste ${playerChoice}, CPU eligió ${cpuChoice} → ${result}`;

  //historial
  const li = document.createElement("li");
  li.textContent = `Ronda ${round}: Jugador (${playerChoice}) vs CPU (${cpuChoice}) → ${result}`;
  document.getElementById("history-list").appendChild(li);

  // máximo de rondas
  if (round === maxRounds) {
    let finalMsg = "";
    if (playerScore > cpuScore) {
      finalMsg = "🎉 ¡Ganaste la partida!";
    } else if (cpuScore > playerScore) {
      finalMsg = " Perdiste la partida.";
    } else {
      finalMsg = " La partida terminó en empate.";
    }
    document.getElementById("final-result").textContent = finalMsg;
  }
}

function resetGame() {
  playerScore = 0;
  cpuScore = 0;
  round = 0;

  document.getElementById("player-score").textContent = "Jugador: 0";
  document.getElementById("cpu-score").textContent = "CPU: 0";
  document.getElementById("round-result").textContent = "Elige una opción...";
  document.getElementById("final-result").textContent = "";
  document.getElementById("history-list").innerHTML = "";
}


