# Given a singly linked list of integers l and
# an integer k, remove all elements from list l
# that have a value equal to k.

# Definition for singly-linked list:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#


def removeKFromList(l, k):

    if l == None:
        return []

    # removes matching leading integers
    while l and l.value == k:
        l = l.next
    
    current = l
    while current and current.next:
        if current.next.value == k:
            # skip
            current.next = current.next.next
        else:
            # continue
            current = current.next

    return l

