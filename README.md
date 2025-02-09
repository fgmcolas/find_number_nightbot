# Find Number Nightbot API

This project is a simple API that works with Nightbot to play a number-guessing game. Users guess a number, and the API responds with hints until the correct number is found.

## Features
- Generates a random number between 1 and 100.
- Responds with "Higher!" or "Lower!" if the guess is incorrect.
- When the correct number is found, the API resets with a new number.
- Designed to integrate with Nightbot.

## Installation

```sh
git clone https://github.com/fgmcolas/find_number_nightbot.git
cd find_number_nightbot
npm install
```

## Running the API

```sh
npm start
```
The server will start on port `3000` or the value of `process.env.PORT` if set.

## API Endpoints

### `GET /`
Returns a simple message indicating the API is online.

### `GET /jeu?nombre={your_guess}`
- If the guess is correct, returns `"Trouvé ! Le nombre a été changé."`
- If the guess is too low, returns `"Plus grand !"`
- If the guess is too high, returns `"Plus petit !"`
- If the input is invalid, returns `"Donne un nombre valide !"`

## Deployment
The API is deployed on Render at:
[https://find-number-nightbot.onrender.com/](https://find-number-nightbot.onrender.com/)

## Using with Nightbot
To integrate this API with Nightbot, create a custom command with the following format:
```sh
!addcom !find $(urlfetch https://find-number-nightbot.onrender.com/jeu?nombre=$(query))
```
This will allow users to play the game by typing `!find <number>` in chat.

