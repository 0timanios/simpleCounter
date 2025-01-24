const decrease = document.getElementById('decreaseButton')
const reset = document.getElementById('resetButton')
const increase = document.getElementById('increaseButton')
const countLabel = document.getElementById('countNumber')

let count = 0;

increase.addEventListener('click',()=>{
    count++;
    countLabel.textContent= count;
})
decrease.addEventListener('click',()=>{
    count--;
    countLabel.textContent= count;
})
reset.addEventListener('click',()=>{
    count=0;
    countLabel.textContent= count;
})