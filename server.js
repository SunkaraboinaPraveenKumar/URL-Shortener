import express from 'express'
import mongoose, { get } from 'mongoose'
import { urlShort,getOriginalUrl } from './controllers/url.js';

const app=express();
const port=3000;

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://kumarsunkaraboina27:fdXBa3tmhtU5830Y@cluster0.1rbur86.mongodb.net/",
{"dbName":"NodeJsExpressAPISeries"})
.then(()=>console.log("MongoDb Connected"))
.catch((error)=>console.log(error));

app.get('/',(req,res)=>{
    res.render("server.ejs",{shortUrl:null})
})

//handle Url submission
app.post('/shorten',urlShort)

//redirect to original Url using short Url
app.get('/:shortCode',getOriginalUrl)


app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`)
})