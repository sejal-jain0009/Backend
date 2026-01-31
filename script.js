//Things to learn :
//Fundamentals of JavaScript
//arrays and objects
//functions return
//async js coding



//alert("hello world"); //to confirm that the script is running

//arrays:
var arr2=[1,2,3,"hello",{},true,[]];
var arr=[1,2,3,4];

//1.foreach : jb apko array k hr member ko access krna ho
/*arr.forEach(function(val){
    console.log(val+"  hello");
})*/

//2.map : jb apko array k hr member ko access krna ho and new array bni ho
/*var newarr= arr.map(function(val){
    return 13;
})
console.log(newarr);*/

//3.filter : jb apko array k hr member ko access krna ho and new array bni ho but kuch condition k sath
/*var ans=arr.filter(function(val){
    if(val>=3) { return true;}
    else return false;
})
console.log(ans);*/

//4. find
/*var arr2=[1,2,2,2,3,4];
var ans=arr2.find(function(val){
    if(val===2) return val;
})
console.log(ans);
console.log(arr2.indexOf(2));
console.log(arr2.lastIndexOf(2));
console.log(arr2.indexOf(12));*/

//objects :
/*var obj={
    Name:"harsh",
    age:12
}
//2 different ways to access objects properties
console.log(obj.Name);



console.log(obj['Name']);
Object.freeze(obj);
obj.age=25;
//console.log(obj.age); //yahan updated age yaani ki 12 ki jgah 25 show krega
console.log(obj.age);*/

//functions return :
/*function abcd()
{
    return 12;
}
var ans=abcd();
console.log(ans);*/



//sync and async kya hota hai ?
//async js kya hai ?
//js is not asynchronous
//async ki poori kahani 
//single threading and multi threading
//callbacks
//promises
//then and catch
//try and catch
//async and await
// 5 use cases ekdum real world wale
//[concept aside]
//concurrency and parallelism
//throttling


//synchronous - simple code
/*console.log("hi");
console.log("hi 2");
console.log("hi 3");
console.log("hi 4");*/
//ismein line-wise sare print ho jayege

//synchronous in functions
/*console.log("hi");
setTimeout(function(){},2000);
console.log("hi 2");*/
//ismein dono lines print ho jayegi aur "hi 2" sath k sath print ho jayega hi k baad hi beech wali line apna kaam krti rhe parallely.

//asynchronous functions
/*console.log("hi");
setTimeout(function(){
    console.log("hi 2");
},2000);*/
//"hi" print ho kr fir 2000 second k baad "hi 2" print hoga uske andr . alg se kuch ni chlega

//Main-Stack and Side-Stack concept
/*console.log("hi");
console.log("hi 2");
setTimeout(function(){
    console.log("hi 3");
},0);
console.log("hi 4");*/
//pehle sare sync pass hue fir main khali hogya fir usne side ko check kiya