var cell = document.getElementsByClassName("cell");
//var reset = document.getElementById("reset");
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
    //reset.addEventListener("click", function() {
    //    for (var i = 0; i < cell.length; i++) {
    //        cell[i].innerText = "";
    //    }
    //})
}
function currentStep() {
    var num = this.getAttribute("id");
    if (!this.textContent) {
        this.innerText = user;
        if (user === "X") {
            dataX.push(num);
        } 
        else {
            dataO.push(num);
        }
        if ((dataX.length > 2 || dataO.length > 2) && (checkWin(dataO, num) || checkWin(dataX.num))) {
            for (var i = 0; i < cell.length; i++) {
                cell[i].removeEventListener("click", currentStep);
            }
            alert("Победил игрок " + user);
        }
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
function checkWin(arr,number) {
    for (var i = 0; i < winCombinations.length; i++) {
        var someWinArr = winCombinations[i];
        var count = 0;
        if (someWinArr.indexOf(number) !== -1) {
            for (var k = 0; k < someWinArr.length; k ++) {
                if (arr.indexOf(someWinArr[k]) !== -1) {
                    count++;
                    if (count === 3) {
                        return true;
                    }
                }
            }
            count = 0;
        }
    }
}
window.onload = init;