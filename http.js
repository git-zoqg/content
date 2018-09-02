var http=require('http');
var hostname="127.0.0.1";
var port=3000;
// 创建/create 一个web服务器
var server=http.createServer((req,res)=>{
    res.status=200;
    res.setHeader('content-Type','text/plain');
    res.end('hello world and zq');
})
server.listen(port,hostname,()=>{
    console.log('Server running at http://127.0.0.1:3000');
})