var cell = document.getElementsByClassName("cell");
var reset = document.getElementById("reset");
var user = "O";
var comp = "X";
var count = 0;
var winCombinations = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9]
]
var dataX = [];
var dataO = [];

function init() {
    for (var i = 0; i < cell.length; i++) {
        cell[i].addEventListener("click", currentStep);
    }
    reset.addEventListener("click", function() {
        for (var i = 0; i < cell.length; i++) {
            cell[i].innerText = "";
        }
    })
}
function currentStep() {
    var num = this.getAttribute("id");
    if (!this.textContent) {
        this.innerText = user;
        changePlayer();
        count++;
        if (count == 9) {
            alert("Игра закончена");
        }
    }
}
function changePlayer() {
    if (user === "O") {
        user = "X";
    }
    else {user = "O"};
}

window.onload = init;