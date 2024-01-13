//es6 map
var myMap=new Map();
myMap.set('key1','Bangladesh');
myMap.set('key2','India');
myMap.set('key3','china');
myMap.set('key4','Pakisthan');
myMap.set('key5','Afganisthan');
myMap.set('key6','Oman');
myMap.set('key7','Hongkog');

// console.log(myMap.get('key6'))

//delete(), has(),get(),clear()

// for(let item of myMap.values()){
//     console.log(item)
// }

if(myMap.has('key1')){
    console.log('Yes')
}
else{
    console.log('No')
}