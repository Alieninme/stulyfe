import React, {useState} from 'react';
import Slider from '../../components/slider/Slider';
import Login from '../../components/login/Login';
import "./landingPage.css";

export default function LandingPage() {

  const [login, setLogin] = useState(false);
  return (
    <div className='mainContainer'>
            <div className='wrapper'>
               <div className='boxContainer'>
               <div className='whiteBox'></div>
                <div className='whiteBox'></div>
               </div> 
               <div className='textContainer'>
                <h4>Welcome To</h4>
                <h1>Mahesh Gyanpeeth</h1>
                <span>Powered by Stulyfe</span>
               </div>  
               { !login && <button className='skipButton' onClick={() => setLogin(true)} >skip</button>} 
        </div>
        {login ? <Login/> : <Slider/> }     
    </div> 
  )
}
