const BooksService = require('./books.service');

const fakeBooks = [
  { _id: '67a27e1d5ec7950ef5a44798', name: 'Algorithms - fake' },
  { _id: '67a27ef95ec7950ef5a4479c', name: 'Database - fake' },
];

const fakeBooks2 = [
  { _id: '67a27e1d5ec7950ef5a44798', name: 'Pomodoro - fake' },
];

const mockGetAll = jest.fn();

// create a mock, when someone calls this file then we answered with this
jest.mock('../lib/mongo.lib', () => jest
  .fn()
  .mockImplementation(() => ({ getAll: mockGetAll })));

describe('Test for book service | black box', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); // clear every mock test
  });

  describe('test for getBooks', () => {
    test('should return list of 2 books', async () => {
      // arrange
      mockGetAll.mockResolvedValue(fakeBooks);
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
      // arrange
      mockGetAll.mockResolvedValue(fakeBooks2);
      // act
      const books = await service.getBooks();
      // console.log('books', books);
      // assert
      expect(books[0].name).toEqual('Pomodoro - fake');
    });
  });
});
