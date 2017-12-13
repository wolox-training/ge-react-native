import * as api from '../config/api';

export const getBooks = (token, onSuccess, onFailure) => {
  const config = {headers: {Authorization: token}};
  api.get('/books', config)
    .then(({data}) => {onSuccess(data)})
    .catch(onFailure);
}

export const getBook = (id, token, onSuccess, onFailure) => {
  const config = {headers: {'Authorization': token}};
  api.get(`/books/${id}`, config)
    .then(({data}) => {onSuccess(data)})
    .catch(onFailure);
}

export const getRelatedBooks = (book, token, onSuccess, onFailure) => {
  getBooks(token, (books)=>{
      onSuccess(
        books.filter((storedBook) => storedBook.genre === book.genre && storedBook.id !== book.id)
          .slice(0,5));
  },
   onFailure);
}
