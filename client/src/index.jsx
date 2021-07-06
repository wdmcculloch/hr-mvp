import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import data from '../../data/test_data.js'




ReactDOM.render(<App data={data}/>, document.getElementById('app'));