# 🎯 Guess the Number Game

A simple and interactive web-based game where users try to guess a randomly generated 4-digit number. Built with **HTML**, **CSS**, and **JavaScript**, this game features user validation, timer tracking, and a leaderboard based on performance.

## 🚀 Features

- 🎮 User-friendly interface with name input
- 🔢 Randomly generated 4-digit number with **no digit repeating more than twice**
- 🧠 Feedback system using "+" and "-" symbols
- ⏱ Timer and attempt counter
- 🥇 Local leaderboard using `localStorage`
- 📛 Input validation to restrict:
  - Non-numeric characters
  - More than two occurrences of any digit
- 🔄 Reload button for restarting the game


## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript 
- LocalStorage API

## 📂 Project Structure

guess-the-number-game/

│
├── index.html # Main game HTML

├── style.css # Styling

├── index.js # Game logic

└── README.md # Documentation



## 📋 How to Play

1. Enter your name and click **Start New Game**.
2. A random 4-digit number is generated (digits can repeat, but no more than twice).
3. Enter your guess:
   - `+` indicates correct digit in the correct position.
   - `-` indicates correct digit in the wrong position.
4. Try to guess the number in as few attempts and time as possible.
5. The leaderboard updates if you beat the previous best score!

## ⚠ Input Rules

- Only 4-digit numeric inputs are allowed.
- No digit may appear more than **two times**.
- No letters or special characters are permitted.
