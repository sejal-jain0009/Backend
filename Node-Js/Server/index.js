//server kaise chlta hai wo sikha
/*const http=require("http");
const myServer=http.createServer((req,res)=>{
    //console.log("New Request Received");//pehle print krdo ki new request ai hai
    //console.log(req.headers); //req de headers mtlb req di sari info ki kitho req ai ki hai sb
    console.log(req); //req di sari info print krdo , eh ikk as a object hi agya
    res.end("Hello From Server"); //fir response ko end krdege hello from server bolkar
});
myServer.listen(8000,()=>console.log("Server Started"));*/

// ********making a web server*********
/*const http=require("http"); //http module ko import krlo
const fs=require("fs");//fs module ko import krlo file system ke liye
const myServer=http.createServer((req,res)=>{ //server create krlo aur callback function m req res do
    const log=`${Date.now()}:${req.url} New Request Received\n`; //log variable bnao request accept krne k liye ki date aye sath mein likha aye new req. recived
    fs.appendFile(`file.txt`,log,(err,data)=>{ 
//ismein append hoga pehle run krne pr file bnegi fir log 
// chlega fir callback function and fir yeh print hoga hello from server again
       
//res.end("Hello From Server Again");
switch(req.url){ //switch case lagao req.url ke liye
    case "/": res.end("Home Page");
    break;
    case '/about' : res.end("I am Sejal");
    break;
    case '/contactus' : res.end("404 ERROR not Found");
    };
});
});
myServer.listen(8000,()=> console.log("Server Started")); */

//understnding the urls
const http=require("http");
const fs=require("fs");
const url=require("url");
const myServer=http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){ //ki agr favicon aa jaye toh wo print na ho
        res.end();
        return;
    }

    const log=`${Date.now()}:${req.url} New Request Received\n`;
    const myurl=url.parse(req.url,true); //url.parse se url ko parse krlo
    //true tn likhia ehda mtlb hunda query parameter ki jo v query parameter hou ohnu pass krdo te ohdi value v dsuga
    console.log(myurl);
    fs.appendFile(`file.txt`,log,(err,data)=>{
        switch(myurl.pathname){ //ismein ab jo bhi browser mein hum likhege like /aboutmyname? ... wo bhi chl pdega aur sath mein about hai uske kaarn yahhan I m sejal print hoga
            case "/": res.end("Home Page");
            break;
            case '/about' : res.end("I am Sejal");
            break;
            case '/contactus' : res.end("404 ERROR not Found");
            break;

        };
    });
});
myServer.listen(8000,()=> console.log("Server Started"));
