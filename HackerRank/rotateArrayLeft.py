# V1
def rotateLeft(d, arr):
    while d > 0:
        first = arr.pop(0)
        arr = arr + [first]
        d -= 1
    return arr

# V2: simplified logic and process with splicing
def rotateLeftTwo(d, arr):
    return arr[d:] + arr[0:d]