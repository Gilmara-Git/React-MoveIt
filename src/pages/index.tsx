import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChalleges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../contexts/CountdownContext';
import { CountDown } from '../components/Countdown';

import styles from '../styles/pages/Home.module.css'
import React from 'react';

export default function Home() {
  return (

    <div className={styles.container}>  

    <Head>
      <title>Inicio | move-it</title>      
    </Head>  
    
   <ExperienceBar />

    <CountdownProvider>
      <section>
        <div>
            <Profile />
            <CompletedChallenges />
            <CountDown />
        </div>
        
        
        <div>
          <ChallengeBox />
        </div>

      </section>
   </CountdownProvider>
  </div>
  )
}
