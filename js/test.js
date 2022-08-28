// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, makePizza, onOrderError) {
//     return pizzaPalace.pizzas.includes(pizzaName)
//       ? makePizza(pizzaName)
//       : onOrderError(
//           `There is no pizza with a name ${pizzaName} in the assortment.`
//         );
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
//   numbers.forEach(function (number) {
//     number > value ? filteredNumbers.push(number) : '';
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number =>
//     number > value ? filteredNumbers.push(number) : ''
//   );

//   // Change code above this line
//   return filteredNumbers;
// };

// function changeEven(numbers, value) {
//   // Change code below this line
//   newArr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArr.push(numbers[i] + value);
//     } else {
//       newArr.push(numbers[i]);
//     }
//   }
//   return newArr;
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
// const getUsersWithEyeColor = (users, color) => {
//   const newUsers = users.filter(user => user.eyeColor === color);
//   return [...newUsers.name];
// };

// const getUsersWithEyeColor = (users, color) =>
//   users.filter(({ eyeColor }) => eyeColor === color);
// // users.filter(user => user.eyeColor === color).map(user => user.name);

// console.log(getUsersWithEyeColor(users, 'brown'));

// const getFriends = users => {
//   const allFriends = users.map(user => user.friends);
//   return allFriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
// };

// const getUsersWithEyeColor = (users, color) =>
//   users.filter(({ eyeColor }) => eyeColor === color);

// const getActiveUsers = users =>
//   users.filter(({ isActive }) => isActive === true);

// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 != 0);

// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 != 0);

// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 != 0);

// = (users) => users.every(user=>user.isActive===true);

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce(
//   (previousValue, value) => previousValue + value,
//   0
// );

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

// Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, player) => total + player.playtime / player.gamesPlayed,
//   0
// );

// console.log(totalAveragePlaytimePerGame);

// // Change code below this line
// const calculateTotalBalance = users =>
//   users.reduce((total, user) => total + user.balance, 0);
// // Change code above this line
// console.log(calculateTotalBalance);

// const getTotalFriendCount = users =>
//   users.reduce((totalFriends, user) => totalFriends + user.friends.length, 0);

// const sortedByAuthorName = [...books].sort((firstAuth, secondAuth) =>
//   firstAuth.author.localeCompare(secondAuth.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstAuth, secondAuth) =>
//   secondAuth.author.localeCompare(firstAuth.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstAuth, secondAuth) => firstAuth.rating - secondAuth.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstAuth, secondAuth) => secondAuth.rating - firstAuth.rating
// );

// const sortByAscendingBalance = users =>
//   [...users].sort((minor, major) => minor.balance - major.balance);

// const sortByDescendingFriendCount = users =>
//   [...users].sort((prev, next) =>
//     prev.friends.length.localeCompare(next.friends.length)
//   );

// const sortByDescendingFriendCount = users =>
//   [...users].sort((prev, next) => next.friends.length - prev.friends.length);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author);
// console.log(names);
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//       'Adrian Cross',
//       'Solomon Fokes',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);
// };

// const getTotalBalanceByGender = (users, gender) => {
//   const newUsers = [...users].filter(user => user.gender === gender).reduce((total, user) => total + user.balance, 0);
//   return newUsers;
// };

// console.log(getTotalBalanceByGender(users, 'female'));
// 1. Перевірити стать особи
// 2. Підсумувати баланси перевірених осіб

// const getUserNames = users => users.map(user => user.name);

// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);
// const taxiPark = {
//   cars: [
//     { brand: 'Mazda', mileage: 17 },
//     { brand: 'Honda', mileage: 80 },
//     { brand: 'Nissan', mileage: 50 },
//   ],
// };

// const inputData = [
//   { id: 1, name: 'Item 1' },
//   { id: 2, name: 'Item 2' },
//   { id: 4, name: 'Item 4' },
//   { id: 7, name: 'Item 7' },
// ];

// it('should return normalized data', () => {
//   expect(normalize(inputData)).toEqual({
//     entities: {
//       1: { id: 1, name: 'Item 1' },
//       2: { id: 2, name: 'Item 2' },
//       4: { id: 4, name: 'Item 4' },
//       7: { id: 7, name: 'Item 7' },
//     },
//     byId: [1, 2, 4, 7],
//   });
// });
