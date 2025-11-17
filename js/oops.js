const person = function(name , age){ //scoping , this keyword, hosting
this.firstname = name;
this.age = age;
};
person.prototype.introduce = function(){
    console.log("hi my name is ${this.firstname} , and my age ${this.age}")
};
const person1 = new person("rishabh", 18);
console.log(person1);
person1.introduce();
const person2 = new person("rahul", 20);
console.log(person2);
person2.introduce();
