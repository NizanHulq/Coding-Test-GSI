const dictionary = {
  A: 0,
  B: 1,
  C: 1,
  D: 1,
  E: 2,
  F: 3,
  G: 3,
  H: 3,
  I: 4,
  J: 5,
  K: 5,
  L: 5,
  M: 5,
  N: 5,
  O: 6,
  P: 7,
  Q: 7,
  R: 7,
  S: 7,
  T: 7,
  U: 7,
  V: 9,
  W: 9,
  X: 9,
  Y: 9,
  Z: 9,
  a: 9,
  b: 8,
  c: 8,
  d: 8,
  e: 7,
  f: 6,
  g: 6,
  h: 6,
  i: 5,
  j: 4,
  k: 4,
  l: 4,
  m: 4,
  n: 4,
  o: 3,
  p: 2,
  q: 2,
  r: 2,
  s: 2,
  t: 2,
  u: 1,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
};

function convertToNumbers(sentence) {
  return sentence
    .split("")
    .map((char) => {
      if (char === " ") return 0;
      return dictionary[char] !== undefined ? dictionary[char] : char;
    })
    .join("");
}

function operationNumbers(numbers) {
  const numArray = numbers.split("").map(Number);

  let result = numArray[0];

  for (let i = 1; i < numArray.length; i++) {
    if (i % 2 === 1) {
      result += numArray[i];
    } else {
      result -= numArray[i];
    }
  }

  return result;
}

function generateSeries(n) {
  let series = [];
  let count = 0;
  let total = 0;

  while (total < n) {
    series.push(count);
    total += count;

    if (total + (count + 1) == n) {
      series.push(count + 1);
      break;
    } else if (total + (count + 1) > n) {
      count = 0;
    } else {
      count += 1;
    }
  }
  return series;
}

function convertToLetters(series) {

  const letterSeries = series.map((num) => {
    for (let key in dictionary) {
      if (dictionary[key] === num && key === key.toUpperCase()) {
        return key;
      }
    }
  });

  return letterSeries.join("");
}

function convert3(n) {
    number = Math.abs(parseInt(n));
    const series = generateSeries(number);

    let letterSeries = convertToLetters(series);
    return letterSeries;
}

function lettersToNumbers(letters) {
  let series = [];

  for (let letter of letters) {
    if (dictionary[letter] !== undefined && letter === letter.toUpperCase()) {
      series.push(dictionary[letter]);
    }
  }
  return series;
}

function convert4(letters) {
  const series = lettersToNumbers(letters);

  let modifiedSeries = series.slice(0, -2);
  modifiedSeries.push(
    series[series.length - 2] + 1,
    series[series.length - 1] + 1
  );
    
  let letterSeries = convertToLetters(modifiedSeries);

  return letterSeries;
}

function convert5(letters) {
  let series = lettersToNumbers(letters);
    series = series.map((num) => {
      
    let count = 0;
    for (let key in dictionary) {
      if (dictionary[key] === num && key === key.toUpperCase()) {
        count++;
      }
    }
    if (count < 2) {
      num += 1;
    }
    return num;
  });

  let result = series.join("");

  return result;
}

const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = document.getElementById("textInput").value;
  let hasil1 = convertToNumbers(inputValue);
  let hasil2 = operationNumbers(hasil1);
  let hasil3 = convert3(hasil2);
  let hasil4 = convert4(hasil3);
  let hasil5 = convert5(hasil4);
  

  document.getElementById("output").innerHTML =
    "<p><strong>Hasil 1: </strong>" +
    hasil1 +
    "</p>" +
    "<p><strong>Hasil 2: </strong>" +
    hasil2 +
    "</p>" +
    "<p><strong>Hasil 3: </strong>" +
    hasil3 +
    "</p>" +
    "<p><strong>Hasil 4: </strong>" +
    hasil4 +
    "</p>" +
    "<p><strong>Hasil 5: </strong>" +
    hasil5 +
    "</p>";
});
