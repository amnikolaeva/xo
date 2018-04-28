

var view = {
    displayStroke: function() {
        document.getElementById("board").onclick = function(event) {
            console.log(event);
        }
    }
}
var model = {
    cellsSize: 9,
    cells: [
        [ , , ],
        [ , , ],
        [ , , ]
    ],
    player: "X",
    count: 0,
    acceptStroke: function(numCell) {
        //var combinations = [["00", "01", "02"], ["10", "11", "12"], ["20", "21", "22"]];
        //for (var i = 0; i < this.cells.length; i++) {
        //    var j = this.cells[i].indexOf(numCell);
        //    if (j >= 0) {
        //        var i = [i, j];
        //        var index = i.join("");
        //        return index;
        //    }
        //} 
        var i = numCell.charAt(0);
        var j = numCell.charAt(1);
        if (!this.cells[i][j].textContent) {
            this.cells[i][j] = this.player;
        }
        changePlayer();
        this.count++;
        if (this.count == 9) {
            alert("Игра закончена");
        }
    },  
    changePlayer: function() {
        if (this.player === "X") {
            this.player = "O";
        }
        else (this.player = "X");
    },
    fire: function(stroke) {
    },
    countHorizontalMatches: function() {
        for (var i = 0; i < cells.length; i++) {
            var count = 0;
            var j = 0;
            if (this.cells[j][i] == "O") {
                count++;
            } 
            else if (this.cells[j][i] == "X") {
                return count;
            }  
            j++;
        }
    },
    countVerticalMatches: function() {
        for (var i = 0; i < cells.length; i++) {
            var count = 0;
            var j = 0;
            if (this.cells[i][j] == "O") {
                count++;
            } 
            else if (this.cells[i][j] == "X") {
                return count;
            }
            j++;
        }
    },
    countDiagonalMatch1: function() {
        for (var i = 0, j = 0; i < cells.length, j < cells.length; i++, j++) {
            var count = 0;
            if (this.cells[i][j] == "O") {
                count++;
            } 
            else if (this.cells[i][j] == "X") {
                return count;
            }
        }
    },
    countDiagonalMatch2: function() {
        for (var i = 0, j = 2; i < cells.length, j < cells.length; i++, j--) {
            var count = 0;
            if (this.cells[i][j] == "O") {
                count++;
            } 
            else if (this.cells[i][j] == "X") {
                return count;
            }
        }
    }
}
function init() {
    var table = document.getElementsByClassName("cell");
    for (var i = 0; i < table.length; i++) {
        table[i].addEventListener("click", handleClick);
    }
    function handleClick(eventObj) {
        var cell = eventObj.target;
        var guess = cell.id;
        var numCell = document.getElementById(guess);
        return numCell;
    }
}
window.onload = init();