//localStorage.setItem('hero','thor');
//localStorage.setItem('todo','Buy Ice Tea');
//localStorage.clear();
//var her=localStorage.getItem('hero');
//
//console.log(her)
//localStorage.removeItem('hero')
//
// her=localStorage.getItem('hero');
//console.log(her)
//


localStorage.setItem('todo','Buy Ice Tea');
localStorage.setItem('hero','thor');
function get1(){
var gt=document.getElementById('one').value;
localStorage.setItem('he',gt);
document.getElementById('check').innerHTML=localStorage.getItem('he');
}
document.getElementById('check').innerHTML=localStorage.getItem('he');
document.getElementById('one').value=localStorage.getItem('he');

