import React from 'react';
import { ReactComponent as InstaIcon} from '../../../assets/images/instagram.svg';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import logo from '../../../assets/images/LongLogo.png';
import './index.css';

function Splash() {
  return (
    <Grid container>
      <Grid item lg={12} />
      <Grid item lg={3} />
      <Grid item lg={6}>
        <Paper elevation='12' square={true} className='paper'>
            <img className='logo' src={logo} alt='ecology coffee logo'/>
            <div className='text-container'>
              <p className='red'>F</p>
              <p className='green'>u</p>
              <p className='yellow'>l</p>
              <p className='green'>l </p>
              <p className='red'>S</p>
              <p className='green'>i</p>
              <p className='yellow'>t</p>
              <p className='red'>e </p>
              <p className='green'>C</p>
              <p className='yellow'>o</p>
              <p className='green'>m</p>
              <p className='red'>i</p>
              <p className='green'>n</p>
              <p className='yellow'>g </p>
              <p className='red'>S</p>
              <p className='green'>o</p>
              <p className='yellow'>o</p>
              <p className='green'>n</p>
              <p className='red'></p>
              <p className='green'></p>
              <p className='yellow'></p>
            </div>
            <a href='https://www.instagram.com/ecology.coffee/' rel='noreferrer noopener' target='_blank' className='expand-link'>
                <InstaIcon className='icon' />
            </a>
        </Paper>
      </Grid>
      <Grid item lg={3} />
    </Grid>
  )
}

export default Splash;