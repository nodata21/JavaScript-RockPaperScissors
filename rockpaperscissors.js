var input = document.getElementById("input");

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var well = document.getElementById("well");

var output = document.getElementById("output"); var put = document.getElementById("put");

var text = ''; var cpu = '';

const beats = {'rock' : ['scissors'], 'paper': ['rock'], 'scissors': ['paper'], 'well': ['rock', 'scissors'] };

const hand = ['rock', 'paper', 'scissors', 'well'];

function play() {
    
    cpu = Math.floor(Math.random() * 4);
    input.value = text = this.id;
    
    if ( beats[text].includes(hand[cpu]) ) {
        output.childNodes[0].textContent = "Cpu plays "+ hand[cpu] + ", you play "+ text + ",";
        output.childNodes[1].textContent = " you Won!";
        document.getElementById("put").style.color = "Green";
    }
    else if (hand[cpu] == text)
    {
        output.childNodes[0].textContent = "Cpu plays "+ hand[cpu] + ", you play "+ text + ",";
        output.childNodes[1].textContent = " it's a Draw!";
        document.getElementById("put").style.color = "Blue";
    }
    else { 
        output.childNodes[0].textContent = "Cpu plays "+ hand[cpu] + ", you play "+ text + ",";
        output.childNodes[1].textContent = " you Lose!";
        document.getElementById("put").style.color = "Red";
    }
}

rock.addEventListener("click", play)
paper.addEventListener("click", play)
scissors.addEventListener("click", play)
well.addEventListener("click", play)