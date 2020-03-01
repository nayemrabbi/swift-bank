// Login button event handler.
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

// Deposit button event handler start.
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function() {
  const depositNumber = getInputNumber("depositAmount");

  updateStatus("currentDeposit", depositNumber);
  updateStatus("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";

  //   const currentDeposit = document.getElementById("currentDeposit").innerText;
  //   const currentDepositNumber = parseFloat(currentDeposit);
  //   const totalDeposit = depositNumber + currentDepositNumber;
  //   document.getElementById("currentDeposit").innerText = totalDeposit;
});

function updateStatus(id, addedNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = addedNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
// Deposit button event handler End.

//Withdraw button even handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function() {
  const withdrawNumber = getInputNumber("withdrawAmount");
  updateStatus("currentWithdraw", withdrawNumber);
  updateStatus("currentBalance", -1 * withdrawNumber);

  document.getElementById("withdrawAmount").value = "";
});

// Input button handler function area

function getInputNumber(id) {
  const Amount = document.getElementById(id).value;
  const amountNumber = parseFloat(Amount);
  return amountNumber;
}
// Withdraw button event handler End.
