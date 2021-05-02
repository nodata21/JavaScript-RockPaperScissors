var input = document.getElementById("input");

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var output = document.getElementById("output");
var ai = document.getElementById("ai");
var zahl = document.getElementById("zahl");

var text = ''; var cpu = '';

const beats = [];
beats['rock'] = 'scissors';
beats['paper'] = 'rock';
beats['scissors'] = 'paper';

const hand = ['rock', 'paper', 'scissors'];

function play() {
    
    cpu = Math.floor(Math.random() * 3);

    input.value = text = this.id;

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