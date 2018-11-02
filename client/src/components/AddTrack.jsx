import React from 'react';
import RelatedSongItem from './RelatedSongItem';

const AddTrack = props => (
  props.onLoad.map(song => (
    <div key={song.id} className="rel_albumMedia">
      <RelatedSongItem song={song} />
    </div>
  ))
);

export default AddTrack;
