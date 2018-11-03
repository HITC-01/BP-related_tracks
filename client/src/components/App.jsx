import React from 'react';
import PropTypes from 'prop-types';
import AddTrack from './AddTrack';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
    this.fetchRelatedSongs = this.fetchRelatedSongs.bind(this);
  }

  componentDidMount() {
    this.fetchRelatedSongs()
      .then((songs) => {
        this.setState({ songs });
      })
      .catch(() => this.setState({ songs: [] }));
  }

  fetchRelatedSongs() {
    let { url } = this.props;

    return fetch(`${url}/api/songs/:songid/related`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
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
            return songs;
          })
      })
      .catch(err => console.log(err));
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
          <span className="viewAll rel_hover">View all</span>
        </div>
        <ul>
          <AddTrack onLoad={songs} />
        </ul>
      </div>
    );
  }
}

App.defaultProps = {
  url: '',
};

export default App;
