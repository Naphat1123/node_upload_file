const express = require('express')
const upload = require('express-fileupload')
const app = express()

app.use(upload())

app.get('/', (req , res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/upload' , (req,res) =>{
    if(req.files) {
        console.log(req.files)
        var file = req.files.file
        var filename = file.name
        console.log(filename)

        file.mv('upload/' + filename ,(err) => {
            if (err){
                res.send(err)
            } else {
                res.send('upload complete')
            }
        })
    }
})

app.listen(3001 , () => console.log('app is running..'))