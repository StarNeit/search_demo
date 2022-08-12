import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

const App: React.FC = () => {
  const reqURL = "https://www.omdbapi.com/";
  
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState<any>(undefined);


  const search = () => {
    if(searchInput === ""){
      alert("Search Box is Empty");
      return;
    }

    let query = searchInput.replace(/ /g, "+")
    axios.get(`${reqURL}?t=${query}&apikey=dafc823c`).then((response) => {
      setSearchResult(response.data)
    });
  }

  return (
    <div className="App">
      <div style={{marginTop: '20px'}}>
        <input value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder="Search By Movie Title" />
        <button onClick={search} >Search</button>
      </div>
      {searchResult &&
        <div style={{marginTop: '20px'}}>
          <h3>Title: {searchResult?.Title}</h3>
          <img src={searchResult?.Poster} alt=""/>
        </div>
      }
    </div>
  );
}

export default App;
