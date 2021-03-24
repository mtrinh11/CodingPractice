import math
import os
import random
import re
import sys

class DoublyLinkedListNode:
    def __init__(self, node_data):
        self.data = node_data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert_node(self, node_data):
        node = DoublyLinkedListNode(node_data)

        if not self.head:
            self.head = node
        else:
            self.tail.next = node
            node.prev = self.tail


        self.tail = node

def print_doubly_linked_list(node, sep, fptr):
    while node:
        fptr.write(str(node.data))

        node = node.next

        if node:
            fptr.write(sep)

def sortedInsert(head, data):
    # if (head == None):
    #     return insert
    if (head):
        insert = DoublyLinkedListNode(data)
        curr = head
    
        while (curr.next != None and curr.data < data):
            curr = curr.next
        # literally just needed to do greater than or equal
        if (curr.data >= data):
            if (curr.prev == None):
                curr.prev = insert
                insert.next = curr
                return insert
            else:
                insert.prev = curr.prev
                insert.next = curr
                curr.prev.next = insert
                curr.prev = insert
                return head
        if (curr.next == None):
            curr.next = insert
            insert.prev = curr
    return head