// 20 примеров

let actions = { plus: ' + ', minus: ' - ' };
let plusExamples = [];
let minusExamples = [];

function random() {
  return Math.floor(Math.random(100) * 100);
}

function getRandom() {     
  let v = random();
  while (v < 10) {
    v = random();
  }
  return v;
}

function makeExamples(action, arr) {
  for(let i = 0; i < 10; i++) {
    let a = getRandom(), b = getRandom();   
    if (a > b) {
      arr.push(a + action + b);
    } else if(a !== b && a < b) {
      arr.push(b + action + a);
    } else if (a === b) {
      arr.push(a + action + b);
    }    
  }
  arr.push({action: action});
}

function getResult(arr) {
  let result = [];
  let action = arr[arr.length - 1].action.trim();
  
  for(let i = 0; i <= arr.length - 2; i++) {
    let chache = arr[i].split(' + ');    
    if(action === '+') {
      result.push(parseInt(chache[0]) + parseInt(chache[1]));
    } else {
      result.push(parseInt(chache[0]) - parseInt(chache[1]));
    }   
  }
  result.push(action);
  return result;
}

makeExamples(actions.plus, plusExamples);
// console.log(plusExamples);
let plusResult = getResult(plusExamples);
// console.log(plusResult);
makeExamples(actions.minus, minusExamples);
// console.log(minusExamples);

