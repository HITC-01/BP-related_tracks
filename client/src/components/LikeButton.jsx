import React from 'react';
import styles from './LikeButton.css';

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
      <div className={styles.likeButtonContainer}>
        <div title="like" className={styles.likeButton} onClick={this.isClicked} onKeyDown={this.isClicked} role="presentation">
          <i id={isClicked ? styles.likeButtonImgOn : styles.likeButtonImgOff} className="fas fa-heart" />
        </div>
      </div>
    );
  }
}

export default LikeButton;
