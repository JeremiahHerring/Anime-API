import './Components/styles.css'
import { useEffect, useState } from 'react';
import { AnimeList } from "./Components/AnimeList.js"
import { AnimeInfo } from './Components/AnimeInfo.js';

function App() {
  // useState() - used to handle reactive data. Any data that changes is called state, and everytime the state changes,
  //              we need this to be reflected in the UI
  // Returns an array with two values - [Reactive Value, Setter]
  // Whenever data is referenced it will change the UI, Setter will listen to any changes in the data
  const [search, setSearch] = useState('Naruto') // Initial state value 
  const [animeData, setAnimeData] = useState()
  const [animeInfo, setAnimeInfo] = useState()

  const getData = async() => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const resData = await res.json()
    setAnimeData(resData.data)
  }
  // UseEffect - Understand component life cycle 
  // 1. Component is mounted 
  // 2. Component is updated 
  // 3. Component is destroyed
  // UseEffect runs function after it has updated the DOM, and runs it everytime stateful changes happens on component
  // To prevent infinite loops with fetching data, the second argument is an array of dependencies (empty array means it only runs once when component is initializes)
  useEffect(() => {
    getData()
  }, [search]) // Pass search, whenever search value is changed useEffect is ran
  return (
    <>
      <div className='header'>
        <h1>Anime Empire</h1>
          <div className='search-box'>
              <input type="search" placeholder='Find your Anime' 
              onChange={(e) => setSearch(e.target.value)}/>
            </div> 
      </div>

      <div className='container'>
        <div className='anime-info'>
          {animeInfo && <AnimeInfo animeInfo = {animeInfo} />}
          <div className='anime-row'>
            <h2 className='text-heading'>Anime</h2>
            <div className='row'>
              <AnimeList animelist = {animeData} />
              setAnimeInfo={setAnimeInfo}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
