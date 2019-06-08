import React from 'react';
import { ReactComponent as InstaIcon} from '../../../assets/images/instagram.svg';
import logo from '../../../assets/images/LongLogo.png';
import './index.css';

function Splash() {
  return (
    <div>
        <div className='container'>
        <img className='logo' src={logo} alt='ecology coffee logo'/>
        <p className='logo' id='text'>Full Site Coming Soon</p>
        </div>
        <a href='https://www.instagram.com/ecology.coffee/' rel='noreferrer noopener' target='_blank' className='expand-link logo'>
            <InstaIcon className='icon' />
        </a>
    </div>
  )
}

export default Splash;