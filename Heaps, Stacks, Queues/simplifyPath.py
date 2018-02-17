def simplifyPath(path):
    parts = path.split('/')
    stack = []
    for x in parts:
        if x.isalpha():
            stack.append(x)
        if x == '..':
            stack.pop()
    return '/' + '/'.join(stack)


print simplifyPath('/home/a/./x/../b//c/')
