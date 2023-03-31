// 시간 함수

// 일정 시간 후에 함수를 실행시키는 함수
let timer = setTimeout( function (){
    console.log('')
},5000);


// 일정 간격 동안 함수를 실행시키는 함수
let loop = setInterval(()=>{
    console.log('반복')
},1000);

const stopTimer = function(){
    clearTimeout(timer);
}

const stopLoop = function(){
    clearInterval(loop);
}

// 숙제 
// 콘솔창에 1씩 늘어나는 인터별함수를 만드시오
// 1분동안 ( == 1분후 해제 ) 
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
