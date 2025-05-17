let playerName;
let secretNumber;
let attempts = 0;
let startTime;
let timerInterval;

function startGame() {
    playerName = document.getElementById("player-name").value;
    if (!playerName) {
        alert("Please enter your name");
        return;
    }
    function restrictInput(playerName) {
        playerName.value = playerName.value.replace(/[^a-zA-Z\s]/g, ""); 
    }
    

    
    secretNumber = generateUniqueNumber();
    attempts = 0;

    alert(`Welcome, ${playerName}! Let's start .`);

    
    document.getElementById("name-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";

    
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function generateUniqueNumber() {
    let digits = [];
    while (digits.length < 4) {
        let digit = Math.floor(Math.random() * 10);
        if (!digits.includes(digit)) {
            digits.push(digit);
        }
    }
    return digits.join("");
}

function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timer").textContent = `Time: ${elapsedTime} seconds`;
    if (elapsedTime >= 120) {
        clearInterval(timerInterval);
        alert("Time's up! You lost.");
        resetGame();
    }
    }

function submitGuess() {
    const playerGuess = document.getElementById("player-guess").value;
    if (playerGuess.length !== 4 || isNaN(playerGuess)) {
    
        alert("Please enter a 4-digit number.");
        return;
    }
    // if(hasDuplicateGuess(playerGuess)) {
    //     alert("dont enter Duplicate digits")
    //     return
    // }
    if(hasMorethenTwo(playerGuess)){
        alert("dont enter more than two same digits")
        return
    }
    function hasDuplicateGuess(Number) {
        const digitSet=new Set(Number);
        return digitSet.size !==Number.length;
    }
    function hasMorethenTwo(Number){
        const digitcounts={};
        for(let digit of Number){
            digitcounts[digit]=(digitcounts[digit] || 0)+1;
            if(digitcounts[digit]>2){
                return true;
            }
            
        }
        return false;
    }
    


    attempts++;
    document.getElementById("attempts").textContent = attempts;

    const feedback = getFeedback(playerGuess);
    document.getElementById("feedback").textContent = feedback;

    alert(`Your guess: ${playerGuess} \nFeedback: ${feedback}`);

    if (feedback === "++++") {
        clearInterval(timerInterval);
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        alert(`Congratulations ${playerName}! You guessed the number.`);
        saveScore(playerName, attempts, elapsedTime);
        resetGame();
    } else {
        alert("Keep trying!.");
    }
}

function getFeedback(guess) {
    let plus = 0;
    let minus = 0;

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secretNumber[i]) {
            plus++;
        } else if (secretNumber.includes(guess[i])) {
            minus++;
        }
        
    }

    return "+".repeat(plus) + "-".repeat(minus);
}

function saveScore(name, attempts, time) {
    const bestScore = localStorage.getItem("bestScore");

    const newScore = { name, attempts, time };
    if (!bestScore || isBetterScore(JSON.parse(bestScore), newScore)) {
        localStorage.setItem("bestScore", JSON.stringify(newScore));
        alert(`New Best Score! ${name} achieved it in ${attempts} attempts and ${time} seconds.`);
    }

    displayBestScore();
}

function isBetterScore(oldScore, newScore) {
    const oldFactor = oldScore.attempts * oldScore.time;
    const newFactor = newScore.attempts * newScore.time;
    return newFactor < oldFactor;
}

function displayBestScore() {
    const bestScore = JSON.parse(localStorage.getItem("bestScore"));
    if (bestScore) {
        document.getElementById("best-score").textContent = `Name: ${bestScore.name}, Attempts: ${bestScore.attempts}, Time: ${bestScore.time} seconds`;
    }
}

function resetGame() {
    alert("The game has been reset. You can start a new game now!");
    document.getElementById("name-container").style.display = "block";
    document.getElementById("game-container").style.display = "none";
    document.getElementById("player-name").value = "";
    document.getElementById("player-guess").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("attempts").textContent = "0";
    document.getElementById("timer").textContent = "Time: 0 seconds";
}

function reloadPage() {
    if (confirm("Are you sure you want to start new game?")) {
        location.reload();
    }
}

displayBestScore();
