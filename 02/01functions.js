let sayHello = function(name)
{
	console.log("Hey User "+name)
	console.log(`Hey ${name}`)
}
let John="John"

// sayHello(John)


let fullNameMaker =function(firstname,lastname)
{
	console.log('Welcome Here')
	console.log(`Happy To Have You ,${firstname} ${lastname}`)
}

// fullNameMaker('John','Doe')


let myAdder= function(num1,num2){
	let added=num1+num2
	return added
}

// console.log(myAdder(3,5))
let myMultiplier= function(num1,num2){

	return num1 * num2
}

 // console.log(myMultiplier(3,5))


//Default Parameters

 let guestUser =function(name='nulla',courseCount=0)
 {
 	return 'Hello ' +name+ ' And Your Couse Count Is ' +courseCount
 }
 // console.log(guestUser())
 // console.log(guestUser('kashif',8))

 