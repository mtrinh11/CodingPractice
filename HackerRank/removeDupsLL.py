def removeDuplicates(head):
    if (not head):
        return head
    curr = head
    while(curr.next):
        if (curr.data == curr.next.data):
            curr.next = curr.next.next
            continue
        curr = curr.next
    return head