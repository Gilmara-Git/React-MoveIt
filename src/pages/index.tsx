import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from "../components/CompletedChalleges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountDown } from '../components/Countdown';

import styles from '../styles/pages/Home.module.css'
import React from 'react';

export default function Home(props) {

  interface IHomeProps {

    level: number;
    currentExperience: number;
    challengesCompleted: number;

  }

 return ( 

  <ChallengesProvider 
  level={props.level}
  currentExperience={props.currentExperience}  
  challengesCompleted={props.challengesCompleted}
  >   
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
  </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps =  async (ctx) =>{
 // chamada API
 // esses valores sao mandados como String para os cookies, portanto chegam como String
 //Entao vamos converte-los para numero
const { level, currentExperience, challengesCompleted } =  ctx.req.cookies;
 
return { 
    props: { 
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted)
     }
  }

}
