import React from 'react';

const Team = ( props ) => {
    return(
        <span>
            <img src={props.img} className="nfl-team-logo" alt={props.team} onClick={props.onClick}/>
        </span>
    )
};

export default Team;