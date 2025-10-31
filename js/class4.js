// function sum(username = "alice"){
//     return "hello " + username;
// }
// const greeting = sum();
// console.log(greeting);

//rest parametter 
function sum(num1 , num2, ...number){
    let total = num1 + num2;
    for(let i = 0; i < number.length; i++){
        total += number[i];
    }
    console.log(total);
}
sum(1,2,3,4,5,6,7,8,9,10);


