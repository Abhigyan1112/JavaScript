// let btn2=document.querySelector("#btn2");
// btn2.ondblclick = () =>{
//     console.log('button was double clicked'); alert('What the fuuuuuuck');
// };

// for Event handling, javascripting event handling has higher priority than inline handing
// in javascript, you cannot handle the same event twice in the file. Else it gets overwritten.

//EVERY EVENT HAS A SPECIAL OBJECT CALLED THE EVENT OBJECT WHICH HAS DETAILS ABOUT THE EVENT, denoted by e

//  btn2.ondblclick = (e) =>{
//     console.log(e);
//  }
// e.target - tells on which element the event had occured, also tells its id (gives html collection)
// e.type - tells the event type (ondblclick,onclick,alert,etc)
// e.clientX - gives X cordinate of the element on which event occured.
// e.clientY - gives Y cordinate of the element on which event occured.


















// EVENT LISTENERS
// event listeners can be used to add mulitple event handlers on the same event.
//node.addEventListener(event,callback)
//node.removeEventListener(event,callback)  same function should be used in remove. The same reference not the same text. Store the callback function in a variable before adding event listener if you think it would be needed to be removed.

// let bt2=document.querySelector("#btn2");
// bt2.addEventListener("click",(e)=>{
//     console.log("btn2 was clicked");
// })


















let button=document.querySelector("#mode");
let currMode="light";
let body=document.querySelector("body");

button.addEventListener("click", () =>{
    if(currMode==="light"){
        currMode="dark";
        body.style.backgroundColor='black';
    } 
    else{
        currMode="light";
        body.style.backgroundColor='white';
    }
    console.log(currMode);
})
