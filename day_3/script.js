// 조건문 (if문 switch문)

let student = {name:"Hector",blood:"B",age: 30};

  if(student,blood==="A"){
     console.log('1 division');
 }else if(student,blood==="B"){
     console.log('2 division');
 }else if(student,blood==="0"){
     console.log('3 division');
 }else{
     console.log('4 division');
 }

//오늘의 문제
//setClass(student,blood) 를 호출하면
// 결과가 콘솔창에 분단이 출력되게 하시오

switch(student,blood){
    case "A":
        console.log('1 division')
        break;
    case "B":
        console.log('2 division')
        break;
    case "C":
        console.log('3 division')
        break;
    default:
        console.log('4 division')
}


let month = new Date().getMonth()+1;
let lastDay = 0;

switch (month){
    case 1: case 3: case 5: case 7: 
    case 8: case 10: case 12:
    console.log('last day 31')
    lastDay=31;
    case 4: case 6: case 9: case 11:
    console.log('last dat 30')
    lastDay=30;
    break;
    case 2:
        if(new Date().getFullYear()%4 ===0){
            console.log('last dat 29')
        }else{
            console.log('last day 28')
        }
    }

console.log('last day ${lastDay}');

if(student.age >= 30){
    console.log('Don`t pretend to be a student');
}else{
    console.log('Beep! a student.');
}
// // 3항 연산자
// let str = true? '참' : '거짓'; //

let str = new Date().getFullYear()%2===0 ? (true? 'a' : 'b') :'It`s an odd number' ;

console.log(str);

//let student = {name:"Hector",blood:"B",age: 30};//
function setClass(bloodType){
    let result = '';
    switch(bloofType){
    case "A":
        return '1 division';
    case "B":
        return'2 division';
    case "O":
       return '3 division';
    case "AB":
        return'4 division';
}
}
    function p(str){
        console.log(str)
    }