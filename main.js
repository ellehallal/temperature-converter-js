const celsiusInput = document.querySelector("#celsius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");


const celsiusToFaAndKe = () => {
  const celsiusTemp = parseFloat(celsiusInput.value);
  const fahrenheitTemp = (celsiusTemp * 1.8) + 32;
  const kelvinTemp = celsiusTemp + 273.15;

  fahrenheitInput.value = fahrenheitTemp;
  kelvinInput.value = kelvinTemp;
};


// const fahrenheitToCeAndKe = () => {
//   const fahrenheitTemp = parseFloat(fahrenheitInput.value);
//   const celsiusTemp =
//   const kelvinTemp =
// };

celsiusInput.addEventListener('input', celsiusToFaAndKe);
