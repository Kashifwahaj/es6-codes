const student ={
	name:'John',
	age:23,
	isActive:true,
}

// Convert this object into string for local Storage

const studentObjToString = JSON.stringify(student);
console.log( typeof studentObjToString)
console.log( typeof student)
console.log(studentObjToString)

//localStorage.setItem('hey',studentObjToString);

const toJSONStudent = JSON.parse(studentObjToString)


console.log( typeof toJSONStudent)
console.log( typeof toJSONStudent)
console.log(toJSONStudent)