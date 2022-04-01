import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import collapse from './dropdown.png';
import './App.css';
import thermometer from './pictures/thermo-removebg-preview.png'
import epicLine from './pictures/epicLineFinished.png'  
import thermohoog from './pictures/thermo-hoog.png'
import thermolaag from './pictures/thermo-laag.png'
import thermomid from './pictures/thermo-mid.png'



class App extends React.Component {

  static defaultProps = {
    isOpened: true,
    isOpened2: true,
    isOpened3: true,
    isOpened4: true,
    isOpened5: true
  };

  constructor(props) {
    super(props);
    this.state = {value: '',
    
    check: true};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  createPoints(needed)
  {
    var v1p = 0;
    var v2p = 0;
    var v3p = 0;
  
   
    if (this.state.gender == "MALE")
    {
      v1p = 200
    }
    else
    {
      v1p = 100
    }
  
  
    if (this.state.user == 'yooo')
    {
      v2p = 200
    }
    else 
    {
      v2p=10
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
      if (needed== 1)
      {
      return totalPoints
      }
      else if (needed==2)
      {
        return v1p
      }
      else if (needed==3)
      {
        return v2p
      }
      else if (needed==4)
      {
        return v3p
      }
  }
  customAdvise()
  {

    var pointsArray = [this.createPoints(2),this.createPoints(3),this.createPoints(4)];
    
    var lowest = 0
    for (var i=0; i<pointsArray.length; i++)
    {
      if (pointsArray[i]<pointsArray[lowest])
      {
        lowest =i
      }
    }

    if(pointsArray[0]==0||pointsArray[1]==0||pointsArray[2]==0)
    {
      return "please fill in the questions"
    }
    else{
    if(lowest==0)
    {
      return "You are a Man named yooo who likes mangos or coconuts"
    }
    else if (lowest==1)
    {
      return "you are not named yooo"
    }
    else if (lowest==2)
    {
      return "you like grapefruit"
    }
    }
  }

  createThermo()
  { var totalPoints=this.createPoints(1)
    var meter = 'thermometer';
    console.log(meter)
   
    if(totalPoints <=300){
      meter = thermolaag 
      console.log(meter)
      return meter
    }else if(totalPoints <=400){
      meter = thermomid
      console.log(meter)
      return meter
    }else{
      meter = thermohoog
      console.log(meter)
      return meter
    }
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
   
  
    // alert('A name was submitted: ' + this.state.user +
    //       '\n their favourite food is:' + this.state.favourite +
    //       '\n their gender is:' + this.state.gender+
    //       '\n total points:' + (this.createPoints(1))
    //       +
    //       '\n' + this.customAdvise()); 
    event.preventDefault()
  }

    

  render() {

    const {isOpened} = this.state;
    const {isOpened2} = this.state;
    const {isOpened3} = this.state;
    const {isOpened4} = this.state;
    const {isOpened5} = this.state;
    
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
              <h3>A. FOCUS BEPALEN</h3>
        <Collapse isOpened={isOpened}>
        
          <div className="vraag">
            <b><p>MVO is een veelomvattend begrip. Bepaal de belangrijkste MVO-thema’s voor jouw bedrijf of organisatie, als eerste belangrijke stap.</p></b>
            <h>MVO IS EEN BREED BEGRIP</h>
            <p>Bepaal de belangrijkste MVO-thema’s voor jouw bedrijf of organisatie, als eerste belangrijke stap. De kernthema’s van MVO zijn uitgewerkt in ISO 2600. 
               Ook de Sustainable Development Goals (SDG’s) van de Verenigde Naties geven het brede kader van duurzaamheid aan. </p>
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
            checked={isOpened2}
            onChange={({target: {checked}}) => this.setState({isOpened2: checked})} />
            <label for="checkbox2"><img src={collapse} className="imgButton" /></label>
            <h3>MVO-DOELEN STELLEN</h3>
          <Collapse isOpened={isOpened2}>
          
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
              id='checkbox3'
              checked={isOpened3}
              onChange={({target: {checked}}) => this.setState({isOpened3: checked})} />
              <label for="checkbox3"><img src={collapse} className="imgButton" /></label>
              <h3>C. MAATREGELEN UITVOEREN</h3>
            <Collapse isOpened={isOpened3}>
          
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
              id='checkbox4'
              checked={isOpened4}
              onChange={({target: {checked}}) => this.setState({isOpened4: checked})} />
              <label for="checkbox4"><img src={collapse} className="imgButton" /></label>
              <h3>D. MONITOREN VAN DE VOORTGANG</h3>
            <Collapse isOpened={isOpened4}>
          
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

          </Collapse>
        </div>
{/* ----------------------------------------------------------------------------------------- */}
        <div className='vraag'>
          <input
              className="checkboxinvis"
              type="checkbox"
              id='checkbox5'
              checked={isOpened5}
              onChange={({target: {checked}}) => this.setState({isOpened5: checked})} />
              <label for="checkbox5"><img src={collapse} className="imgButton" /></label>
              <h3>E. COMMUNICEREN OVER MVO</h3>
            <Collapse isOpened={isOpened5}>
          
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

         

          </Collapse>
        </div>
        <img src = {this.createThermo()} alt="thermometer" className='thermo' ></img>
        <div>{this.customAdvise()}</div>
      </form>
      
     
    );
  }
}

             
export default App;
