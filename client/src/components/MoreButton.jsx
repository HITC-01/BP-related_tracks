import React from 'react';
import MoreModal from './MoreModal';
import styles from './MoreButton.css';

class MoreButton extends React.Component {
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
      <div className={styles.moreButtonContainer}>
        <div
          title="more"
          className={isClicked ? styles.moreButtonClicked : styles.moreButton}
          onClick={this.isClicked}
          onKeyDown={this.isClicked}
          role="presentation"
        >
          <MoreModal currentState={isClicked} />
          <i className={'fas fa-ellipsis-h '.concat(isClicked ? styles.moreButtonImgClicked : styles.moreButtonImg)} />
        </div>
      </div>
    );
  }
}

export default MoreButton;
