def inOrder(root):  
    if (root.left):
        inOrder(root.left)
    print(root.info, end = ' ')
    if(root.right):
        inOrder(root.right)
