//create a slot machine with 3 reels and 5 options
//Have a min and max amount you can bet using two buttons 


/* What is a slot machine?
- A slot machine is a machine you give money to 
- A slot machine is a funciton of your input (bet) to an output

## How does the slot machine work?
- Input  
    - Bet?
        - money 
        -a risk you engage in 
- Process
    -sets of values - "reels"
        -randomly shuffled, a value selected for each
    -shows result 
    -decision
        -win or lose 
        -how do you decide what you win?
            - if all selected values match
    - a decision 
- Output
    - Money
    - This could be positive or zero
    - On a win
        - you get back your win + some "winnings"
            - winnings depend on the option that was picked by all three reels 
    - On a lose
        - you lost your input
*/

/*Rules for a slot machine
INPUT 
    - Needs to be positive (input > 0)
    - Needs to have a min and max bet amount
    - Needs to be equaled to or smaller than current wallet 
        - Can't bet more money than you have 
PROCESS
    - reels need to randomize
    - should give us one of 5 options per reel
    - check if all reel values are the same  
        - if yes, multiply the input by the winning factor based on the selected option
            - winning factor is an amount of money you get on top of your input back
        - if no, you have no winnings 
            You lose your input amount and get back winnings 
OUTPUT
    - the amount returned from the process
-this loops back to the beginning!
*/


//STEP 1: name the input constraints 
// const minBet = 5
// const maxBet = 50
let balance = 1000
const symbols = ['💃🏽', '👻', '🦑', '🗻', '🪎']

let bigButton = document.getElementById('betMax')
let smallButton = document.getElementById('betMin')

document.querySelector('#balance').innerText = `Balance: ${balance}`


//STEP 2: create function for variables to show reel array value after spin 
function slotMachine (bet){
    
    console.log("working");

    if (balance > bet){ //if the bet amount is bigger than 0, the following can run
        balance -= bet //then the bet amount is subtracted from the balance
        const reel1=symbols[Math.floor(Math.random() * symbols.length)] 
        const reel2=symbols[Math.floor(Math.random() * symbols.length)]
        const reel3=symbols[Math.floor(Math.random() * symbols.length)]
        //to see values are generated
        console.log(reel1, reel2, reel3); 
        document.getElementById('reel1').innerText = reel1
        document.getElementById('reel2').innerText = reel2
        document.getElementById('reel3').innerText = reel3 
        //This is a conditional inside a conditional. If the previous one is met, this one runs.
        if (reel1===reel2 && reel2===reel3){
            console.log('WINNER WINNER');
            document.getElementById('message').innerText = 'WINNER, WINNER!'
            
            let winnings = bet * 10
            balance += winnings
            document.querySelector('#balance').innerText = `Balance: ${balance}`
           } else {
             console.log('SORRY YOU LOSE');
             balance = balance - bet;
             document.getElementById('message').innerText ="SORRY YOU LOSE!"
        }
    }else{
    console.log("Invalid bet", balance, bet)
    alert('You ran out of money! Reload the page to try again...')
    }
    document.querySelector("#balance").innerText= `Balance: ${balance}`
    
}

smallButton.addEventListener('click',() => slotMachine(5))
bigButton.addEventListener('click', function(){
    slotMachine(50);
})

/*
###For next time: Object-oreinted programming
--let every array item be an object that holds other values aka the mortal combat character and their stats
--get properties from each object 
 e.g: 
symbols[0].value = 5
symbols[1].value = 10

*/