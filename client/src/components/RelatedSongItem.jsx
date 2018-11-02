import React from 'react';
import PropTypes from 'prop-types';
import HoverContainer from './HoverContainer';
import ArtistInfo from './ArtistInfo';
import SongStats from './SongStats';

class RelatedSongItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
    this.mouseOn = this.mouseOn.bind(this);
    this.mouseOff = this.mouseOff.bind(this);
  }

  mouseOn() {
    this.setState({ isHovered: true });
  }

  mouseOff() {
    this.setState({ isHovered: false });
  }

  render() {
    const { song } = this.props;
    const { isHovered } = this.state;
    let songLengthRestricted = '';
    if (song.title.length > 36) {
      songLengthRestricted = song.title.slice(0, 36).concat('...');
    }
    return (
      <li className="rel_relatedSongItem" onMouseEnter={() => { this.mouseOn(); }} onMouseLeave={() => { this.mouseOff(); }}>
        <HoverContainer isHover={isHovered} song={song} />
        <span className="rel_albumImg">
          <div className="rel_artworkPlaceholder">
            <img className="rel_artwork" src={song.album_img} alt="Album art" width="50" height="50" />
          </div>
        </span>
        <div className="rel_songDataContainer">
          <ArtistInfo song={song} />
          <div className="rel_songName">
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
