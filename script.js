

function totalCharge(event) {
    let billAmount = Number(document.getElementById("bill-amount").value);
    let tipPercent = Number(document.getElementById("tip-percent").value);
    let tax = billAmount * 0.07
    let tip = billAmount * (tipPercent/100);
    let result = document.getElementById("result");
    // result.textContent = (billAmount + tax + tip);
    setTimeout(function(){
        result.textContent = (billAmount + tax + tip);
    }, 1000);
}  

let button = document.getElementById("myBtn");
button.addEventListener("click", totalCharge);


    
