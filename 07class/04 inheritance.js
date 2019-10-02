
class User{
	constructor(firstname,lastname,credits){
		this.firstname=firstname;
		this.lastname=lastname;
		this.credits=credits;
	}
	getFullName(){
		return `${this.firstname} ${this.lastname} is my full name`;
	}
	editName(newname){
		const myname = newname.split(' ');
		this.firstname=myname[0];
		this.lastname=myname[1];
	}
	//Make A function for middle name 
}


class Teacher extends User{
	constructor(firstname,lastname,credits,subject){
		super(firstname,lastname,credits);
		this.subject =subject;
	}
	
	getFullName(){
		
		return `${this.firstname} ${this.lastname} have subject ${this.subject}`;
	}
}




const john =new 
Teacher('John','andreson',34,'python');
console.log(john.getFullName());
john.editName('sam joe');
console.log(john.getFullName());
