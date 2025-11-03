// an arrya in a java script is a data type / structure that can hold multiple values in a time
// const a =[1, 2, 3 ,4 ,5, "six", "seven", "eight", "nine", "ten", 1.2 , rishabh];
// const b = new Array(8).fill("hello");
// console.log(b);
// a[5]=20;
// console.log(a);

// const fruits = ["apple", "banana", "orange"];
// console.log(fruits);

// const a = [1,2,3,4,5,5,5,0];
// console.log(a.length);

// const a = [1,2,3,4,5,6,7,8,9,10];
// a[a.length] = 11;
// a[6] = 190;
// a.push(12);
// a.push(13);
// const poppedValue = a.pop();
// console.log("Popped Value:", poppedValue);
// a.unshift(0);
// a.shift();
// console.log(a);

// const a = [1,2,3,4,5,6,7,8,9,10];  
// const b = [11,12,13,14,15];
// const c = a.concat(b);
// console.log(c);

// java script function are first class citizens


// callback function                                                                                      
const a = function(x, y){
    return 'ab';
};

const printer = function(fn){
    console.log(fn());
};
printer(a);