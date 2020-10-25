class Game {
    constructor() {
        this.nPlayerWins = 0;
        this.nComputerWins = 0;
        this.aRps = ["rock", "paper", "scissors"];
        this.isOver = false;
    }
    isDone() {
        if ((this.nPlayerWins > 1) || (this.nComputerWins > 1)) {
            this.isOver = true;
        }
        return this.isOver;

    }
    prompt() {
        return "rock, paper, or scissors (best of 3).";
    }
    choose() {
        const nComputer = Math.floor(Math.random() * this.aRps.length);
        return this.aRps[nComputer];
    }
    takeTurn(sAnswer) {
        let aReturn = [];
        this.nComputer = Math.floor(Math.random() * this.aRps.length);
        const sComputer = this.choose();

        if (!this.aRps.includes(sAnswer)) {
            aReturn.push("Please choose from rock paper or scissors.");
        } else if (sAnswer == sComputer) {
            aReturn.push(`We tied with ${sAnswer}.`);
        } else if ((sAnswer == "rock" && sComputer == "scissors") ||
            (sAnswer == "paper" && sComputer == "rock") ||
            (sAnswer == "scissors" && sComputer == "paper")) {
            aReturn.push(`Player wins with ${sAnswer} beating ${sComputer}.`);
            this.nPlayerWins++;
        } else if ((sComputer == "rock" && sAnswer == "scissors") ||
            (sComputer == "paper" && sAnswer == "rock") ||
            (sComputer == "scissor" && sAnswer == "paper")) {
            aReturn.push(`Computer wins with ${sComputer} beating ${sAnswer}.`);
            this.nComputerWins++;
        }
        if (this.nPlayerWins == 2) {
            aReturn.push(`Player wins the best of 3 match.`);
        } else if (this.nComputerWins == 2) {
            aReturn.push(`Computer wins the best of 3 match.`);
        }

        return aReturn;
    }
}

export { Game };