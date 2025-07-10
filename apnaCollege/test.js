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




















