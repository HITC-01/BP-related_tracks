import React from 'react';

class ArtistInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
    this.mouseOver = this.mouseOver.bind(this);
  }

  componentDidMount() {
    console.log('test');
  }
  mouseOver(val) {
    val.style.display = 'block';
  }

  mouseOut(val) {
    val.style.display = 'none';
  }

  render() {
    if (this.state.isHovered) {
      return (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <p>Some text in the Modal..</p>
          </div>
        </div>
      );
    } 
    return (<div></div>);
  }
}
export default ArtistInfo;
