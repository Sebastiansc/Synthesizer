import { KEY_PRESSED, KEY_RELEASED, GROUP_UPDATE } from '../actions/notes_actions';
import { NoteNames } from '../util/tones';
import merge from 'lodash/merge';

const _default = [];

function validKey(key) {
  return NoteNames.includes(key);
}

const notes = (oldState = _default, action) => {
  Object.freeze(oldState);
  let copy = oldState.slice(0);
  if (!validKey(action.key)) return oldState;

  switch (action.type) {

    case KEY_PRESSED:
      if (oldState.includes(action.key)){
        return oldState;
      } else {
        return (
          [...oldState, action.key]
        );
      }

    case KEY_RELEASED:
      if (oldState.includes(action.key)){
        let oldKey = oldState.indexOf(action.key);
        copy.splice(oldKey, 1);
        return copy;
      } else {
        return (
          [...oldState, action.key]
        );
      }

    case GROUP_UPDATE:
      return action.notes;
      
    default:
      return oldState;
  }
};

export default notes;
