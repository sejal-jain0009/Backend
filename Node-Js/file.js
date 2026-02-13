//Lecture - 5 file handling
//const fs = require("fs");
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

//deleting files
//fs.unlinkSync("file2.txt"); //file2 is deleted

//stats
//console.log(fs.statSync("file.txt"));//yeh file ke baare mein information dega jaise size,created date,modified date etc
//console.log(fs.statSync("file.txt").isFile());//ki kya file.txt ek file hai? 



//Lec - How node.js works?
//sync program - blocking program
const fs=require("fs");
/*console.log("1");
const result=fs.readFileSync("contacts.txt","utf-8");
console.log(result);
console.log("2");*/
//yahaan pehle 1 ayega fir result print hoga fir 2 kyuki yeh sync tha

//async program - non blocking program
/*console.log("1");
const result=fs.readFile("contacts.txt","utf-8",(err,result)=>{
    console.log(result);
})
console.log("2");*/
//async mein pehle sare console.log wale print hogye that is 1 and 2 then jb bhi wo free hua usne result print krdiya

/*const os=require("os");
console.log(os.cpus().length);*///kitne cpu cores hai