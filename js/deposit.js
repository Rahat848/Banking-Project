// Variables to hold the total balance
let totalBalance = 0;

// Get DOM elements
const amountInput = document.getElementById('amount');
const totalBalanceDisplay = document.getElementById('total-balance');
const depositButton = document.getElementById('deposit-btn');
const withdrawButton = document.getElementById('withdraw-btn');

// Update total balance display
function updateBalanceDisplay() {
    totalBalanceDisplay.textContent = `$${totalBalance.toFixed(2)}`;
}

// Handle deposit
depositButton.addEventListener('click', function () {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        totalBalance += amount;
        updateBalanceDisplay();
        amountInput.value = ''; // Clear input
    } else {
        alert('Please enter a valid amount.');
    }
});

// Handle withdraw
withdrawButton.addEventListener('click', function () {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        if (totalBalance >= amount) {
            totalBalance -= amount;
            updateBalanceDisplay();
            amountInput.value = ''; // Clear input
        } else {
            alert('Insufficient funds.');
        }
    } else {
        alert('Please enter a valid amount.');
    }
});