let arr=['Hello JavaScript']
let vowels=['A','E','I','O','U','a','e','i','o','u']
console.log('Vowels in give string are:')
let count=0;
for(let i of arr){
    for(let j of vowels){
        if(i==j){
            console.log(i);
            count++;
        }
        
    }
    console.log("total number off vowels are:", count);
}