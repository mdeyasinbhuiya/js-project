const cashOut = document
  .getElementById("withdraw")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("cashout-amount").value;
    const convertAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertMainBalance = parseFloat(mainBalance);
    const agentNum = document.getElementById("agent-num").value;
    const pin = document.getElementById("pin-num").value;
    const convertPin = parseInt(pin);
    if (agentNum.length === 11 && convertPin === 1234) {
      const subtract = convertMainBalance - convertAmount;
      document.getElementById("main-balance").innerText = subtract;
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
      p.innerText = `withdraw amount:${convertAmount} BDT to ${agentNum}`;
      transaction.appendChild(p);
    } else {
      alert("invalid information");
    }
  });
