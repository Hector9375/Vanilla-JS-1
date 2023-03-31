    function sum(a,b){
    return a+b;
    }
   function sub(a,b){
        return a-b;
    }
    function gob(a,b){
        return a*b;
    }
    function divide(a,b){
        return a/b;
    }
    function nam(a,b){
        return a%b;
    }
    function getType(data){
        return Object.prototype.toString.call(data).slice(8,-1);
    }
    function parseInt(str){
        return Number.parseInt(str);
    }
    let a = prompt('숫자를 입력하세요.')

    if(isNaN(parseInt(a))){
        alert('nop!');
    }

    /**  
    1. prompt는 문자열로만 데이터를 저장한다
    2. 입력받은데이터를 숫자형으로 변환한다
    3. 숫자형으로 변환이 안되면 (오류 발생 시) 알려준다
    */
    let b = prompt('숫자를 입력하세요.')
    
    if(getType(b)!=='Number'){
        alert('nop!');
    } 
    if(isNaN(parseInt(a)) || isNaN(parseInt(b))){
        alert('nop!')
    }else{
    console.log(sum(a,b));
    console.log(sub(a,b));
    console.log(gob(a,b));
    console.log(divide(a,b));
    console.log(nam(a,b));
    }