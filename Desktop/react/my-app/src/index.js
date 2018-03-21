import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Telling the file to render out App to the document with id root
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
