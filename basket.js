'use strict';

/*Поставил в js обработчик на открытие/закрытие окна корзины (ставлю/снимаю)
класс hidden у элемента с классом basket при клике на элемент с классом
cartIconWrap.
*/

const cartIconWrapEl = document.querySelector('.cartIconWrap');
const basketEl = document.querySelector('.basket');

cartIconWrapEl.addEventListener('click', () => {
  basketEl.classList.toggle('hidden');
});

let basket = {};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.count = 1;
  }
  addItem() {
    this.count++;
  }

  getProductMarkup() {
  return `
    <div class="basketRow">
        <div>${this.name}</div>
        <div>${this.count}</div>
        <div>${this.price}</div>
        <div>${this.count * this.price}</div>
    </div>
  `;
  }
};

const productsEl = document.querySelector('.featuredItems');
const productEl = document.querySelectorAll('.featuredItem');
productsEl.addEventListener('click', event => {
  if (!event.target.classList.contains('addToCart')) {
    return;
  } else {
    addToCart(event.target);
  }
 });

function addToCart(target) {
  let id = target.closest('.featuredItem').dataset.id;
  let name = target.closest('.featuredItem').dataset.name;
  let price = target.closest('.featuredItem').dataset.price;
  if (id in basket) {
    basket[id].addItem();
  } else {
    basket[id] = new Product(name, price);
    }
  for (let key in basket) {
  console.log(basket[key]);
  }
};
