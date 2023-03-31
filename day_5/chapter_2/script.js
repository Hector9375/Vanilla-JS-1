function Me(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
 }
 
 Me.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
 }


// new : 생성자(constructor) 호출
// 생성자가 호출되면 인스턴스가 생성됨( 메모리에 데이터 저장)
// 인스턴스 : 실제 데이터 덩어리
 let ah = new Me('Ahn','Hector');



console.log(asm);
console.log(ah['getFullName']());
console.log(ah.getFullName());

