const http=require('http')
const server= http.createServer((req,res)=>{
    res.write("mohamed nalouti")
    res.end()
}) 

const PORT =5000;
server.listen(PORT,()=>{console.log("server work on port 5000"||PORT)})