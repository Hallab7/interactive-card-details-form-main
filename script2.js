
var cardName = localStorage.getItem('card-name');
var cardNo = localStorage.getItem('card-no');
var cardMonth = localStorage.getItem('card-month');
var cardcvc = localStorage.getItem('card-cvc');

function showdetails(){
    document.getElementById("NewCardName").innerHTML = cardName;
    document.getElementById("NewCardNo").innerHTML = cardNo.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");
    document.getElementById('cvv').innerHTML = cardcvc;
    document.getElementById("expNo").innerHTML = cardMonth
}
window.onload = showdetails();