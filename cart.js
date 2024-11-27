const items = document.getElementById('items');
const ol = document.getElementById('ol');
const totalPrice = document.getElementById('total-price');
const discountAmount = document.getElementById('discount');
const grandTotal = document.getElementById('grand-total');
const couponCodeInpt = document.getElementById('coupon-code');
const apply = document.getElementById('apply');

let coupon = '';
let haveCoupon = false;
let total = 0, discount = 0, grand = 0;


apply.addEventListener('click', () => {
    coupon = couponCodeInpt.value.trim();
    if (coupon.toUpperCase() === 'SELL20') {
        haveCoupon = true;
        if (total === 0) alert("Coupon code is applicable if you only buy the items")
        else {
            calculation(0, haveCoupon);
            alert('Coupon applied successfully!');
        }

    } else {
        haveCoupon = false;
        alert('Invalid coupon code. Please try again.');
    }
    couponCodeInpt.value = '';
});


const createListItem = (name) => {
    const li = document.createElement('li');
    li.innerText = name;
    li.classList.add('text-[1.25rem]', 'font-bold');
    ol.appendChild(li);
};


const calculation = (price, haveCoupon) => {
    price = parseFloat(price) || 0;
    total += price;

    if (haveCoupon || total >= 200.0) {
        discount = total * 0.2;
    } else {
        discount = 0;
    }

    grand = total - discount;


    totalPrice.innerText = total.toFixed(2);
    discountAmount.innerText = discount.toFixed(2);
    grandTotal.innerText = grand.toFixed(2);
};


items.addEventListener('click', (e) => {
    const card = e.target.closest('.card');

    if (card) {
        const name = card.querySelector('.name').innerText;
        const price = card.querySelector('.price').innerText;

        createListItem(name);
        calculation(price, haveCoupon);
    } else {
        return;
    }
});
