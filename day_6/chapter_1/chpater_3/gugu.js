let arr = [];

for(let i = 0; i < 9; i++){
    arr[i] = [];
    for(let j = 0; j < 8; j++){
        let x = j+2;
        let y = i+1;
        arr[i][j] = `${x} X ${y} = ${x * y}`;
    }
}

console.table(arr);