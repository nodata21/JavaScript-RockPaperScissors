var input = document.getElementById("input");

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var output = document.getElementById("output");
var ai = document.getElementById("ai");

var text = ''; var cpu = '';

const beats = [];
beats['rock'] = 'scissors';
beats['paper'] = 'rock';
beats['scissors'] = 'paper';

const hand = ['rock', 'paper', 'scissors'];



function play() {

    input.value = text = this.id;

    var results = new Array(3).fill(0);
    for(let i=0; i<1000; ++i) {
        ++results[Math.floor(Math.random()*3)];
    }
    cpu = results.indexOf(Math.min(...results));

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