import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './study/study-01/study-01'                                // 第1课
// import MyHello from './study/study-02/study-02'                              // 第2课
// import Hello from './study/study-03/study-03'                                // 第3课
// import Like from './study/study-04/study-04'                                 // 第4课
// import Component from './study/study-05/study-05'                            // 第5课
import Mixin from './study/study-06/study-06'                            // 第6课
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Hello />, document.getElementById('root'))                  // 第1课
// ReactDOM.render(<MyHello />, document.getElementById('root'))                // 第2课
// ReactDOM.render(<Hello />, document.getElementById('root'))                  // 第3课
// ReactDOM.render(<Like />, document.getElementById('root'))                   // 第4课
// ReactDOM.render(<Component />, document.getElementById('root'))              // 第5课
ReactDOM.render(<Mixin />, document.getElementById('root'))              // 第6课
registerServiceWorker();
