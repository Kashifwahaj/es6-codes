// let numOne = 22
// let numTwo = 7

// result = 22/7
// console.log(result.toFixed(2))



// let floatRes=result.toFixed(2)
// console.log(Math.floor(floatRes))
// console.log(Math.ceil(floatRes))

// //This Is Code for Dice Rolling

// let m=(Math.random()*10).toFixed(0);


// while(true)
// {
// 	if(m<=6 && m>0)
// 	{
// 		console.log(m)
// 		break
// 	}

// 	 m=(Math.random()*10).toFixed(0);

// }

// Offical Way To Generate Dice Random Value
let upper = 6
let lower = 1

let myRandom =Math.floor(Math.random() * (upper - lower + 1)) + lower;
console.log(myRandom)



// console.log(Math.random() * 10+1)