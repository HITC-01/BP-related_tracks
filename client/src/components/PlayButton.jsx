import React from 'react';
import styles from './PlayButton.css';

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
        <div className={styles.playButtonContainer}>
          <div className={styles.playButton} onClick={this.isClicked} onKeyDown={this.isClicked} role="presentation">
            <i className={`fas fa-play ${styles.playButtonImg}`} />
          </div>
        </div>
      );
    }
    return (
      <div className={styles.playButtonContainer}>
        <div className={styles.playButton} onClick={this.isClicked} onKeyDown={this.isClicked} role="presentation">
          <i className={`fas fa-pause ${styles.pauseButtonImg}`} />
        </div>
      </div>
    );
  }
}

export default PlayButton;
