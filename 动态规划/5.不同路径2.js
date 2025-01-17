/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length, n = obstacleGrid[0].length;
    const newArr = Array(m).fill().map(item => Array(n).fill(0))
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; ++i) {
        newArr[i][0] = 1
    }
    for (let j = 0; j < n && obstacleGrid[0][j] === 0; ++j) {
        newArr[0][j] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            newArr[i][j] = obstacleGrid[i][j] === 1 ? 0 : newArr[i][j - 1] + newArr[i - 1][j]
        }
    }
    return newArr[m - 1][n - 1]
};