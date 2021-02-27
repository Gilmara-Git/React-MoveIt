import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from  '../styles/components/Profile.module.css'

export function Profile(){

    const { level } = useContext(ChallengesContext)

    return (

        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4D35AQGxNSZC8vNinQ/profile-framedphoto-shrink_100_100/0/1610905946714?e=1614214800&v=beta&t=40WyBGNBNPG_koGi5MO4z6i4j4Ah83W3nT8vyQfoTCc"/>
        
            <div>
                <strong>Gilmara Pimentel</strong>
               
                <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}</p>
            </div>
        </div>
    )
}
