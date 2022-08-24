const $answer = document.querySelector('.answer-zone');
const $notice = document.querySelector('.notice-zone');
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
  let random = []

  for (let i=0; i<10; i++) {
    num[i] = parseInt(Math.random() * 10)
    if (random.indexOf(num[i]) === -1) {
      random.push(num[i])
    } 
  }
  console.log(random)
  answer.push(random.slice(0,4).join(''))
}


// 시도 횟수 및 사용자 입력숫자 알림
function onHit(inputNumber,setRun) {
  return `<span style="color:aqua">${hit}차</span><img src="./asstes/baseball-player.png" width="19px" height="19px"/> &emsp; ${inputNumber} &emsp; ${setRun}`
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

  return strike + '  '+ 'STRIKE' + '  '+ ball + '  '+ 'BALL'
}




function initGame(e) {
  e.preventDefault()

  if(end === true) {
    return
  }

  const inputNumber = $input.value
  const random = answer[0].toString()
  console.log(random)
  isCorrect(inputNumber, random)
  if (inputNumber.length !== digit) { 
    showAlert(`${digit}자리 숫자를 입력해주세요.<br></br>`)
  } else if (isDuplicate(inputNumber)) {
    showAlert('중복된 숫자가 있습니다.<br></br>')
  } else {
    hit++
    const output = onHit(inputNumber,setRun(inputNumber,random))
    $result.innerHTML += `<br><span>${output}</span>`
    
    if (limit <= hit && !isCorrect(inputNumber, random)) {
      showAlert('쓰리아웃!')
      end = true
    }
  }

  $input.value = ''
  $input.focus()
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

infocCloseBtn.addEventListener('click', (e) => {
  modalInfo.classList.remove('show')
})

// 게임 다시 시작
const reStartBtn = document.querySelector('.nav-restart');

reStartBtn.addEventListener('click', () => {
  window.location.reload()
})


$btn.addEventListener('click', initGame)

window.onload = () => {
  gameStart()
}