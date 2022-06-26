window.addEventListener("load", function () {
  const range = document.querySelector("#range");
  const number = document.querySelector("#number");

  function enterValue(amountValue) {
    const fee = document.querySelector(".fee");
    const amount = document.querySelector(".amount");
    amount.style.height = `${amountValue}px`;
    feeValue = checkFee(amountValue);
    fee.style.height = `${feeValue}px`;
  }

  range.addEventListener("change", (event) => {
    number.value = event.target.value;
    enterValue(event.target.value);
  });

  number.addEventListener("change", (event) => {
    range.value = event.target.value;
    enterValue(event.target.value);
  });

  function checkFee(amount) {
    switch (true) {
      case amount < 20:
        return amount * 0.02;
      case amount >= 20 && amount <= 50:
        return amount * 0.04;
      case amount >= 50 && amount <= 75:
        return amount * 0.06;
      case amount >= 75 && amount <= 100:
        return amount * 0.08;
      default:
        alert("нет такого значения");
    }
  }
});
