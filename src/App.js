import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import collapse from './dropdown.png';
import './App.css';
import thermometer from './pictures/thermo-removebg-preview.png'
import epicLine from './pictures/epicLineFinished.png'  

// function App() {
//   return (
//     <div className="App">
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

//      <Welcome name="Sara" />

     


class App extends React.Component {

  static defaultProps = {
    isOpened: true,
    isOpened2: true
  };

  constructor(props) {
    super(props);
    this.state = {value: '',
    
    check: true};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    
  }

  handleSubmit(event) {
    var v1p = 0;
    var v2p = 0;
    var v3p = 0;
   
   
    if (this.state.gender == "MALE")
    {
      v1p = 100
    }
    else
    {
      v1p = 200
    }
  
  
    if (this.state.user == 'yooo')
    {
      v2p = 200
    }
    else 
    {
      v2p=0
    }
  
  
    if(this.state.favourite =="grapefruit")
    {
      v3p = 50
    }
    else if (this.state.favourite =="lime")
    {
      v3p = 100
    }
    else if (this.state.favourite =="coconut")
    {
      v3p = 150
    }  
    else if (this.state.favourite =="mango")
    {
      v3p = 200
    }
    var totalPoints = v1p + v2p + v3p;
  
    alert('A name was submitted: ' + this.state.user +
          '\n their favourite food is:' + this.state.favourite +
          '\n their gender is:' + this.state.gender+
          '\n total points:' + (totalPoints));
          
    event.preventDefault();
  }

    

  render() {
    const {isOpened} = this.state;
    const {isOpened2} = this.state;
    return (
      
      
      
      
        
      
      
      <form onSubmit={this.handleSubmit}>
        <div className="vraag">
        {/* <img src = {collapse} onClick={onChange={}}></img> */}
           <input
              className="checkboxinvis"
              type="checkbox"
              id='checkbox1'
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
              <label for="checkbox1"><img src={collapse} className="imgButton" /></label>
              <label> VRAAG 1 </label>
        <Collapse isOpened={isOpened}>
        <div className="vraag">
        <h>Vraag 1</h>
        <p>dit is vraag 1</p>
      {/* <label>
          ja:
          <input
            name="ja"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
            </label>
            <label>
              Nee:
           <input
            name="nee"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label> */}
      <div name="gender" onChange={this.handleInputChange}>
        <input type="radio" value="MALE" name="gender"/> Male
        <input type="radio" value="FEMALE" name="gender"/> Female
      </div>

        <br />
        </div>
        </Collapse>
        </div>
        <div className="vraag">
        {/* <img src = {collapse} onClick={onChange={}}></img> */}
           <input
              className="checkboxinvis"
              type="checkbox"
              id='checkbox2'
              checked={isOpened2}
              onChange={({target: {checked}}) => this.setState({isOpened2: checked})} />
              <label for="checkbox2"><img src={collapse} className="imgButton" /></label>
              <label> VRAAG 1 </label>
        <Collapse isOpened={isOpened2}>
        <div className="vraag">
        <h>Vraag 1</h>
        <p>dit is vraag 1</p>
      {/* <label>
          ja:
          <input
            name="ja"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
            </label>
            <label>
              Nee:
           <input
            name="nee"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label> */}
      <div name="gender" onChange={this.handleInputChange}>
        <input type="radio" value="MALE" name="gender"/> Male
        <input type="radio" value="FEMALE" name="gender"/> Female
      </div>

        <br />
        </div>
        </Collapse>
        </div>
        <br />
        <div className="vraag">
        <h>Vraag 2</h>
        <p>dit is vraag 2</p>

        <label>
          Name:
          <input name="user" type="text" value={this.state.username} onChange={this.handleInputChange}/>
        </label>
        
        </div>

        <div className='vraag'>
        <label>
          Pick your favorite flavor:
          <select name="favourite" value={this.state.favourite} onChange={this.handleInputChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
        </label>
        </div>
        <div><img src = {thermometer} alt="thermometer" width="500" height="400"></img></div>
        <div><img src = {epicLine} alt="Line" width="100" height="10"></img></div>

        
      </form>
      
      
    );
  }
}

             


             
//   </body>
//     </div>
//   );
// }



export default App;
