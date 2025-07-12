let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let winner = document.querySelector('.winner');

let O_turn=true;

winning_patterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box) =>{
    box.addEventListener("click",(e) =>{
        if(O_turn){
            box.innerText='O';
            O_turn=false;
        }
        else{
            box.innerText='X';
            O_turn=true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () =>{
    winning_patterns.forEach((pattern) =>{
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!='' && val2!='' && val3!=''){
            if(val1==val2 && val2==val3){
                winner.innerHTML=`<h3>Winner is ${val1}</h3>`;
                winner.style.display="block";
            }
        }
    })
}

reset.addEventListener("click",(e) =>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText='';
        winner.style.display="none";
    })
});