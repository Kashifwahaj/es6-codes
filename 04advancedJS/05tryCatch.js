const convertToRs =(dollar)=> {
	if (typeof dollar === 'number') {
		return dollar * 64
	} else{
		throw Error('Amounts Needs To Be In Number')
	}
}



try
{
const myValue = convertToRs('five')
console.log(myValue)
}
catch(error)
{
	console.log(error)
}

console.log('i will not run')
