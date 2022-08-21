const $answer = document.querySelector('.answer-zone');
const $input = document.querySelector('.input-zone');
const $result = document.querySelector('.result-zone');
const $btn = document.querySelector('.btn-zone');


let limit = 10;
let digit = 4;
let hit = 0;
let end = false;
let answer = [];

function gameStart() {
  randomNum()
}

function randomNum() {
  let num = []
  let random = ''

  for (let i=0; i<digit; i++) {
    num[i] = parseInt(Math.random() * 10)
    random += num[i]
  }

  answer.push([random])
}


// 시도 횟수 및 사용자 입력숫자 알림
function onHit(inputNumber) {
  return `<span>${hit}차 </span> ${inputNumber}`
}

// STRIKE
function getStrike(inputNumber, random) {
  let strike = 0
  const nums = inputNumber.split('')

  nums.map((num, index)=>{
    if(num === random[index]) {
      strike++
    }
  })
  return strike
}

// BALL
function getBall(inputNumber, random) {
  const nums = inputNumber.split('')
  const rans = random.split('')

  const ball = 
  nums.filter(item=>rans.includes(item))
  
  return ball.length
}

$btn.addEventListener('click', () => {

  const inputNumber = $input.value
  const random = answer[0].toString()
  console.log(random)

  if (inputNumber !== random) {
    hit++
    $result.innerHTML += `<br><span>${onHit(inputNumber)} STRIKE: ${getStrike(inputNumber, random)} BALL: ${getBall(inputNumber,random)}</span></br>`
  }
})

window.onload = () => {
  gameStart()
}