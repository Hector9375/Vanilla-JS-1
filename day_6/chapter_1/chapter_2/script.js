    const arr = [[100,100,100],[50,50,50],[30,30,30]];
        let result = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
            for (let i = 0; i < arr.length;i++){
                for (let j = 0; j < arr[i].length;j++){
                    result[i][j]=arr[i][j];
                    result[i][arr[i].length]+=arr[i][j];
                    result[arr.length][j]+=arr[i][j];
                    result[arr.length][arr[i].length]+=arr[i][j];
            }
                console.log(result);
            }