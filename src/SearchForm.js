import React, {useState} from 'react';
import axios from 'axios';
var XMLParser = require('react-xml-parser');


export const SearchForm = () => {
    const [band, setBand] = useState("");
    const [list, setList] = useState([]);
    const [songUrl, setSongUrl] = useState("");

    const searchBand = () => {
        const request = `http://www.songsterr.com/a/ra/songs.xml?pattern=${band}`;
        axios.get(request)
        .then(res => {
          const xml_text = res.data;
          var xml_parsed = new XMLParser().parseFromString(xml_text);
          console.log(xml_parsed.getElementsByTagName("song"));
          for (const elt of xml_parsed.getElementsByTagName("song")) {
              console.log(elt);
          }
          setList(xml_parsed.getElementsByTagName("title"))
        })
    }


    return (
        <>
            <div>
                <label>Enter band or artist name: </label>
                <input type="text" name="name" id="name" value={band} onChange={(event) => setBand(event.target.value)} required/>
            </div>
            {/* <div>
                <label for="email">Enter your email: </label>
                <input type="email" name="email" id="email" required/>
            </div> */}
            <div>
                <button onClick={searchBand}>Submit!</button>
            </div>
            <div id="list">
                <ul>
                {list.map((song, i) => <li key={i}><a href="">{song.value}</a></li>)}
                </ul>
            </div>
        </>
    );
}

export default SearchForm;