import React from 'react'
import './App.css'
import BookList from './BookList.js'
import { Route } from 'react-router-dom'
import Search from './Search.js'
import * as BooksAPI from './BooksAPI.js'

class BooksApp extends React.Component {
  state ={
    books: []
  }

// Fetch all books and add them to books array
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)

    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookList 
            books = {this.state.books}
            moveBook = {this.moveBook}
          />
        )}
       />
        <Route path='/search' render={() => (
          <Search 
            moveBook = {this.moveBook}
            books = {this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
