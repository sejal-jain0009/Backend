//server kaise chlta hai wo sikha
/*const http=require("http");
const myServer=http.createServer((req,res)=>{
    //console.log("New Request Received");//pehle print krdo ki new request ai hai
    //console.log(req.headers); //req de headers mtlb req di sari info ki kitho req ai ki hai sb
    console.log(req); //req di sari info print krdo , eh ikk as a object hi agya
    res.end("Hello From Server"); //fir response ko end krdege hello from server bolkar
});*/
myServer.listen(8000,()=>console.log("Server Started"));