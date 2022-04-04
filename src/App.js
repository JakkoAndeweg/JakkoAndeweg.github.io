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
        <label for="checkbox1"><img src={collapse} className="imgButton1" /></label>
           <input
              className="checkboxinvis"
              type="checkbox"
              id='checkbox1'
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
              <h3>Een beter milieu</h3>
            <Collapse isOpened={isOpened}>
        
          <div className="vraag">
            <p>Een onderdeel van MVO is dat je milieuzorg integreert in alle bedrijfsactiviteiten. In de wet is vastgelegd dat bedrijven en organisaties de milieubelasting van hun bedrijfsvoering moeten minimaliseren door:</p>
            <ul>
              <li>Beperken van gevaar en hinder</li>
              <li>Besparen van energie</li>
              <li>Preventie en scheiding van afval</li>
              <li>Vervoermanagement</li>
            </ul>
            <p>Je doet een stap verder dan de wet door milieuzorg te integreren in:</p>
            <ul>
              <li>Innovatie van product of dienst, bijvoorbeeld verminderen van benodigd materiaal of mogelijk maken van hergebruik.</li>
              <li>Afspraken met leveranciers o.a. inkopen van minder milieubelastende producten, verminderen van verpakkingen</li>
              <li>Advies aan klanten, bijvoorbeeld over milieuvriendelijke alternatieven, duurzaam gebruik van product</li>
            </ul>
            <div name="gender" onChange={this.handleInputChange}>
              <b><p>Vraag 1<br></br>Bent u al bezig met MVO in een of meerdere van deze manieren:</p></b>
              <b><input type="radio" value="checkbox1" name="value"/> Beperken van gevaar en hinder</b><br></br>
              <b><input type="radio" value="checkbox2" name="value"/> Besparen van energie</b><br></br>
              <b><input type="radio" value="checkbox3" name="value"/> Preventie en scheiding van afval</b><br></br>
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
            <label for="checkbox2"><img src={collapse} className="imgButton1" /></label>
            <h3>Meer welzijn van de medewerkers</h3>
          <Collapse isOpened={isOpened2}>
          
          <div className='vraag'>
            <p>Een onderdeel van MVO is dat het werkklimaat binnen jouw bedrijf of organisatie ruimte biedt aan:</p>
            <ul>
              <li>De inbreng en eigen verantwoordelijkheid van medewerkers</li>
              <li>Persoonlijke ontwikkeling in brede zin, niet alleen gerelateerd aan de functie</li>
              <li>Het combineren van arbeid met zorg en andere maatschappelijke taken, bijvoorbeeld door flexibele werktijden en mogelijkheid om parttime te werken</li>
            </ul>
            <p>In de wet is vastgelegd dat bedrijven goede arbeidsomstandigheden en de veiligheid moeten waarborgen. Je doet een stap verder als je aandacht geeft aan:</p>
            <ul>
              <li>Normen en waarden op de werkvloer; hoe gaan medewerkers met elkaar om</li>
              <li>Het stimuleren van de gezondheid van medewerkers, bijvoorbeeld door gezonde voeding in de kantine, korting op fitness en sport, fietsplan, stoppen met roken pakket aanbieden</li>
            </ul>
            <label>
              <b><p>vraag 2<br></br>Op welke manier geeft u aandacht aan goede arbeidsomstandigheden?</p></b>
              <input name="user" type="text" value={this.state.username} onChange={this.handleInputChange}/>
            </label>
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
            <label for="checkbox3"><img src={collapse} className="imgButton1" /></label>
            <h3>Meer welzijn van mensen in productielanden</h3>
          <Collapse isOpened={isOpened3}>
          
          <div className='vraag'>
            <p>Bij MVO besteed je aandacht aan sociale aspecten in productielanden elders in de wereld:</p>
            <ul>
              <li>Let bij inkoop op de arbeidsomstandigheden waaronder producten en grondstoffen elders in de wereld worden gemaakt, denk bijvoorbeeld aan kinderarbeid en minimumloon. Dit kan bijvoorbeeld door met leveranciers in gesprek te gaan over de arbeidsomstandigheden in de keten of producten in te kopen met een Fair Trade of UTS Certified keurmerk.</li>
              <li>Betaal een eerlijke prijs voor jouw ingekochte grondstoffen, producten en diensten.</li>
              <li>Let bij inkoop van grondstoffen of producten uit risicolanden op misstanden zoals corruptie, geweld en mensenhandel. Sluit je aan bij initiatieven die deze misstanden bestrijden.</li>
            </ul>

            <div name="gender" onChange={this.handleInputChange}>
              <b><p>Vraag 3<br></br>Let u bij aankoop op de arbeidsomstandigheden, bijvoorbeeld producten en grondstoffen elders in de wereld gemaakt worden?</p></b>
              <b><input type="radio" value="JA" name="value"/> Ja</b>
              <b><input type="radio" value="NEE" name="value"/> Nee</b>
            </div>

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
              <label for="checkbox4"><img src={collapse} className="imgButton1" /></label>
              <h3>Meer welzijn van de maatschappij</h3>
            <Collapse isOpened={isOpened4}>
          
          <div className='vraag'>
            <p>Rekening houden met de maatschappij is de breedste pijler van MVO. Er zijn dan ook vele mogelijkheden om als bedrijf of organisatie een steentje bij te dragen aan een duurzamere maatschappij:</p>
            <p>Je vernieuwt jouw product of dienst zodanig dat het leidt tot meer welzijn van de samenleving. Bijvoorbeeld door:</p>
            <ul>
              <li>Diervriendelijk produceren</li>
              <li>Producten geschikt maken voor gehandicapten, ouderen</li>
            </ul>
            <p>Jouw bedrijf of organisatie levert een positieve bijdrage aan de directe omgeving. Bijvoorbeeld door:</p>
            <ul>
              <li>Groen aanleggen rond het bedrijf</li>
              <li>Ondersteunen van buurtactiviteiten</li>
            </ul>
            <p>Jouw bedrijf of organisatie stimuleert positieve ontwikkelingen in de samenleving, bijvoorbeeld door:</p>
            <ul>
              <li>Inschakelen van bepaalde doelgroepen in het arbeidsproces, bijvoorbeeld WAO-ers, herintredende vrouwen, gehandicapten</li>
              <li>Aanbieden van stage- en werkervaringsplaatsen</li>
              <li>Faciliteiten en menskracht inzetten voor maatschappelijke doelen</li>
            </ul>
            <p>Veel bedrijven en organisaties voeren onbewust al activiteiten uit die als MVO kunnen worden aangemerkt. Bewust werken aan MVO levert extra duurzaamheidswinst op.</p>

            <b><p> vraag 4<br></br>Levert jou bedrijf een positieve bijdrage aan de omgeving door: </p></b>
            <select name="favourite" value={this.state.favourite} onChange={this.handleInputChange}>
              <option value="vraag1">Groen aanleggen rond het bedrijf</option>
              <option value="vraag2">Producten geschikt maken voor gehandicapten</option>
              <option value="vraag3">Ouderen</option>
              <option value="vraag4">Geen</option>
            </select>
          </div>

          </Collapse>
        </div>
{/* ----------------------------------------------------------------------------------------- */}

        <img src = {this.createThermo()} alt="thermometer" className='thermo' ></img>
        <div>{this.customAdvise()}</div>
      </form>
      
    );
  }
}

             
export default App;
