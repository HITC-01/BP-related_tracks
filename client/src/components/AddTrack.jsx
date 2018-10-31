import React from 'react';
import ArtistInfo from './ArtistInfo.jsx';

const AddTrack = (props) => {
  const { onLoad } = props;

  return (
    onLoad.map((song) => {
      let songLengthRestricted = '';
      // console.log('testing');
      if (song.title.length > 35) {
        songLengthRestricted = song.title.slice(0, 35).concat('...');
      }
      return (
        <div>
          <li className="rel_relatedSongItem" key={song.id}>
            <div className="rel_albumMedia">
              <span className="rel_albumImg">
                <div className="rel_artworkPlaceholder">
                  <img className="rel_artwork" src={song.album_img} alt="Album art" width="50" height="50" />
                </div>
                <span>
                </span>
              </span>
              <div className="rel_songDataContainer">
                <div className="rel_artistName">
                  <span id="rel_artistName" className="rel_hover">{song.name.toUpperCase()}</span>
                  <ArtistInfo />
                </div>
                <div className="rel_songName">
                  <span>{songLengthRestricted || song.title}</span>
                </div>
                <div className="rel_songStatContainer">
                  <ul className="rel_songStats">
                    <li className="rel_songStatComponent">
                      <i className="fas fa-play" />
                      <span>{props.abbreviate(song.play_count)}</span>
                    </li>
                    <li className="rel_songStatComponent">
                      <i className="fas fa-heart" />
                      <span className="rel_hover">{props.abbreviate(song.like_count)}</span>
                    </li>
                    <li className="rel_songStatComponent">
                      <i className="fas fa-exchange-alt" />
                      <span className="rel_hover">{props.abbreviate(song.repost_count)}</span>
                    </li>
                    <li className="rel_songStatComponent">
                      <i className="fas fa-comment-alt" />
                      <span className="rel_hover">{props.abbreviate(song.comment_count)}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </div>
      );
    })
  );
};
export default AddTrack;
