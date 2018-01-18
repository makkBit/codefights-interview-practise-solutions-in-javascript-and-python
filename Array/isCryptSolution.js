/*
The array crypt will contain three non-empty strings that follow the structure: 
[word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

If crypt, when it is decoded by replacing all of the letters in the cryptarithm 
with digits using the mapping in solution, becomes a valid arithmetic equation 
containing no numbers with leading zeroes, the answer is true.
If it does not become a valid arithmetic solution, the answer is false
*/

function isCryptSolution(crypt, solution){
    // prepares a hash table of the solution
    let obj = {};
    for(let i=0; i<solution.length; i++){
        obj[solution[i][0]] = solution[i][1];
    }
    
    // decrypts
    let arr = [];
    for(let j=0; j<crypt.length; j++){
        arr.push(crypt[j].split('').map((c) => obj[c])
                .join(''));
    }

    // checks for trailing zeroes
    for(let k of arr){
        if(k[0] === '0' && k.length > 1)
            return false;
    }
    return (+arr[0]+ +arr[1]) === +arr[2];
}


crypt = ["SEND", "MORE", "MONEY"];
solution = 
[['O', '0'],
['M', '1'],
['Y', '2'],
['E', '5'],
['N', '6'],
['D', '7'],
['R', '8'],
['S', '9']];
console.log(isCryptSolution(crypt,solution));