# Given a binary tree t and an integer s, 
# determine whether there is a root to 
# leaf path in t such that the sum of vertex 
# values equals s.

def hasPathWithGivenSum(t, s):
    if not t:
        return s == 0
    return hasPathWithGivenSum(t.left,s-t.value) or hasPathWithGivenSum(t.right,s-t.value)

t = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": None,
            "right": {
                "value": 3,
                "left": None,
                "right": None
            }
        },
        "right": None
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": None,
            "right": None
        },
        "right": {
            "value": 2,
            "left": {
                "value": -2,
                "left": None,
                "right": None
            },
            "right": {
                "value": -3,
                "left": None,
                "right": None
            }
        }
    }
}

s = 7;

print (hasPathWithGivenSum(t,s));
# returns true
# Path 4 -> 3 -> 2 -> -2 gives us 7, the required sum.
