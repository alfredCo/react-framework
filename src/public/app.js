import React from 'react';
import ReactDom from 'react-dom';
import App from './route/'
import store from './redux/store'
import { Provider } from 'react-redux';
import './i18n';

ReactDom.render(<Provider store={store}><App/></Provider>,document.getElementById('app'));

