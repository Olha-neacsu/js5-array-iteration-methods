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
/*
 * Масив books містить книги з властивостями title, author і rating.
 * 1. Оголоси змінну topRatedBooks і поклади в неї масив книг,
 *    рейтинг яких не менший за minRating. Використай метод filter().
 * 2. Оголоси змінну booksByAuthor і поклади в неї масив книг,
 *    автор яких збігається зі значенням змінної author.
 */

// const books = [
//   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
//   { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
//   { title: 'The Glass Garden', author: 'Leo', rating: 7.75 },
//   { title: 'North of Winter', author: 'Kim', rating: 7.94 },
//   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 },
// ];

// const minRating = 8;
// const author = 'Alex';

// // Твій код тут

// const booksByAuthor = books.filter((book) => book.author === author);
// const topRatedBooks = books.filter((book) => book.rating >= minRating);

// console.log(topRatedBooks);
// // [
// //   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
// //   { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
// //   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 }
// // ]

// console.log(booksByAuthor);
// // [
// //   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
// //   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 }
// // ]

//11---------------------------------------------------------------------
/*
 * Функція getUsersWithEyeColor(users, color) повертає масив користувачів,
 * у яких колір очей збігається зі значенням параметра color.
 *   users — масив обʼєктів користувачів.
 *   color — колір очей (рядок).
 * 1. Оголоси getUsersWithEyeColor як стрілочну функцію.
 * 2. Перебери масив users методом filter().
 * 3. У колбеку поверни true лише для тих користувачів,
 *    у яких властивість eyeColor дорівнює color.
 * 4. Поверни новий масив, який дав filter().
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

// const getUsersWithEyeColor = (users, color) =>
//   users.filter((user) => user.eyeColor === color);

// console.log(getUsersWithEyeColor(allUsers, 'blue'));
// // Масив із трьох користувачів: Alex, Nora, Sam

// console.log(getUsersWithEyeColor(allUsers, 'green'));
// // Масив із двох користувачів: Max, Iris

// console.log(getUsersWithEyeColor(allUsers, 'red'));
// // []

//12--------------------------------------------------------
/*
 * Функція getUsersWithAge(users, minAge, maxAge) повертає масив користувачів,
 * вік яких потрапляє в діапазон від minAge до maxAge включно.
 *   users — масив обʼєктів користувачів.
 *   minAge, maxAge — межі діапазону (числа).
 * 1. Оголоси getUsersWithAge як стрілочну функцію.
 * 2. Перебери масив users методом filter().
 * 3. У колбеку поверни true лише для тих користувачів, у яких age
 *    не менший за minAge і не більший за maxAge.
 * 4. Поверни новий масив, який дав filter().
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

// const getUsersWithAge = (users, minAge, maxAge) => {
//   const result = users.filter(
//     (user) => user.age >= minAge && user.age <= maxAge,
//   );
//   return result;
// };

// console.log(getUsersWithAge(allUsers, 20, 30));
// // Масив із трьох користувачів: Max, Iris, Sam

// console.log(getUsersWithAge(allUsers, 30, 40));
// // Масив із чотирьох користувачів: Alex, Nora, Leo, Kim

// console.log(getUsersWithAge(allUsers, 80, 100));
// // []

//13-------------------------------------------------------------------------
/*
 * Масив books містить книги з властивостями title, author і rating.
 * 1. Оголоси змінну bookWithTitle і поклади в неї обʼєкт книги,
 *    назва якої збігається зі значенням змінної bookTitle.
 *    Використай метод find().
 * 2. Оголоси змінну bookByAuthor і поклади в неї обʼєкт книги,
 *    автор якої збігається зі значенням змінної author.
 */

// const books = [
//   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
//   { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
//   { title: 'The Glass Garden', author: 'Leo', rating: 7.75 },
//   { title: 'North of Winter', author: 'Kim', rating: 7.94 },
//   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 },
// ];

// const bookTitle = 'The Glass Garden';
// const author = 'Alex';

// // Твій код тут

// const bookByAuthor = books.find((book) => book.author === author);
// const bookWithTitle = books.find((book) => book.title === bookTitle);

// console.log(bookWithTitle);
// // { title: 'The Glass Garden', author: 'Leo', rating: 7.75 }

// console.log(bookByAuthor);
// // { title: 'Silent Harbor', author: 'Alex', rating: 8.38 }

