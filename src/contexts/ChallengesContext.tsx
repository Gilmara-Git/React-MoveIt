import {createContext, ReactNode, useEffect, useState } from 'react'
import challenges from '../../challenges.json'

interface IChallenge {

    type: "body" | "eye";
    description: string;
    amount: number;

}

interface IChallengesContextData {
    
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp:()=>void;
    startNewChallenge:()=>void;
    activeChallenge: IChallenge;
    resetChallenge:()=>void;
    experienceToNextLevel;
    completeChallenge:()=>void;
    
}

interface IChallengesProviderProp {
    
    children: ReactNode; 
}

export const ChallengesContext = createContext({} as IChallengesContextData );

export function ChallengesProvider({ children }: IChallengesProviderProp){

    const [level, setLevel] = useState(1);
    const [ currentExperience, setCurrentExperience ] = useState(0);
    const [ challengesCompleted, setChallengesCompleted ] = useState(0);
    const [ activeChallenge, setActiveChallenge ] = useState(null); 

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

   
    useEffect(()=>{
        Notification.requestPermission();
    }, [])

    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
       const randomChallengeIndex =  Math.floor(Math.random() * challenges.length);
       //console.log(randomChallengeIndex)
       const challenge = challenges[randomChallengeIndex];

       setActiveChallenge(challenge); 
       
       new Audio('/notification.mp3').play();
       
       if (Notification.permission === "granted" ) {
          
        new Notification('Novo desafio 💪🏻', {
            body: `Valendo ${challenge.amount}xp!`
        })
       }  
    }

    function resetChallenge(){
        setActiveChallenge(null);

    }

    function completeChallenge(){
        if(!activeChallenge){
            return;
        }
      
        const { amount } = activeChallenge;

        let finalExperience = currentExperience  + amount;
        
        if(finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);  

    }

    return (
        <ChallengesContext.Provider value={{ 
        level,
        currentExperience, 
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge
        
        }}>
            {children}
        </ChallengesContext.Provider>
    );
}