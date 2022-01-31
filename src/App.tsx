import React from "react";

import './App.css'

const App = () => {
    
    return (
        <div id='wrapper'>
         <div id='welcome'>
          <p id='title'>Welcome!</p>
          <p id='subtitle'>This quick app will guide you through and help you create a basic resume.</p>
          <div id="startButton">Let's Get Started!<i className="fas fa-chevron-right"></i></div>
         </div>
        </div>
    );
};

export default App;