
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];

    return matrix.map((array, idx) => {
        if (idx % 2) return array.reverse();
        else return array;
    }).flat();
}
