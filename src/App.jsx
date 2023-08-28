import './App.css';
import {PiTwitterLogoThin, PiInstagramLogoThin, PiFacebookLogoThin} from 'react-icons/pi'

export default function App(){
  return<>
  <img className='logo' />
 <div className="container"> 
  <img className='image'  />
  <div className='everything'>
    <h1>Build the community your fans will love</h1>
    <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
    <button>Register</button>
  </div>
  </div> 
  <footer>
    <PiFacebookLogoThin className='icon' />
    <PiTwitterLogoThin className='icon' />
    <PiInstagramLogoThin className='icon' />
    </footer>
  </>
}