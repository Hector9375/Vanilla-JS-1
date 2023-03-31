// 조건문 (if문 switch문)

let student = {name:"안성민",blood:"B",age: 30};

  if(student,blood==="A"){
     console.log('1분단');
 }else if(student,blood==="B"){
     console.log('2분단');
 }else if(student,blood==="0"){
     console.log('3분단');
 }else{
     console.log('4분단');
 }

//오늘의 문제
//setClass(student,blood) 를 호출하면
// 결과가 콘솔창에 분단이 출력되게 하시오

switch(student,blood){
    case "A":
        console.log('1분단')
        break;
    case "B":
        console.log('2분단')
        break;
    case "C":
        console.log('3분단')
        break;
    default:
        console.log('4분단')
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
    console.log('학생인척 하지마');
}else{
    console.log('삑!학생입니다.');
}
// // 3항 연산자
// let str = true? '참' : '거짓'; //

let str = new Date().getFullYear()%2===0 ? (true? 'a' : 'b') :'홀수 해' ;

console.log(str);

//let student = {name:"안성민",blood:"B",age: 30};//
function setClass(bloodType){
    let result = '';
    switch(bloofType){
    case "A":
        return '1분단';
    case "B":
        return'2분단';
    case "O":
       return '3분단';
    case "AB":
        return'4분단';
}
}
    function p(str){
        console.log(str)
    }