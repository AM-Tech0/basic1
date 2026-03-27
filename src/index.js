import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Card from './component/card' using for render topic
import App from './App';
// method 1
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <App />
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// method 2
// function Greeting(props)
// {
//   return<h1>{props.name}</h1>;
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<Greeting name="AMAN"></Greeting>);
// method 3
// ReactDOM.createRoot(document.getElementById("root")).render(<Card></Card>) 
