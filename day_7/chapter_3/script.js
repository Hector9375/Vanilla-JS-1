let arr = ['Beomsu','Hector','Nullzing'];

console.log(arr);
/*========================*/

arr.forEach(console.log);

/*========================*/

// 데이터를 리턴하지 않음
arr.forEach((each)=>{
    if(each==='Hector'){
        console.log('Found Hector')
    };
})

// { name:'Hector',number:1 }
let members = arr.map((each,index)=>{
    return{"name":each,"number":index}
});
console.log(members);

// 필터 
let student = members.filter((each)=>{
    // true면 통과
    // false면 필터 ( 제거 )
        console.log(each.name);
        return each.name !== 'Beomsu';
})
console.log(student);

// 찾고자하는 데이터 위치

let roomnumber = arr.indexOf('Hector');
console.log(roomnumber);

// 문자열을 배열로 전환

let aa = '1,2423,1232,1223,4121,23441'.split(',')
        .map(str=>parseInt(str));
console.log(aa);