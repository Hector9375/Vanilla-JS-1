const express = require('express')
const app = express()

const nunjucks = require('nunjucks')

app.set('view engine', 'html')
nunjucks.configure('views',{
    express:app,
})
app.get('/', (req, res)=>{
    res.render('index.html') //게시판 메인 페이지 html코드가 저장된 파일명(js코드 아래에 첨부함)
})
// localhost:3000(숫자는 아래에서 지정) = /
//이라는 주소에서는, view라는 폴더 안에 있는 index.html파일을 랜더하겠다.

app.listen(3003, ()=>{
    connsole.log('서버시작')
})

//뒤에 숫자 지정. 보통 3000, 8000 많이 쓴다.