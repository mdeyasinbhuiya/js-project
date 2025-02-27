document.getElementById("cash-out").style.display = "none";
document.getElementById("transaction").style.display = "none";
document.getElementById("add-money-btn").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "block";
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transaction").style.display = "none";
});
document.getElementById("cash-out-btn").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "block";
  document.getElementById("transaction").style.display = "none";
});
document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    document.getElementById("add-money").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("transaction").style.display = "block";
  });
