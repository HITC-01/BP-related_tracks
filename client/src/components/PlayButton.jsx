import React from 'react';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.isClicked = this.isClicked.bind(this);
  }

  isClicked() {
    const { isClicked } = this.state;
    this.setState({ isClicked: !isClicked });
  }

  render() {
    const { isClicked } = this.state;
    if (!isClicked) {
      return (
        <div className="playButtonContainer">
          <div className="playButton" onClick={this.isClicked} onKeyDown={this.isClicked} role="presentation">
            <i className="fas fa-play playButtonImg" />
          </div>
        </div>
      );
    }
    return (
      <div className="playButtonContainer">
        <div className="playButton" onClick={this.isClicked} onKeyDown={this.isClicked} role="presentation">
          <i className="fas fa-pause pauseButtonImg" />
        </div>
      </div>
    );
  }
}

export default PlayButton;
