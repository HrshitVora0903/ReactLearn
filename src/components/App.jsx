import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";


function createEmoji(emoji) {
  return (
    <Entry 
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      description={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

        {emojipedia.map(createEmoji)}
 
      </dl>
    </div>
  );
}

export default App;
