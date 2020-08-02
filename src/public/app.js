import React from 'react';
import ReactDom from 'react-dom';
import App from './route/'
import store from './redux/store'
import { Provider } from 'react-redux';



// class App extends React.Component {
//     render(){
//         return <Routea/>
//     }
// }


console.log(store);
ReactDom.render(<Provider store={store}><App/></Provider>,document.getElementById('app'));

