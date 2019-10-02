// const myTodos =[]

// myTodos.push('Buy Bread')
// myTodos.push('Record Videos For Youtube')
// myTodos.push('Go To Gym')

// myTodos.forEach(function(todo,index)
// {
//  console.log(`Your Task Number ${index+1} is : ${todo}`)
// })


const myTodos=[]
myTodos.unshift('Buy Bread')
myTodos.unshift('Record Videos For Youtube')
myTodos.unshift('Go To Gym')

for (var i = 0; i < myTodos.length; i++) {
	console.log(`Your Task Number ${i+1} is: ${myTodos[i]}`)
}