import { connect } from 'react-redux';
import Jukebox from './jukebox';
import {groupUpdate, startPlaying, stopPlaying} from '../../actions/playing_actions';

const mapStateToProps = state => ({
  tracks: state.tracks,
  isRecording: state.isRecording,
  isPlaying: state.isPlaying
});

const mapDispatchToProps = dispatch => ({
  groupUpdate: () => dispatch(groupUpdate()),
  startPlaying: () => dispatch(startPlaying()),
  stopPlaying: () => dispatch(stopPlaying()),
  onPlay: track => () => {
    dispatch(startPlaying());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox);
