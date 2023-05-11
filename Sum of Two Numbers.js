<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Number Sum</title>
</head>
<body>
  <label for="num1-input">Number 1:</label>
  <input type="number" id="num1-input"><br>
  
  <label for="num2-input">Number 2:</label>
  <input type="number" id="num2-input"><br>
  
  <button id="sum-button">Calculate Sum</button>
  
  <script>
    const num1Input = document.getElementById("num1-input");
    const num2Input = document.getElementById("num2-input");
    const sumButton = document.getElementById("sum-button");
    
    sumButton.addEventListener("click", () => {
     const num1 = document.getElementById("num1-input").value;
      const num2 = document.getElementById("num2-input").value;
     const sum = parseInt(num1) + parseInt(num2);
     
     // may mas simple pa palang code.
    // const num1 = Number(num1Input.value);
     // const num2 = Number(num2Input.value);
     //const sum = num1 + num2;
     
      alert(`The sum of ${num1} and ${num2} is ${sum}.`);
    });
  </script>
</body>
</html>

