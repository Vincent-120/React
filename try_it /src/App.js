import React from 'react';
import becode from './becode.png';
import './App.css';
import Info from './hello.jsx';
import Badge from './badge.jsx';
import {infos} from './infoBadge';

const App = props => {
  return (
    <header className="head">
        <img src={becode} className="logo" alt="logo"/>
        <Info/>
        <div className="block">
        {infos.map((article,index)=>(
          <Badge 
          key = {index}
          {...article}
          />
        ))}
        </div>
    </header>
  );
}

export default App;
