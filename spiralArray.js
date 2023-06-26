


let f = (arr) => {
    if (!arr || arr.length === 0) return;
    let directions = [[0, 1], [1, 0], [0, -1, [-1, 0]]];
    let rows = arr.length;
    let cols = arr[0].length;
    console.log(rows, cols)
    let explored = new Set();

    let dirIndex = 0;
    let vertex = [0, 0];
    let spiralArr = []
    while (true) {
        console.log(vertex, explored)
        spiralArr.push(arr[vertex[0]][vertex[1]]);
        explored.add(vertex[0] + ',' + vertex[1]);

        let dir = directions[dirIndex]
        let next1 = vertex[0] + dir[0];
        let next2 = vertex[1] + dir[1];
        console.log(next1, next2)

        if (next1 > rows - 1 || next1 < 0 || next2 > cols - 1 || 
                next2 < 0 || explored.has(next1 + ',' + next2)) {
            dirIndex += 1;
            if (dirIndex == 4) {
                dirIndex = 0
            }

            let dir2 = directions[dirIndex]
            next1 = vertex[0] + dir2[0];
            next2 = vertex[1] + dir2[1];

            if (explored.has(next1 + ',' + next2)) {
                break;
            }
        }

        vertex = [next1, next2]
    }

    console.log(spiralArr);

}


f([[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15],])
// {1, 4, 20, 3, 10, 5} sum = 33

// sumValues = [1, 5, 25, 28, 38, 43]


// Thus the same approach i found on geeks for geeks.
// just instead of wahile loop and a breaking condition, 
// they just print nRows * nCols no of times and used a for loop there. 





