# by far the most difficult part of this problem was understanding 
# what they wanted

def dynamicArray(n, queries):
    arr = [[] for x in range(n)]
    lastAnswer = 0
    lastAnswers = []
    for q in queries:
        index = (q[1]^lastAnswer) % n
        if (q[0] == 1):
            arr[index].append(q[2])
        else:
            lastAnswer = arr[index][q[2] % len(arr[index])]
            lastAnswers.append(lastAnswer)
    return lastAnswers