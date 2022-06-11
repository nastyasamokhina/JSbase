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

let basketObject = {
  1: {

  },
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
}
