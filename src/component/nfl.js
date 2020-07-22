import React from 'react';
import Team from './Team';

import ravens from '../images/ravens.png';
import bills from '../images/bills.png';
import bengals from '../images/bengals.png';
import browns from '../images/browns.png';
import broncos from '../images/broncos.png';
import texans from '../images/texans.png';
import colts from '../images/colts.png';
import jaguars from '../images/jaguars.png';
import chiefs from '../images/chiefs.png';
import chargers from '../images/chargers.png';
import dolphins from '../images/dolphins.png';
import pats from '../images/pats.png';
import jets from '../images/jets.png';
import raiders from '../images/raiders.png';
import steelers from '../images/steelers.png';
import titans from '../images/titans.png';

import cards from '../images/cards.png';
import falcons from '../images/falcons.png';
import panthers from '../images/panthers.png';
import bears from '../images/bears.png';
import cowboys from '../images/cowboys.png';
import lions from '../images/lions.png';
import packers from '../images/packers.png';
import rams from '../images/rams.png';
import vikings from '../images/vikings.png';
import saints from '../images/saints.png';
import giants from '../images/giants.png';
import eagles from '../images/eagles.png';
import niners from '../images/niners.png';
import seahawks from '../images/seahawks.png';
import buccaneers from '../images/buccaneers.png';
import skins from '../images/skins.png';

function nfl(props) {
    return(
        <div className="conference afc">
            <div className="afc">
                <Team onClick={props.onClick} team={"Ravens"} img={ravens} />
                <Team onClick={props.onClick} team={"Bills"} img={bills}  />
                <Team onClick={props.onClick} team={"Bengals"} img={bengals}  />
                <Team onClick={props.onClick} team={"Browns"} img={browns}  />
                <Team onClick={props.onClick} team={"Broncos"} img={broncos}  />
                <Team onClick={props.onClick} team={"Texans"} img={texans}  />
                <Team onClick={props.onClick} team={"Colts"} img={colts}  />
                <Team onClick={props.onClick} team={"Jaguars"} img={jaguars}  />
                <Team onClick={props.onClick} team={"Chiefs"} img={chiefs}  />
                <Team onClick={props.onClick} team={"Chargers"} img={chargers}  />
                <Team onClick={props.onClick} team={"Dolphins"} img={dolphins}  />
                <Team onClick={props.onClick} team={"Patriots"} img={pats}  />
                <Team onClick={props.onClick} team={"Jets"} img={jets}  />
                <Team onClick={props.onClick} team={"Raiders"} img={raiders}  />
                <Team onClick={props.onClick} team={"Steelers"} img={steelers}  />
                <Team onClick={props.onClick} team={"Titans"} img={titans}  />
                </div>
                <br />
                <div className="nfc">
                <Team onClick={props.onClick} team={"Cardinals"} img={cards}  />
                <Team onClick={props.onClick} team={"Falcons"} img={falcons}  />
                <Team onClick={props.onClick} team={"Panthers"} img={panthers}  />
                <Team onClick={props.onClick} team={"Bears"} img={bears}  />
                <Team onClick={props.onClick} team={"Cowboys"} img={cowboys}  />
                <Team onClick={props.onClick} team={"Lions"} img={lions}  />
                <Team onClick={props.onClick} team={"Packers"} img={packers}  />
                <Team onClick={props.onClick} team={"Rams"} img={rams}  />
                <Team onClick={props.onClick} team={"Vikings"} img={vikings}  />
                <Team onClick={props.onClick} team={"Saints"} img={saints}  />
                <Team onClick={props.onClick} team={"Giants"} img={giants}  />
                <Team onClick={props.onClick} team={"Eagles"} img={eagles}  />
                <Team onClick={props.onClick} team={"49ers"} img={niners}  />
                <Team onClick={props.onClick} team={"Seahawks"} img={seahawks}  />
                <Team onClick={props.onClick} team={"Buccaneers"} img={buccaneers}  />
                <Team onClick={props.onClick} team={"Skins"} img={skins}  />        
            </div>
        </div>
    )
}

export default nfl;