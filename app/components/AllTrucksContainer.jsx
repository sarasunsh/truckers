'use strict';

import { connect } from 'react-redux';

import App from './App';
import { nextSong, setProgress } from '../action-creators/player';
import { receiveAlbums } from '../action-creators/albums';
import { receiveArtists } from '../action-creators/artists';


const mapStateToProps = function(state) {
    return {
        trucks: 'test'
    }
}

const mapDispatchToProps = dispatch => ({
  onLoad (albums, artists) {
    dispatch(receiveAlbums(albums));
    dispatch(receiveArtists(artists));

    AUDIO.addEventListener('ended', () => {
      dispatch(nextSong());
    });

    AUDIO.addEventListener('timeupdate', () => {
      dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
    });
  }
});

export default connect(
    mapStateToProps
)(App);
