const BooksService = require('./books.service');
const { generateManyBooks } = require('../fakes/books.fake');

const mockGetAll = jest.fn();

// create a mock, when someone calls this file then we answered with this
jest.mock('../lib/mongo.lib', () => jest
  .fn()
  .mockImplementation(() => ({ getAll: mockGetAll })));

describe('Test for book service | black box', () => {
  let service;

  beforeAll(() => {
    service = new BooksService();
    jest.clearAllMocks(); // clear every mock test
  });

  describe('test for getBooks', () => {
    test('should return list of 2 books', async () => {
      // arrange
      mockGetAll.mockResolvedValue(generateManyBooks(2));
      // act
      const books = await service.getBooks({});
      // console.log('books => ', books);
      // assert
      expect(books.length).toEqual(2);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return an specific book name', async () => {
      const oneBookFake = generateManyBooks(1);
      const bookFakeName = oneBookFake[0].name;
      // arrange
      mockGetAll.mockResolvedValue(oneBookFake);
      // act
      const books = await service.getBooks();
      // console.log('oneBookFake =>', oneBookFake);
      // assert
      expect(books[0].name).toEqual(bookFakeName);
    });
  });
});
