const express = require('express')
const logger = require('morgan')
const path = require('path')
const battles = require('./models/battles')
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 8080
const mongoURI = process.env.MONGODB_URI || "mongodb+srv://jatin19:jatin1903@cluster0.mwozi.mongodb.net/TestDB?retryWrites=true&w=majority"

mongoose.connect(mongoURI,{useNewUrlParser: true, useUnifiedTopology: true}).catch(err=>console.log(err))
const db = mongoose.connection
db.once('open',()=>{
    console.log('Connected to DB')
})

app.use(logger('tiny'))
app.use(express.json())

app.get('/list',async (req,res)=>{
    await battles.find({}).populate({
        path:'GOT Battles'
    }).exec((err,succ)=>{
        res.status(200).send(succ)
    })
})

app.get('/count',async (req,res)=>{
    await battles.find({}).countDocuments((err,count)=>{
        if(err) res.status(500).json({"Error":"Could not find."})
        res.status(200).send({"battlesCount":count})
    }) 
})

app.get('/search',async (req,res)=>{
    let query = {}
    let king = ""
    for(const key in req.query){
        if(key==='king'){
            king = req.query[key]
        }
        else if(key==='type'){
            query['battle_type'] = req.query[key]
        }
        else query[key] = req.query[key]
    }
    if(king===""){
        //console.log(query)
        await battles.find(query).populate({
            path:'battle'
        }).exec((err,succ)=>{
            res.status(200).send(succ)
        })
    }
    else{
        await battles.find({$and:[{$or:[{attacker_king:king},{defender_king:king}]},query]}).populate({
            path:'battle'
        }).exec((err,succ)=>{
            res.status(200).send(succ)
        })
    }
})

if(process.env.NODE_ENV ==='production'){
    app.use(express.static('client/build'))

    app.get('*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'client','build','index.html'))
    })
} 
app.listen(port,()=>{
    console.debug(`Server is up at:${port}`)
})