;(()=>{

  const get = (target) => document.querySelector(target)

  const init = () => {
    get('form').addEventListner('submit', (event) => {
      palyGame(event)
    })
  }

  const basball = {
    limit: 10,
    digit: 4,
    hit: 0,
    end: false,
    $answer: get('.answer_zone'),
    $input: get('.input_zone'),
    $result: get('.result_zone')
  }

  let { limit, digit, hit, end, $answer, $input, $result } = baseball

  // 컴퓨터가 제공하는 랜덤한 숫자
  const randomNum = () => {
    let num = []
    let random = ''

    for (let i=0; i<digit; i++) {
      num[i] = parseInt(Math.random() * 10)
      random += num[i]
    }
  }

  // 시도했을 때
  // const onHit = (사용자 입력 숫자) => {
  //   return `<em>${hit}차</em> : {사용자 입력 숫자}`
  // }

  // strike
  const strike = () => {}

  //ball
  const ball = () => {}

  
  const palyGame = (event) => {
    event.preventDefault()

    if(!!end) {
      return
    }
  }



  init()
})()