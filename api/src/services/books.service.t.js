const BooksService = require('./books.service');

describe('Test for book service | black box', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    // jest.clearAllMocks(); // clear every mock test
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
      expect(books[0].name).toEqual('Algorithms');
    });
  });
});
