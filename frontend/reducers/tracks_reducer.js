import {START_RECORDING, STOP_RECORDING, ADD_NOTES} from '../actions/tracks_actions';
import merge from 'lodash/merge';

let currTrackId = 0;

const trackCreator = (state, action) => {
  const track = {
    id: currTrackId,
    name: `Track${currTrackId}`,
    roll: [],
    timeStart: action.timeNow
  };
  const newState = merge({}, state);
  newState[currTrackId] = track;
  return newState;
};

const addToRoll = (state, action, notes) => {
  let newState = merge({}, state);
  const timeSlice = action.timeNow - state[currTrackId].timeStart;
  newState[currTrackId].roll.push({ notes : notes, timeSlice});
  return newState;
};

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_RECORDING:
      currTrackId += 1;
      return trackCreator(state, action);
    case STOP_RECORDING:
      return addToRoll(state, action, []);
    case ADD_NOTES:
      return addToRoll(state, action, action.notes);
    default:
      return state;
  }
};


export default tracksReducer;
