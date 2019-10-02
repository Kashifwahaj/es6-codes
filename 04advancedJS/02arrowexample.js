
const todos1 =[{
	title:'Buy Bread',
	notDone:true,
},{
	title:'Go to Gym',
	notDone:true,
},{
	title:'Record Youtube video',
	notDone:false,
},{
	title:'Get Help',
	notDone:true,
},{
	title:'Buy Stand',
	notDone:false,
},{
	title:'Finger Chips',
	notDone:false,
}]

const notDoneThings = todos1.filter((todo)=> todo.notDone===true)
 
 notDoneThings.forEach((title,index)=> console.log(title.title))