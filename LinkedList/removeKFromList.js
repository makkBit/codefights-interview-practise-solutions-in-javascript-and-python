// Given a singly linked list of integers l and
// an integer k, remove all elements from list l 
// that have a value equal to k.

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function removeKFromList(l, k) {

    if (l == null)
        return []

    // removes matching leading integers
    while (l && l.value === k) {
        l = l.next;
    }

    let current = l;
    while (current && current.next) {
        if (current.next.value === k){
            // skip
            current.next = current.next.next;
        }
        else{
            // continue
            current = current.next;
        }

    }
    return l;
}

