var cell = document.getElementsByClassName("cell");
var reset = document.getElementById("reset");
var currentPlayer = "O";
var count = 0;
var winCombinations = [
    ["1", "2", "3"],
    ["1", "4", "7"],
    ["1", "5", "9"],
    ["2", "5", "8"],
    ["3", "5", "7"],
    ["3", "6", "9"],
    ["4", "5", "6"],
    ["7", "8", "9"]
];
var dataX = [];
var dataO = [];

/**
 * Активация (инициализация) игры
 */
function init() {
    for (var i = 0; i < cell.length; i++) {
        cell[i].addEventListener("click", handlePlayerStroke);
    }
    reset.addEventListener("click", function() {
        for (var i = 0; i < cell.length; i++) {
           cell[i].innerText = "";
       }
    })
}

/**
 * Обработка хода игрока
 */
function handlePlayerStroke() {
    var num = this.getAttribute("id");
    if (!this.textContent) {
        this.innerText = currentPlayer;
        if (currentPlayer === "X") {
            dataX.push(num);
        } 
        else {
            dataO.push(num);
        }
        if (playerHasWon()) {
            finishGame();
        }
        changePlayer();
        count++;
        if (count == 9) {
            alert("Игра закончена");
        }
    }
    
    /**
     * Проверка выигрыша игрока
     * @return {boolean} признак победы игрока
     */
    function playerHasWon() {
        return (dataX.length > 2 || dataO.length > 2) && (checkWin(dataO, num) || checkWin(dataX, num));
    }

    /**
     * Завершение игры
     */
    function finishGame() {
        for (var i = 0; i < cell.length; i++) {
            cell[i].removeEventListener("click", handlePlayerStroke);
        }
        alert("Победил игрок " + currentPlayer);
    }
}

/**
 * Смена хода пользователя с О на Х и наоборот
 */
function changePlayer() {
    if (currentPlayer === "O") {
        currentPlayer = "X";
    }
    else {
        currentPlayer = "O"
    }
}

/**
 * Проверка ходов пользователя на выигрышную комбинацию
 * 
 * @param {Array<string>} userCombinations массив ячеек, содержащий ходы игрока
 * @param {string} number идентификатор ячейки, по кот. кликнул игрок
 * @returns {boolean} признак выигрыша
 */
function checkWin(userCombinations, number) {
    for (var i = 0; i < winCombinations.length; i++) {
        var someWinArr = winCombinations[i];
        var count = 0;
        if (someWinArr.indexOf(number) !== -1) {
            for (var k = 0; k < someWinArr.length; k ++) {
                if (userCombinations.indexOf(someWinArr[k]) !== -1) {
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