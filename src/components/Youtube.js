import React from 'react';
import YouTube from 'react-youtube';

class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        loop: 1,
        playlist: "XHxU46jdFFc",
        playlist: "XHxU46jdFFc",
        playlist: "XHxU46jdFFc",
        playlist: "XHxU46jdFFc",
        playlist: "XHxU46jdFFc",
        mute: 1,
        start: 6,
        iv_load_policy: 3,
        disablekb: 1,
        controls: 0,
      },
    };

    return <YouTube videoId="XHxU46jdFFc" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default YoutubeVideo
