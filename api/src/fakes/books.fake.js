const { faker } = require('@faker-js/faker');
const randomNumber = Math.floor(Math.random() * 100) + 1;

const generateOneBook = () => ({
  _id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBooks = (size = randomNumber) => {
  const fakeBooks = [];

  for (let i = 0; i < size; i + 1) {
    fakeBooks.push(generateOneBook());
  }

  return [...fakeBooks];
};

module.exports = { generateOneBook, generateManyBooks };
