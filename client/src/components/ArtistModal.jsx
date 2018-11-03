import React from 'react';
import PropTypes from 'prop-types';

const numeral = require('numeral');

const ArtistModal = (props) => {
  const { song } = props;
  const { mouseOut } = props;
  const toProfile = `Visit ${song.name}'s profile`;
  const followerCount = `${numeral(song.followers).format('0,0')} followers`;
  return (
    <div id={song.name} className="myModal" onMouseLeave={() => { mouseOut(); }}>
      <div className="modal-content">
        <div>
          <img className="rel_albumImgModal" src={song.album_img} alt="Album art" width="50" height="50" />
          <p title={toProfile} className="rel_artistNameModal rel_hover">
            {song.name}
            <i title="Pro Unlimited user" className="fas fa-star proIcon" />
          </p>
          <i className="fas fa-users" />
          <p title={followerCount} className="rel_followerCountModal rel_hover">{numeral(song.followers).format('0,0a')}</p>
          <input type="button" className="button" value="Follow" />
        </div>
      </div>
    </div>
  );
};

ArtistModal.propTypes = {
  song: PropTypes.object.isRequired,
  mouseOut: PropTypes.func,
};

export default ArtistModal;
