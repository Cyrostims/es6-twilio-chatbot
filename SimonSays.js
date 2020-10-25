 const GameLevel = Object.freeze({
     WELCOMING: Symbol("welcoming"),
     LEVEL1: Symbol("level1"),
     LEVEL2: Symbol("level2"),
     LEVEL3: Symbol("level3"),
     LEVEL4: Symbol("level4"),
     LEVEL5: Symbol("level5"),
     LEVEL6: Symbol("level6"),
     LEVEL7: Symbol("level7"),
     LEVEL8: Symbol("level8"),
     LEVEL9: Symbol("level9"),
     LEVEL10: Symbol("level10"),
     ENDLEVEL: Symbol("endlevel"),
     YOULOSE: Symbol("youLose")
 });



 export default class Game {
     constructor() {
         this.nTurns = 0;
         this.winPlayer = false;
         this.winSimon = false;
         this.aNames = ["Simon", "Alex", "Tom", "Jenny"]; //array ends at 3
         this.isOver = false;
         this.sOld = "";
         this.levelCurrent = GameLevel.WELCOMING;
     }
     isDone() {
         if (this.nTurns == 10) {
             this.isOver = true;
         }
         return this.isOver;

     }
     prompt() {
         if (this.nTurns == 0) {
             this.nTurns++;
             return "Let's play a game of Simon Says. (Type NO if Simon didn't say so)";
         }
         return "";

     }
     choose() {
         const nComputer = Math.floor(Math.random() * this.aNames.length);
         return this.aNames[nComputer];
     }
     takeTurn(sAnswer) {
         let aReturn = [];
         const sComputer = this.choose();
         this.winPlayer = false;
         this.winSimon = false;

         switch (this.levelCurrent) {
             case GameLevel.WELCOMING:
                 aReturn.push(`Are you ready to start? (y / n)`);
                 this.levelCurrent = GameLevel.LEVEL1;
                 break;

             case GameLevel.LEVEL1:
                 if (sAnswer == "y") {
                     aReturn.push(`${sComputer} says type in the number zero`);
                     this.sOld = sComputer;
                     this.levelCurrent = GameLevel.LEVEL2;
                 } else {
                     this.levelCurrent = GameLevel.YOULOSE;
                 }
                 break;

             case GameLevel.LEVEL2:
                 if ((parseInt(sAnswer) == 0 && this.sOld == "Simon") || (sAnswer == "no" && this.sOld != "Simon")) {
                     aReturn.push(`You passed level 1. ${sComputer} says to add 1 + 1`);
                     this.sOld = sComputer;
                     this.levelCurrent = GameLevel.LEVEL3;
                 } else if ((parseInt(sAnswer) == 0 && this.sOld != "Simon") || parseInt(sAnswer) != 0) {
                     aReturn.push(`You failed, Simon didn't say so or you didn't enter the right response. (enter anything to continue)`);
                     this.levelCurrent = GameLevel.YOULOSE;
                 } else {
                     this.levelCurrent = GameLevel.YOULOSE;
                 }
                 break;

             case GameLevel.LEVEL3:
                 if ((parseInt(sAnswer) == 2 && this.sOld == "Simon") || (sAnswer == "no" && this.sOld != "Simon")) {
                     aReturn.push(`You passed level 2. ${sComputer} says to spell Canada backwards.`);
                     this.sOld = sComputer;
                     this.levelCurrent = GameLevel.LEVEL4;
                 } else if ((parseInt(sAnswer) == 2 && this.sOld != "Simon") || parseInt(sAnswer) != 2) {
                     aReturn.push(`You failed, Simon didn't say so or you didn't enter the right response. (enter anything to continue)`);
                     this.levelCurrent = GameLevel.YOULOSE;
                 } else {
                     this.levelCurrent = GameLevel.YOULOSE;
                 }
                 break;

             case GameLevel.LEVEL4:
                 if ((sAnswer == "adanac" && this.sOld == "Simon") || (sAnswer == "no" && this.sOld != "Simon")) {
                     aReturn.push(`You passed level 3. ${sComputer} says to is 10 bigger than -10 (y / n).`);
                     this.sOld = sComputer;
                     this.levelCurrent = GameLevel.LEVEL5;
                 } else if ((sAnswer == "adanac" && this.sOld != "Simon") || (sAnswer != "adanac")) {
                     aReturn.push(`You failed, Simon didn't say so or you didn't enter the right response. (enter anything to continue)`);
                     this.levelCurrent = GameLevel.YOULOSE;
                 } else {
                     this.levelCurrent = GameLevel.YOULOSE;
                 }
                 break;

             case GameLevel.LEVEL5:
                 if ((sAnswer == "y" && this.sOld == "Simon") || (sAnswer == "no" && this.sOld != "Simon")) {
                     aReturn.push(`You passed level 4. ${sComputer} says what is the answer to (0x3)+3`);
                     this.sOld = sComputer;
                     this.levelCurrent = GameLevel.LEVEL6;
                 } else if ((sAnswer == "y" && this.sOld != "Simon") || (sAnswer != "y")) {
                     aReturn.push(`You failed, Simon didn't say so or you didn't enter the right response. (enter anything to continue)`);
                     this.levelCurrent = GameLevel.YOULOSE;
                 } else {
                     this.levelCurrent = GameLevel.YOULOSE;
                 }
                 break;

             case GameLevel.LEVEL6:
                 if ((parseInt(sAnswer) == 3 && this.sOld == "Simon") || (sAnswer == "no" && this.sOld != "Simon")) {
                     aReturn.push(`You passed level 5. ${sComputer} says name the capital of Ontario.`);
                     this.sOld = sComputer;
                     this.levelCurrent = GameLevel.LEVEL7;
                 } else if ((parseInt(sAnswer) == 3 && this.sOld != "Simon") || (parseInt(sAnswer) != 3)) {
                     aReturn.push(`You failed, Simon didn't say so or you didn't enter the right response. (enter anything to continue)`);
                     this.levelCurrent = GameLevel.YOULOSE;
                 } else {
                     this.levelCurrent = GameLevel.YOULOSE;
                 }
                 break;

             case GameLevel.LEVEL7:
                 if ((sAnswer == "toronto" && this.sOld == "Simon") || (sAnswer == "no" && this.sOld != "Simon")) {
                     aReturn.push(`You passed level 6. ${sComputer} says to enter what the opposite colour of black is.`);
                     this.sOld = sComputer;
                     this.levelCurrent = GameLevel.LEVEL8;
                 } else if ((sAnswer == "toronto" && this.sOld != "Simon") || (sAnswer != "toronto")) {
                     aReturn.push(`You failed, Simon didn't say so or you didn't enter the right response. (enter anything to continue)`);
                     this.levelCurrent = GameLevel.YOULOSE;
                 } else {
                     this.levelCurrent = GameLevel.YOULOSE;
                 }
                 break;

             case GameLevel.LEVEL8:
                 if ((sAnswer == "white" && this.sOld == "Simon") || (sAnswer == "no" && this.sOld != "Simon")) {
                     aReturn.push(`You passed level 7. ${sComputer} says say hi.`);
                     this.sOld = sComputer;
                     this.levelCurrent = GameLevel.LEVEL9;
                 } else if ((sAnswer == "white" && this.sOld != "Simon") || (sAnswer != "white")) {
                     aReturn.push(`You failed, Simon didn't say so or you didn't enter the right response. (enter anything to continue)`);
                     this.levelCurrent = GameLevel.YOULOSE;
                 } else {
                     this.levelCurrent = GameLevel.YOULOSE;
                 }
                 break;

             case GameLevel.LEVEL9:
                 if ((sAnswer == "hi" && this.sOld == "Simon") || (sAnswer == "no" && this.sOld != "Simon")) {
                     aReturn.push(`You passed level 8. ${sComputer} says what is the answer to 1+1-2x0.`);
                     this.sOld = sComputer;
                     this.levelCurrent = GameLevel.LEVEL10;
                 } else if ((sAnswer == "hi" && this.sOld != "Simon") || (sAnswer != "hi")) {
                     aReturn.push(`You failed, Simon didn't say so or you didn't enter the right response. (enter anything to continue)`);
                     this.levelCurrent = GameLevel.YOULOSE;
                 } else {
                     this.levelCurrent = GameLevel.YOULOSE;
                 }
                 break;

             case GameLevel.LEVEL10:
                 if ((parseInt(sAnswer) == 2 && this.sOld == "Simon") || (sAnswer == "no" && this.sOld != "Simon")) {
                     aReturn.push(`You passed level 9. This is the final level. ${sComputer} says you will give this student 100% (y / n).`);
                     this.sOld = sComputer;
                     this.levelCurrent = GameLevel.ENDLEVEL;
                 } else if ((parseInt(sAnswer) == 2 && this.sOld != "Simon") || (parseInt(sAnswer) != 2)) {
                     aReturn.push(`You failed, Simon didn't say so or you didn't enter the right response. (enter anything to continue)`);
                     this.levelCurrent = GameLevel.YOULOSE;
                 } else {
                     this.levelCurrent = GameLevel.YOULOSE;
                 }
                 break;

             case GameLevel.ENDLEVEL:
                 if ((sAnswer.toLowerCase().match("y") && this.sOld == "Simon") || (sAnswer == "no" && this.sOld != "Simon")) {
                     aReturn.push(`You passed level 10.`);
                     this.winPlayer = true;
                 } else if ((sAnswer.toLowerCase().match("y") && this.sOld != "Simon") || (sAnswer != "y")) {
                     aReturn.push(`You failed, Simon didn't say so or you didn't enter the right response. (enter anything to continue)`);
                     this.levelCurrent = GameLevel.YOULOSE;
                 } else {
                     this.levelCurrent = GameLevel.YOULOSE;
                 }
                 break;

             case GameLevel.YOULOSE:
                 this.winSimon = true;
                 break;
         }

         if (this.winPlayer == true) {
             aReturn.push(`You have outwitted Simon. (enter anything to continue)`);
             this.nTurns = 10;
         } else if (this.winSimon == true) {
             aReturn.push(`You have been bested by Simon. (enter anything to continue)`)
             this.nTurns = 10;
         }
         return aReturn;
     }
 }