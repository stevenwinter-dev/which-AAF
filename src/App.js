import React, { useState } from 'react';

import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Aaf from './component/aaf';
import NFL from './component/nfl';

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
        <NFL onClick={onClick} />
        {selected ? 
          <Aaf team={team} img={img} onClick={onClick} /> 
          : null }
        </div>
        <Footer />
      </div>
    );
  }

export default App;
