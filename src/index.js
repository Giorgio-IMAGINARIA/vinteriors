import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import ReduxStore from "./store/index";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={ReduxStore}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
