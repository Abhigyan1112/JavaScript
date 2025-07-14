const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const selects = document.querySelectorAll(".select-container select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector("form #from");
const toCurr = document.querySelector("form #to");
const msg = document.querySelector(".msg");


for (let select of selects){
    for (code in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=code;
        newOption.value=code;
        if(select.id==="from" && code==="USD"){
            newOption.selected="selected";
        }
        if(select.id==="to" && code==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt) =>{
        updateFlag(evt.target);
    })
}

const updateFlag = (element) =>{
    let currencyCode=element.value;
    let countryCode = countryList[currencyCode];
    let newImageSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newImageSrc;
}

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    if(amount.value === "" || amount.value <=0){
        amount.value="1";
    }
    let value=amount.value;
    const url = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(url);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

    let finalAmount = value * rate;
    msg.innerText = `${value} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
})

