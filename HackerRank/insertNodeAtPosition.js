function insertNodeAtPosition(head, data, position) {
    let curr = head
    for (let i = 1; i < position; i++) {
        curr = curr.next
    }
    
    let temp = curr.next
    let insert = new SinglyLinkedListNode
    insert.data = data
    insert.next = temp
    
    curr.next = insert
    
    return head
}