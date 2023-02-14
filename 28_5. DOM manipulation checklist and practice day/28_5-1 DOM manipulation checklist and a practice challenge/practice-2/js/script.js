const coupon = document.getElementById('buyInput');
const couponBtn = document.getElementById('couponBtn');
const productPrice = parseFloat(document.getElementById('productPrice').innerText);
const shippingCharges = parseFloat(document.getElementById('shippingCharges').innerText);
const totalPay = document.getElementById('totalPay');
document.getElementById('payProductPrice').innerText = productPrice;
totalPay.innerText = productPrice + shippingCharges;

function check (e){
    alert(e);
}
document.getElementById('couponBtn').addEventListener('click', ()=>{
    if (coupon.value === 'DISC30'){
        let discount = parseFloat(productPrice)
        // console.log(discount);
        discount *= 0.30 * -1;
        document.getElementById('discount').innerText = discount;
        
        totalPay.innerText = (parseFloat(totalPay.innerText) - (discount * -1)).toFixed(2);
        coupon.value = '';
        document.getElementById('warning').innerText = '';
        // check(discount);
    }
    else if (!(isNaN(coupon.value))){
        document.getElementById('warning').innerText = 'no valid coupon';
        coupon.value = '';
        
    }
    else {
        document.getElementById('warning').innerText = 'The coupon you provided is not available';
        coupon.value = '';
    }
});