    function sum(a,b){
        return a+b;
    }
    function sub(a,b){
        return a-b;
    }
    function gob(a,b){
        return a*b;
    }
    function devide(a,b){
        return a/b;
    }
    function nam(a,b){
        return a%b;
    }
    function getType(data){
        return Object.prototype.toString.call(data).slice(8,-1)
    }
    function parseInt(str){
        return Number.parseInt(str)
    }
    let a = prompt('')
        if(isNaN(parseInt(a))){
            alert('nop!')
        }
    let b = prompt('')
        if(isNaN(parseInt(a))||isNaN(parseInt(b))){
            alert('nop!')
        }else{
            console.log(sum(a,b));
            console.log(sub(a,b));
            console.log(gob(a,b));
            console.log(devide(a,b));
            console.log(nam(a,b));
        }