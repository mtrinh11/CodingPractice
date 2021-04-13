#essentially a bfs so, a queue is really helpful
def levelOrder(root):
    queue = []
    queue.append(root)
    while(len(queue) > 0):
        node = queue.pop(0)
        print (node.info, end=' ')
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)