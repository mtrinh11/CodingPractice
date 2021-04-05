def getNode(head, positionFromTail):
    curr = head
    length = 0
    while (curr):
        length += 1
        curr = curr.next
    index = length - positionFromTail - 1
    curr = head
    while (index > 0):
        index -= 1
        curr = curr.next
    return curr.data