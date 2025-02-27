const addMoney = document
  .getElementById("money-add")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertMainBalance = parseFloat(mainBalance);
    const pin = document.getElementById("acc-pin").value;
    const convertPin = parseInt(pin);
    if (convertPin === 1234) {
      const total = convertAmount + convertMainBalance;
      document.getElementById("main-balance").innerText = total;
      const transaction = document.getElementById("transaction");
      const p = document.createElement("p");
      p.classList.add(
        "bg-white",
        "p-3",
        "rounded-lg",
        "shadow-md",
        "border",
        "border-gray-200",
        "text-gray-800",
        "mb-3"
      );
      p.innerText = `Add amount: ${convertAmount} BDT`;
      transaction.appendChild(p);
    } else {
      alert("Wrong pin number");
    }
  });
