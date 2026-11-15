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
/*
 * Функція getPriceList(services) повертає новий масив рядків для прайсу.
 *   services — масив обʼєктів з властивостями name і price.
 * 1. Оголоси getPriceList як стрілочну функцію.
 * 2. Перебери масив services методом map().
 * 3. У колбеку поверни рядок у форматі 'Cleaning: 450 UAH'.
 * 4. Поверни новий масив, який дав map().
 */

// Твій код тут

// const getPriceList = (services) => {
//   return services.map((service) => {
//     return `${service.name}: ${service.price} UAH`;
//   });
// };

// console.log(
//   getPriceList([
//     { name: 'Cleaning', price: 450 },
//     { name: 'Whitening', price: 1200 },
//     { name: 'Filling', price: 800 },
//   ]),
// );
// // ['Cleaning: 450 UAH', 'Whitening: 1200 UAH', 'Filling: 800 UAH']

// console.log(
//   getPriceList([
//     { name: 'Crown', price: 3500 },
//     { name: 'Implant', price: 9000 },
//   ]),
// );
// // ['Crown: 3500 UAH', 'Implant: 9000 UAH']

//8-----------------------------------------------------------------
/*
 * Функція getUserEmails(users) повертає масив поштових адрес користувачів.
 *   users — масив обʼєктів користувачів.
 * 1. Оголоси getUserEmails як стрілочну функцію.
 * 2. Перебери масив users методом map().
 * 3. У колбеку поверни значення властивості email поточного користувача.
 * 4. Поверни новий масив, який дав map().
 */

// const allUsers = [
//   {
//     name: 'Alex',
//     email: 'alex@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sam'],
//     isActive: false,
//     balance: 2811,
//     skills: ['html', 'css'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Nora',
//     email: 'nora@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Kim', 'Sam'],
//     isActive: true,
//     balance: 3821,
//     skills: ['figma', 'html', 'css', 'testing', 'git'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Max',
//     email: 'max@xinware.com',
//     eyeColor: 'green',
//     friends: ['Leo', 'Iris', 'Kim'],
//     isActive: false,
//     balance: 3793,
//     skills: ['sql', 'node', 'git', 'html', 'javascript'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Iris',
//     email: 'iris@omatom.com',
//     eyeColor: 'green',
//     friends: ['Nora', 'Leo'],
//     isActive: true,
//     balance: 2278,
//     skills: ['react', 'javascript', 'css'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Sam',
//     email: 'sam@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Alex', 'Max'],
//     isActive: true,
//     balance: 3951,
//     skills: ['git', 'node', 'sql'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Leo',
//     email: 'leo@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Iris', 'Kim'],
//     isActive: false,
//     balance: 1498,
//     skills: ['testing', 'html', 'figma'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Kim',
//     email: 'kim@kog.com',
//     eyeColor: 'brown',
//     friends: ['Nora', 'Max'],
//     isActive: true,
//     balance: 2764,
//     skills: ['javascript', 'react', 'node'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// // Твій код тут

// // const getUserEmails = (users) => {
// //   return users.map((user) => user.email);
// // };

// const getUserEmails = (users) => users.map((user) => user.email);

// console.log(getUserEmails(allUsers));
// // ['alex@indexia.com', 'nora@tubesys.com', 'max@xinware.com',
// //  'iris@omatom.com', 'sam@nurali.com', 'leo@furnigeer.com', 'kim@kog.com']

//9----------------------------------------------------------------
/*
 * Функція getPricesInRange(prices, minPrice, maxPrice) повертає новий масив
 * з цін, які входять у діапазон від minPrice до maxPrice включно.
 *   prices — масив цін (числа).
 *   minPrice, maxPrice — межі діапазону.
 * 1. Оголоси getPricesInRange як стрілочну функцію.
 * 2. Перебери масив prices методом filter().
 * 3. У колбеку поверни true лише для тих цін, які не менші за minPrice
 *    і не більші за maxPrice.
 * 4. Поверни новий масив, який дав filter().
 */

// const menuPrices = [55, 120, 40, 85, 95, 25, 150];

// // Твій код тут

// const getPricesInRange = (prices, minPrice, maxPrice) =>
//   prices.filter((price) => price >= minPrice && price <= maxPrice);

// console.log(getPricesInRange(menuPrices, 50, 100)); // [55, 85, 95]
// console.log(getPricesInRange(menuPrices, 25, 45)); // [40, 25]
// console.log(getPricesInRange(menuPrices, 200, 300)); // []

//10--------------------------------------------------------------
