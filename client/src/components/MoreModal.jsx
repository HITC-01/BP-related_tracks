import React from 'react';
import PropTypes from 'prop-types';

const MoreModal = (props) => {
  const { currentState } = props;
  return (
    <div className="moreModal">
      <div className={currentState ? 'moreModal-contentOn' : 'moreModal-contentOff'}>
        <div className="moreModalData moreModalHover" title="Repost">
          <span className="marginRight">
            <i className="fas fa-exchange-alt moreButtonImg" />
          </span>
          <span>Repost</span>
        </div>
        <div className="moreModalData moreModalHover" title="Share">
          <span className="marginRight">
            <i className="fas fa-share moreButtonImg" />
          </span>
          <span>Share</span>
        </div>
        <div className="moreModalData moreModalHover" title="Add to Next up">
          <span className="marginRight">
            <i className="fas fa-sliders-h moreButtonImg" />
          </span>
          <span>Add to Next up</span>
        </div>
        <div className="moreModalData moreModalHover">
          <span className="marginRight">
            <i className="fas fa-chart-line moreButtonImg" />
          </span>
          <span>Add to playlist</span>
        </div>
        <div className="moreModalData moreModalHover" title="Go to station">
          <span className="marginRight">
            <i className="far fa-dot-circle moreButtonImg" />
          </span>
          <span>Station</span>
        </div>
      </div>
    </div>
  );
};

MoreModal.propTypes = {
  currentState: PropTypes.bool.isRequired,
};

export default MoreModal;
