// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix) {
        let res = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                res = res.concat(matrix[i]);
            } else {
                matrix[i].reverse();
                res = res.concat(matrix[i]);
            }
        }
        return res;
    }
    return [];
};
