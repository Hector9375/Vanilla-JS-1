// let red =
// document
// .getElementById('color_btn')
// .addEventListener('click',()=>{
//    console.log('click')
//    document.body.style.color='red'
//    if(document.body.style.color==='red'){
//    }
// })
// console.log(red);
document
.getElementById('color_btn')
.addEventListener('click',()=>{
    if(document.body.style.color==='black'){
        document.body.style.color='red'
}else{
        document.body.style.color='black'
}
    })
// 버튼을 눌렀을때 색상변경 레드 , 블랙
// if(document.body.style.color==='red')
