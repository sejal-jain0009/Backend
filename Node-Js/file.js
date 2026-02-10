//Lecture - 5 file handling
const fs=require("fs");
//fs.writeFileSync("./file.txt","Hi hello");//sync call

//fs.writeFile("./file.txt","Hi hlo",(err)=>{})//async call

/*const result=fs.readFileSync("contacts.txt","utf-8");//sync hai direct return ho jayegi value
console.log(result);*/

/*fs.readFile("contacts.txt","utf-8",(err,result)=>{//yeh async hai ismein do condition ayegi ek toh error ayega aur durse mein result mein value return krega
    if(err){
        console.log("error",err);
    }
    else{
        console.log(result);
    }
})*/

//appending data in file
//fs.appendFileSync("file.txt",new Date().getDate().toLocaleString());
//fs.appendFileSync("file.txt",`${Date.now()}Hi There\n`);

//copying files
//fs.cpSync("./file.txt","file2.txt");

