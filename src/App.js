import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    async function fetchData() {
      const apiUrl = process.env.REACT_APP_BE_URL
      const resp = await fetch(`${apiUrl}/books`)
      const data = await resp.json()
      console.log(data)
      setBooks(data.booksArray)
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Books in the catalogue</h1>
        {books.map((book, index) => (
          <div key={index}>
            <img alt="" src={book.img} style={{ width: "200px" }}></img>
            <span>{book.title}</span>
          </div>
        ))}
      </header>
    </div>
  )
}

export default App
