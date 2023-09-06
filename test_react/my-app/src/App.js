import './css/style.css';
import Menu from './Components/Menu';
import Etude from './Components/Etude';
import MoiMeme from './Components/MoiMeme';
import Pro from './Components/Pro';
import Ville from './Components/Ville';


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
    </>
  );

}

export default App;
