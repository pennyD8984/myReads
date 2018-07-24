import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import Book from './Book.js'

class Search extends React.Component{
  state = {
    query: '',
    searchResults: [] 
  }

  updateQuery = (query) => {
    this.setState({query: query})
    this.getSearchResults(query)
  }

  getSearchResults = (query) =>{
    if(query){
      BooksAPI.search(query).then((searchResults) => {
        if(searchResults.error){
        // I tried the prototype array required, but it didn't work, it kept showing errors
        this.setState({searchResults: []});   
        } 
        else{
          this.setState({searchResults: searchResults})
        }
      })
    }
    else{
      this.setState({searchResults: []});
    }
  }

  render(){
    return(
		<div className="search-books">
            <div className="search-books-bar">
            	<Link to='/' className="close-search">Close</Link>
            	<div className="search-books-input-wrapper">
                <input 
                  type="text"
                  value={this.state.query}  
                  onChange={(event) => this.updateQuery(event.target.value)}
                  placeholder="Search by title or author"
                />
            	</div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.searchResults.map(searchResult => {
                  let shelf = 'none';
                  this.props.books.map(book => (
                    book.id === searchResult.id ?
                      shelf = book.shelf : ''
                  
                  ))                  
                  return(                  
                    <li key={searchResult.id}>
                    <Book 
                      book={searchResult}
                      moveBook = {this.props.moveBook}
                      // Default shelf is 'none'
                      currentShelf = {shelf}
                    />
                  </li>
                  )
                })
                }
              </ol>
            </div>
         </div>
    )
  }

}

export default Search;