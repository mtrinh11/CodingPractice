# same logic as postorder but change order or operations
def preOrder(root):
    if (root):
        print(root.info, end=' ')
    if (root.left):
        preOrder(root.left)
    if (root.right):
        preOrder(root.right)
    return