# Given a binary tree t, determine whether it is symmetric
# around its center, i.e.each side mirrors the other.

def isTreeSymmetric(t):
    if not t:
        return True
    if not t.left or not t.right:
        return False
    queue = []
    queue.append(t.left)
    queue.append(t.right)

    while len(queue) != 0:
        tempLeft = queue.pop(0)
        tempRight = queue.pop(0)

        if not tempLeft and not tempRight:
            continue

        if not tempLeft and not tempLeft or not tempRight and not tempRight:
            return False

        if tempLeft.value != tempRight.value:
            return False

        queue.append(tempLeft.left)
        queue.append(tempRight.right)
        queue.append(tempLeft.right)
        queue.append(tempRight.left)

    return True
