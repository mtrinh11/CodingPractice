def deleteNode(head, position):
    if (position == 0):
        return head.next
    if (head == None):
        return head
    curr = head
    while (position > 1):
        curr = curr.next
        position -= 1
    curr.next = curr.next.next
    return head