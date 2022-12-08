
//Numbers cells
const numberOne_one = document.querySelector('#numberOne_one');
const numberTwo_two = document.querySelector('#numberTwo_two');
const numberOne_three = document.querySelector('#numberOne_three');
const numberThree_three = document.querySelector('#numberThree_three');
let numberTwo_one = document.querySelector('#inputTwo_one');
let numberThree_one = document.querySelector('#inputThree_one');
let numberOne_two = document.querySelector('#inputOne_two');
let numberThree_two = document.querySelector('#inputThree_two');
let numberTwo_three = document.querySelector('#inputTwo_three');

//Sums cells
const sumOne_horiz = document.querySelector('#sumOne_horiz');
const sumTwo_horiz = document.querySelector('#sumTwo_horiz');
const sumThree_horiz = document.querySelector('#sumThree_horiz');
const sumOne_vert = document.querySelector('#sumOne_vert');
const sumTwo_vert = document.querySelector('#sumTwo_vert');
const sumThree_vert = document.querySelector('#sumThree_vert');

const newBtn = document.querySelector('#newBtn');
newBtn.addEventListener('click', generateNumber);

const btn = document.querySelector('#btn');
btn.addEventListener('click', playGame);

let randomNum = [];
let numberGenerator = function(arr) {
   if (arr.length >= 9) return;
   let newNumber = Math.floor(Math.random() * 9 + 1);
   if (arr.indexOf(newNumber) < 0) {
     arr.push(newNumber);
   }
   numberGenerator(arr);
 };
  numberGenerator(randomNum);
 
 numberOne_one.textContent = randomNum[2];
 numberTwo_two.textContent = randomNum[3];
 numberOne_three.textContent = randomNum[0];
 numberThree_three.textContent = randomNum[1];

 numberTwo_one = randomNum[4];
 numberThree_two = randomNum[5];
 numberOne_two = randomNum[6];
 numberThree_one =randomNum[7];
 numberTwo_three = randomNum[8];
 
 let sumOne = randomNum[2] + randomNum[4] + randomNum[7];
 let sumTwo = randomNum[6] + randomNum[3] + randomNum[5];
 let sumThree = randomNum[0] + randomNum[8] + randomNum[1];
 let sumFour = randomNum[2] + randomNum[6] + randomNum[0];
 let sumFive = randomNum[4] + randomNum[3] + randomNum[8];
 let sumSix = randomNum[7] + randomNum[5] + randomNum[1];
 
sumOne_horiz.textContent = sumOne;
sumTwo_horiz.textContent = sumTwo;
sumThree_horiz.textContent = sumThree;
sumOne_vert.textContent = sumFour;
sumTwo_vert.textContent = sumFive;
sumThree_vert.textContent = sumSix;


function generateNumber(){
  window.location.reload();
}

function playGame(){
let inputOne = document.querySelector('#inputTwo_one').value;
let inputTwo = document.querySelector('#inputThree_one').value;
let inputThree = document.querySelector('#inputOne_two').value;
let inputFour = document.querySelector('#inputThree_two').value;
let inputFive = document.querySelector('#inputTwo_three').value;
 
if ((inputOne == numberTwo_one) & (inputTwo == numberThree_one) & (inputThree == numberOne_two) &  (inputFour == numberThree_two) &  (inputFive == numberTwo_three)) {
   Swal.fire({
      title: 'YOU WON!!!',
      width: 600,
      padding: '3em',
      background: 'rgb(249,246,171) url(image2.jpg)',
      backdrop: `
        rgba(251,233,184,0.4)
     `
    })
   //window.location.reload();
}
else{
   Swal.fire({
      icon: '',
      text: 'You have mistakes!',
      customClass: "Custom_Cancel",
      confirmButtonColor: "#944F7A"
       })
}
}

