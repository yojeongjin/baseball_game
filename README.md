# π» Project
* μ λͺ© : μ«μ μΌκ΅¬ κ²μ
* κΈ°κ° : 2022.08.20~2022.08.24
* λͺ©μ 
  * λ°λλΌ μλ°μ€ν¬λ¦½νΈλ‘ ν μ΄ νλ‘μ νΈλ₯Ό λ§λ€μ΄λ³΄λ©° μλ°μ€ν¬λ¦½νΈμ κΈ°μ΄ λ¬Έλ²μ μ΅νκΈ° μν¨
  * κΈ°νκ³Ό λμμΈμ΄ μ½λλ₯Ό λ§λ μ΄λ»κ² λμ μΌλ‘ λ³ννλμ§μ λν΄ νμ΅νκΈ° μνμ¬ μ§ν
* λ°λͺ¨νμ΄μ§
  * https://resilient-beijinho-df5191.netlify.app/
  
# π  μ¬μ©κΈ°μ 
<img src="https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=HTML5&logoColor=white" /> <img src="https://img.shields.io/badge/CSS-1F8ACB?style=plastic&logo=css3&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=JavaScript&logoColor=fff" /> <img src="https://img.shields.io/badge/Netlify-00C7B7?style=plastic&logo=Netlify&logoColor=fff" />


# βΎοΈ μ«μ μΌκ΅¬ κ²μ

### 1. λλ€ν λ€μλ¦¬ μ μ κ³΅νκΈ°

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

λμλ₯Ό μμ± ν  μ μλ ```Math.random()``` ν¨μλ₯Ό μ΄μ©νμ¬ λμλ₯Ό μμ±ν©λλ€.

Math.random() * 10 μ κ²°κ³Όλ 0 ~ 9.99999... μ΄κΈ° λλ¬Έμ ```parseInt```λ₯Ό μ¬μ©νμ¬ 0~9 λ²μμ μ μλ‘ λ§λ€μ΄μ£Όμμ΅λλ€.

κ·Έ ν ```for```λ¬Έμ λλ©° ```indexOf()``` λ©μλλ₯Ό μ΄μ©νμ¬ num λ°°μ΄ μμ μμ§ μμ μ«μλΌλ©΄ random λ°°μ΄μ λ£μ΄μ£Όμμ΅λλ€.

random λ°°μ΄μ ```slice```λ₯Ό μ΄μ©νμ¬ λ€μλ¦¬λ‘ λ§λ€κ³  λ§λ€μ΄μ§ λ€μλ¦¬ μ«μλ₯Ό ν¨μλ°μ μ μΈλ answer λ°°μ΄μ λ£μ΄μ£Όμμ΅λλ€.

### 2. μ€λ³΅λμ§ μμ λ€ μλ¦¬ μ«μλ§ μλ ₯μ΄ κ°λ₯νλλ‘ κ΅¬ν


```JavaScript

function isDuplicate(inputNumber) {
  return [...new Set(inputNumber.split(''))].length !== digit
}

function initGame(e) {
...

const inputNumber = $input.value

if (inputNumber.length !== digit) { 
    showAlert(`${digit}μλ¦¬ μ«μλ₯Ό μλ ₯ν΄μ£ΌμΈμ.<br></br>`)
  } else if (isDuplicate(inputNumber)) {
    showAlert('μ€λ³΅λ μ«μκ° μμ΅λλ€.<br></br>')
  } 
  
...

```

μ€λ³΅κ°μ μ€λ³΅μ νμ©νμ§ μλ ```Set``` κ°μ²΄λ₯Ό μ΄μ©νμ¬ κ΅¬ννμμ΅λλ€.

```Set```μ μλ¦Ώμκ° digit(4μλ¦¬)λ³΄λ€ μλ€λ©΄ μ€λ³΅ κ°μ΄ μλ€λ λ»μ΄λ―λ‘ μ€λ³΅ κ°μ΄ μλ κ²μΌλ‘ νλ¨νμμ΅λλ€.

### 3. μ€νΈλΌμ΄ν¬ / λ³Ό νλ¨νκΈ°


#### 3-1 μ€νΈλΌμ΄ν¬

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

μ¬μ©μκ° μλ ₯ν κ°μ λ°°μ΄μ ```map``` λλ©΄μ μ λ΅μ μΈλ±μ€μ μ¬μ©μκ° μλ ₯ν μλ ₯κ°μ μΈλ±μ€κ° μΌμΉνλ©΄ μ€νΈλΌμ΄ν¬λ‘ μ²λ¦¬νμμ΅λλ€.

#### 3-2 λ³Ό

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

```indexOf()``` λ©μλλ₯Ό μ΄μ©νμ¬ μ¬μ©μκ° μλ ₯ν κ°μ΄ μ λ΅ λ°°μ΄ λ΄μλ μμΌλ μΈλ±μ€κ° μΌμΉνμ§μμΌλ©΄ λ³Όλ‘ μ²λ¦¬νμμ΅λλ€.

---

# λ§μΉλ κΈ

μ²μμΌλ‘ λ§λ€μ΄ λ³Έ νλ‘μ νΈμκΈ° λλ¬Έμ λ―Έμνμ§λ§  
μ΄ νλ‘μ νΈλ₯Ό ν΅ν΄ λ¨μν μκ³  μλ κ²κ³Ό μκ³  μλ κ²μ κΊΌλ΄μ΄ μ€νν΄ λ³΄λ κ²μ μ€μμ±μ λνμ¬ λ°°μΈ μ μμμ΅λλ€.  
λ°°ν¬ ν μ£Όλ³ μ§μΈλ€μ νΌλλ°±μ λ€μΌλ©° μ¬μ©μμ λΆνΈν¨μ μΈμ§νκ³  λ³κ²½ν΄ λκ°λ κ³Όμ μμ μ΄λ ΄νμ΄λλ§ νλ‘ νΈμλ κ°λ°μμ μ­ν μ μ μ μκ²ν΄μ€ νλ‘μ νΈμμ΅λλ€!
