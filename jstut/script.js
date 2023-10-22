// 1 .... adding value to const object

// const stu ={
//     name : "farzam",
//     age:20,

// }

// stu.fitness= "karim caoch";
// console.log(stu);
// stu.name="sami sardarzai"
// stu.fitness="sami"
// stu.fname="javad";
// console.log(stu);

//2 .... Making a dic

// const words = {
//     ketab:"book",
//     dastan:"story",
 
//   };

//    //how to call

//  console.log(words["dastan"]);  

//3.... ternary operators

// const age = 22;
// const dofitness = age >= 22 ? "yes do 2 times in a day" : "no do not do fitness";
// console.log(dofitness); // "Beer"

//4... JUST FOR PARSINT 

// let a = prompt("Hey whats you age?");

// //homework
// a = Number.parseInt(a); // Converting the string to a number

// if(a<0){
//   alert("This is an invalid age");
// }
// else if(a<9){
//   alert("You are a kid and you cannot even think of driving");
// }
// else if(a<18 && a>=9){
//   alert("You are a kid and you can think of driving after 18");
// }
// else{
//   alert("You can now drive as you are above 18");
// }
// console.log("Done")

// console.log("You can", (a<18? "not drive" :"drive"))

/////////////////////////////////////////////////Practices//////////////////////////////////////////////////////
// const name = "Farzam";
// const Hobby =" programming";

// console.log("My name is " +name+ "and my best hobby is" +Hobby);

// {
//     const age = 23;
//     const birth = 1388;
//     console.log("I am "+ age + "old and i born in " +birth);
// }

////working with objects //////////

// const Bio = {
//     Name: "farzam",
//     age: 23,
//     I_love_coding: true,
//     secrets:undefined,
// };
// alert(Bio["Name"]);
// alert(Bio.age);
// alert(Bio["secrets"]);

///////////////////////////////
// console.log("opreators");
// let a = 10;
// let b = 20;

// console.log(a + b)
// console.log(a - b)
// console.log(a % b)
// console.log(a ** b)
// console.log(a / b)
// console.log(a--)
// console.log(a++)
// console.log(++a)
// console.log(--a)
//////////////////////////////////If else statments/////////////////////////
let a = prompt("HI there how old Are you");

if (a=0){
    alert("INVILED number");
}
else if(a<9){
    alert("You are a kid and you cannot even think of driving");
  }
else if(a<18 && a>9) {
alert("your Just a kid beat it now");
}
else 
{
    alert ("Welcome to the Real world");
};



