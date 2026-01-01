// JavaScript for RCB Fan Website
// Created for ShadowFox Internship Task

// JavaScript for RCB Fan Website
// Fan interaction logic

let votes = {
    "Virat Kohli": 0,
    "Faf du Plessis": 0,
    "Tim David": 0,
    "Phil Salt": 0,
    "Krunal Pandya": 0,
    "Josh Hazlewood": 0,
    "Glenn Maxwell": 0
};

function vote() {
    alert("Thanks for supporting RCB! Your support matters ❤️");
}

function poll(player) {
    votes[player]++;

    document.getElementById("result").innerText =
        player + " now has " + votes[player] + " fan vote(s).";
}