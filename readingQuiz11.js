const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  switch(choice) {
    case 'black':
        update('black','white');
        break;
    case 'white':
        update('white','black');
        break;
    case 'purple':
        update('purple','white');
        break;
    case 'yellow':
        update('yellow','purple');
        break;
    case 'pschedelic':
        update('lime','purple');
        break;
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

const output = document.querySelector('.output');
output.textContent = "";

let i = 10;

while (i >= 0) {
    const para = document.createElement('p');
    if(i == 10) {
        para.textContent = 'Countdown ${i}';
    }
    else if (i == 0) {
        para.textContent = 'Blast Off!';
    }
    else {
        para.textContent = i;
    }

    output.appendChild(para);
    i--;
}


<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Function library example</title>
  <style>
    input {
      font-size: 2em;
      margin: 10px 1px 0;
    }
  </style>
  </head>
<body>

  <input class="numberInput" type="text">
  <p></p>

  <script>
    const input = document.querySelector('.numberInput');
    const para = document.querySelector('p');

    function squared(num) {
        return num * num;
}

    function cubed(num) {
        return num * num * num;
}

    function factorial(num) {
        if (num < 0) return undefined;
        if (num === 0) return 1;
        let x = num - 1;
        while (x > 1) {
            num *= x;
            x--;
        }
        return num;
}

input.addEventListener("change", () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "You need to enter a number!";
  } else {
    para.textContent = `${num} squared is ${squared(num)}. `;
    para.textContent += `${num} cubed is ${cubed(num)}. `;
    para.textContent += `${num} factorial is ${factorial(num)}. `;
  }
});


  </script>
</body>
</html>