//14----------------------------------------------------------------
/*
 * Функція getUserWithEmail(users, email) повертає обʼєкт користувача,
 * пошта якого збігається зі значенням параметра email.
 *   users — масив обʼєктів користувачів.
 *   email — поштова адреса (рядок).
 * 1. Оголоси getUserWithEmail як стрілочну функцію.
 * 2. Перебери масив users методом find().
 * 3. У колбеку поверни true для того користувача, у якого властивість
 *    email дорівнює параметру email.
 * 4. Поверни результат find().
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

// const getUserWithEmail = (users, email) =>
//   users.find((user) => email === user.email);

// console.log(getUserWithEmail(allUsers, 'kim@kog.com'));
// // Обʼєкт користувача Kim

// console.log(getUserWithEmail(allUsers, 'iris@omatom.com'));
// // Обʼєкт користувача Iris

// console.log(getUserWithEmail(allUsers, 'unknown@mail.com'));
// // undefined

//15---------------------------------------------------------
/*
 * Функція calculateTotalBalance(users) повертає суму коштів усіх користувачів.
 *   users — масив обʼєктів користувачів.
 * 1. Оголоси calculateTotalBalance як стрілочну функцію.
 * 2. Перебери масив users методом reduce() з початковим значенням 0.
 * 3. У колбеку додай до накопиченого значення властивість balance
 *    поточного користувача.
 * 4. Поверни результат reduce().
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

// const calculateTotalBalance = (users) => {
//   return users.reduce((sum, user) => sum + user.balance, 0);
// };

// console.log(calculateTotalBalance(allUsers)); // 20916

//16------------------------------------------------------------------
/*
 * Онлайн-бібліотека показує книги за роком видання — від старіших
 * до новіших або навпаки.
 * 1. Оголоси змінну ascendingReleaseYears і поклади в неї копію масиву
 *    releaseYears, відсортовану за зростанням. Використай метод toSorted()
 *    з функцією порівняння.
 * 2. Оголоси змінну descendingReleaseYears і поклади в неї копію масиву
 *    releaseYears, відсортовану за спаданням.
 */

// const releaseYears = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// // Твій код тут

// const ascendingReleaseYears = releaseYears.toSorted((a, b) => a - b);
// const descendingReleaseYears = releaseYears.toSorted((a, b) => b - a);

// console.log(ascendingReleaseYears);
// // [1967, 1973, 1984, 1997, 2008, 2012, 2016]

// console.log(descendingReleaseYears);
// // [2016, 2012, 2008, 1997, 1984, 1973, 1967]

//17------------------------------------------------------
/*
 * Онлайн-бібліотека показує список книг у різному порядку.
 * Масив books містить обʼєкти з властивостями title, author і rating.
 * 1. Оголоси змінну sortedByAscendingRating і поклади в неї копію масиву
 *    books, відсортовану за зростанням рейтингу.
 * 2. Оголоси змінну sortedByDescendingRating і поклади в неї копію масиву
 *    books, відсортовану за спаданням рейтингу.
 * Обидва рази використай метод toSorted() з функцією порівняння.
 */

// const books = [
//   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
//   { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
//   { title: 'The Glass Garden', author: 'Leo', rating: 7.75 },
//   { title: 'North of Winter', author: 'Kim', rating: 7.94 },
//   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 },
// ];

// // Твій код тут

// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);
// const sortedByDescendingRating = books.toSorted((a, b) => b.rating - a.rating);

// console.log(sortedByAscendingRating);
// // [
// //   { title: 'The Glass Garden', author: 'Leo', rating: 7.75 },
// //   { title: 'North of Winter', author: 'Kim', rating: 7.94 },
// //   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
// //   { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
// //   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 }
// // ]

// console.log(sortedByDescendingRating);
// // [
// //   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 },
// //   { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
// //   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
// //   { title: 'North of Winter', author: 'Kim', rating: 7.94 },
// //   { title: 'The Glass Garden', author: 'Leo', rating: 7.75 }
// // ]

//18------------------------------------------------------------
/*
 * Онлайн-бібліотека показує назви найкраще оцінених книг.
 * Масив books містить обʼєкти з властивостями title, author і rating.
 * 1. Оголоси змінну topRatedTitles і поклади в неї масив назв книг,
 *    рейтинг яких не менший за minRating.
 * 2. Зроби це одним ланцюжком з методів filter() і map().
 *    Проміжних змінних бути не повинно.
 */

// const books = [
//   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
//   { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
//   { title: 'The Glass Garden', author: 'Leo', rating: 7.75 },
//   { title: 'North of Winter', author: 'Kim', rating: 7.94 },
//   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 },
// ];

// const minRating = 8;

// // Твій код тут

// const topRatedTitles = books
//   .filter((book) => book.rating >= minRating)
//   .map((book) => book.title);

// console.log(topRatedTitles);
// // ['Silent Harbor', 'Paper Moons', 'Ashes and Salt']

//19----------------------------------------------------
/*
 * Функція getActiveNamesByBalance(users) повертає масив імен
 * активних користувачів, відсортованих за балансом від найбільшого.
 *   users — масив обʼєктів користувачів.
 * 1. Оголоси getActiveNamesByBalance як стрілочну функцію.
 * 2. Одним ланцюжком: відбери користувачів, у яких isActive дорівнює true,
 *    відсортуй їх за balance від найбільшого до найменшого й дістань їхні імена.
 * 3. Використай методи filter(), toSorted() і map().
 *    Проміжних змінних бути не повинно.
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

// const getActiveNamesByBalance = (users) =>
//   allUsers
//     .filter((user) => user.isActive)
//     .toSorted((a, b) => b.balance - a.balance)
//     .map((user) => user.name);

// console.log(getActiveNamesByBalance(allUsers));
// // ['Sam', 'Nora', 'Kim', 'Iris']
