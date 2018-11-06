import React from 'react';
import PropTypes from 'prop-types';
import AddTrack from './AddTrack';
import styles from './SCRelated.css';

class SCRelated extends React.Component {
  constructor(props) {
    super(props);
    this.songId = props.songId;
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
    const { url } = this.props;
    return fetch(`${url}/related/songs/:songid/related`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    })
      .then(response => response.json())
      .then((responseAsJson) => {
        const list = JSON.parse(responseAsJson[0].related_songs);
        return Promise.all(list.map((song) => {
          const urlNew = `/related/songs/${song}/`;
          return fetch(urlNew, {
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
          })
            .then(response => response.json())
            .then(responseSong => responseSong[0])
            .catch(err => console.log(err));
        }))
          .then(songs => songs);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { songs } = this.state;
    return (
      <div>
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
  songId: PropTypes.number,
};

SCRelated.defaultProps = {
  url: '',
  songId: 1,
};

export default SCRelated;
