const mini=1;
const maxi=100;

let num = Math.floor(Math.random()*(maxi-mini)+1) +mini;

let attempts=0;
let guess;
let running =true;


while(running){
    guess = window.prompt(`Guess a number between ${mini} - ${maxi}`);
    guess= Number(guess);
    console.log(typeof guess, guess);

    if(isNaN(guess)){
        window.alert("please Enter a valid number");
    }
    else if(guess<mini || guess>=maxi){
        window.alert("please Enter a valid number");
    }
    else{
        attempts++;
        if(guess<num){
            window.alert("too low, Try again");
        }
        else if(guess>num){
            window.alert("too high, Try again");
        }
        else{
            window.alert(`Correct, The number was ${num}. You guessed in ${attempts} guesses`);
            running = false;
        }
    }
    
}