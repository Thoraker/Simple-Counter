//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

// include your styles into the webpack bundle
import "../styles/index.css";

// include your components
import App from "./App.jsx"


//render your react application

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );