import React from 'react';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <div class="card landing" id="landing-card">
        <button class="landing-btn">Next Card</button>
      </div>
      
      <div class="card resume">
        <button class="resume-btn ">Previous Card</button>
      </div>
    </div>
  );
}

export default App;
