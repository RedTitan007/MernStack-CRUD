const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
mongoose.connect('mongodb+srv://Sujith:Sujith123@cluster0-oxzng.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/api',require('./routes/index'))

const port=process.env.port | 80

app.listen(port)
 