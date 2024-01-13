//es6 super keyword

class Bangladesh{
    country(prams){
        console.log('Bangladesh is very small country')
    }
    country1(prams){
        console.log('Bangladesh is very peachful country')
    }
}

//method overriding

class dhaka extends Bangladesh{
    demo(){
        super.country();
        super.country1();
    }

}

var obj=new dhaka()
obj. demo();