// --------------- Index page ------------------- //

let plusDiv = document.querySelector('#plus');
let minusDiv = document.querySelector('#minus');

function makeList(examples, div, result) {
  for(let i = 0; i <= examples.length - 2; i++) {   
    let liEl = document.createElement('li');
    let spanEl = document.createElement('span');
    spanEl.innerText += result[i];
    spanEl.hidden = true;
    liEl.innerText += examples[i] + ' = ';
    liEl.appendChild(spanEl);      
    div.appendChild(liEl);
  }
}

let showBtn = document.querySelector('#show_results');  
showBtn.addEventListener("click", () => {  
  let spanEls = document.querySelectorAll("span[hidden]");
  if(spanEls.length !== 0) {
    spanEls.forEach((el) => {
      el.hidden = false;
    })
  } else {
    let spanEls = document.querySelectorAll("span");
    spanEls.forEach((el) => {
      el.hidden = true;
    })
  }
  
});


makeList(plusExamples, plusDiv, plusResult);
makeList(minusExamples, minusDiv, minusResult);

