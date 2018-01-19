// Implement an algorithm that will check whether the given grid of numbers 
// represents a valid Sudoku puzzle according to the layout rule:
// a 9 × 9 grid with numbers in such a way 
// that each column, each row, and each of the nine 3 × 3 sub - grids 
// that compose the grid all contain all of the numbers from 1 to 9 one time.


function sudoku2(grid) {

    const gridSize = 3;
    let grid3x3 = new Array(grid.length).fill().map(Object);
    let extra = 0;
    for (let i = 0; i < grid.length; i++) {
        let row = {};
        let col = {};
        for (let j = 0; j < grid.length; j++) {
            const r = grid[i][j];
            const c = grid[j][i];

            if (row[r])
                return false;
            if (r !== '.')
                row[r] = true;

            if (col[c])
                return false;
            if (c !== '.')
                col[c] = true;

            if (i >= extra + gridSize)
                extra += gridSize;
            let index = Math.floor(j / gridSize) + extra;
            if (grid3x3[index][r])
                return false;
            if (r !== '.') 
                grid3x3[index][r] = true;
        }
    }
    return true;
}


const g =
    [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
    ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],

    ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
    ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
    ['.', '.', '.', '.', '.', '.', '8', '1', '.'],

    ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
    ['.', '.', '.', '5', '.', '.', '.', '7', '.']];

console.log(sudoku2(g));