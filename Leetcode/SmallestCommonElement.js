/**
 * @param {number[][]} mat
 * @return {number}
 */
//  Given a matrix mat where every row is sorted in strictly increasing order, 
//  return the smallest common element in all rows.
//  If there is no common element, return -1.

var smallestCommonElement = function(mat) {
    let occDict = {}
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[0].length; col++) {
            if (occDict[mat[row][col]]) {
                occDict[mat[row][col]] ++
            } else {
                occDict[mat[row][col]] = 1
            }
        }
    }

    let leastOcc = Infinity
    for (let key in occDict) {
        if (occDict[key] === mat.length && key < leastOcc) {
            leastOcc = key
        }
    }

    if (leastOcc === Infinity) {
        return -1
    }
return leastOcc
};