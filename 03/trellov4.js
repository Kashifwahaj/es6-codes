//const myTodos =['Buy Bread','Go to Gym','Record Youtube videos']

//console.log(myTodos[myTodos.indexOf('Buy Bread')])


const newTodos =[{
	title:'Buy Bread',
	isDone:false,
},{
	title:'Go to Gym',
	isDone:false,
},{
	title:'Record Youtube videos',
	isDone:false,
}]

// const index =newTodos.findIndex(function(todo,index1){
// 	console.log(todo)
// 	return todo.title === 'Go to Gym'
// })

// console.log(index)


// Method 1

// const findTodo = function(anyTodos,title){
// 	const index = anyTodos.findIndex(function(todo,index2){
// 		return todo.title.toLowerCase() ===title.toLowerCase()
// 	})
// 	return anyTodos[index]
// }

// console.log(findTodo(newTodos,'Buy bread'))

// Method 2

const findTodo = function(anyTodos,title){
	const titleReturned = anyTodos.find(function(todo,index3){
		return todo.title.toLowerCase()=== title.toLowerCase()
	})
	return titleReturned.title
	// return titleReturned // Your Choice what you want to return

}
console.log(findTodo(newTodos,'Buy bread'))