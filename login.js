document.getElementById('login-btn').addEventListener('click',function(){
    // 1. Get the mobile number
    const inputNumber = document.getElementById('input-number');
    const userNumber = inputNumber.value;
     
    // 2. Get the pin
    const inputPin = document.getElementById('input-pin');
    const userPin = inputPin.value

    // 3. Match mobile number and pin
    if(userNumber === '01234567890' && userPin === '1234'){
        // 3-1. true >> alert >> homepage
        alert('Login Success');
       window.location.href = 'home.html';
    }
    // 3-2. false >> alert >> return
    else{
        alert('Login Failed');
        return;
    }
    
})