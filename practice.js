/*
 * Функція getExpensivePrices(prices, minPrice) повертає новий масив,
 * у якому лише ціни від minPrice і вище.
 *   prices — масив цін (числа).
 *   minPrice — ціна, з якої послуга вважається дорогою.
 * 1. Оголоси змінну expensivePrices з порожнім масивом.
 * 2. Перебери масив prices методом forEach().
 * 3. У колбеку перевір: якщо поточна ціна не менша за minPrice,
 *    додай її до expensivePrices.
 * 4. Поверни expensivePrices.
 */

// Твій код тут

function getExpensivePrices(prices, minPrice) {
  const expensivePrices = [];

  prices.forEach(function (price) {
    if (price >= minPrice) {
      expensivePrices.push(price);
    }
  });

  return expensivePrices;
}
// expensivePrices(getExpensivePrices);

console.log(getExpensivePrices([320, 750, 180, 1200, 460], 500)); // [750, 1200]
console.log(getExpensivePrices([320, 180, 460], 500)); // []
console.log(getExpensivePrices([90, 240, 1500, 620], 200)); // [240, 1500, 620]
