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

// function getExpensivePrices(prices, minPrice) {
//   const expensivePrices = [];

//   prices.forEach(function (price) {
//     if (price >= minPrice) {
//       expensivePrices.push(price);
//     }
//   });

//   return expensivePrices;
// }
// // expensivePrices(getExpensivePrices);

// console.log(getExpensivePrices([320, 750, 180, 1200, 460], 500)); // [750, 1200]
// console.log(getExpensivePrices([320, 180, 460], 500)); // []
// console.log(getExpensivePrices([90, 240, 1500, 620], 200)); // [240, 1500, 620]

//2-------------------------------------------------------------------------
/*
 * Нижче три функції Sunny Coffee, записані звичайним способом.
 * Перепиши кожну з них стрілочною функцією, не змінюючи поведінки.
 * 1. calculateChange(paid, total) — з двома параметрами.
 * 2. addDeliveryFee(price) — з одним параметром.
 * 3. showWorkingHours() — без параметрів.
 * Виклики знизу чіпати не треба: після рефакторингу вони мають
 * вивести ті самі результати.
 */

// const calculateChange = (paid, total) => {
//   return paid - total;
// };

// const addDeliveryFee = (price) => {
//   return price + 50;
// };

// const showWorkingHours = () => {
//   console.log('Sunny Coffee: 8:00 - 20:00');
// };

// console.log(calculateChange(200, 135)); // 65
// console.log(addDeliveryFee(300)); // 350
// showWorkingHours(); // Sunny Coffee: 8:00 - 20:00

//3-----------------------------------------------------------
/*
 * Нижче три стрілочні функції SmileCare з явним поверненням.
 * 1. Перепиши на неявне повернення ті функції, у тілі яких лише вираз,
 *    що повертається.
 * 2. Функцію, у тілі якої є й інші інструкції, залиш без змін.
 * Виклики знизу чіпати не треба: після рефакторингу вони мають
 * вивести ті самі результати.
 */

// const calculateVisitsCost = (pricePerVisit, visits) => pricePerVisit * visits;
// const getInsuranceCoverage = (price) => price * 0.5;

// const getFinalPrice = (price, discount) => {
//   const finalPrice = price - discount;
//   console.log('Final price: ' + finalPrice);
//   return finalPrice;
// };

// console.log(calculateVisitsCost(450, 3)); // 1350
// console.log(getInsuranceCoverage(900)); // 450
// console.log(getFinalPrice(1200, 300));
// // Final price: 900
// // 900

//4---------------------------------------------------------------
