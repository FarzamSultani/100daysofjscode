// let sim= 93;
// switch(sim){
//     case 1:
//         console.log('its USA phone number')
//         break;
//         case 93:
//             alert('Its AFG number')
//             break;
//             case 44:
//                 console.log('IDK where it is from')
//                 break;
//                 default:
//                     console.log('Invalid Number')
//}
// let i = 1;
// for( i ;i < 10;i++){
//  console.log(`5 x ${i} = ${5 * i}`);
// }

// let j = 2;
// for(j; j < 10; j++){
//     console.log(`2 x ${i}=${2 * i}`);
// }
// let person={ age:23,Fname:'jhon',lname:'david' };
// for(let x in person){
//     console.log(person[x]);
// }
// let students={name:'ali',lname:'Ahmad'};
// for(let y in students)
// {
//     console.log(students[y]);
// }
// let person={fname:'ali',Lname:'khan',Mname:'sardar'};
// for(let x in person){
//     alert(x+""+person[x])
// }

// let i=11;
// while(i<10){
//     alert(i++*2)
// }
// let=11;
// for(let i=1;i<f;i++)
// {
//    alert(4*i) 
// }
// let now=getFullYear();
// alert(now)
// let user={
//     fname:"Jhon"

// };
// alert("fsname" in user )
// let coder={
//     name:"farzam",
//     Fname:"Durmhammad",
//     profission:"Hacker",
// }
// let f;
// for(f in coder){
//     alert(f);
//     alert(coder[f]);
// }

///////////////////working on arrow Functions//////////////////

// let sum=(a,b)=>a+b;
// console.log(sum(3,2));

// let numbers = [1,2,3,4,5,6,7,8];
// let Evennumbers=numbers.filter(num => num%2===0);
// console.log(Evennumbers);
// let name =["Adib","Sahar","Jawad"] ;
// name.push("they are great");
// console.log(name);

/////////////////////////working on map , filter and reduce/////////
// let num=[1,2,3,4,5];
// let news =num.map(i => i * 2);
// console.log(news);
// let num = [1,2,3,4,5,6,7,8];
// let min=num.map(i => i - 3);
// console.log(min);
// let table = [1,2,3,4,5,6,7,8,9,10];
// let mid=table.map(i => i* 2);
// console.log(mid);

// for(let i=0; i<=10 ; i++)
// {
// console.log(`2 x ${i}=${i*2}`);
// };
// let num =[2,3,4,5,6,7,8];
// let sum=num.map( i => i*2);
// console.log(sum);
// let people =[
// {name: "Alice", age: 20},
// {name: "Farzam", age:21},
// {name: "Mohammad",age :22},
// {name : "Sardar" , age :44},
// ];
// let peoplewithage=people.map(person => ({name:person.name,age:person.age}));
// console.log(peoplewithage);
// let m= new Map();
// m.set('Name','Ahmad')
// .set('last','Sultani');
// for(let i of m.keys() ){
//     console.log(i);
// }
// const fruit = ['Apple','Pear','Peach','Avacado'];
// fruit.forEach(fruit => console.warn(fruit));
// let sum = 0;
// let numbers=[2,3,4,4,5,66];
// numbers.forEach(numbers => sum=sum+numbers)
// console.log(sum);
///////////////////////////////////Console Objects////////////////////\
// let person= "Ahamd";
// console.log(person);
// console.warn(person);
// console.error(person);

// let x = 6;
// console.assert(x==5, "error x is not equal to 5")
// console.assert(x==6, "error x is nott equal to 5")
// console.time("Time taken");
// let x = 5;
// let y = 6;
// let z = x + y;
// console.timeEnd("Time taken");
///////////////////////////////finally DOM/////////////
// // document.body.style.backgroundColor = "red";
// document.body.style.color="Blue";

// let color = prompt("Enter a color that you love");
// if (color=='night')
// {
//     document.body.style.backgroundColor="grey";
// }
// else if(color=='Day')
// {
//     document.body.style.backgroundColor="white";
// };
// let age = prompt("Please enter your age that i can identefy are you old enough");
// document.write("Hello there");
///////////////////////////////////serching for DOM////////////
// let home =document.getElementsById('ask');
// console.log(home)
////////////////////////////////////////matches, closets, contains//////////////////////
// const message = document.querySelector('.message');
// if (message.matches('.message')) {
//   console.log('The element matches the selector');
// } else {
//   console.log('The element does not match the selector');
// }
///////////////////////////////working on serching DOM/////////
// let change = () =>{
//     document.querySelector("li")[3].style.display="inline";
// }
////////////////////////practice//////////////
// let jokesArray = [
// 	"Why do programmers prefer dark mode? Because light attracts bugs.",
//   "Why do programmers hate nature? It has too many bugs.",
//   "Why did the programmer quit his job? Because he didn't get arrays.",
//   "Why did the JavaScript developer wear glasses? Because he didn't C#.",
//   "Why did the programmer go broke? Because he used up all his cache.",
//   "Why do programmers like UNIX? Because it's user-friendly, it's just very particular about who its friends are.",
//   "Why did the programmer go to the doctor? Because he had a code injection.",
//   "Why did the programmer get stuck in the shower? Because the instructions on the shampoo bottle said: lather, rinse, repeat.",
//   "Why don't programmers like nature? It has too many bugs.",
//   "Why did the programmer use Vim? Because he didn't like anything that was too mainstream.",
//   "Why did the programmer call his mother? Because he wanted to hear her byte.",
// ];
// let jokeBtn = document.getElementById("jokeBtn");
// let joke = document.getElementById("joke");
// jokeBtn.addEventListener("click", function() {
// 	let randomIndex = Math.floor(Math.random() * jokesArray.length);
// 	let randomJoke = jokesArray[randomIndex];
// 	joke.innerText = randomJoke;
// });
/////////////////////inner and outer HTML//////////////////////
// console.dir(document.getElementsByTagName("span")[0]);

