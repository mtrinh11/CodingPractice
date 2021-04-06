# i don't like this implementation bc we use up more memory. 
# maybe recursive could be good but if too big we have memory issues again
def reversePrint(head):
    tempList = []
    if (not head):
        return
    curr = head
    while (curr):
        tempList.append(curr.data)
        curr = curr.next
    tempList.reverse()
    for x in tempList:
        print(x)