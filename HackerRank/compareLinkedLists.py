def compare_lists(llist1, llist2):
    curr1 = llist1
    curr2 = llist2
    while(curr1 or curr2):
        if (not curr1 or not curr2 or curr1.data != curr2.data):
            return 0
        curr1 = curr1.next
        curr2 = curr2.next
    return 1