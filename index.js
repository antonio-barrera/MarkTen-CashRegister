const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashLabel = document.querySelector("#cash-label");
const cashGiven = document.querySelector("#cash-given");
const nextButton = document.querySelector("#next-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

hideElements();
hideMessage();

nextButton.addEventListener("click", function validateBillAmount() {
    if(billAmount.value > 0) {
        showElements();
        hideMessage();
    } else {
        hideElements();
        showMessage("Invalid input. It must be greater than 0.");
    }
})

checkButton.addEventListener("click", function validateCashAmount(){
    if(cashGiven.value >= billAmount.value) {
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturned);
        hideMessage();
    } else {
        showMessage("The cash provided is not enough!");
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

function hideElements() {
    cashLabel.style.display = "none";
    cashGiven.style.display = "none";
    checkButton.style.display = "none";
}

function showElements() {
    cashLabel.style.display = "block";
    cashGiven.style.display = "block";
    checkButton.style.display = "block";
}