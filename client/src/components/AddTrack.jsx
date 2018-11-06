import React from 'react';
import RelatedSongItem from './RelatedSongItem';
import styles from './AddTrack.css';

const AddTrack = props => (
  props.onLoad.map(song => (
    <div key={song.id} className={styles.rel_albumMedia}>
      <RelatedSongItem song={song} />
    </div>
  ))
);

export default AddTrack;
