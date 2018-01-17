// returns firstNotRepeatingCharacter in a string

function firstNotRepeatingCharacter(s) {
    let obj = {};
    for(let i=0; i<s.length; i++){
        if(s[i] in obj)
            obj[s[i]]++;
        else
            obj[s[i]] = 0;
    }
    for (let key in obj) {
        if(obj[key] == 0)
            return key;
    }
    return '_';
}


console.log(firstNotRepeatingCharacter('abacabad'));
// returns c