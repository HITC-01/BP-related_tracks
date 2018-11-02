import React from 'react';
import PropTypes from 'prop-types';
import PlayButton from './PlayButton';
import LikeButton from './LikeButton';
import MoreButton from './MoreButton';


const HoverContainer = (props) => {
  const { isHover } = props;
  if (isHover) {
    return (
      <div>
        <PlayButton />
        <LikeButton />
        <MoreButton />
      </div>
    );
  }
  return <div />;
};

HoverContainer.propTypes = {
  isHover: PropTypes.bool.isRequired,
};

export default HoverContainer;
