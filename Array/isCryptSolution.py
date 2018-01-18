# The array crypt will contain three non - empty strings that follow the structure:
# [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

# If crypt, when it is decoded by replacing all of the letters in the cryptarithm
# with digits using the mapping in solution, becomes a valid arithmetic equation
# containing no numbers with leading zeroes, the answer is true.
# If it does not become a valid arithmetic solution, the answer is false

def isCryptSolution(crypt, solution):
    dict = {}
    # prepared a hash table of the solution
    for i in range(0,len(solution)):
        dict[solution[i][0]] = solution[i][1]

    # decrypts
    arr = []
    for j in range(0,len(crypt)):
        temp = ''
        for k in crypt[j]:
            temp+=dict[k]
        arr.append(temp)

    # checks for trailing zeroes
    for i in arr:
        if i[0] == '0' and len(k)>1:
            return False
    
    return int(arr[0]) + int(arr[1]) == int(arr[2])


crypt = ["SEND", "MORE", "MONEY"]
solution =[['O', '0'],
 ['M', '1'],
 ['Y', '2'],
 ['E', '5'],
 ['N', '6'],
 ['D', '7'],
 ['R', '8'],
 ['S', '9']]
print isCryptSolution(crypt, solution)
