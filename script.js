const $answer = document.querySelector('.answer_zone');
const $input = document.querySelector('.input_zone');
const $result = document.querySelector('.result_zone');
const $btn = document.querySelector('.btn_zone');


const baseball = {
  limit: 10,
  digit: 4,
  hit: 0,
  end: false
}

let { limit, digit, hit, end } = baseball


const randomNum = () => {
  let num = []
  let random = ''

  for (let i=0; i<digit; i++) {
    num[i] = parseInt(Math.random() * 10)
    random += num[i]
  }
  return random
}


const onHit = (inputNumber) => {
  return `<span>${hit}차 </span> ${inputNumber}`
}

const getStrike = (inputNumber, random) => {
  let strike = 0
  const nums = inputNumber.split('')

  nums.map((num, index)=>{
    if(num === random[index]) {
      strike++
    }
  })
  return strike
}

const getBall = (inputNumber, random) => {
  const nums = inputNumber.split('')
  const rans = random.split('')

  const ballnum = nums.concat(rans)

  const findballs = ballnum => ballnum.filter((item, index) => ballnum.indexOf(item) !== index)
  const ball = findballs.length
  
  return ball
}


$btn.addEventListener('click', ()=>{
  const inputNumber = $input.value
  const random = randomNum()
  console.log(random)

  
  if (inputNumber !== random) {
    hit ++
    $result.innerHTML += `<br><span>${onHit(inputNumber)} STRIKE: ${getStrike(inputNumber, random)} BALL: ${getBall(inputNumber,random)}</span></br>`
  }

})