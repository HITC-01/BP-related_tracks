import React from 'react';
import PropTypes from 'prop-types';
import HoverContainer from './HoverContainer';
import ArtistInfo from './ArtistInfo';
import SongStats from './SongStats';
import styles from './RelatedSongItem.css';

class RelatedSongItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
    this.isHovered = this.isHovered.bind(this);
  }

  isHovered() {
    const { isHovered } = this.state;
    this.setState({ isHovered: !isHovered });
  }

  render() {
    const { song } = this.props;
    const { isHovered } = this.state;
    let songLengthRestricted = '';
    if (song.title.length > 33) {
      songLengthRestricted = song.title.slice(0, 33).concat('...');
    }
    return (
      <li className={styles.rel_relatedSongItem} onMouseEnter={() => { this.isHovered(); }} onMouseLeave={() => { this.isHovered(); }}>
        <HoverContainer isHover={isHovered} song={song} />
        <span className={styles.rel_albumImg}>
          <div className={styles.rel_artworkPlaceholder}>
            <img src={song.album_img} alt="Album art" width="50" height="50" />
          </div>
        </span>
        <div className={styles.rel_songDataContainer}>
          <ArtistInfo song={song} />
          <div className={styles.rel_songName}>
            <span title={song.title}>{songLengthRestricted || song.title}</span>
          </div>
          <SongStats song={song} />
        </div>
      </li>
    );
  }
}

RelatedSongItem.propTypes = {
  song: PropTypes.object.isRequired,
};

export default RelatedSongItem;
