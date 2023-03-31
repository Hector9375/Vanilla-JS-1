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
return(Object.prototype.toString.call(data)).slice(8,-1);
    }