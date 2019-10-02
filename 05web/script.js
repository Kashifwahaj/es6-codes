//const myPElements = document.querySelector('p')
// myPElements.textContent='I am Js'
//
//
//     

//
//const myPElements = document.querySelectorAll('p')
//
//myPElements.forEach((p)=> p.remove() )



//console.log(document.title)

//document.title='I Got Changed'

//console.log(document.getElementById('idone'))

const myElement =document.querySelectorAll('#idone')
console.log(myElement[0])


const newPara = document.createElement('p')
newPara.textContent='I am New'

document.querySelector('body').appendChild(newPara);


document.querySelector('button').addEventListener('click',(event)=>{
    event.target.textContent='I was clicked';
})

document.querySelector('#inp').addEventListener('input',(event)=>{
    document.querySelector('#idone').textContent=event.target.value;
})
