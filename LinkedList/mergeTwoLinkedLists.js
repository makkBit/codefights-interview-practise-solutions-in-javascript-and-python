// Given two singly linked lists sorted in non - 
// decreasing order, your task is to merge them.
// In other words, return a singly linked list, 
// also sorted in non - decreasing order, that 
// contains the elements from both original lists.

/*
l1 = [1, 2, 3] and l2 = [4, 5, 6], 
mergeTwoLinkedLists(l1, l2) = [1, 2, 3, 4, 5, 6];
*/

function mergeTwoLinkedLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    // Set the result to the smaller initial node
    var result, node, a, b;
    if (l1.value < l2.value) {
        result = node = l1;
        a = l1.next;
        b = l2;
    } else {
        result = node = l2;
        a = l1;
        b = l2.next;
    }

    // Add the smaller of `a` and `b` to the previous node
    while (a || b) {
        var x = a ? a.value : Infinity,
            y = b ? b.value : Infinity;
        if (x < y) {
            node.next = node = a;
            a = a.next;
        } else {
            node.next = node = b;
            b = b.next;
        }
    }

    return result;
}