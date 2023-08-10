"use strict";

// window.onbeforeunload = () => true;            /////    Brauzerdan chiqishni so'raydi



//////////////////////////////////////////////


// function move(event) {
//   const ball = document.getElementById("ball");
//   ball.style.left = event.pageX + "px";
//   ball.style.top = event.pegeY + "px";
// }
// document.addEventListener("mousemove", move);
// document.addEventListener("touchmove", move);





// function

// function b(x, y, a,) {
//   arguments[2] = 10;
//   alert(a)
// }
// b (1,2 ,3);

// console.log(false  == undefined);
// console.log(false == null);
// console.log(null == undefined);

// let x = 3;

// function fn() {
//   x = 10;
//   return;
//   functionx() {}
// }

// fn()
// console.log(x);


// const numbers = [1,2,3,4,5];
// const[y] = numbers;
// console.log(y);



////////////////////





// let text = document.querySelector('.text');
// text.title = "JavaScript";
// // text.style.cssText = 'color:red; padding:20px; background-color: yellow;';
// console.log(text.title);


// function addStyle() {
//   text.style.backgroundColor = "yellow";
//   text.style.padding = "20px";
//   text.style.color = "blue";
// }
// btn.onclick=addStyle




// let h1 = document.querySelector("h1");

// h1.title = "salom";

// console.log(h1.style.color = "green");




////////////////////////////////////





// let card=document.querySelector('.card');


// card.addEventListener('mouseover', () => {

//   console.log('is working over');
//   card.style.backgroundColor = "green";
// })



// card.addEventListener('mouseout', () => {

//   console.log('is working out' );
//   card.style.backgroundColor = "white";
// })



// //////////////////////////





// card.addEventListener('mousedown', () => {

//   console.log('is working down');
//   card.style.backgroundColor = "blue";
// })



// card.addEventListener('mouseup', () => {

//   console.log('is working up' );
//   card.style.backgroundColor = "aqua";
// })




// window.addEventListener('click',(e)=>{
//   console.log(e.target);
//   e.target.style.display="none";
// })


/////////////////////////////////////





// let card = document.querySelector('card');
// let userinput = document.querySelector('#username');
// let message = document.querySelector('#message');
// let light = document.querySelector('#light'),
//   night = document.querySelector('#night');



// userinput.addEventListener('focus', (e) => {
//   console.log('focused');
//   e.target.style.border = "3px solid green";
// })

// userinput.addEventListener('blur', (e) => {
//   console.log('blured');
//   e.target.style.border = "3px solid red"
// })

// userinput.addEventListener('mouseover', (e) => {
//   console.log('blured');
//   e.target.style.border = "3px solid red"
// })




///////////////////////////////////





let card = document.querySelector('card');
let userinput = document.querySelector('#username');
let message = document.querySelector('#message');
let light = document.querySelector('#light'),
  night = document.querySelector('#night'),
  login = document.querySelector('#login');


// selectGroup.addEventListener('change', (e) => {
//   console.log(e.target.value);
// })

// userinput.addEventListener('input', (e) => {
//   console.log(e.target.value);
//   message.textContent = e.target.value;
// })

light.addEventListener('input', () => {
  document.body.style.backgroundColor = '#fff'
})

night.addEventListener('input', () => {
  document.body.style.backgroundColor = '#000'
})

login.addEventListener('sumbit', () => {
  console.log(e);
  e.preventDefault();
  console.log('login');
})






window.addEventListener('DOMContentLoaded',()=>{
  alert('document succesfully loaded');            //// Ma'lumot yuklanganini bildiradi
})