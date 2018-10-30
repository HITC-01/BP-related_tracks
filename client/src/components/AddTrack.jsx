import React from 'react';
import $ from 'jquery';

class AddTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };

  }
  

  componentDidMount() {
    // this.setState(this.props.onLoad);
    
  }
  

  
  render() {
    // console.log(this.props.onLoad);
    // console.log(this.props);
    // console.log(this.state.songs);
    const relatedSongs = this.props.onLoad;
    console.log(relatedSongs);
    return (  
      relatedSongs.map((song) => {      
        return (
          <div>
            <li className='rel_relatedSongItem' key={song.id}>
              <div className='rel_albumMedia'>
                <span className='rel_albumImg'>
                  <div className='rel_artworkPlaceholder'>
                    <img className='rel_artwork' src={song.album_img} alt="Album art" width="50" height="50" />
                  </div>
                  <span>

                  </span>
                </span>

                <div className='rel_songDataContainer'>
                  <div className='rel_artistName'>
                    <span>{song.name.toUpperCase()}</span>
                  </div>
                  <div className='rel_songName'>
                    <span>{song.title}</span>
                  </div>
                  <div className='rel_songStatContainer'>
                    <ul className='rel_songStats'>
                      <li className='rel_songStatComponent'>
                        <i className="fas fa-play"></i>
                        <span>{this.props.abbreviate(song.play_count)}</span>
                      </li>
                      <li className='rel_songStatComponent'>
                        <i className="fas fa-heart"></i>
                        <span>{this.props.abbreviate(song.like_count)}</span>
                      </li>
                      <li className='rel_songStatComponent'>
                        <i className="fas fa-exchange-alt"></i>
                        <span>{this.props.abbreviate(song.repost_count)}</span>
                      </li>
                      <li className='rel_songStatComponent'>
                        <i className="fas fa-comment-alt"></i>
                        <span>{this.props.abbreviate(song.comment_count)}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </div>
        )
      })

    )
  }

}

export default AddTrack;

{/* <li key={song.id}>
  <div className='rel_relatedsong'>
    <div className='rel_song'>
      <img className='rel_artwork' src={song.album_img} alt="Album art" width="50" height="50" />
    </div>
    <div className='rel_bottomBar'>
      <span>Artist Name</span>
      <span>{song.title}</span>
      <span>{song.play_count}</span>
      <span>{song.like_count}</span>
      <span>{song.repost_count}</span>
      <span>{song.comment_count}</span>
    </div>
  </div>
</li> */}