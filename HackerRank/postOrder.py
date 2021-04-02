# a little tougher logically than I was expecting
def postOrder(root):
    # This first iteration did not print the original node given
    # if (not root):
    #     return
    # postOrder(root.left)
    # postOrder(root.right)
    # if (root.left):
    #     print(root.left, end='')
    # if (root.right):
    #     print(root.right, end='')
    # return

    if (root.left):
        postOrder(root.left)
    if (root.right):
        postOrder(root.right)
    if (root):
        print(root.info, end=' ')
    return