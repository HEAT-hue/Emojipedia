// jshint esversion:6
import React from "react";
import Description from "./desc.jsx";
import emojiDict from "../emojiDictionary.js";

function App() {
  return (
    <div id="App">
      <div id="heading">
        <h1>emojipedia</h1>
      </div>
      <div id="main-body">
        <dl>
          {emojiDict.map(function (emojiObject) {
            return (
              <Description 
                key={emojiObject.id}
                emoji={emojiObject.emoji}
                title={emojiObject.title}
                body={emojiObject.body}
              />
            )
          })}
        </dl>
      </div>
    </div>
  )
}

export default App;