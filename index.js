const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if(billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("The cash provided is not enough!");
        }
    } else {
        showMessage("Invalid bill amount!");
    }
});

function calculateChange(amountDifference) {
    for(let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountDifference/availableNotes[i]);
        amountDifference %= availableNotes[i];
        if(numberOfNotes > 0) {
            noOfNotes[i].innerText = numberOfNotes;
        }
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}