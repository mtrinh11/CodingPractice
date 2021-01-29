//input: a 2d grid array of arrays
//m x n size
//every elem is 1 or 0
//1 is land , 0 is water

let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"],
    ["0","0","0","1","0"]
  ]

//could've asked : how do I simplify this
//hopefully I'd answer: I can shrink the islands and just count that.
//could've asked : what does this look like?
//hopefully I'd answer: maybe a DFS or a BFS

const countIslands = (grid) => {
    let island = false
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                if (grid[i][j+1] === 1) {

                }
            } 

        }
    }

    return 
}

countIslands(grid)