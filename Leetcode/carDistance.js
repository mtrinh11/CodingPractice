
/* 
# As input you are given a 2D matrix of 0s and 1s:
# 0 -> empty position 
# 1 -> Uber car
#
# [[0, 0, 1, 0],
#  [1, 0, 0, 0],
#  [0, 0, 0, 1]]
# 
# Write a function that outputs another matrix where each (row, col) entry
# shows the distance to the closest uber car from that (row, col) point.
#
# For example, for the above example the output would be:
# 
# case 0
# [[inf, inf, 0, inf],
#  [0, inf, inf, inf], 
#  [inf, inf, inf, 0]]



# q = []
# q.push((0, 2))
# q.push((1, 0))
# q.push((2, 3))

1. "pop left" from queue
2. visit neighbors and set closest distance
3. for each neighbor: "push" neighbor to queue

# q = [(0, 2), (1, 0), (2, 3)]
preserves order
# q = [(0, 3), (1, 2), (0, 0), (1, 1), (2, 0)]

(0, 1)
neighbors: (0, 0), (0, 2), (1, 1)
if matrix[r][c] != inf:
  continue

# case 1
# [[1, 1, 0, 1],
#  [0, 1, 1, 1], 
#  [1, inf, 1, 0]]

pass 1:
car = (1, 0)
neighbors = (0, 0), (2, 0), (1, 1)
look at each neighbor:
if neighbor == inf
  process and add distance
else
  pass

#
# [[1, 1, 0, 1],
#  [0, 1, 1, 1], 
#  [1, 2, 1, 0]]
 */

/**
 * @param {!Array<!Array<number>>} matrix
 * @return {!Array<!Array<number>>}
 */

let test = 
    [[0, 0, 1, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 1]]

let test2 = [
  [0, 0, ],
  [0, 0, 9]
]

const preprocess = (matrix) => {
  let queue = []
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > 0) {
        matrix[row][col] = 0
        queue.push([row, col])
      } else {
        matrix[row][col] = Infinity
      }
    }
  }
  return queue
}

const distances = (input) => {
  let queue = preprocess(input)
  let distance = 1
  if (queue.length === 0) {
    console.log('no cars')
  }
  while (queue.length > 0) {
    let queueLength = queue.length
    for (let i = 0; i < queueLength; i++) {
      let curr = queue.shift()
      let neighbors = [[curr[0] - 1, curr[1]],
                       [curr[0], curr[1] - 1],
                       [curr[0], curr[1] + 1],
                       [curr[0] + 1, curr[1]]
                      ]
      for (let neighbor of neighbors) {
        if (neighbor[0] < 0 || neighbor[1] < 0 || neighbor[0] >= input.length|| neighbor[1] >= input[1].length) {
          continue;
        } else if (input[neighbor[0]][neighbor[1]] !== Infinity) {
          continue;
        } else {
          input[neighbor[0]][neighbor[1]] = distance
          queue.push(neighbor)
        }
      }
    }
    distance++
  }
}

distances(test2)

console.log(test2)
