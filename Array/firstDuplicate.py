# finds first duplicate element in an array
# in O(n) time complexity and O(1) additional space complexity
# doesn't work for array which have - ve elements

def firstDuplicate(a):
    if len(a) <= 1:
        return -1
    for e in a:
        pos = abs(e)-1
        # to prevent list index out of range
        try:
            if a[pos] < 0:
                return pos+1
            else:
                a[pos] = -a[pos]
        except IndexError:
            continue
    return -1


print firstDuplicate([2, 2])
