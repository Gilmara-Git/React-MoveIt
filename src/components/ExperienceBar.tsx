import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
 //colocamos estilo na div aqui, porque podemos mante-lo como uma variavel no JS. ESte valor mudara

 const { currentExperience, experienceToNextLevel} = useContext(ChallengesContext);
 const percentToNextLevel = Math.round((currentExperience  * 100) / experienceToNextLevel );

    return (
        <header className={styles.experienceBar}>
            <span>0xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left:`${percentToNextLevel}%` }}>
                   {currentExperience }px
                </span>
                
            </div>
            <span>{experienceToNextLevel}xp</span>
        </header>
    );
}