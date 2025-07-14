// let num=prompt('Enter a number');
// if(num==6){
//     console.log("Waah bhai");
// }
// else if(num==5){
//     console.log("bhag mc");
// }
// else{
//     console.log("yolo");
// }


// let str="HELlo World"
// for(let i of str){
//     console.log(i);
// }


// let ans={
//     name:'ABhigyan',
//     age:23,
//     mummy:'love'
// };
// for(let i in ans){
//     console.log(ans[i]);
// }


// let i=2;
// let j=prompt("Enter a number");
// while(i!=j){
//     j=prompt("Try again, computer picked ",i);
// }
//     console.log("Correct!");



// let heading=document.getElementsByClassName("heading");
// console.dir(heading);


// let arr=[1,2,4,6,3]
// arr.forEach(element => {
//     console.log(element**2)
// });


// let calculateSquare = (num) =>{
//     console.log(num**2)
// };
// arr.forEach(calculateSquare)


// let newarr = arr.map(val => {
//     return val*2;
// })
// console.log(newarr);
// creates a new array from the callback function


// let arr=[1,2,4,6,3]
// let evenarr = arr.filter(val => {
//     return val%2===0;
// })
// console.log(evenarr);
// creates a new array with filtering according to the return statement in the callback function


// let output = arr.reduce((res,curr) => {
//     return res>curr?res:curr;
// })
// console.log(output);


// let marks=[97,67,32,56,99,89,90]
// let passed=marks.filter(val =>{
//     return val>=90;
// })
// console.log(passed)


// let n=prompt("Enter a number");
// let arr=[]
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// };
// let sum=arr.reduce((res,val) =>{
//     return res*val;
// })
// console.log(sum);















// Window Object - A global object declared by the browser when a webpage is opened.
// It is declared globally in our code. everything we write is a subobject of that object.


//DOM - Document Object Model
// The whole html code can be used in javascript through an object which is called Document.
// This Document is a subobject of Window Object.
// window.document has the whole html
// console.dir() gives properties and methods of special objects (like document object) (an HTML collection)

// The script tag should be added at the end of the body tag.
// If the script tag is above body tag, then the body tag is not loaded. 

















// console.log(document.getElementById("abhigyan"));
// #"tag" can be used to apply css through id

// console.log(document.getElementsByClassName("heading"));  // this returns an HTML Collection

// console.dir(document.getElementsByTagName("h1"));

// console.log(document.querySelector("h1")); //gives first element
// self assumes what we want (tag/class/id) and return the first instance of it in the code

// console.log(document.querySelectorAll("h1"));  // gives all elements
// returns a nodeList
// ALWAYS WRITE THE CLASSNAME IN QUERY SELECTOR WITH A . AT THE START ".className" AND a # for ID


// console.log(document.body.innerHTML);

//tagName - returns tag for element nodes
//innerText - returns innerText of the element
//innerHTML - returns the plain text or HTML contents in the element
//textContent - returns textual content even for hidden elements

// let divs=document.querySelectorAll(".Box");

// for(let div of divs){
//     div.innerText=div.innerText+" Fuck Off";
// }
// divs[0].innerText= divs[0].innerText+" bhag bc"
// divs[1].innerText= divs[1].innerText+" madarchod"
// divs[2].innerText= divs[2].innerText+" whatever"



















// DOM MANIPULATION

//getAttribute - to get the attribute of any value
// let p = document.querySelector("h1")
// console.log(p.getAttribute("id"));

//setAttribute - to set the value of attribute to any value
// let p = document.querySelector("h1")
// p.setAttribute("class","pupu");

//style - to set or change style of an element
// let p = document.querySelector("h1");
// p.style.color="brown";

//append - to append an element to a node which is inside the node but at the end
//preprend - t0 append at start
// let p = document.querySelector("body")
// let newButton=document.createElement("button");
// newButton.innerText="Click Me";
// p.append(newButton);
// p.prepend(newButton);

//before - to add before the node
//after - to add element after the node
// let p = document.querySelectorAll("div")
// let newButton=document.createElement("button");
// newButton.innerText="Click Me";
// p[0].before(newButton);
// p[2].after(newButton);

//remove - to remove the element
// let p = document.querySelector("div");
// p.remove();


// let newButton =document.createElement("button");
// newButton.innerText="Text me";
// newButton.style.backgroundColor="red";
// newButton.style.color="white";
// let body = document.querySelector("body");
// body.prepend(newButton);

