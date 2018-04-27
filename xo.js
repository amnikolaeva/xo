

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
    acceptStroke: function(numCell) {
        var combinations = [["11", "12", "13"], ["21", "22", "23"], ["31", "32", "33"]];
        var i = indexOf(numCell);

        
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

var controller = {
    handleClick: function(eventObj) {
        var cell = eventObj.target;
        var guess = cell.id;
        var numCell = document.getElementById(guess);
        return numCell;
    }
}