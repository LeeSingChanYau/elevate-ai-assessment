import React from 'react';
import './App.css';
import { Grid} from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { useState } from 'react';



function App() {
  const [query, setQuery] = useState<string>('');
  const [search, setSearch] = useState<string>('dogs');
  // use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
  const gf = new GiphyFetch('f31eKY8GpuCfx8Az5xs8cQ4irhnhVrm9')

  const onChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
    setQuery(event.target.value);
  }

  const fetchGifs = (offset: number) => gf.search(search, { offset, limit: 10 })

  return (
    <div className="App">
      <header className="App-header">
        <h3>Giphy Search</h3>
        <div className='search'>
          <input id="search" type="text" value={query} onChange={onChange}/>
          <button onClick={() => setSearch(query)}>Search</button>
        </div>
        <Grid width={800} columns={3} gutter={6} fetchGifs={fetchGifs} key={search} />
      </header>
    </div>
  );
}

export default App;
