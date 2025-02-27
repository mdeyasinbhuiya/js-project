const login = document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accNum = document.getElementById("acc-num").value;
    const pin = document.getElementById("acc-pin").value;
    const convertInt = parseInt(pin);
    if (accNum.length === 11) {
      if (convertInt === 1234) {
        window.location.href = "./mainPage.html";
      } else {
        alert("correct your pin number");
      }
    } else {
      alert("correct your account number");
    }
  });
