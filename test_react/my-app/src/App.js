import './css/style.css';
import Menu from './Components/Menu';
import Etude from './Components/Etude';
import MoiMeme from './Components/MoiMeme';
import Pro from './Components/Pro';
import Ville from './Components/Ville';
import Counter from './Components/Counter';
import Chat from './Components/Chat';
import React, {useState} from 'react';


function App() {
  

  const villes =[
    {
        id : 1,
        nom : 'Strasbourg',
        isMine : false
    },
    {
        id : 2,
        nom : 'Mulhouse',
        IsMine : true
    } ,
    {
        id: 3,
        nom : 'Paris',
        IsMine : false
    }
]
  return (
   
    <><Menu/><hr></hr>
    <MoiMeme/>
    <Etude/>
    <Pro/>

    <Ville villes={villes}/>

    <Counter/>

    <Chat/>
    </>
  );

}

export default App;
