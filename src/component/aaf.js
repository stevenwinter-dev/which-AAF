import React from 'react';

import hotshotstext from '../images/hotshotsname.svg';
import hotshots from '../images/hotshotsimg.svg';
import legendstext from '../images/legendsname.svg';
import legends from '../images/legendsimg.svg';
import irontext from '../images/ironname.svg';
import iron from '../images/ironimg.svg';
import expresstext from '../images/expressname.svg';
import express from '../images/expressimg.svg';
import apollostext from '../images/apollosname.svg';
import apollos from '../images/apollosimg.svg';
import stallionstext from '../images/stallionsname.svg';
import stallions from '../images/stallionsimg.svg';
import commanderstext from '../images/commandersname.svg';
import commanders from '../images/commandersimg.svg';
import fleettext from '../images/fleetname.svg';
import fleet from '../images/fleetimg.svg';

const Aaf = ( props ) => {
    if(props.team === 'Cardinals' || props.team === 'Ravens' || props.team === 'Bears' || props.team === '49ers' ){ 
    return(
        <div className="Aaf hotshots card">
            <h2 className="hotshotstext">You should support the</h2>
            <img src={hotshots} className="aaf-team-logo" alt="Hotshots" />
            <br></br>
            <img src={hotshotstext} alt='Hotshots' />
        </div>
    )} else if (props.team === 'Falcons' || props.team === 'Panthers' || props.team === 'Jaguars' || props.team === 'Skins') {
        return(
            <div className="Aaf legends card">
                <h2 className="legendstext">You should support the</h2>
                <img src={legends} className="aaf-team-logo" alt="Legends" />
                <br></br>
                <img src={legendstext} alt='Legends' />
            </div>
        )
    } else if (props.team === 'Patriots' || props.team === 'Bills' || props.team === 'Browns' || props.team === 'Steelers') {
        return(
            <div className="Aaf iron card">
                <h2 className="irontext">You should support the</h2>
                <img src={iron} className="aaf-team-logo" alt="Iron" />
                <br></br>
                <img src={irontext} alt='Iron' />
            </div>
        )
    } else if (props.team === 'Bengals' || props.team === 'Colts' || props.team === 'Saints' || props.team === 'Titans') {
        return(
            <div className="Aaf express card">
                <h2 className="expresstext">You should support the</h2>
                <img src={express} className="aaf-team-logo" alt="Express" />
                <br></br>
                <img src={expresstext} alt='Express' />
            </div>
        )
    } else if (props.team === 'Dolphins' || props.team === 'Giants' || props.team === 'Jets' || props.team === 'Buccaneers') {
        return(
            <div className="Aaf apollos card">
                <h2 className="apollostext">You should support the</h2>
                <img src={apollos} className="aaf-team-logo" alt="Apollos" />
                <br></br>
                <img src={apollostext} alt='Apollos' />
            </div>
        )
    } else if (props.team === 'Broncos' || props.team === 'Packers' || props.team === 'Vikings' || props.team === 'Seahawks') {
        return(
            <div className="Aaf stallions card">
                <h2 className="stallionstext">You should support the</h2>
                <img src={stallions} className="aaf-team-logo" alt="Stallions" />
                <br></br>
                <img src={stallionstext} alt='Stallions' />
            </div>
        )
    } else if (props.team === 'Cowboys' || props.team === 'Texans' || props.team === 'Chiefs' || props.team === 'Eagles') {
        return(
            <div className="Aaf commanders card">
                <h2 className="commanderstext">You should support the</h2>
                <img src={commanders} className="aaf-team-logo" alt="Commanders" />
                <br></br>
                <img src={commanderstext} alt='Commanders' />
            </div>
        )
    } else {
        return(
            <div className="Aaf fleet card">
                <h2 className="fleettext">You should support the</h2>
                <img src={fleet} className="aaf-team-logo" alt="Fleet" />
                <br></br>
                <img src={fleettext} alt='Fleet' />
            </div>
        )}
} 

export default Aaf;