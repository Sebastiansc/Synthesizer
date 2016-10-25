import {combineReducers} from 'redux';
import notesReducer from './note_reducer';
import isRecordingReducer from './isRecordingReducer';
import tracksReducer from './tracks_reducer';




export default combineReducers({
  notes: notesReducer,
  isRecording: isRecordingReducer,
  tracks: tracksReducer
});
