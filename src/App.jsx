import { useState } from 'react'
import './App.css'

function App() {

  const [book_search_query, setBookSearchQuery] = useState("");
  const [books, setBooks] = useState([]);

  return (

    <div className="container">
      
      <h1>Book Tracker</h1>

      
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Search
      </button>

      <h2>Results</h2>

      <h2>My Library</h2>
    
    </div>
  );

}

export default App
