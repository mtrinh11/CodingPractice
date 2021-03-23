def height(root):
    if (root == None):
        return -1
    else: 
        return max(1 + height(root.left), 1 + height(root.right) )
