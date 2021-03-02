/**
 * @param {character[][]} grid
 * @return {number}
 */

const reduce = (grid, coor) => {
    let queue = [coor]
    while (queue.length > 0) {
        let curr = queue.shift()
        if (grid[curr[0]][curr[1]] === '1') {
            grid[curr[0]][curr[1]] = '0'
        }
        neighbors = [
            [curr[0] - 1, curr[1]],
            [curr[0], curr[1] + 1],
            [curr[0], curr[1] - 1],
            [curr[0] + 1, curr[1]]
        ]
        for (let neighbor of neighbors) {
            if (neighbor[0] < 0 || 
                neighbor[1] < 0 || 
                neighbor[0] >= grid.length ||
                neighbor[1] >= grid[0].length
               ) {
                continue;
            } else if (grid[neighbor[0]][neighbor[1]] === '0') {
                continue;
            } else {
                queue.push(neighbor)
            }
        }
    }
}

const reduce2 = (grid, row, col) => {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length) {
        return
    } else if (grid[row][col] === '0') {
        return
    } 
    grid[row][col] = '0'
    reduce2(grid, row - 1, col)
    reduce2(grid, row, col - 1)
    reduce2(grid, row, col + 1)
    reduce2(grid, row + 1, col)
}

var numIslands = function(grid) {
    let count = 0
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === "1") {
                reduce2 (grid, row, col)
                count += 1
            }
        }
    }
    return count
};
