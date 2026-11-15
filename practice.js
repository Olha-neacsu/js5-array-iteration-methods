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
/*
 * Функція describeOrder() приймає будь-яку кількість назв напоїв
 * і повертає опис замовлення у форматі:
 * 'Espresso, Latte, Americano | items: 3'
 * тобто назви через кому, потім ' | items: ' і кількість напоїв.
 * 1. Оголоси describeOrder як стрілочну функцію.
 * 2. Збери всі аргументи в масив drinks через залишкові параметри.
 * 3. Поверни рядок цього формату, склавши його шаблонним рядком.
 * 4. Використай неявне повернення.
 */

// Твій код тут

// const describeOrder = (...drinks) =>
//   `${drinks.join(', ')} | item: ${drinks.length}`;

// // const describeOrder = (...drinks) => {
// //   const items = drinks.join(', ');
// //   return `${items} | item: ${drinks.length}`;
// // };

// console.log(describeOrder('Espresso', 'Latte', 'Americano'));
// // Espresso, Latte, Americano | items: 3

// console.log(describeOrder('Cappuccino', 'Latte'));
// // Cappuccino, Latte | items: 2

// console.log(describeOrder('Espresso'));
// // Espresso | items: 1

//5--------------------------------------------------------------------
/*
 * Нижче три виклики forEach() зі звичайними функціями-колбеками.
 * 1. Перепиши кожен колбек стрілочною функцією.
 * 2. Скороти кожен запис настільки, наскільки дозволяють
 *    його параметри й тіло.
 * 3. Вивід у консоль має лишитись тим самим.
 */

// const services = ['Cleaning', 'Whitening', 'Filling'];
// const prices = [450, 1200, 800];

// services.forEach((service) => console.log(service));

// // services.forEach(function (service) {
// //     console.log(service);

// // Cleaning
// // Whitening
// // Filling

// prices.forEach((price, index) => console.log(`${index + 1}. ${price} UAH`));

// // prices.forEach(function (price, index) {
// //   console.log(`${index + 1}. ${price} UAH`);
// // });
// // 1. 450 UAH
// // 2. 1200 UAH
// // 3. 800 UAH

// prices.forEach(function (price) {
//   const priceWithTax = price * 1.2;
//   console.log(priceWithTax);
// });

// // 540
// // 1440
// // 960

//6----------------------------------------------------------------
/*
 * Функція getDrinkCodes(drinks) повертає новий масив кодів напоїв для каси.
 * Код — це перші три літери назви у верхньому регістрі.
 *   drinks — масив назв напоїв (рядки).
 * 1. Оголоси getDrinkCodes як стрілочну функцію.
 * 2. Перебери масив drinks методом map().
 * 3. У колбеку збережи перші три літери назви у змінну shortName
 *    за допомогою методу slice().
 * 4. Поверни з колбека shortName у верхньому регістрі.
 * 5. Поверни новий масив, який дав map().
 */

// Твій код тут

// const getDrinkCodes = (drinks) => {
//   return drinks.map((drink) => {
//     const shortName = drink.slice(0, 3);
//     return shortName.toUpperCase();
//   });
// };

// console.log(getDrinkCodes(['Espresso', 'Cappuccino', 'Latte'])); // ['ESP', 'CAP', 'LAT']
// console.log(getDrinkCodes(['Americano', 'Mocha'])); // ['AME', 'MOC']
// console.log(getDrinkCodes(['Tea'])); // ['TEA']

//7--------------------------------------------------------------------------
