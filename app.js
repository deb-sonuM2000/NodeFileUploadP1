const express = require('express')
const fileupload = require('express-fileupload')

const app = express()
app.use(express.json())

app.use(express.static(__dirname+"/public"))
app.set('view engine','ejs')

app.use(fileupload())

app.get('/',(req,res)=>{
          res.render('index')
})

app.post('/profile',(req,res)=>{
          console.log(req.files)
          console.log(req.body)
          const imageFile = req.files.fileName
          imageFile.mv(`${__dirname}/public/images/${imageFile.name}`,(err,data)=>{
                    if(err) throw err
                    res.render('display',{title:req.body.imgName,image:imageFile.name})
          })
          
})

app.listen(3001,()=>{console.log('server running')})