import React from 'react';

class LikeButton extends React.Component {
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
    return (
      <div className="likeButtonContainer">
        <div title="like" className="likeButton" onClick={this.isClicked} onKeyDown={this.isClicked} role="presentation">
          <i id={isClicked ? 'likeButtonImgOn' : 'likeButtonImgOff'} className="fas fa-heart" />
        </div>
      </div>
    );
  }
}

export default LikeButton;
