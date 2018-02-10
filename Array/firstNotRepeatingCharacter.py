# returns firstNotRepeatingCharacter in a string

def firstNotRepeatingCharacter(s):
    dict = {}
    for c in s:
        if c in dict:
            dict[c] = dict[c]+1
        else:
            dict[c] = 0
    for key in dict:
        if dict[key] == 0:
            return key
    return dict


print firstNotRepeatingCharacter('abacabad')
# returns c