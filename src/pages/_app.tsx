import '../styles/global.css';
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext'
import React from 'react';


function MyApp({ Component, pageProps }) {

  return (
             
    <Component {...pageProps} />          
     
  )

}

export default MyApp
