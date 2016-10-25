import React from 'react';
import SynthContainer from "./synth/synth_container";
import RecorderContainer from './recorder/recorder_container';
import JukeboxContainer from './jukebox/jukebox_container';

export default function App() {
  return(
    <div>
      <SynthContainer />
      <RecorderContainer />
      <JukeboxContainer />
    </div>
  );
}
