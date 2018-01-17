// You are given an n x n 2D matrix that represents an image. 
// Rotate the image by 90 degrees (clockwise).

function rotateImage(a) {
    let resultA = [];
    for(let i=0; i <=a.length-1; i++){
        let row = [];
        for (let j=a.length-1; j>=0; j--) {
            row.push(a[j][i])
        }
        resultA.push(row)
    }
    return resultA;
}


console.log(rotateImage([[1, 2, 3],[4, 5, 6],[7, 8, 9]]));

/*
from this:
[[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

to this:
[[7, 4, 1],
[8, 5, 2],
[9, 6, 3]]

this is what's happening:
[2,0],[1,0],[0,0]
[2,1],[1,1],[0,1]
[2,2],[1,2],[0,2]
*/