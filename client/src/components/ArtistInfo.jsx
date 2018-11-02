import React from 'react';
import PropTypes from 'prop-types';
import ArtistModal from './ArtistModal';

class ArtistInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({ isHovered: true });
  }

  mouseOut() {
    this.setState({ isHovered: false });
  }

  render() {
    const { isHovered } = this.state;
    const { song } = this.props;
    if (isHovered) {
      return (
        <div className="rel_artistNameContainer">
          <div className="rel_artistName" onMouseEnter={() => { this.mouseOver(); }}>
            <span className="rel_hover">{song.name.toUpperCase()}</span>
            <ArtistModal song={song} mouseOut={this.mouseOut} />
          </div>
        </div>
      );
    }
    return (
      <div className="rel_artistNameContainer">
        <div className="rel_artistName">
          <span className="rel_hover" onMouseEnter={() => { this.mouseOver(); }}>
            {song.name.toUpperCase()}
          </span>
        </div>
      </div>
    );
  }
}

ArtistInfo.propTypes = {
  song: PropTypes.object.isRequired,
};

export default ArtistInfo;
