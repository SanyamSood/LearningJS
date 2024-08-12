const myBtn= document.getElementById("myBtn");
const Label1= document.getElementById("Label1");
const Label2= document.getElementById("Label2");
const Label3= document.getElementById("Label3");
const min=1;
const max=6;

let randomNum1,randomNum2,randomNum3;

myBtn.onclick = function(){
    randomNum1 = Math.floor(Math.random()*(max-min)) +min;
    Label1.textContent=randomNum1;
    randomNum2 = Math.floor(Math.random()*(max-min)) +min;
    Label2.textContent=randomNum2;
    randomNum3 = Math.floor(Math.random()*(max-min)) +min;
    Label3.textContent=randomNum3;
}