let myTodos={
	day:'Monday',
	meetings:0,
	meetDone:0,

	addMeeting: function(num){
		this.meetings =this.meetings +num
	},

	summary:function()
	{
		return `You Have ${this.meetings} meetings today`
	}
}
myTodos.addMeeting(4)

console.log(myTodos.summary())



// Assignment
// handle meetdone and reset
// let myTodosTwo={
// 	day:'Monday',
// 	meetings:0,
// 	meetDone:0,

// 	addMeeting: function(num){
// 		this.meetings =this.meetings +num
// 	},

// 	summary:function()
// 	{
// 		return `You Have ${this.meetings} meetings today and You Have Done ${this.meetDone} meetings`
// 	},
// 	meetingDone:function(num1){
// 		this.meetDone =this.meetDone + num1
// 		this.meetings =this.meetings - num1
// 	},
// 	reset:function(){
// 		this.meetDone =0
// 		this.meetings =0
// 	}

// }
// myTodosTwo.addMeeting(4)
// myTodosTwo.meetingDone(3)
// myTodosTwo.reset()
// console.log(myTodosTwo.summary())
 