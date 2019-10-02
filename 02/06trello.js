const days =['Mon','Tue','Wed','Thr','Fri','Sat']


let sayHello =function () {
	console.log('Greet')
}


days.forEach(function (day,i,j) {
	// console.log(day+" "+(i+1))
	console.log(`starts with ${i+1} -- ${day} ${j}`)
}
)