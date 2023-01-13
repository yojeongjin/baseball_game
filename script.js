const $answer = document.querySelector('.answer-zone');
const $notice = document.querySelector('.notice-zone');
const $result = document.querySelector('.result-zone');
const $btn = document.querySelector('.form__button');
const $formInput = document.getElementsByClassName('form__input');
const $trFirst = document.querySelector('.tablerow-first');
const $trSecond = document.querySelector('.tablerow-second');
const $trThird = document.querySelector('.tablerow-third');
const $strike = document.getElementsByClassName('tablerow-second')[0];
const $ball = document.getElementsByClassName('tablerow-third')[0];

let limit = 9;
let digit = 4;
let hit = 0;
let end = false;
let answer = [];
let isModal = false;

function gameStart() {
  randomNum()
}

function randomNum() {
  let num = []
  let random = []

  for (let i=0; i<10; i++) {
    num[i] = parseInt(Math.random() * 10)
    if (random.indexOf(num[i]) === -1) {
      random.push(num[i])
    } 
  }
  answer.push(random.slice(0,4).join(''))
}


const form = document.getElementsByClassName('input-wrapper')[0]
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const num3 = document.getElementById('num3')
const num4 = document.getElementById('num4')

form.addEventListener('keyup', function(e) {
  if(end === true) {
    return
  }
  
  if (isModal === true) {
    let timer = setTimeout(() => {
      isModal = false
    },10)
  }

  const regExp = /[^0-9]/g;

  if (regExp.test(e.target.value)) {
      e.target.value = "";
  }

  if(e.target.value.length === 1 && e.target.nextElementSibling) {
    e.target.nextElementSibling.focus()
  }

  if(e.code === 'Enter' && isModal === false) {
    checkInput()
    console.log(hit, limit)
  }
})

$btn.addEventListener('click', checkInput)

function checkInput() {
  const inputNumber = [num1.value, num2.value, num3.value, num4.value].join('')

  if (inputNumber.length !== digit) { 
    isModal = true;
    return showAlert(`${digit}자리 숫자를 입력해주세요.`)
  } else if (isDuplicate(inputNumber)) {
    isModal = true;
    return showAlert('중복된 숫자가 있습니다.')
  } 

  checkResult()
}

// 시도 횟수 및 사용자 입력숫자 알림
function onHit(inputNumber,setRun) {
  return `
  <span>${hit}회</span> ${inputNumber} ${setRun}`
}

// 중복 숫자 확인
function isDuplicate(inputNumber) {
  return [...new Set(inputNumber.split(''))].length !== digit
}

// alert 메시지 출력 
const modalAlert = document.querySelector('.modal-content');
const titleAlert = document.querySelector('.modal-alert-title');

function showAlert(alertMsg) {
  titleAlert.innerHTML = `<span style="color: #33cc33">📢 ${alertMsg}</span>`

  modalAlert.classList.add('show')

  for (let i=0; i < digit; i++) {
    $formInput[i].value = ''
  }
  num1.focus()
}

// 유효성 확인 
function isCorrect(inputNumber, random) {
  return inputNumber === random
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
  let ball = 0
  const nums = inputNumber.split('')
  const rans = random.split('')

  for (let i=0; i<digit; i++) {
    if(random.indexOf(nums[i]) !== -1 && rans[i] !== nums[i]) {
      ball++
    }
  }
  return ball
}

// result 출력
function setRun(inputNumber, random) {
  
  if (isCorrect(inputNumber, random)) {
    end = true
    $answer.classList.add('is-show')
    $notice.classList.add('show')

    return 'HOME RUN'
  }
  
  const strike = getStrike(inputNumber, random)
  const ball = getBall(inputNumber, random)

  return 'STRIKE' + '  ' + strike + '  '+ 'BALL'+ '  ' + ball 
}


function checkResult() {
  const inputNumber = [num1.value, num2.value, num3.value, num4.value].join('')
  const random = answer[0].toString()

  if(end === true) {
    return
  }
  hit++
  const strike = getStrike(inputNumber, random)
  const ball = getBall(inputNumber, random)

  const output = onHit(inputNumber,setRun(inputNumber,random))
  $result.innerHTML += `<span>${output}</span>`
  $strike.getElementsByTagName("td")[`${hit}`].innerHTML = `<td>${strike}</td>`
  $ball.getElementsByTagName("td")[`${hit}`].innerHTML = `<td>${ball}</td>` 

  if (limit <= hit && !isCorrect(inputNumber, random)) {
    end = true
    return showAlert('쓰리아웃!')
  }

  for (let i=0; i < digit; i++) {
    $formInput[i].value = ''
  }
  num1.focus()
}

// info-modal창 열기
const navinfo = document.querySelector('.nav-info');
const modalInfo = document.querySelector('.modal-info')

navinfo.addEventListener('click', () => {
  modalInfo.classList.add('show')
})

// alert창 닫기
const modalCloseBtn = document.getElementById('modal-alert-close');

modalAlert.addEventListener('click', (e) => {
  if (e.target === modalAlert || e.target === modalCloseBtn) {
    modalAlert.classList.remove('show')
  }
})

const infocCloseBtn = document.querySelector('.info-close');

infocCloseBtn.addEventListener('click', () => {
  modalInfo.classList.remove('show')
})

// 게임 다시 시작
const reStartBtn = document.querySelector('.nav-restart');

reStartBtn.addEventListener('click', () => {
  window.location.reload()
})


function settingTr() {
  for(let i=1; i<limit+1; i++) {
    $trFirst.innerHTML +=  `<th scope="col">${i}</td>`
  }
  for(let i=1; i<limit+1; i++) {
    $trSecond.innerHTML +=  `<td class="tabledata__data"></td>`
  }
  for(let i=1; i<limit+1; i++) {
    $trThird.innerHTML += `<td class="tabledata__data"></td>`
  }
}

document.addEventListener('keydown', (e) => {
  if(e.code === 'Enter' && isModal === true) {
    modalAlert.classList.remove('show')
  }
})

window.onload = () => {
  gameStart()
  settingTr()
}