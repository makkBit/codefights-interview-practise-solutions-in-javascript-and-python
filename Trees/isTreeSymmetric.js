// Given a binary tree t, determine whether it is symmetric 
// around its center, i.e.each side mirrors the other.

function isTreeSymmetric(t){
    if( t===null )
        return true;
    if( (t.left === null) || (t.right === null))
        return false;
    let queue = [];
    queue.push(t.left);
    queue.push(t.right);

    while( q.length !== 0){
        tempLeft = q.shift();
        tempRight = q.shift();

        if( tempLeft==null && tempRight==null){
            continue;
        }

        if( (tempLeft==null && tempRight!==null) ||
            (tempRight==null && tempRight!==null) ){
                return false;
        }

        if(tempLeft.value !== tempRight.value){
            return false;
        }
        
        // this order is important
        q.push(tempLeft.left);
        q.push(tempRight.right);
        q.push(tempLeft.right);
        q.push(tempRight.left);
    }
    return true;
}