import React, { useState } from 'react';

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

function App(){
  const [team, setTeam] = useState('');
  const [img, setImg] = useState('');
  const [selected, setSelected] = useState(false);

  const onClick = (e) => {
    const selectedTeam = e.target.alt;
    const selectedTeamImg = e.target.src;
    setTeam(selectedTeam);
    setImg(selectedTeamImg);
    setSelected(true);
}

    return (
      <div className="App site">
        <Header />
        <div className="site-content">
        <p className="instructions">Select your favorite NFL team</p>
        <div className="conference afc">
        <div className="afc">
          <Nfl onClick={onClick} team={"Ravens"} img={ravens} />
          <Nfl onClick={onClick} team={"Bills"} img={bills}  />
          <Nfl onClick={onClick} team={"Bengals"} img={bengals}  />
          <Nfl onClick={onClick} team={"Browns"} img={browns}  />
          <Nfl onClick={onClick} team={"Broncos"} img={broncos}  />
          <Nfl onClick={onClick} team={"Texans"} img={texans}  />
          <Nfl onClick={onClick} team={"Colts"} img={colts}  />
          <Nfl onClick={onClick} team={"Jaguars"} img={jaguars}  />
          <Nfl onClick={onClick} team={"Chiefs"} img={chiefs}  />
          <Nfl onClick={onClick} team={"Chargers"} img={chargers}  />
          <Nfl onClick={onClick} team={"Dolphins"} img={dolphins}  />
          <Nfl onClick={onClick} team={"Patriots"} img={pats}  />
          <Nfl onClick={onClick} team={"Jets"} img={jets}  />
          <Nfl onClick={onClick} team={"Raiders"} img={raiders}  />
          <Nfl onClick={onClick} team={"Steelers"} img={steelers}  />
          <Nfl onClick={onClick} team={"Titans"} img={titans}  />
          </div>
          <br />
          <div className="nfc">
          <Nfl onClick={onClick} team={"Cardinals"} img={cards}  />
          <Nfl onClick={onClick} team={"Falcons"} img={falcons}  />
          <Nfl onClick={onClick} team={"Panthers"} img={panthers}  />
          <Nfl onClick={onClick} team={"Bears"} img={bears}  />
          <Nfl onClick={onClick} team={"Cowboys"} img={cowboys}  />
          <Nfl onClick={onClick} team={"Lions"} img={lions}  />
          <Nfl onClick={onClick} team={"Packers"} img={packers}  />
          <Nfl onClick={onClick} team={"Rams"} img={rams}  />
          <Nfl onClick={onClick} team={"Vikings"} img={vikings}  />
          <Nfl onClick={onClick} team={"Saints"} img={saints}  />
          <Nfl onClick={onClick} team={"Giants"} img={giants}  />
          <Nfl onClick={onClick} team={"Eagles"} img={eagles}  />
          <Nfl onClick={onClick} team={"49ers"} img={niners}  />
          <Nfl onClick={onClick} team={"Seahawks"} img={seahawks}  />
          <Nfl onClick={onClick} team={"Buccaneers"} img={buccaneers}  />
          <Nfl onClick={onClick} team={"Skins"} img={skins}  />        
          </div>
        </div>

        {selected ? 
          <Aaf team={team} img={img} onClick={onClick} /> 
          : null }
        </div>
        <Footer />
      </div>
    );
  }

export default App;
