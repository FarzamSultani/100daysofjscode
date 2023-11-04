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
console.time("Time taken");
let x = 5;
let y = 6;
let z = x + y;
console.timeEnd("Time taken");

