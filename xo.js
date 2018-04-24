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
            if (this.cells[0][i] == O) {
                count++;
            } 
            else if (this.cells[0][i] == X) {
                return count;
            }  
        }
    },
    countVerticalMatches: function() {
        for (var i = 0; i < cells.length; i++) {
            var count = 0;
            if (this.cells[i][0] == O) {
                count++;
            } 
            else if (this.cells[i][0] == X) {
                return count;
            }
        }
    },
    countDiagonalMatches: function() {

    }
}