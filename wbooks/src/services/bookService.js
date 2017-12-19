import * as api from '../config/api';

export const getBooks = () => {
  return api.get('/books');
}

// export const getBooks = (onSuccess, onFailure) => {
//   api.get('/books')
//     .then(({data}) => {onSuccess(data)})
//     .catch(onFailure);
// }

export const getBook = (id, onSuccess, onFailure) => {
  api.get(`/books/${id}` )
    .then(({data}) => {onSuccess(data)})
    .catch(onFailure);
}

export const getRelatedBooks = (book, onSuccess, onFailure) => {
  getBooks((books) => {
      onSuccess(
        books.filter((storedBook) => storedBook.genre === book.genre && storedBook.id !== book.id)
          .slice(0,5));
  },
   onFailure);
}
