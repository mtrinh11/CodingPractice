class Node:
    def __init__(self, info):
        self.info = info  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.info) 

def preOrder(root):
    if root == None:
        return
    print (root.info, end=" ")
    preOrder(root.left)
    preOrder(root.right)
    
class BinarySearchTree:
    def __init__(self): 
        self.root = None

#Node is defined as
#self.left (the left child of the node)
#self.right (the right child of the node)
#self.info (the value of the node)

    def insert(self, val):
        if (not self.root):
            self.root = Node(val)
            return self.root
        
        curr = self.root
        while (curr):
            if (val > curr.info):
                if (not curr.right):
                    curr.right = Node(val)
                    return
                curr = curr.right
            if (val < curr.info):
                if (not curr.left):
                    curr.left = Node(val)
                    return
                curr = curr.left