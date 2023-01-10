import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    async function fetchData() {
      const apiUrl = process.env.REACT_APP_BE_URL
      const resp = await fetch(`${apiUrl}/books`)
      const data = await resp.json()
      setBooks(data.booksArray)
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Books in the catalogue</h1>
        {books.map((book, index) => (
          <div class="card">
            <img class="card-image" src={book.img} alt={book.title} />
            <div class="card-body">
              <h2 class="text-truncate">${book.title}</h2>
              <p class="song">
                <span class="list text-truncate">
                  <b>Title:</b> {book.title}
                </span>
              </p>
              <p class="time">
                Price: <span class="badge">${book.price}</span>
              </p>
            </div>
          </div>
        ))}
      </header>
    </div>
  )
}

export default App
