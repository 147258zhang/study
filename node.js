const express=require('express');
const cors=require('cors')
const app=express();
app.use(cors())
app.get('/item',(req,res)=>{
    res.send([{id:'001',name:'张三'},{id:'002',name:'李四'},{id:'003',name:'王五'},]);
})
app.listen(3000,()=>{
    console.log('服务器已登陆');
})