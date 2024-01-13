//es6 class constructor
//auto call for constructor
//not return constructor
//only class for only constructor 
class myClass{
    constructor(a,b){
        // console.log(a+b)
        // console.log('My First Constructor')
        this.firstNum=a;
        this.secondNum=b;
    }

    add(){
        let result=this.firstNum+this.secondNum;
        console.log(result)
    }
}
var obj=new myClass(20,45);
obj.add();