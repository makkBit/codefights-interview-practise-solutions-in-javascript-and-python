// Given an absolute file path(Unix - style), 
// shorten it to the format / < dir1 > /<dir2>/ < dir3 > /....

// For path = "/home/a/./x/../b//c/", the output should be
// simplifyPath(path) = "/home/a/b/c".

function simplifyPath(path) {
    let parts = path.split('/');
    let stack = [];
    for (let e of parts) {
        if (e.match(/[a-zA-Z]/g))
            stack.push(e);
        if (e === '..')
            stack.pop();
    }
    console.log(stack)
    return '/' + stack.join('/');
}