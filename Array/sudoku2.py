# Implement an algorithm that will check whether the given grid of numbers
# represents a valid Sudoku puzzle according to the layout rule:
# a 9 × 9 grid with numbers in such a way
# that each column, each row, and each of the nine 3 × 3 sub - grids
# that compose the grid all contain all of the numbers from 1 to 9 one time.

def sudoku2(grid):
    grid3x3 = [{},{},{},{},{},{},{},{},{}]
    extra = 0
    gridSize = 3
    for i in range(0, len(grid)):
        row = {}
        col = {}
        for j in range(0, len(grid)):
            r = grid[i][j]
            c = grid[j][i]

            if r in row:
                return False
            if r != '.':
                row[r] = True

            if c in col:
                return False
            if c != '.':
                col[c] = True

            if i >= extra + gridSize:
                extra = extra + gridSize
            index = int(j/gridSize) + extra

            if r in grid3x3[index]:
                return False
            if r != '.':
                grid3x3[index][r] = True

    return True


g =[['.', '.', '.', '1', '4', '.', '.', '2', '.'],
    ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
    ['1', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
    ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
    ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
    ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
    ['.', '.', '.', '5', '.', '.', '.', '7', '.']]

print sudoku2(g)
