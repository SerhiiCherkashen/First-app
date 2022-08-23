//import logo from './logo.svg';
import './App.css';

import React from 'react'
import Header from './components/Head/Header';
import Nav from './components/Body/Menu/Nav';
import Centr from './components/Body/CenterContent/Center';
import Dialogs from './components/Body/Dialogs/Dialogs'
import Messeg from './components/Body/Messeg 2/Messeg 2';
import News from './components/Body/News/News';
import Music from './components/Body/Music/Music';
import Seting from './components/Body/Seting/Seting';
import Expiriens from './components/Body/Expiriens/Expiriens'
import { BrowserRouter, Route } from 'react-router-dom';


let App = () => {
  return (
    < BrowserRouter>
      <div className="app-w" >
        <Header />
        <div className='content' >
          <div className='menu' >
            < Nav />
          </div>
          <div className='right' >
            <Route path='/centr' component={Centr} />
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/messeg' component={Messeg} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/seting' component={Seting} />
            <Route path='/expiriens' component={Expiriens} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;