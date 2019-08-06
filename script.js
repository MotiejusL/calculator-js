let numbers = document.querySelector('.numbers')
let write = document.querySelector('.screen p')
write.innerHTML = 0
let result = 0
let between = ''
let allnumbers = []
let alloperations = []
for (let i = 9; i >= 1; i--) {
  let number = document.createElement('button')
  number.setAttribute('style', 'width:70px; height:75px; margin:5px 5px;')
  number.innerHTML = i
  number.addEventListener('click', function (e) {
    if (write.innerHTML === 0) { write.innerHTML = '' }
    write.innerHTML += e.target.innerHTML
    between += e.target.innerHTML
  })
  numbers.appendChild(number)
}
let zero = document.createElement('button')
zero.setAttribute('style', 'width:70px; height:75px; margin:5px 5px;')
zero.innerHTML = 0
zero.addEventListener('click', function (e) {
  write.innerHTML += e.target.innerHTML
  between += e.target.innerHTML
})
numbers.appendChild(zero)
let dot = document.createElement('button')
dot.setAttribute('style', 'width:70px; height:75px; margin:5px 5px;')
dot.innerHTML = '.'
dot.addEventListener('click', function (e) {
  write.innerHTML += e.target.innerHTML
  between += e.target.innerHTML
})
numbers.appendChild(dot)
let equals = document.createElement('button')
equals.setAttribute('style', 'width:70px; height:75px; margin:5px 5px;')
equals.innerHTML = '='
equals.addEventListener('click', function () {
  allnumbers.push(Number(between))
  for (let i = 0; i < alloperations.length; i++) {
    if (alloperations[i] === '*') {
      let both = allnumbers[i] * allnumbers[i + 1]
      allnumbers.splice(i, 2, both)
      alloperations.splice(i, 1)
      if (alloperations[i] === '*' || alloperations[i] === '/') {
        i--
      }
    } else if (alloperations[i] === '/') {
      let both = allnumbers[i] / allnumbers[i + 1]
      allnumbers.splice(i, 2, both)
      alloperations.splice(i, 1)
      if (alloperations[i] === '/' || alloperations[i] === '*') {
        i--
      }
    }
  }

  if (allnumbers.length === 1) {
    write.innerHTML = allnumbers[0]
    between = allnumbers[0]
    allnumbers = []
    alloperations = []
  } else {
    for (let i = 0; i < allnumbers.length - 1; i++) {
      if (alloperations[0] === '+') {
        if (i === 0) {
          result += allnumbers[i] + allnumbers[i + 1]
          alloperations.shift()
        } else {
          result += allnumbers[i + 1]
          alloperations.shift()
        }
      } else if (alloperations[0] === '-') {
        if (i === 0) {
          result += allnumbers[i] - allnumbers[i + 1]
          alloperations.shift()
        } else {
          result -= allnumbers[i + 1]
          alloperations.shift()
        }
      }
    }
    write.innerHTML = result
    allnumbers = []
    alloperations = []
    between = result
    result = 0
  }
})
numbers.appendChild(equals)

let operations = document.querySelector('.operations')

let clear = document.createElement('button')
clear.setAttribute('style', 'width:90px; height:60px; margin:8px 5px 3px 5px;')
clear.innerHTML = 'clear'
clear.addEventListener('click', function (e) {
  write.innerHTML = 0
  allnumbers = []
  alloperations = []
  between = 0
  result = 0
})
let add = document.createElement('button')
add.setAttribute('style', 'width:90px; height:60px; margin:3px 5px;')
add.innerHTML = '+'
add.addEventListener('click', function (e) {
  if (write === 0) { write = '' }
  write.innerHTML += e.target.innerHTML
  allnumbers.push(Number(between))
  alloperations.push(e.target.innerHTML)
  between = 0
})
let subtract = document.createElement('button')
subtract.setAttribute('style', 'width:90px; height:60px; margin:3px 5px;')
subtract.innerHTML = '-'
subtract.addEventListener('click', function (e) {
  if (write === 0) { write = '' }
  write.innerHTML += e.target.innerHTML
  allnumbers.push(Number(between))
  alloperations.push(e.target.innerHTML)
  between = 0
})
let multiply = document.createElement('button')
multiply.setAttribute('style', 'width:90px; height:60px; margin:3px 5px;')
multiply.innerHTML = '*'
multiply.addEventListener('click', function (e) {
  if (write === 0) { write = '' }
  write.innerHTML += e.target.innerHTML
  allnumbers.push(Number(between))
  alloperations.push(e.target.innerHTML)
  between = 0
})
let divide = document.createElement('button')
divide.setAttribute('style', 'width:90px; height:60px; margin:3px 5px;')
divide.innerHTML = '/'
divide.addEventListener('click', function (e) {
  if (write === 0) { write = '' }
  write.innerHTML += e.target.innerHTML
  allnumbers.push(Number(between))
  alloperations.push(e.target.innerHTML)
  between = 0
})
operations.appendChild(clear)
operations.appendChild(add)
operations.appendChild(subtract)
operations.appendChild(multiply)
operations.appendChild(divide)
