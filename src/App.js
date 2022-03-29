import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import collapse from './dropdown.png';
import './App.css';
import thermometer from './pictures/thermo-removebg-preview.png'
import epicLine from './pictures/epicLineFinished.png'  

class App extends React.Component {

  static defaultProps = {
    isOpened: true
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
    // const {isOpened3} = this.state;
    // const {isOpened4} = this.state;
    // const {isOpened5} = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="vraag">
           <input
              className="checkboxinvis"
              type="checkbox"
              id='checkbox1'
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
              <label for="checkbox1"><img src={collapse} className="imgButton" /></label>
        <Collapse isOpened={isOpened}>
        
          <div className="vraag">
            <h>Vraag 1</h>
            <p>dit is vraag 1</p>
            <div name="gender" onChange={this.handleInputChange}>
              <input type="radio" value="MALE" name="gender"/> Male
              <input type="radio" value="FEMALE" name="gender"/> Female
            </div>
          </div>

        </Collapse>
        </div>
{/* ----------------------------------------------------------------------------------------- */}
        <div className="vraag">
          <input
            className="checkboxinvis"
            type="checkbox"
            id='checkbox2'
            checked={isOpened}
            onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
              <label for="checkbox2"><img src={collapse} className="imgButton" /></label>
          <Collapse isOpened={isOpened}>
          
          <div className='vraag'>
            <h>Vraag 2</h>
            <p>dit is vraag 2</p>

            {/* <label>
              Name:
              <input name="user" type="text" value={this.state.username} onChange={this.handleInputChange}/>
            </label> */}
          </div>
          </Collapse>
        </div>
{/* ------------------------------------------------------------------------------------------ */}
        <div className='vraag'>
          <input
              className="checkboxinvis"
              type="checkbox"
              id='checkbox2'
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
                <label for="checkbox2"><img src={collapse} className="imgButton" /></label>
            <Collapse isOpened={isOpened}>
          
          <label>
            Pick your favorite flavor:
            <select name="favourite" value={this.state.favourite} onChange={this.handleInputChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>

            <input type="submit" value="Submit" />
          </label>

          <div>
            <img src = {thermometer} alt="thermometer" width="500" height="400"></img>
          </div>
          
          <div>
            <img src = {epicLine} alt="Line" width="100" height="10"></img>
          </div>

          </Collapse>
        </div>
{/* ----------------------------------------------------------------------------------------- */}
        <div className='vraag'>
          <input
              className="checkboxinvis"
              type="checkbox"
              id='checkbox2'
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
                <label for="checkbox2"><img src={collapse} className="imgButton" /></label>
            <Collapse isOpened={isOpened}>
          
          <label>
            Pick your favorite flavor:
            <select name="favourite" value={this.state.favourite} onChange={this.handleInputChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>

            <input type="submit" value="Submit" />
          </label>

          <div>
            <img src = {thermometer} alt="thermometer" width="500" height="400"></img>
          </div>
          
          <div>
            <img src = {epicLine} alt="Line" width="100" height="10"></img>
          </div>

          </Collapse>
        </div>
{/* ----------------------------------------------------------------------------------------- */}
        <div className='vraag'>
          <input
              className="checkboxinvis"
              type="checkbox"
              id='checkbox2'
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
                <label for="checkbox2"><img src={collapse} className="imgButton" /></label>
            <Collapse isOpened={isOpened}>
          
          <label>
            Pick your favorite flavor:
            <select name="favourite" value={this.state.favourite} onChange={this.handleInputChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>

            <input type="submit" value="Submit" />
          </label>

          <div>
            <img src = {thermometer} alt="thermometer" width="500" height="400"></img>
          </div>
          
          <div>
            <img src = {epicLine} alt="Line" width="100" height="10"></img>
          </div>

          </Collapse>
        </div>

      </form>
    );
  }
}
             
export default App;