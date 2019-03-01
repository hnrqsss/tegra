import React from 'react';
import ReactDOM from 'react-dom';

import WebFont from 'webfontloader'

import './index.css'
import App from './components/app';

WebFont.load({
  google: {
    families: ['Roboto:100,300,400,500,600,700', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

