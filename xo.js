function handleClick(eventObj) {
    var cell = eventObj.target;
    var guess = cell.id;
    var zaq = document.getElementById(guess);
}
var model = {
    cellsSize: 9,
    cells: [
        [ , , ],
        [ , , ],
        [ , , ]
    ],
    fire: function(stroke) {
    },
    countHorizontalMatches: function() {
        for (var i = 0; i < cells.length; i++) {
            var count = 0;
            var j = 0;
            if (this.cells[j][i] == O) {
                count++;
            } 
            else if (this.cells[j][i] == X) {
                return count;
            }  
            j++;
        }
    },
    countVerticalMatches: function() {
        for (var i = 0; i < cells.length; i++) {
            var count = 0;
            var j = 0;
            if (this.cells[i][j] == O) {
                count++;
            } 
            else if (this.cells[i][j] == X) {
                return count;
            }
            j++;
        }
    },
    countDiagonalMatch1: function() {
        for (var i = 0, j = 0; i < cells.length, j < cells.length; i++, j++) {
            var count = 0;
            if (this.cells[i][j] == O) {
                count++;
            } 
            else if (this.cells[i][j] == X) {
                return count;
            }
        }
    },
    countDiagonalMatch2: function() {
        for (var i = 0, j = 2; i < cells.length, j < cells.length; i++, j--) {
            var count = 0;
            if (this.cells[i][j] == O) {
                count++;
            } 
            else if (this.cells[i][j] == X) {
                return count;
            }
        }
    }
}