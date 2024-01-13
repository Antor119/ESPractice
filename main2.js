//Rest Parameter
function calculation(...numbers){
    let sum=0;
    for(let i of numbers){
        sum=sum+i;
        console.log(sum)
    }

}

calculation(3,4,5,23,45)