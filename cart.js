const items = document.getElementById('items');
const ol = document.getElementById('ol');
const totalPrice = document.getElementById('total-price');
const discountAmount = document.getElementById('discount');
const grandTotal = document.getElementById('grand-total');
const couponCodeInpt = document.getElementById('coupon-code');
const apply = document.getElementById('apply');

let coupon = '';
const createListItem = (name) => {
    const li = document.createElement('li');
    li.innerText = name;
    li.classList.add('text-[1.25rem]', 'font-bold');
    ol.appendChild(li);
};

apply.addEventListener('click', () => {
    coupon = couponCodeInpt.value;
});

let total = 0, discount = 0, grand = 0;

const calculation = (price, haveCoupon) => {
    price = parseFloat(price);
    discount = parseFloat(discount);
    total = parseFloat(total);

    total += price;
    if (haveCoupon) discount += price * 0.2;
    grand = total - discount;

    discount = discount.toFixed(2);
    totalPrice.innerText = total.toFixed(2);
    discountAmount.innerText = discount;
    grandTotal.innerText = grand.toFixed(2);
};

items.addEventListener('click', (e) => {
    const card = e.target.closest('.card'); // Get the clicked card
    if (!card) return;

    const name = card.querySelector('.name').innerText; // Get the name of the clicked product
    const price = card.querySelector('.price').innerText.replace(' TK', ''); // Get the price and remove " TK"
    
    createListItem(name);
    calculation(price, coupon !== '');
});
