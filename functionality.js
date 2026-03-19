const functionalityDisplay = document.getElementById('functionality-display')
const addMoneySection = document.getElementById('add-money-display');
const cashoutDisplay = document.getElementById('cashout-display');
const transferDisplay = document.getElementById('transfer-display');
const getBonusDisplay = document.getElementById('get-bonus-display');
const payBillDisplay = document.getElementById('pay-bill-display');
const transactionsDisplay = document.getElementById('transactions-display')
const currentAmount = document.getElementById('current-amount');

const allSection = [addMoneySection , cashoutDisplay , transferDisplay , getBonusDisplay , payBillDisplay , transactionsDisplay]



// Add Money Section
const handleAddMoney = (section) => {
    // console.log(section);
    // 1. Show them in the UI
    allSection.forEach(element => {
        element.classList.add('hidden');
    });
    section.classList.remove('hidden');
    
}
// Add Money Logical Calculations
const addMoneyBtn = document.getElementById('add-money-btn');
addMoneyBtn.addEventListener('click', function(){
    // Select Bank
    const bankSelection = document.getElementById('bank-selection');
    if(bankSelection.value === 'Select A Bank'){
        alert('Please Select A Bank');
        return;
    }

    // Match User Number
    if (!userNumberValidation('input-bank-account-number')) return;

    //  Match Pin Number 
    if(!pinValidation('input-add-pin')) return;
  
    
    // Show Added Money To UI 
    const inputAddAmount = document.getElementById('input-add-amount');
    const newAmount = Number(currentAmount.innerText) + Number(inputAddAmount.value)
    currentAmount.innerText = newAmount;
    alert(`Add Money Successful at ${new Date()}`);

    // Transaction
    const historyDiv = document.createElement('div');
    historyDiv.innerHTML = `
        <div class="flex items-center gap-4 border-3 border-gray-300 rounded-2xl p-5">
            <div>
                <img class="w-10 h-10" src="./assets/opt-1.png" alt="">
            </div>
            <div>
                <h2 class="font-bold text-[18px]">Add Money Successful</h2>
                <p>${new Date()}</p>
            </div>
        </div>
    `
    transactionsDisplay.appendChild(historyDiv)
})



// Cashout Section
const handleCashOut = (section) => {
    // console.log(section);
    // 1. Show In The UI 
    allSection.forEach(element => {
        element.classList.add('hidden');
    });
    section.classList.remove('hidden');

}
// Cashout Logical Calculations
const cashoutBtn = document.getElementById('cashout-btn');
cashoutBtn.addEventListener('click', function(){

   // 2-2. Match Agent Account Number 
   if(!agentNumberValidation('input-agent-number')) return;
   
   // 2-3. Match Pin Number 
    if(!pinValidation('input-cashout-pin')) return;
   
   // 2-4. Show Money After Cashout To UI 
   (costMoney('input-cashout-amount', `Cashout Successful at ${new Date()}`))

   // Transaction
    const historyDiv = document.createElement('div');
    historyDiv.innerHTML = `
        <div class="flex items-center gap-4 border-3 border-gray-300 rounded-2xl p-5">
            <div>
                <img class="w-10 h-10" src="./assets/opt-1.png" alt="">
            </div>
            <div>
                <h2 class="font-bold text-[18px]">Cashout Successful</h2>
                <p>${new Date()}</p>
            </div>
        </div>
    `
    transactionsDisplay.appendChild(historyDiv)

})



//  Transfer Section
const handleTransferMoney = (section) => {
    // console.log(section);
    // 1. Show In The UI 
    allSection.forEach(element => {
        element.classList.add('hidden');
    });
    section.classList.remove('hidden');
}
// Transfer Logical Calculations
const transferBtn = document.getElementById('transfer-btn');
transferBtn.addEventListener('click', function(){

    // Match Bank Account Number 
    if(!agentNumberValidation('input-transfer-account-number')) return;
    
    // Match Pin Number 
    if(!pinValidation('input-transfer-pin')) return;
    
    // Show Money After Transfer To UI 
    costMoney('input-transfer-amount', `Transfer Successful at ${new Date()}`)

    // Transaction
    const historyDiv = document.createElement('div');
    historyDiv.innerHTML = `
        <div class="flex items-center gap-4 border-3 border-gray-300 rounded-2xl p-5">
            <div>
                <img class="w-10 h-10" src="./assets/opt-1.png" alt="">
            </div>
            <div>
                <h2 class="font-bold text-[18px]">Transfer Successful</h2>
                <p>${new Date()}</p>
            </div>
        </div>
    `
    transactionsDisplay.appendChild(historyDiv)
})



