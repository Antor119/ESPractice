//es6 set
//but is does not conatain duplicate
//set is a collection data
//clear(),delete(values),has(values),values(),set,size
var mySet=new Set();

mySet.add('Bangladesh');
mySet.add('Srilanak');
mySet.add('Oman');
mySet.add('Canada');
mySet.add('Pakisthan');



// console.log(mySet.values())
if(mySet.has('Bangladesh')){
    console.log('Yes')
}
else{
    console.log('No')
}