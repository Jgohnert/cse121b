
function paymentsTotal() {

    let years = parseInt(document.querySelector('#years').value);
    let payments = parseInt(document.querySelector('#payments').value);

    let result = years * payments;

    document.querySelector('#PaymentsResult').value = result;

    return result;
}


function getPeriodicRate() {

    let rate = parseFloat(document.querySelector('#rate').value);
    let payments = parseInt(document.querySelector('#payments').value);

    let percent = parseFloat(rate / 100);

    let periodicRate = percent / payments;

    return periodicRate;
}


function amountPerMonth() {

    let paymentNumber = paymentsTotal();
    let loan = parseFloat(document.querySelector('#loan').value);
    let rate = getPeriodicRate();

    let result = ((rate * loan) / (1 - (1 + rate) ** ( - paymentNumber))).toFixed(2);

    document.querySelector('#monthlyPaymentResult').value = result;
    document.querySelector('#monthlyLoanPayment').value = result;

    return result;
}


function loanWithInterest() {

    let numberOfPayments = paymentsTotal();
    let costPerMonth = amountPerMonth();

    let result = (numberOfPayments * costPerMonth).toFixed(2);

    document.querySelector('#loanInterestResult').value = result;

    return result;
}


function interestExpense() {

    let loan = parseFloat(document.querySelector('#loan').value);
    let loanInterest = loanWithInterest();

    let result = (loanInterest - loan).toFixed(2);

    document.querySelector('#loanExpenseResult').value = result;

    return result;
}


function monthlyInterestExpense() {

    let numberOfPayments = paymentsTotal();
    let expense = interestExpense();

    let result = (expense / numberOfPayments).toFixed(2);

    document.querySelector('#interestExpenseResult').value = result;
}


function getExpenseList() {

    const arrayList = document.querySelectorAll
    ('#tithing, #groceries, #gas, #phone, #donations, #eatingOut, #entertainment, #taxes, #Miscellaneous');
    const numbersArray = Array.from(arrayList).map(input => input.value.split(','));
    const numbersFloat = numbersArray.map(float => float.map(input => parseFloat(input)));
    
    const twoDecNumbers = numbersFloat.map(float => float.map(input => Number(input.toFixed(2))));
    
    return twoDecNumbers;

}


function addAllMonthly() {

    const allExpense = getExpenseList();
    let arraySum = allExpense.flat().reduce((a, b) => a + b, 0).toFixed(2);
    let perMonth = amountPerMonth();

    if (isNaN(perMonth)) {
        let sum = arraySum;

        document.querySelector('#monthlyTotalSpent').value = sum;

        return sum;

    } else {
        let sum = (parseFloat(arraySum) + parseFloat(perMonth)).toFixed(2);

        document.querySelector('#monthlyTotalSpent').value = sum;

        return sum;
    }
    
}


function yearlyIncome() {

    let monthPaycheck = parseFloat(document.querySelector('#paycheck').value);

    let yearIncome = (monthPaycheck * 12).toFixed(2);

    document.querySelector('#annualIncome').value = yearIncome;
}


function moneySavedMonth() {

    let monthPaycheck = parseFloat(document.querySelector('#paycheck').value);
    let monthExpense = addAllMonthly();

    let savedMoney = (monthPaycheck - monthExpense).toFixed(2);

    document.querySelector('#moneySavedM').value = savedMoney;

    return savedMoney
    
}


function moneySavedYear() {

    let savedMoney = moneySavedMonth();

    let YearSavedMoney = (savedMoney * 12).toFixed(2);

    document.querySelector('#moneySavedY').value = YearSavedMoney;
    
}


function yearlyExpense() {

    let monthExpense = addAllMonthly();

    let yearexpense = (monthExpense * 12).toFixed(2);

    document.querySelector('#annualExpense').value = yearexpense;

}


function clickHandler() {
   
    paymentsTotal();
    getPeriodicRate();
    loanWithInterest();
    interestExpense();
    monthlyInterestExpense();
    const expenses = getExpenseList();
    const totalMonthly = addAllMonthly();
    moneySavedMonth();
    moneySavedYear();
    yearlyIncome();
    yearlyExpense();

    console.log(expenses);
    console.log(totalMonthly);

}
  
document.querySelector('#calculateExpense').addEventListener('click', clickHandler);
document.querySelector('#calculateLoan').addEventListener('click', clickHandler);

