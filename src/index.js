import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/css/bootstrap.min.css';
import App from './compnts/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();