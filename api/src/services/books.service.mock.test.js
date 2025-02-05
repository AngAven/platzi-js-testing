const BooksService = require('./books.service');

const fakeBooks = [
  { _id: '67a27e1d5ec7950ef5a44798', name: 'Algorithms - fake' },
  { _id: '67a27ef95ec7950ef5a4479c', name: 'Database - fake' },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
};

// create a mock, when someone calls this file then we answered with this
jest.mock('../lib/mongo.lib', () => jest
  .fn()
  .mockImplementation(() => MongoLibStub));

describe('Test for book service | black box', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); // clear every mock test
  });

  describe('test for getBooks', () => {
    test('should return list of 2 books', async () => {
      // arrange
      // act
      const books = await service.getBooks();
      // assert
      expect(books.length).toEqual(2);
    });

    test('should return an specific book name', async () => {
      // arrange
      // act
      const books = await service.getBooks();
      // assert
      expect(books[0].name).toEqual('Algorithms - fake');
    });
  });
});
