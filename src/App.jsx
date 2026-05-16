import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';

function App() {

  const [book_search_query, setBookSearchQuery] = useState("");
  const [books, setBooks] = useState([]);

  const [search, setSearch] = useState("");

  function handleSearch() {
    console.log("Searching for:", search);
  }

  return (

    <div className="container">
      
      <h1>Book Tracker</h1>
  
    <SearchBar value={search} onChange={setSearch} onSearch={handleSearch}
      />
      
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Search
      </button>

      <h2>Results</h2>

      <h2>My Library</h2>
    
    </div>
  );

}

export default App
