import React from 'react'
import Sound from 'react-sound'


export default class Sound extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         playing: false
    //     }
    //     this.startPlaying = this.startPlaying.bind(this)
    // }

    // startPlaying() {
    //     this.setState({playing: !this.state.playing})
    // }

    

render() {
    return (
        <Sound
      url="music.mp3"
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
  );
  }
}