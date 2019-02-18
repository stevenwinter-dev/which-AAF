import React, { Component } from 'react';

import ravens from './images/ravens.png';
import bills from './images/bills.png';
import bengals from './images/bengals.png';
import browns from './images/browns.png';
import broncos from './images/broncos.png';
import texans from './images/texans.png';
import colts from './images/colts.png';
import jaguars from './images/jaguars.png';
import chiefs from './images/chiefs.png';
import chargers from './images/chargers.png';
import dolphins from './images/dolphins.png';
import pats from './images/pats.png';
import jets from './images/jets.png';
import raiders from './images/raiders.png';
import steelers from './images/steelers.png';
import titans from './images/titans.png';

import cards from './images/cards.png';
import falcons from './images/falcons.png';
import panthers from './images/panthers.png';
import bears from './images/bears.png';
import cowboys from './images/cowboys.png';
import lions from './images/lions.png';
import packers from './images/packers.png';
import rams from './images/rams.png';
import vikings from './images/vikings.png';
import saints from './images/saints.png';
import giants from './images/giants.png';
import eagles from './images/eagles.png';
import niners from './images/niners.png';
import seahawks from './images/seahawks.png';
import buccaneers from './images/buccaneers.png';
import skins from './images/skins.png';

import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Aaf from './component/aaf';
import Nfl from './component/nfl';

class App extends Component {
  state = {
    team: '',
    img: '',
    selected: false,
    aafTeam: '',
    aafImg: ''
}



onClick = (e) => {
  const selectedTeam = e.target.alt;
  const selectedTeamImg = e.target.src;
  this.setState({
    team: selectedTeam,
    img: selectedTeamImg,
    selected: true   
  })
}
  
  render() {
    return (
      <div className="App site">
        <Header />
        <div className="site-content">
        <p className="instructions">Select your favorite NFL team</p>
        <div className="conference afc">
        <div className="afc">
          <Nfl onClick={this.onClick} team={"Ravens"} img={ravens} />
          <Nfl onClick={this.onClick} team={"Bills"} img={bills}  />
          <Nfl onClick={this.onClick} team={"Bengals"} img={bengals}  />
          <Nfl onClick={this.onClick} team={"Browns"} img={browns}  />
          <Nfl onClick={this.onClick} team={"Broncos"} img={broncos}  />
          <Nfl onClick={this.onClick} team={"Texans"} img={texans}  />
          <Nfl onClick={this.onClick} team={"Colts"} img={colts}  />
          <Nfl onClick={this.onClick} team={"Jaguars"} img={jaguars}  />
          <Nfl onClick={this.onClick} team={"Chiefs"} img={chiefs}  />
          <Nfl onClick={this.onClick} team={"Chargers"} img={chargers}  />
          <Nfl onClick={this.onClick} team={"Dolphins"} img={dolphins}  />
          <Nfl onClick={this.onClick} team={"Patriots"} img={pats}  />
          <Nfl onClick={this.onClick} team={"Jets"} img={jets}  />
          <Nfl onClick={this.onClick} team={"Raiders"} img={raiders}  />
          <Nfl onClick={this.onClick} team={"Steelers"} img={steelers}  />
          <Nfl onClick={this.onClick} team={"Titans"} img={titans}  />
          </div>
          <br />
          <div className="nfc">
          <Nfl onClick={this.onClick} team={"Cardinals"} img={cards}  />
          <Nfl onClick={this.onClick} team={"Falcons"} img={falcons}  />
          <Nfl onClick={this.onClick} team={"Panthers"} img={panthers}  />
          <Nfl onClick={this.onClick} team={"Bears"} img={bears}  />
          <Nfl onClick={this.onClick} team={"Cowboys"} img={cowboys}  />
          <Nfl onClick={this.onClick} team={"Lions"} img={lions}  />
          <Nfl onClick={this.onClick} team={"Packers"} img={packers}  />
          <Nfl onClick={this.onClick} team={"Rams"} img={rams}  />
          <Nfl onClick={this.onClick} team={"Vikings"} img={vikings}  />
          <Nfl onClick={this.onClick} team={"Saints"} img={saints}  />
          <Nfl onClick={this.onClick} team={"Giants"} img={giants}  />
          <Nfl onClick={this.onClick} team={"Eagles"} img={eagles}  />
          <Nfl onClick={this.onClick} team={"49ers"} img={niners}  />
          <Nfl onClick={this.onClick} team={"Seahawks"} img={seahawks}  />
          <Nfl onClick={this.onClick} team={"Buccaneers"} img={buccaneers}  />
          <Nfl onClick={this.onClick} team={"Skins"} img={skins}  />        
          </div>
        </div>

        {this.state.selected ? 
          <Aaf team={this.state.team} img={this.state.img} onClick={this.onClick} /> 
          : null }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
