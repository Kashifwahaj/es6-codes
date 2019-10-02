var john = {
	name:'I am john',
	age :24,
	isActive:true,
}

var marry = {
	name:'I am marry',
	age:23,
	isActive:true,
}

var sam = {
	name:'I am sam',
	age:29,
	isActive:false,
}


let users = new Map()

// console.log(typeof users)

users.set('john',john)
users.set('marry',marry)
users.set('sam',sam)

// console.log(users.size)
// console.log(users.get('john'))
// console.log(users.keys())
// console.log(users.values())


// for (const key of users.values() ){
// 	console.log(key.name)
// }

for (const [key,value] of users.entries() ){
	console.log(key+"="+value.name)

}


users.forEach((value,key)=>console.log(key+"="+value.name))


var arrofArr=[['one','1'],['two','2'],['three','3']]

var newMap = new Map(arrofArr)

console.log(newMap)


