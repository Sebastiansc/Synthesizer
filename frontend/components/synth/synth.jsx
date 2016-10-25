import React from 'react';
import {NoteNames, TONES} from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';


const keyCodes = {
  65: "a",
  83: "s",
  68: "d",
  70: "f",
  71: "g"
};

class Synth extends React.Component {
  constructor(props){
    super(props);
    this.noteList = this.mapNotes();
  }

  onKeyDown(e) {
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }

    this.props.keyPressed(keyCodes[e.keyCode]);
  }

  onKeyUp(e) {
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }

    this.props.keyReleased(keyCodes[e.keyCode]);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  mapNotes(){
    return NoteNames.map(note => {
      return new Note(TONES[note]);
    });
  }

  playNotes() {
    const that = this;
    NoteNames.forEach((name, index) => {
      if(that.props.notes.includes(name)) {
        that.noteList[index].start();
      } else {
        that.noteList[index].stop();
      }
    });
  }

  included(name) {
    return this.props.notes.includes(name);
  }

  render(){
    this.playNotes();
    const that = this;
    return (
      <div className="piano">
        {NoteNames.map(name => (
          <NoteKey key={name} note={name} pressed={that.included(name)}/>
        ))}
    </div>
    );
  }
}


export default Synth;
