a = 77;
if(a % 7 === 0 &&  a % 11 === 0){
    console.log('divisble');
}else{
    console.log('not divisible');
}

age = 20 ;
if (age>=18){
    console.log('eligible');
}else{
    console.log(' not eligible');
}

b = 49 ;

const sqrt = b**0.5;
console.log(sqrt);
if(Number.isInteger(sqrt)){
    console.log('perfect square');
}else{
    console.log('not a perfect sqyare');
}
// wap tp print the garde according to number
marks = 100;
if(marks>= 90) {
    console.log('grade A');
}else if(marks>=70){
    console.log('grade B');
}else if(marks>=50){
    console.log('grade c');
}else{
    console.log('grade f');
}

// array in java script
const moives = ['avengers','my fault'];
//indexing
console.log(moives[3]);
//indexof tells the index
//at gives or also runs on negative indexing.
//replacing
moives[1]='your fault';
//slicing
console.log(moives.slice(2.48));
//add a elmemt
moives.push('final destination')
console.log(moives);
//for adding at last
moives.unshift('batman');
//for adding at first
console.log(moives);
//reserve an elemmnet
moives.pop();
console.log(moives);
moives.shift();
console.log(moives);
//splice
moives.splice(2,1);//removes 1 elment at index 2
//first is indexx and second is how maanuy elment to be reomved
console.log(moives);
moives.splice(2,1,'raid 2');
//deleting and adding the elmets at the sa,ne time.
console.log(moives);
moives.splice(2,0,'raid 2','black panther');//adds two new elmets at index2
console.log(moives);



