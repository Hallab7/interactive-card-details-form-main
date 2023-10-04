function confirm() {
    const a = document.getElementById('CardHolderName').value;
    const b = document.getElementById('CardHolderNumber').value;
    const c = document.getElementById('Month').value;
    const d = document.getElementById('cvc').value;
    localStorage.setItem('card-name', a);
    localStorage.setItem('card-no', b);
    localStorage.setItem('card-month', c);
    localStorage.setItem('card-cvc', d);
    
}
function cardHolderName() {
    const a = document.getElementById('CardHolderName').value;
    document.getElementById("cardName").innerHTML = a;
}
function cardHolderNumber() {
    const b = document.getElementById("CardHolderNumber").value;
    document.getElementById("cardNo").innerHTML = b.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");
}
function expDate() {
    const c = document.getElementById("Month").value;
    document.getElementById("expNo").innerHTML = c;
}
function cardCVC() {
    const d = document.getElementById("cvc").value;
    document.getElementById("cvv").innerHTML = d;
}

