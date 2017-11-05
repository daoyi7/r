import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './study/study-01/study-01'                                // 第一课
// import MyHello from './study/study-02/study-02'                              // 第二课
import Hello from './study/study-03/study-03'                                 // 第三课
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Hello />, document.getElementById('root'))                  // 第一课
// ReactDOM.render(<MyHello />, document.getElementById('root'))                // 第二课
ReactDOM.render(<Hello />, document.getElementById('root'))                // 第三课
registerServiceWorker();
