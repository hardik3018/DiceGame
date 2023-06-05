
//here
 

const dice1 = document.querySelectorAll('.dice')[0];
const dice2 = document.querySelectorAll('.dice')[1];
const rollBtn = document.querySelector('.roll');

const audio = new Audio("assests/clackity.mp3");


const randomDice = () => {

    audio.play();

    const random = Math.floor(Math.random() * 6) + 1;
    rollDice(random,dice1);
    

    const random2 = Math.floor(Math.random() * 6) + 1;  
    rollDice(random2,dice2);
    
    winner(random,random2);
}

const rollDice = (random,dice) => {

    dice.style.animation = 'rolling 2s';

    setTimeout(() => {

        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;
        }

        dice.style.animation = 'none';

    }, 2050);

}


const winner = (random,random2) =>{
  if (random > random2) {
   
    setTimeout(() => { document.querySelector("h1").innerHTML = "Player 1 Wins!"; }, 2000);
    
  } else if (random2 > random) {
    
    setTimeout(() => { document.querySelector("h1").innerHTML = "Player 2 Wins!"; }, 2000);
  } else {
    
    setTimeout(() => { document.querySelector("h1").innerHTML = "DRAW!"; }, 4000);
  }
  
  setTimeout(() => { document.querySelector("h1").innerHTML = "Roll the Dice"; }, 4000);
}


    



rollBtn.addEventListener('click', randomDice);