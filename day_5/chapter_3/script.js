// 배열 : 데이터의 나열 ( 순서가 보장됨 )

let arr = [1,2,3,4,5,6,7,8,9,'hahaha'];

console.log(arr)

for (let i = 0; i < arr.length;i++){
    if(i % 2 > 0){
    console.log(arr[i]);
   }
}

//if( i % 2 == 0 홀수 )

// if( arr[i] % 2 > 0 짝수 )

// 배열에 데이터 추가

arr.push(1000);

console.log(arr);

let getnumber = arr.pop();

console.log(getnumber);

console.log(arr);

// 스텍(stack) 구조 ( FILO : first in last out )
// 큐(que) 구조 ( FIFO : first in first out )
let array = new Array();
let array2 = [];

console.log(array);
console.log(array2);


// 콜백 : 파라미터 ( 아규먼트/ 인자 ) 자리에 함수를 전할때 이름 
arr.forEach((each) =>{
    if(each % 2 == 0)
    console.log(each);
});