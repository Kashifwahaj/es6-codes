const cameras ={
	price:600,
	weight :2000,
	myDes:()=>{
		return `This Canon camera id of ${this.price}`
	}
}

console.log(cameras.myDes())



// Redux Tip
// const func =()=>({key:'value'})