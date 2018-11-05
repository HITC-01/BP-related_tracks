import React from 'react';
import MoreModal from './MoreModal';

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
      <div className="moreButtonContainer">
        <div
          title="more"
          className={isClicked ? 'moreButtonClicked' : 'moreButton'}
          onClick={this.isClicked}
          onKeyDown={this.isClicked}
          role="presentation"
        >
          <MoreModal currentState={isClicked} />
          <i className={'fas fa-ellipsis-h '.concat(isClicked ? 'moreButtonImgClicked' : 'moreButtonImg')} />
        </div>
      </div>
    );
  }
}

export default MoreButton;
