import express from 'express'
const app = express()
const port=undefined

app.get('/',(req,res)=>{
    res.send('Hello TypeScript MERN')
})

app.listen(port1,()=>{
    console.log(`Server hit the groud running @port ${port}`)
})
