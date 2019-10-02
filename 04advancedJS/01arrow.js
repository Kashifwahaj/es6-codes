// const sayHello = function(name){
// 	return 'Hey There,'+name+ "!" 
// }
// console.log(sayHello('sammy'))


//const sayHello =(name)=> `Hey There, ${name} !`
//console.log(sayHello('sammy'))

const todos =[{
	title:'Buy Bread',
	isDone:true,
},{
	titleL:'Go to Gym',
	isDone:true,
},{
	title:'Record Youtube video',
	isDone:false,
}]

const thingsDone = todos.filter((todo)=> todo.isDone === true)


console.log(thingsDone)


//