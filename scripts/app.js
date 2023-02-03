const ratingButton=document.querySelectorAll(".value")
const rateValue=document.getElementById("rate-value")
const button=document.querySelector(".submit")
console.log(ratingButton)

let rating

ratingButton.forEach((element)=>{
    
    element.addEventListener('click',(e)=>{
        element.classList.add('value-clicked')
        let value
        value=e.target.innerText
        rating=value
    })
})

button.addEventListener('click',()=>{
rateValue.innerHTML=rating
})