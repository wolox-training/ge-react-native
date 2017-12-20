import * as api from '../config/api';

export const getBooks = () => {
  return api.get('/books');
}

export const getBook = (id) => {
  return api.get(`/books/${id}`);
}
