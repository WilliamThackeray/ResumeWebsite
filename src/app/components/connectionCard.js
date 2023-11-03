import styles from '../page.module.css'
import Image from 'next/image'
import profilePic from '../../../public/images/williamThackerayProfilePic.jpg'

export default function ConnectionCard({src, alt, name, bio, status}) {
  return (
    <div className={styles.connectionCard}>
      <Image
        src={src}
        alt={alt}
        className={styles.connectCardImage}
        style={{
          width:'10vw',
          height:'50%',
        }}
      />
      <div>
        <h3>{name}</h3>
        <p>{bio}</p>
        <p>Status: <span className={styles.online}>{status}</span></p>
      </div>
    </div>
  )
}