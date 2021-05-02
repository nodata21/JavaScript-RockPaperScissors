var input = document.getElementById("input");

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var output = document.getElementById("output");
var ai = document.getElementById("ai");

var text = '';

const beats = [];
beats['rock'] = 'scissors';
beats['paper'] = 'rock';
beats['scissors'] = 'paper';

const hand = ['rock', 'paper', 'scissors'];

function play() {

    input.value = text = this.id;
    //input.value = text;
    
    z = Math.floor(Math.random() * (10 - 1));
    if (z <= 3) {
        z = 0;
    }
    else if ( z >= 3 && z <= 6) {
        z = 1;
    }
    else if ( z > 6 ) {
        z = 2;
    }
    cpu = z;

    zahl.textContent = cpu;
    ai.textContent = hand[cpu];
    
    if (hand[cpu] == beats[text]) {
        output.textContent = 'Won!';
    }
    else if (hand[cpu] == text)
    {
        output.textContent = "Draw!";
    }
    else { 
        output.textContent = "Lose!";
    }
}

rock.addEventListener("click", play)
paper.addEventListener("click", play)
scissors.addEventListener("click", play)