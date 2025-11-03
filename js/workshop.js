// task 1
// const isOdd = num => num % 2 !== 0;

// console.log(isOdd(5));  // Output: true
// console.log(isOdd(4));  // Output: false
// const isOdd = num => num%2 !==0;
// console.log(isOdd(7));

// task 2
// const greet = name => "Hello, " + name + "!";
// const add = (a, b) => a + b;
// const isEven = num => num % 2 === 0;

// task 3
// const user = "Rishabh"
// const points = 120;
// const massege = "Hey" +user+ "you have" + points + "points";
// console.log(massege);

// task 4
// const person = {
//     name: "Rishabh",
//     lastname: "Sharma",
//     age: 16,

//     // Method to calculate birth year and return the introduction
//     introduction: function() {
//         const birthyear = 2025 - this.age;  // Dynamically calculate birth year
//         return `My name is ${this.name} ${this.lastname} and my birth year is ${birthyear}`;
//     }
// };

// // Calling the method using dot notation
// console.log(person.introduction());

// task 5/
// const arr = ["apple", "banana", "cherry"];
// // const firstfruit = arr[0];
// // const secondfruit = arr[1];
// const [firstfruit, secondfruit, thirdfruit] = arr;
// console.log(firstfruit);  
// console.log(secondfruit); 
// console.log(thirdfruit); 


// task 6
//rest opration
// const arr = [1, 2, 3, 4, 5 ,6,7,8,9];
// const arr2 = [10,11,12,13,14];
// const combinedarr = [...arr, ...arr2]; // spraid opration
// console.log(combinedarr);
// const [first, second, ...rest] = arr;
// console.log(first);
// console.log(second);
// console.log(rest); 


// task 7
// const name = "Rishabh";
// const age = 16;
// const person ={name,age};

// task 8 setTimeout
// console.log(30);
// console.log(20);
// console.log(10);
// setTimeout(() =>  console.log("hello") , 2000);
// console.log(50);

// task 9 setInterval
let count = 0;
const intervalId = setInterval(() => {
    console.log("Count:", count);
    count++;
    if (count > 10) {
        clearInterval(intervalId); // Stop the interval after count exceeds 5
    }}, 1000);

// task 10 ternary opration
let age = 16;
if(age>=12 && age<=19){
    console.log("you are teen");
}
else{
    console.log("you are not teen");
}
 