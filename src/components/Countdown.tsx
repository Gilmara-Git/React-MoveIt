import styles from '../styles/components/Countdown.module.css'
import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';
/* useEffect e um hook do react usando para disparar efeitos colaterais */


export function CountDown(){

   const { 

    minutes, 
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
    
     }  = useContext(CountdownContext)

    // o padStart aqui: se o minutes nao tiver 2 digitos, ele colocara 0 na frente do outro digito
    const [minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');    
    const [secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');


    return (

    <div>
        <div className={styles.countdownContainer}> 
        
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>

                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
        </div>

        { hasFinished ? (

             <button 
             disabled 
             className={styles.countdownButton}            
             >
                Ciclo encerrado         
             </button>
        ): (

        <>

            { isActive ? ( 
            
            <button type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}
            >
                Abandonar ciclo           
            </button>
            
            ) : (
            
            <button type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}
            >
                Inicar um ciclo           
            </button>
            
            ) }  

        </>  
        )}

       
        
    </div>
    );
        
        
}
