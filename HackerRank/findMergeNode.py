
def findMergeNode(head1, head2):
    curr1 = head1
    curr2 = head2
    while (curr1):
        while(curr2):
            if (curr1.next == curr2.next):
                # i think this for when we reach end of list
                if (not curr1.next):
                    return curr1.data
                return curr1.next.data
            curr2 = curr2.next
        curr2 = head2
        curr1 = curr1.next