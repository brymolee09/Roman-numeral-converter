const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkUserInput = () => {
  let inputInt = Number(parseInt(numberInput.value))
  if(!inputInt){
    output.textContent = "Please enter a valid number"
    return
  }
if(inputInt === -1 || inputInt <= 1) {
output.textContent ="Please enter a number greater than or equal to 1" 
return
  }
if (inputInt >= 4000){
  output.textContent = "Please enter a number less than or equal to 3999"
  return
}
const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};
let roman = '';

for (let key in romanNumerals) {
while (inputInt >= romanNumerals[key]) {
roman += key;
inputInt -= romanNumerals[key];
}
}
output.innerText = roman
}
convertBtn.addEventListener("click", checkUserInput)
