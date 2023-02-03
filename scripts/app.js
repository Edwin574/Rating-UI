const ratingButton=document.querySelectorAll(".value")
const rateValue=document.getElementById("rate-value")
const button=document.querySelector(".submit")
const mainRating=document.querySelector('.main')
const thankYou=document.querySelector('.thanks')

console.log(ratingButton)

let rating=0

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
mainRating.style.display='none'
thankYou.style.display='block'
})