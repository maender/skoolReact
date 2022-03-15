import React, {useState} from 'react';
import axios from 'axios';

export const Result = () => {
    const [state, setState] = useState([])
}


// export default class Result extends React.Component {
//     state = {
//       xml: []
//     }

//     componentDidMount() {
//       axios.get(`http://www.songsterr.com/a/ra/songs.xml?pattern=Marley`)
//         .then(res => {
//           const xml = res.data;
//           this.setState({ xml });
//         })
//     }

//     render() {
//         return (
//           <p>
//             { this.state.xml }
//           </p>
//         )
//       }
// }

export default Result;