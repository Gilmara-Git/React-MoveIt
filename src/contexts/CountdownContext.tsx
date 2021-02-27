import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface ICountdownContextData {

    minutes: number;
    seconds: number;
    hasFinished:boolean;
    isActive: boolean;
    startCountdown: ()=> void;
    resetCountdown: ()=> void; 

}


interface ICountdownProviderProps {

    children: ReactNode;

}


let countdownTimeout: NodeJS.Timeout;
// este NodeJS.Timeout e uma variavel global
//esse retorno aqui vamos assinar ele para o setTimeout dentro da funcao useEffect

export const CountdownContext = createContext({} as ICountdownContextData)

export function CountdownProvider({ children } : ICountdownProviderProps){

    const {startNewChallenge} = useContext(ChallengesContext);
   
    const [time, setTime] =  useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished ] = useState(false);

    const minutes = Math.floor(time /60);
    const seconds = time % 60;

    
    function startCountdown(){        
        setIsActive(true);  
       
    }

    function resetCountdown(){

        clearTimeout(countdownTimeout); //isso faz para a funcao setTimeout pare imediatamente
        setIsActive(false);
        setHasFinished(false);
        setTime(0.1 * 60)
       
    }

    useEffect(()=>{        
        if(isActive && time > 0){
        
            countdownTimeout = setTimeout(()=>{
                setTime(time -1)
            }, 1000)

        } else if (isActive && time === 0) {
           setHasFinished(true);
           setIsActive(false);
           startNewChallenge();

        }

        }, [isActive, time])
        // useEffect e uma funcao de efeitos colaterais, toda vez que o que estiver dentro do array for mudado, esta funcao dispara


    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown

        }}>
            { children }

        </CountdownContext.Provider>


    );


}