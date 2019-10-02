function myVal()
{
    let myValue = document.getElementById('myform').value;
    if(isNaN(myValue) || myValue < 1 || myValue >20 ){
        console.log('not a valid')
    }
    else{
console.log('good')}
}



document.querySelector('.myf').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.user.value);
    event.target.user.value=''

})