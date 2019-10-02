var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem)
 var removeButton=document.getElementById('remove')
 removeButton.addEventListener('click',removeItem)
var ul=document.getElementById('list')
var li;

var contsa =document.getElementsByClassName('controls');
var po=document.createElement('p');
			po.textContent='Enter Your Todo';
			
function addItem()
{
	var input = document.getElementById('input');
	var item =input.value;
	ul = document.getElementById('list');
	var textNode=document.createTextNode(item)
	
	if(item === '')
		{
			
			contsa[0].appendChild(po);
			return false
		}
	else
		{
			//create li
			li=document.createElement('li');
			
			// Create checkbox
			var checkbox =document.createElement('input');
			checkbox.type='checkbox';
			checkbox.setAttribute('id','check');
			// create label
			var label =document.createElement('label');
			//label.setAttribute('for','item');
			
			// Add these on web page
			ul.appendChild(li);
			li.appendChild(checkbox);
			label.appendChild(textNode)
			li.appendChild(label)
			ul.insertBefore(li,ul.childNodes[0]);
			
			setTimeout(()=>{
				li.className='visual';
			},2);
			input.value=''
			contsa[0].removeChild(po);
			}
	
	
}
function removeItem()
{
 li=ul.children
	for(let index=0;index <li.length;index++)
		{
			while(li[index] && li[index].children[0].checked){
				ul.removeChild(li[index])
			}
		}
}