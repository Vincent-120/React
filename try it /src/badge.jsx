import React from 'react';
import {infos} from './infoBadge';
console.log({infos});

const Badge = props => {
    return (
            <div className="blockInfo">
                <img className="imgInfo" src={props.icone} role="presentation"/>
                <h2 className="titleInfo">{props.title} </h2>
                <p className="textInfo">{props.text} </p>
            </div>

    )
};
export default Badge;