// Coupon Section
const handleGetBonus = (section) => {
    // console.log(section);
    allSection.forEach(element => {
        element.classList.add('hidden');
    });
    section.classList.remove('hidden');
}
// Coupon Logical Calculations
const couponBtn = document.getElementById('coupon-btn');
couponBtn.addEventListener('click', function(){
    const inputCoupon = document.getElementById('input-coupon');
    if(inputCoupon.value !== '1!2@3#'){
        alert('Invalid Coupon')
    }
    const newAmount = Number(currentAmount.innerText) + 100;
    currentAmount.innerText = newAmount
    alert(`Congratulations , You Got 100 Taka Bonus Using Coupon Code at ${new Date()}`)

    // Transaction
    const historyDiv = document.createElement('div');
    historyDiv.innerHTML = `
        <div class="flex items-center gap-4 border-3 border-gray-300 rounded-2xl p-5">
            <div>
                <img class="w-10 h-10" src="./assets/opt-1.png" alt="">
            </div>
            <div>
                <h2 class="font-bold text-[18px]">Got Bonus By Coupon</h2>
                <p>${new Date()}</p>
            </div>
        </div>
    `
    transactionsDisplay.appendChild(historyDiv)
})



// Payment Section
const handlePayBill = (section) => {
    // console.log(section);
    allSection.forEach(element => {
        element.classList.add('hidden');
    });
    section.classList.remove('hidden');
}
// Payment Logical Calculations
const payBillBtn = document.getElementById('pay-bill-btn')
payBillBtn.addEventListener('click', function(){
     const paymentSelection = document.getElementById('payment-selection');
    if(paymentSelection.value === 'Select A Payment'){
        alert('Please Select A Bank');
        return;
    }
    
    if(!agentNumberValidation('input-biller-acoount-number')) return;

    if(!pinValidation('input-payment-pin')) return;

    costMoney('input-payment-amount' , `${paymentSelection.value} Payment Done at ${new Date()}`);

    // Transaction
    const historyDiv = document.createElement('div');
    historyDiv.innerHTML = `
        <div class="flex items-center gap-4 border-3 border-gray-300 rounded-2xl p-5">
            <div>
                <img class="w-10 h-10" src="./assets/opt-1.png" alt="">
            </div>
            <div>
                <h2 class="font-bold text-[18px]">${paymentSelection.value} Payment Successful</h2>
                <p>${new Date()}</p>
            </div>
        </div>
    `
    transactionsDisplay.appendChild(historyDiv)
})



// Transaction Section 
const handleTransactions = (section) => {
    allSection.forEach(element => {
        element.classList.add('hidden');
    });
    section.classList.remove('hidden');
    
    
}






// Common Functions

function userNumberValidation(id){
    const number = document.getElementById(id);
        if(number.value !== '01234567890'){
            alert('Wrong Number');
            return false;
        }
        return true;
}


function agentNumberValidation(id){
        const number = document.getElementById(id);
        if(number.value.length !== 11){
            alert('Invalid !!!  Enter A 11 Digit Number');
            return false;
        }
        return true;
}


function pinValidation(id){
        const pin = document.getElementById(id);
        // console.log(pin.value);
        if(pin.value !== '1234'){
            alert('Invalid Pin');
            return false;
        }
        return true;
}


function costMoney(id,message){
        const amount = document.getElementById(id);
        const newAmount = Number(currentAmount.innerText) - Number(amount.value);
        if(newAmount < 0){
            alert('Insufficient Balance');
            return;
        }
        currentAmount.innerText = newAmount;
        alert(message);
}