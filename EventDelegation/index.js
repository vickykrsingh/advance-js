const table = document.getElementById('table')
const btn = document.getElementById('submit')

const data = {};
table.addEventListener('input',(e)=>{
    data[e.target.name]=e.target.value;
})

btn.addEventListener('click',()=>{
    console.log(data)
})