//classList - used to get the classes of a node as a list. new classes can be added or old can be removed through it.
// let para=document.querySelector(".para");
// let classlist=para.classList.add("newClass");


// const employee = {
//     calcTax(){
//         console.log("The tax is 10%");
//     }
// }

// const Emp1 = {
//     salary: 50000,
// };

// Emp1.__proto__=employee;
// // setting the __proto__ of an object to another makes it inherit the properties of the another object.




// CLASS

// class Maruti {
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }

// let eightHundred = new Maruti();    // objects can be made with the keyword new;

































// setTimeout(() => {
//     console.log("Hell0");
// } , 2000); 


//CALLBACK 
// passing a function as parameters to another function for execution.

// function getData(DataId, nextData){
//     console.log(`getting Data ${DataId}.........`);
//     setTimeout(() =>{
//         console.log("Data, ID: ",DataId);
//         if(nextData) nextData();
//     },2000);
// }


// getData(1,()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4);
//         })
//     });
// })


//CALLBACK HELL
//Nested callbacks stacked below one another are difficult to understand and manage, they for a pyramid like structure (PYRAMID OF DOOM)
 

//PROMISES
//   let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//   })
// A promise is an object which has some states namely resolve, pending and rejected.
//when we call a function or API, it will return us a promise instead of the data at the very instant, after a while when the data
//is succefully fetched, the promise status changes from "pending" to "successful" and we can access the data then.


// function getData(dataId){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             console.log("data",dataId);
//             resolve("sucess");
//         },6000)
//     })
// }


// promise.then(() => {
//     console.log("Success");
// })
// this is executed whenever the promise got has been resolved.

// promise.catch(() => {
//     console.log("rejected");
// })
// this is executed whenever the promise got was rejected.


//PROMISE CHAINING
// getData(1)
//     .then((res) =>{
//         return getData(2); //getData(1) will return a promise of getData(2) if it is completed.
//     })
//     .then((res) =>{
//         return getData(3); //it will be executed after getData returns a sucess and calls for getData(2). this will return getData(3) promise if getData(2) is completed.
//     })
//     .then((res) => {
//         console.log(res); //executed when promise of getData(3) is completed 
//     })


//ASYNC - AWAIT
// function api(dataID){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data",dataID);
//             resolve(200);
//         },2000);
//     });
// }

// async function getWeatherData(){
//     console.log("getting data 1......");
//     await api(1);
//     console.log("getting data 2......");
//     await api(2);
//     console.log("getting data 3......");
//     await api(3);
//     console.log("getting data 4......");
//     await api(4);
//     console.log("getting data 5......");
//     await api(5);
// }

// it is a very simple and very easy to undestand code.
//await keyword is used to wait for the function to get executed to get to the next line.
//async function defines a function as it will be asynchronous in nature.
//whenever we know that a fucntion might get asynchronous due to fetching delays we declare it as async.
//await function can only be used inside an async function.
//to use async-await we have to put the code inside a function with async on its head. TO AVOID THIS:

//IIFE : IMMEDIATELY INVOKED FUNCTION EXPRESSION
//IIFE are functions which are used only once in a  program and they are immediately invoked when they are delclared.

// (async function getWeatherData(){
//     console.log("getting data 1......");
//     await api(1);
//     console.log("getting data 2......");
//     await api(2);
//     console.log("getting data 3......");
//     await api(3);
//     console.log("getting data 4......");
//     await api(4);
//     console.log("getting data 5......");
//     await api(5);
// })();































// FETCH API

url="https://catfact.ninja/facts?max_length=500&limit=3/facts"

// const getFacts = async ()=>{
//     console.log("fetching.....");
//     let response = await fetch(url);
//     console.log(response); // JSON format
// };

// AJAX - Asynchronous JS and XML 
// before modern javascript, data was sent in the format of XML but it has been replaced with JSON.
// JSON - JavaScript Object Notation

//json() - it is an asynchronous method which returns a second promise (fetch returns the first promise). It is used to convert JSON to JS object.

// const getFacts = async ()=>{
//     console.log("fetching.....");
//     let response = await fetch(url);
//     let data = await (response.json());
//     console.log(data.data[0].fact);
//     const fact = document.querySelector(".fact");
//     fact.innerText=data.data[0].fact;
// };

// let button = document.querySelector("#btn");
// button.addEventListener("click", ()=>{
//     getFacts();
// })

//HTTP verbs - GET, POST, DELETE, HEAD, PUT, CONNECT
// HEADERS - headers have some additional information  which comes with the respones or we send with the request.



