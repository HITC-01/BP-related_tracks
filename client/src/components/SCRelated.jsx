import React from 'react';
import PropTypes from 'prop-types';
import AddTrack from './AddTrack';
import styles from './SCRelated.css';

const parse = (pathname) => {
  const splitString = pathname.split('/');
  return splitString[2];
};
const songId = parse(window.location.pathname);

class SCRelated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      songid: songId,
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
    const { url } = this.props;
    const { songid } = this.state;

    return fetch(`${url}/related/songs/${songid}/related`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    })
      .then(function (response) {
        return response.json()
      })
      .then((responseAsJson) => {
        const list = JSON.parse(responseAsJson[0].related_songs);
        return Promise.all(list.map(song => {
          let url = `/related/songs/${song}/`
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
      <div className={styles.body}>
        <div className={styles.songContainer}>
          <h3 className={styles.songContainerHeader}>
            <span>
              <i className="fab fa-soundcloud" />
            </span>
            <span className={styles.rel_actualTitle}>Related tracks</span>
          </h3>
          <span className={`${styles.viewAll} ${styles.rel_hover}`}>View all</span>
        </div>
        <ul>
          <AddTrack onLoad={songs} />
        </ul>
      </div>
    );
  }
}
SCRelated.propTypes = {
  url: PropTypes.string,

};

SCRelated.defaultProps = {
  url: '',
};

export default SCRelated;
