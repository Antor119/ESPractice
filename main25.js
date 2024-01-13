//es6 class inheritance
class Bangladesh{
    country(prams){
        console.log('Bangladesh is very small country')
    }
    country(prams){
        console.log('Bangladesh is very peachful country')
    }
}

//method overriding

class dhaka extends Bangladesh{
    country(prams){
        console.log('Bangladesh is very poor country')
    }

}

var obj=new dhaka()
obj.country();