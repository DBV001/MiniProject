// var a=10;
// console.log(a);
// const d=prompt("What is your name"); //taking input from user
// const d=document.getElementById("hello");
// d.innerHTML="Now look it is Bye";
// document.getElementById('hello').innerHTML="Hey fork! Your age is:"+d;  

// //creating a funciton
// function fun(){
//   console.log(alert('This is function'));
// }
// fun(); //calling a funciton

//argumnet
// function greeting(name){
//   console.log("Your name is : "+name);
// }

// var name=prompt("What is your name")
// greeting(this.name);


//Datatypes
// let  name="Dharmesh"; //string
// let age=24; //number
// let condition=true; //boolean value
// let x; //undefined
// let y=null; //value null
// let object={first:'one',second:'Two'}; //object
// let arr=['Apple' ,'Banana','Cauliflower','Dumb']; //array

// let string="Dharmesh\nVishwakarma"; //\n is for new line
// console.log(string);
// console.log(string.split("")); //split each chracter of String by a single character

//Array
// let fruits=['Apple','banana','cankg','Dumb']; //first way of creating array
// let fal=new Array('Hello','Bye','Goodbye','Goodnight','nigh'); //second way of creating array
// console.log(fal[2]);
// for(let i=0;i<fruits.length;i++){
//   console.log(fruits[i]);
// }

//Array common methods
// console.log(fruits.toString()); //convert array into string
// console.log(fruits.join('*')) //join it by *
// console.log(fruits.pop(),fruits); //removes last item and appends
// console.log(fruits.push('berries'),fruits); //push into lat item and appends
// console.log(fruits.shift()); //remove first element
// fruits.unshift('Kiwi'); //add at the element at first position
// console.log(fruits); 
// console.log(fruits.concat(fal)); //will commbine both th array fruits and fal
// console.log(fruits.concat(fal).reverse()); //concat then reversing the order of array 
//console.log(fruits.sort());

// let num=[4,2,1,5,4,8,7,6,2,4,8,66,3,1];
// console.log(num.sort()); //sort array in ascending order
// console.log(num.sort(function(a,b) {return a-b})); //same as above
// console.log(num.sort(function(a,b) {return b-a})); //sort in descending order

// let emptyarr=new Array();
// for(let i=0;i<fruits.length;i++){
//   emptyarr.push(fruits[i])         //taking e;emnets from fruits and putting in emptyarr
// }
// console.log(emptyarr);

//object
// let student={fname:'Dharmesh',
//               lname:'Vishwakarma',
//               age:24,
//               myinfo: function(){
//                 return this.fname+'\n'+this.lname+'\n'+this.age;
//               }
// };
// console.log(student.fname);
// student.fname="Rajesh"
// console.log(student.fname);
// console.log(student.myinfo());
function ageindays(){
var age=prompt("What is you age");
var ageindays=age*365;
var h1=document.createElement('h1');
var textanswer=document.createTextNode('You are :'+ageindays+" days old");
h1.setAttribute('id','ageindays');
h1.appendChild(textanswer);
document.getElementById('result').appendChild(h1);
}
function reset(){
  document.getElementById('ageindays').remove();
}