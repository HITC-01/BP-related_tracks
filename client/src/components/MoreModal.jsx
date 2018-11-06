import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoreModal.css';

const MoreModal = (props) => {
  const { currentState } = props;
  return (
    <div className={styles.moreModal}>
      <div className={currentState ? styles.moreModal_contentOn : styles.moreModal_contentOff}>
        <div className={`${styles.moreModalData} ${styles.moreModalHover}`} title="Repost">
          <span className={styles.marginRight}>
            <i className={`fas fa-exchange-alt ${styles.moreButtonImg}`} />
          </span>
          <span>Repost</span>
        </div>
        <div className={`${styles.moreModalData} ${styles.moreModalHover}`} title="Share">
          <span className={styles.marginRight}>
            <i className={`fas fa-share ${styles.moreButtonImg}`} />
          </span>
          <span>Share</span>
        </div>
        <div className={`${styles.moreModalData} ${styles.moreModalHover}`} title="Add to Next up">
          <span className={styles.marginRight}>
            <i className={`fas fa-sliders-h ${styles.moreButtonImg}`} />
          </span>
          <span>Add to Next up</span>
        </div>
        <div className={`${styles.moreModalData} ${styles.moreModalHover}`}>
          <span className={styles.marginRight}>
            <i className={`fas fa-chart-line ${styles.moreButtonImg}`} />
          </span>
          <span>Add to playlist</span>
        </div>
        <div className={`${styles.moreModalData} ${styles.moreModalHover}`} title="Go to station">
          <span className={styles.marginRight}>
            <i className={`far fa-dot-circle ${styles.moreButtonImg}`} />
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
