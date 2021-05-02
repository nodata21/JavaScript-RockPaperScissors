var input = document.getElementById("input");

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var well = document.getElementById("well");

var output = document.getElementById("output");
var ai = document.getElementById("ai");

var text = ''; var cpu = '';

const beats = {'rock' : ['scissors'], 'paper': ['rock'], 'scissors': ['paper'], 'well': ['rock', 'scissors'] };

const hand = ['rock', 'paper', 'scissors', 'well'];

function play() {
    
    cpu = Math.floor(Math.random() * 4);
    input.value = text = this.id;
    ai.textContent = hand[cpu]; 
    
    if ( Object.values(beats[text]).includes(hand[cpu]) ) {
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
well.addEventListener("click", play)