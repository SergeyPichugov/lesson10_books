'use strict';

const books = document.querySelectorAll('.book'),
      allBooks = document.querySelector('.books'),
      body = document.querySelector('body'),
      titleBook3 = document.querySelectorAll('.book > h2 > a'),
      advertising = document.querySelector('.adv'),
      elemBook = document.querySelectorAll('.book > ul > li ');


allBooks.prepend(books[1]);
books[0].after(books[4]);
books[4].after(books[3]);
books[3].after(books[5]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

titleBook3[4].textContent = 'Книга 3. this и Прототипы Объектов"';

advertising.remove();

elemBook[9].after(elemBook[2]);
elemBook[3].after(elemBook[6]);
elemBook[6].after(elemBook[8]);

elemBook[47].after(elemBook[55]);
elemBook[50].after(elemBook[48]);
elemBook[53].after(elemBook[51]);

const chapter8 = document.createElement('li');
chapter8.textContent = 'Глава 8: За пределами ES6';
elemBook[26].before(chapter8);
