import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArtistModal.css';

const numeral = require('numeral');

const ArtistModal = (props) => {
  const { song } = props;
  const { mouseOut } = props;
  const toProfile = `Visit ${song.name}'s profile`;
  const followerCount = `${numeral(song.followers).format('0,0')} followers`;
  return (
    <div id={song.name} className={styles.myModal} onMouseLeave={() => { mouseOut(); }}>
      <div className={styles.modalContent}>
        <div>
          <img className={styles.rel_albumImgModal} src={song.album_img} alt="Album art" width="50" height="50" />
          <p title={toProfile} className={`${styles.rel_artistNameModal} ${styles.rel_hover}`}>
            {song.name}
            <i title="Pro Unlimited user" className={`fas fa-star ${styles.proIcon}`} />
          </p>
          <i className="fas fa-users" />
          <p title={followerCount} className={`${styles.rel_followerCountModal} ${styles.rel_hover}`}>{numeral(song.followers).format('0,0a')}</p>
          <input type="button" className={styles.button} value="Follow" />
        </div>
      </div>
    </div>
  );
};

ArtistModal.propTypes = {
  song: PropTypes.object.isRequired,
  mouseOut: PropTypes.func,
};

ArtistModal.defaultProps = {
  mouseOut: () => {},
};

export default ArtistModal;
