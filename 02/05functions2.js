let pert = function(marks,totalMarks)
{

	const percent = (marks/totalMarks) * 100
	if (percent >=90) {
		console.log('Your Grade is A and Percentage is '+percent+'%.')

	}
	else if(percent <90 && percent >=80)
	{
		console.log('Your Grade is B and Percentage is '+percent+'%.')
	}

	else if(percent <80 && percent >=70){
		console.log('Your Grade is C and Percentage is '+percent+'%.')
	}
	else if(percent <70 && percent >=60){
		console.log('Your Grade is D and Percentage is '+percent+'%.')
	}
	else if(percent <60 && percent >=50){
		console.log('Your Grade is E and Percentage is '+percent+'%.')
	}
	else{
		console.log('Your Grade is F and Percentage is '+percent+'%.')
	
	}
}

pert(65,150)
