import React from 'react';

class MoreButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // this would have state if completed
    };
  }

  render() {
    return (
      <div className="moreButtonContainer">
        <div title="more" className="moreButton">
          <i className="fas fa-ellipsis-h moreButtonImg" />
        </div>
      </div>
    );
  }
}

export default MoreButton;
