import './App.css';
import Result from './Result';
import SearchForm from './SearchForm';

// http://www.songsterr.com/a/ra/songs.xml?pattern=Marley
// http://www.songsterr.com/a/ra/songs/byartists.xml?artists=Metallica,"Led_Zeppelin"
// http://www.songsterr.com/a/wa/song?id={id}
// http://www.songsterr.com/a/wa/artist?id={id}
// http://www.songsterr.com/a/wa/bestMatchForQueryString?s={song title}&a={artist name}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchForm/>
        {/* <Result/> */}
      </header>
    </div>
  );
}

export default App;
