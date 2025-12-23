import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var sobj={
    rno:1001,
    sname:"aabitha",
    mark:[12,10,0,-5,44],
    rank:37,
    grade:"super",
    location:"vangal",
    issingle:true,
    aadhar:"12347685645",
    phone:"9992220000",
    height:"165cm",
    hobbies:{
        hob1:"mobile phone",
        hob2:"dancing",
        hob3:"speaking",
        hob4:"swimming"
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={sobj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
