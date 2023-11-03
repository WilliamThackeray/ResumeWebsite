import Image from 'next/image'
import styles from './page.module.css'
import Login from './components/login.js'
import ConnectionCard from './components/connectionCard.js'
import profilePic from '../../public/images/williamThackerayProfilePic.jpg'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Welcome to Learning!</h1>
      </div>
      <div className={styles.description}>
        <h2>Login Section</h2>
        <Login />
      </div>
      <div className={styles.description}>
        <h2>Cards Section</h2>
        <ConnectionCard src={profilePic} alt='profile pic' name='William Thackeray' bio='always ready to go' status='online' />
        <ConnectionCard src={profilePic} alt='profile pic' name='Joe Shmoe' bio='mean boy' status='away' />
        <ConnectionCard src={profilePic} alt='profile pic' name='Jessi' bio='New Gal.' status='offline' />
      </div>
    </main>
  )
}
