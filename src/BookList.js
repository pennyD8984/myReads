import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'

class BookList extends React.Component{
  render(){
    return(
        <div>
          <div className="list-books">
            <div className="list-books-title">
              <Link
                to = '/'><h1>MyReads</h1></Link>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books
                        .filter(book => book.shelf === 'currentlyReading')
                        .map(book => (
                          <li key={book.id}>                        
                            <Book 
                              book = {book}
                              moveBook = {this.props.moveBook}
                              currentShelf = 'currentlyReading'
                            />
                         </li>
                        ))
                      }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books
                        .filter(book => book.shelf === 'wantToRead')
                        .map(book => (
                          <li key={book.id}>                        
                            <Book 
                              book = {book}
                              moveBook = {this.props.moveBook}
                              currentShelf = 'wantToRead'
                            />
                         </li>
                        ))
                      }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books
                        .filter(book => book.shelf === 'read')
                        .map(book => (
                          <li key={book.id}>                        
                            <Book 
                              book = {book}
                              moveBook = {this.props.moveBook}
                              currentShelf = 'read'
                            />
                         </li>
                        ))
                      }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          <div className="open-search">
            <Link 
            to='/Search'>
            </Link>  
          </div>       
      </div>
        </div>
    )
}}

export default BookList
