import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header/header';
import reportWebVitals from './reportWebVitals';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// function App2() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

ReactDOM.render(
  <React.StrictMode>
  <Fragment>
     <Header/>
     <App/> 
  </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div>
//       {/* <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2> */}

//       <div className="App">
//       <header className="App-header">
//         <h>STIMULAR</h>
        
//       </header>
//       <body>
//     <button type="button" class="collapsible">Open Collapsible</button>
// <div class="content">
//   <p>Lorem ipsum...</p>
// </div>

//      <div className="vraag">
//        <h>Vraag 1</h>
//        <p>dit is vraag 1</p>
//        <textarea>   Hello there, this is some text in a text area</textarea>
//      </div>

//      <div id="test_button_container"></div>

//      </body>
//     </div>
//     </div>
    

    
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

{/* function App2() {
  const element = (
  
    <div className="App">
      <header className="App-header">
        <h>STIMULAR</h>
        
      </header>
      <body>
    <button type="button" class="collapsible">Open Collapsible</button>
<div class="content">
  <p>Lorem ipsum...</p>
</div>

     <div className="vraag">
       <h>Vraag 1</h>
       <p>dit is vraag 1</p>
       <textarea>   Hello there, this is some text in a text area</textarea>
     </div>

     <div id="test_button_container"></div>

     
      

    

             


             
  </body>
    </div>
  );

}

ReactDOM.render(element, document.getElementById('root')); */}

  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