// function sec(){
//   document.getElementsByTagName("H1")[0].hidden=true;
// }
// document.getElementsByClassName("secret")[0].addEventListener("click",sec);
//////////////////////Html Attirbutes/////
// let x=document.getElementById("se");
// x.setAttribute("hidden","true");
// function f(){
//   x.removeAttribute("hidden");
// }
// document.getElementsByClassName("secret")[0].addEventListener("click",f);
////////////////working on HTML Insertion method////////////
// let a= document.getElementsByTagName('div')[0];
// let div=document.createElement('div');
// div.innerHTML='<h6>Hello World</h6>';
// a.after(div);
/////////////////////////Insert Adjacent////
// let a = document.getElementById('second');
// a.insertAdjacentHTML('afterbegin','<div class="test">beforebegin</div>'); 
////////////////////////////working on changing class 
// // let f= document.getElementById('first')
// // f.classList.remove('yellow');
// console.log(first.classList.contains('yellow'));

////////////mini project Joke teller
// let jokesArray=[	"Why do programmers prefer dark mode? Because light attracts bugs.",
// "Why do programmers hate nature? It has too many bugs.",
// "Why did the programmer quit his job? Because he didn't get arrays.",
// "Why did the JavaScript developer wear glasses? Because he didn't C#.",
// "Why did the programmer go broke? Because he used up all his cache.",
// "Why do programmers like UNIX? Because it's user-friendly, it's just very particular about who its friends are.",
// "Why did the programmer go to the doctor? Because he had a code injection.",
// "Why did the programmer get stuck in the shower? Because the instructions on the shampoo bottle said: lather, rinse, repeat.",
// "Why don't programmers like nature? It has too many bugs.",
// "Why did the programmer use Vim? Because he didn't like anything that was too mainstream.",
// "Why did the programmer call his mother? Because he wanted to hear her byte.",];
// let jokebtn=document.getElementById("jokeBtn");
// let joke=document.getElementById("joke");
// jokebtn.addEventListener("click",function(){
//     let randomIndex= Math.floor(Math.random() * jokesArray.length);
//     let randomjoke = jokesArray[randomIndex];
//     joke.innerText = randomjoke;
// });
///////////creating a clock
// let a = new Date();
// let h= a.getHours();
// let m=a.getMinutes();
// let s=a.getSeconds();
// let d=a.getDate();.. 
// console.log(h,m,s,d);
///////////////////Set time out and set interval
// setTimeout(()=>{
//     console.log("Hello there");
// },3000)
// const timeout = setTimeout(greeting,3000,"hi");
// if(false){
//     clearTimeout(timeout);
// }
// function greeting(x) {
//     console.log(x);
// }
// setInterval(()=> {
//     console.log("I love you")
// },2000);
// let counter = 0;
// setInterval (count,1000);
// function count () {
// console.log(counter++);
// }
//////////////promises
// let p = new Promise((resolve, reject) => {
//     let a= 1+4;
//     if(a==2)
//     {
//         resolve('success');
//     }
//     else{
//     reject('FUCK')
//     }
// })
// p.then((message)=>{
//     console.log('It was great and sucessed'+message)
// }).catch((message)=>{
//     console.log('It was great and its failed with sin' +message)
// });
const seeing_her=false;
const not_seeing_her=false;
p = new Promise((resolve, reject) => {
    if(seeing_her==true){
        resolve('Congrats you got there and saw her but if they catch you they kill you')
    }
    else if(not_seeing_her == true){
    reject('You are saved and congrats of being alive')
    }
    else if (not_seeing_her && seeing_her == false)
    { 
        resolve('You are great now your all focus is in coding')
    }
    else
    {
        throw 'Error: You should only use this for boolean values';
    }
})
p.then((message)=>{
    console.log('It was a Sucess'+message)
}).then((message)=>{
    console.log('You are the best'+message)
})
.catch((message)=>{
    console.log('Congrats you are saved'+message)
});

