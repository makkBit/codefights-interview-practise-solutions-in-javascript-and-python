// Given a binary tree t and an integer s, 
// determine whether there is a root to 
// leaf path in t such that the sum of vertex 
// values equals s.

function hasPathWithGivenSum(t, s) {
    if (!t) return s === 0;
    s -= t.value;
    return hasPathWithGivenSum(t.left, s) ||
        hasPathWithGivenSum(t.right, s);
}


const t = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -2,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
}

const s = 7;

console.log(hasPathWithGivenSum(t,s));
// returns true
// Path 4 -> 3 -> 2 -> -2 gives us 7, the required sum.