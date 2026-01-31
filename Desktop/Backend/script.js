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
function abcd()
{
    return 12;
}
var ans=abcd();
console.log(ans);

