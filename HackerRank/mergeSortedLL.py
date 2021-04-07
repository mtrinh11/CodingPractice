
import math
import os
import random
import re
import sys

class SinglyLinkedListNode:
    def __init__(self, node_data):
        self.data = node_data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert_node(self, node_data):
        node = SinglyLinkedListNode(node_data)

        if not self.head:
            self.head = node
        else:
            self.tail.next = node


        self.tail = node

def print_singly_linked_list(node, sep, fptr):
    while node:
        fptr.write(str(node.data))

        node = node.next

        if node:
            fptr.write(sep)

#used the same idea as a merge sort function
def mergeLists(head1, head2):
    if (not head1):
        return head2
    elif (not head2):
        return head1
    curr1 = head1
    curr2 = head2
    mergedll = SinglyLinkedList()
    while (curr1 and curr2):
        if (curr1.data < curr2.data):
            mergedll.insert_node(curr1.data)
            curr1 = curr1.next
        else:
            mergedll.insert_node(curr2.data)
            curr2 = curr2.next
    while(curr1):
        mergedll.insert_node(curr1.data)
        curr1 = curr1.next
    while(curr2):
        mergedll.insert_node(curr2.data)
        curr2 = curr2.next
    return mergedll.head

# idea here was to use one list and put things into that list
#but made for some trouble if the list used didn't have the smallest
#item to start with
# def mergeLists(head1, head2):
      # if (not head1):
    #     return head2
    # elif (not head2):
    #     return head1
    # if (head1.data < head2.data):
    #     curr1 = head1
    #     curr2 = head2
    # else:
    #     curr1 = head2
    #     curr2 = head1
        
    # while(curr1.next and curr2.next):
    #     if curr2.data <= curr1.next.data:
    #         temp = curr1.next
    #         curr1.next = curr2
    #         curr2 = curr2.next
    #         curr1.next.next = temp
    #     curr1 = curr1.next
    # if (curr2):
    #     curr1.next = curr2
    
    # return head1