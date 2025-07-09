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
    console.log(a,b,c);
    //a will guve oaramenter b will give index and c will return all the arr 
})