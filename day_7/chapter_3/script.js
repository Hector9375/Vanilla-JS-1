let arr = ['오범수','안성민','박누리'];

console.log(arr);
/*========================*/

arr.forEach(console.log);

/*========================*/

// 데이터를 리턴하지 않음
arr.forEach((each)=>{
    if(each==='안성민'){
        console.log('성민이 찾았다')
    };
})

// { name:'안성민',number:1 }
let members = arr.map((each,index)=>{
    return{"name":each,"number":index}
});
console.log(members);

// 필터 
let student = members.filter((each)=>{
    // true면 통과
    // false면 필터 ( 제거 )
        console.log(each.name);
        return each.name !== '오범수';
})
console.log(student);

// 찾고자하는 데이터 위치

let roomnumber = arr.indexOf('안성민');
console.log(roomnumber);

// 문자열을 배열로 전환

let aa = '1,2423,1232,1223,4121,23441'.split(',')
        .map(str=>parseInt(str));
console.log(aa);