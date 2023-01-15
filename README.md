# 💻 Project
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/98960420/212523999-5d41092b-8134-4b9c-81c6-0dc2cb2a66f3.gif)

* 제목 : 숫자 야구 게임
* 기간 : 2022.08.20~2022.08.24
* 목적
  * 바닐라 자바스크립트로 토이 프로젝트를 만들어보며 자바스크립트의 기초 문법을 익히기 위함
  * 기획과 디자인이 코드를 만나 어떻게 동적으로 변화하는지에 대해 학습하기 위하여 진행
* 데모페이지
  * https://resilient-beijinho-df5191.netlify.app/  
 (📱 모바일 환경 제공)
  
# 🛠 사용기술
<img src="https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=HTML5&logoColor=white" /> <img src="https://img.shields.io/badge/CSS-1F8ACB?style=plastic&logo=css3&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=JavaScript&logoColor=fff" /> <img src="https://img.shields.io/badge/Netlify-00C7B7?style=plastic&logo=Netlify&logoColor=fff" />


# ⚾️ 숫자 야구 게임

### 1. 랜덤한 네자리 수 제공하기

```JavaScript
let answer = []

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

```

난수를 생성 할 수 있는 ```Math.random()``` 함수를 이용하여 난수를 생성합니다.

Math.random() * 10 의 결과는 0 ~ 9.99999... 이기 때문에 ```parseInt```를 사용하여 0~9 범위의 정수로 만들어주었습니다.

그 후 ```for```문을 돌며 ```indexOf()``` 메소드를 이용하여 num 배열 안에 있지 않은 숫자라면 random 배열에 넣어주었습니다.

random 배열을 ```slice```를 이용하여 네자리로 만들고 만들어진 네자리 숫자를 함수밖에 선언된 answer 배열에 넣어주었습니다.

### 2. 중복되지 않은 네 자리 숫자만 입력이 가능하도록 구현


```JavaScript

function isDuplicate(inputNumber) {
  return [...new Set(inputNumber.split(''))].length !== digit
}

function initGame(e) {
...

const inputNumber = $input.value

if (inputNumber.length !== digit) { 
    showAlert(`${digit}자리 숫자를 입력해주세요.<br></br>`)
  } else if (isDuplicate(inputNumber)) {
    showAlert('중복된 숫자가 있습니다.<br></br>')
  } 
  
...

```

중복값은 중복을 허용하지 않는 ```Set``` 객체를 이용하여 구현하였습니다.

```Set```의 자릿수가 digit(4자리)보다 작다면 중복 값이 있다는 뜻이므로 중복 값이 있는 것으로 판단하였습니다.

### 3. 스트라이크 / 볼 판단하기


#### 3-1 스트라이크

```JavaScript
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
```

사용자가 입력한 값의 배열을 ```map``` 돌면서 정답의 인덱스와 사용자가 입력한 입력값의 인덱스가 일치하면 스트라이크로 처리하였습니다.

#### 3-2 볼

```JavaScript
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
```

```indexOf()``` 메소드를 이용하여 사용자가 입력한 값이 정답 배열 내에는 있으나 인덱스가 일치하지않으면 볼로 처리하였습니다.

---

# 마치는 글

처음으로 만들어 본 프로젝트였기 때문에 미숙하지만  
이 프로젝트를 통해 단순히 알고 있는 것과 알고 있는 것을 꺼내어 실행해 보는 것의 중요성에 대하여 배울 수 있었습니다.  
배포 후 주변 지인들의 피드백을 들으며 사용자의 불편함을 인지하고 변경해 나가는 과정에서 어렴풋이나마 프론트엔드 개발자의 역할을 알 수 있게해준 프로젝트였습니다!

---

# 기능 추가 및 리팩토링

사용자들의 피드백을 바탕으로 UI 리팩토링 및 입력 기능을 변경하였습니다.

> 사용자피드백  
>>1. 🙋🏻‍♀️ 스트라이크와 볼의 결과가 잘 보이지 않아 답답해요.    
>>2. 🙋🏻‍♂️ 입력창에 네자리 숫자만 입력됐으면 좋겠어요.    
>> 3. 🙋🏻 마우스를 사용하지않고 키패드를 이용해서 모달창을 닫고싶어요. 

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/98960420/212524149-6d628efe-902d-4146-b2a2-01a36f4b947b.gif)

1. 값 입력 시 자동으로 다음 필드로 포커스

```JavaScript
if (e.target.value.length === 1 && e.target.nextElementSibling) {
	e.target.nextElementSibling.focus()
}
```
한개의 input태그를 네개로 나눠 숫자 네자리를 입력 할 수 있게하고, ```keyup``` 이벤트 발생 시 ```input``` value가 존재하고 다음 필드가 남아있다면 
자동으로 다음 필드로 이동하도록 수정하였습니다.

2. 엔터키로 경고 모달창 닫기

```JavaScript
document.addEventListener('keydown', (e) => {
  if(e.code === 'Enter' && isModal === true) {
    modalAlert.classList.remove('show')
  }
})
```

3. 모바일 제공

3-1. CSS 미디어쿼리를 이용한 반응형 디자인 적용

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/98960420/212524578-5a56e2ae-4058-4655-865b-490a255cca45.gif)


3-2. 숫자 키패드
HTML의 inputmode = "numeric" 속성을 이용하여 숫자 키패드가 나오도록 하였습니다.

