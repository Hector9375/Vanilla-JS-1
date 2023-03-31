// 배열 선언 대괄호( [] )
let arr = [];

arr = [1,2,3,4,5];

arr = new Array();

arr.push(1);

// 배열에 함수 넣기
arr.push(()=>console.log('함수지롱~!'));

console.log(arr);
console.log(arr[8]);
// 배열 내부 함수 호출
arr[8]();