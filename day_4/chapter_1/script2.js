// 함수 심화_2

// 화살표 함수
const 화살표함수 = ()=>{
    console.log('화살표 함수')
};


// 형태 1
const 형태1 = ()=>{
    console.log('now')
}

// 형태 2
const 형태2= (x,y)=>{
    console.log(x+y);
}

// 형태 3
// 파라미터가 1개라면 소괋호 (()) 를 생략할 수 있다
let 형태3 = x=>{
    console.log('형태3')
    return x*2
};

// 형태 4
// 실행문이 1줄이면 중괄호 ({}) 를 생략할 수 있다.
// 중괄호를 생략하면 결과가 리턴된다.
let 형태4 = x => x*3;


화살표함수();
now();
형태2(1,2);
console.log(형태3(10));
console.log(형태4(100));
(function (){console.log(arguments)})();