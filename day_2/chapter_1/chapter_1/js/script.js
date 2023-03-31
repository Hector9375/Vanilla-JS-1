console.log('test');
// typeof 키워드로 타입확인 가능
console.log(typeof 'abcd');
console.log(typeof 1234 );
console.log(typeof true);
console.log(typeof undefined);

//typeof 키워드로 타입화인 불가
console.log(typeof null);
console.log(typeof {}); //객체
console.log(typeof []); //배열

//타입 확인
console.log(Object.prototype.toString.call(12345));
console.log(Object.prototype.toString.call("test"));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call([]));


