import React from 'react';

export default function NoteKey({note, pressed}) {
  let klass = "tile";
  klass += pressed ? " pressed" : " released";
  return (

    <div key={note} className={klass}>{note}</div>
  );
}
