const arr = [1,2,3,4,5,6,7,8,9,10,'a'];
//for loop
for(let i = 0; i < arr.length; i++){
    //console.log(arr[i]);
}
//for of loop
for(let i of arr){
    //console.log(i+5);
}
//for each loop
arr.forEach((a, b, c) =>{
    //console.log(a,b,c);
    //a will guve oaramenter b will give index and c will return all the arr 
})

const sqr = [];
arr.forEach((e) =>{
    sqr.push(e*e);
})
console.log(sqr);
//even
const even = [];
arr.forEach((e) => {
    if(e % 2 == 0) {
        even.push(e);
    }
}) 
console.log(even);

const prices = [850,205,1260,500,80]
//find the sum of all prices
//store pricess greater than 500 in a new array