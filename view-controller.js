// --------------- Index page ------------------- //

let plusDiv = document.querySelector('#plus');
let minusDiv = document.querySelector('#minus');

for(let i = 0; i <= plusExamples.length - 2; i++) {   
  let liEl = document.createElement('li');
  liEl.innerText += plusExamples[i];
  plusDiv.appendChild(liEl);
}

for(let i = 0; i <= minusExamples.length - 2; i++) {   
  let liEl = document.createElement('li');
  liEl.innerText += minusExamples[i];
  minusDiv.appendChild(liEl);
}
