// 자바스크립트 객체
let me = {
    firstName: 'Ahn',
    lastName: 'Hector',
    age: 30,
    getFullName : function (){
        // this가 정의 되는 시점은 호출될때
        return `${this.firstName} ${this.lastName}`;
    }
}

let you = {
    firstName: 'Park',
    lastName: 'Nullzing',
    age: 31,
    getFullName : () => {
        // this가 정의 되는 시점은 함수 내부
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(me);
console.log(me.firstName);
console.log(me['firstName'])
console.log(me.lastName);
console.log(me['lastName'])
console.log(me.age);
console.log(me['age']);
console.log(me.getFullName());
console.log(me['getFullName']());