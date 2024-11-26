




const items = document.getElementById('items');
const ol = document.getElementById('ol');
const totalPrice = document.getElementById('total-price')
const discountAmount = document.getElementById('discount')
const grandTotal = document.getElementById('grand-total')
const couponCodeInpt = document.getElementById('coupon-code');
const apply = document.getElementById('apply');

let coupon = '';
const createListItem = (name) => {
    const li = document.createElement('li');
    li.innerText = name;
    li.classList.add('text-[1.25rem]','font-bold');
    ol.appendChild(li);
}
apply.addEventListener('click', () => {
    coupon = couponCodeInpt.value;
})
let total = 0, discount = 0, grand = 0;

const calculation = (price, haveCoupon) => {
    discount = parseFloat(discount)
    grand = parseFloat(grand)
    total = parseFloat(total);

    total += parseFloat(price);
    if (haveCoupon) discount += (total * 0.2);
    grand += (total + discount);
    discount = discount.toFixed(2);
    totalPrice.innerText = total;
    discountAmount.innerText = discount;
    grandTotal.innerText = grand;

    // if(couponCode.to==='')
}

items.addEventListener('click', (e) => {

    const name = document.getElementById('name').innerText;
    const price = document.getElementById('price').innerText;
    createListItem(name);
    (coupon === '' ? calculation(price, false) : calculation(price, true));
    console.log(total, discount, grand);

    // console.log(name,price);
    // console.log(couponCode.value);


});
