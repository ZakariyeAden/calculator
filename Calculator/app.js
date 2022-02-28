
  const display = document.getElementById('display');
  const buttons = Array.from(document.querySelectorAll('button'));
  buttons.map(buttons => {
  // target innerhtml
    buttons.addEventListener('click', (e) =>{
      switch(e.target.innerText){
        case 'AC':
          display.innerHTML = '';
          break;
        case 'DEL':
          if(display.innerText){
            display.innerText = display.innerText.slice(0,-1);
          }
          break;
        case '=':
          display.innerText = eval(display.innerText);
          break;
          default:
            display.innerText += e.target.innerText;
      }
    });
  });