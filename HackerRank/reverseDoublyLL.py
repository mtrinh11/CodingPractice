#what helped: planning beforehand and understanding where I needed
#markers and how to and when to update them 
def reverse(head):
    tempNext = None
    tempPrev = head.next
    curr = head
    while (True):
        curr.next = tempNext
        tempNext = curr
        curr.prev = tempPrev
        if (not tempPrev):
            break
        curr = tempPrev
        tempPrev = tempPrev.next
    return curr
