import React from 'react';
import AddTrack from './AddTrack.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
    this.fetchRelatedSongs = this.fetchRelatedSongs.bind(this);
    this.abbreviateNumber = this.abbreviateNumber.bind(this);
  }

  componentDidMount() {
    this.fetchRelatedSongs()
      .then((songs) => {
        this.setState({ songs });
      });
  }

  fetchRelatedSongs() {
    return fetch("/api/songs/:songid/related", {
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
      .then(function (response) {
        return response.json()
      })
      .then((responseAsJson) => {
        let list = JSON.parse(responseAsJson[0].related_songs);
        return Promise.all(list.map(song => {
          let url = `/api/songs/${song}/`
          return fetch(url, {
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "same-origin"
          })
            .then(function (response) {
              return response.json()
            })
            .then(responseSong => {
              return responseSong[0];
            })
            .catch(err => console.log(err));
        }))
          .then(songs => {
            // console.log(songs);
            // console.log(songs);
            return songs;
          })
      })
      .catch(err => console.log(err))
  }

  abbreviateNumber(number) {
    var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
    var tier = Math.log10(number) / 3 | 0;

    if (tier == 0) return number;
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);
    var scaled = number / scale;

    return scaled.toFixed(1) + suffix;
  }

  render() {
    const { songs } = this.state;
    return (
      <div className="songDataPlaceholder">
        <div className="songContainer">
          <h3 className="songContainerHeader">
            <span><i className="fab fa-soundcloud" /></span>
            <span className="rel_actualTitle">Related tracks</span>
          </h3>
          <span className="viewAll">View all</span>

        </div>
        <ul>
          <AddTrack onLoad={songs} abbreviate={this.abbreviateNumber} />
        </ul>
      </div>
    );
  }
}
export default App;
