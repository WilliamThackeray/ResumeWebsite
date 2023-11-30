import Link from "next/link"
import styles from '../page.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faSquareThreads } from '@fortawesome/free-brands-svg-icons'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <section className={styles.footer}>
      <div>
        &copy; William Thackeray 2023
      </div>
      <div className={styles.footerSocialLinks}>
        <Link href='https://github.com/WilliamThackeray' target='_blank'><FontAwesomeIcon className={styles.footerSocialLink} icon={faGithubSquare} /></Link>
        <Link href='https://www.linkedin.com/in/william-robert-thackeray/' target='_blank'><FontAwesomeIcon className={styles.footerSocialLink} icon={faLinkedin} /></Link>
        <Link href='https://www.instagram.com/williamthackthack/' target='_blank'><FontAwesomeIcon className={styles.footerSocialLink} icon={faInstagramSquare} /></Link>
        <Link href='https://www.threads.net/@williamthackthack' target='_blank'><FontAwesomeIcon className={styles.footerSocialLink} icon={faSquareThreads} /></Link>
        <Link href='https://www.youtube.com/c/thackwhack' target='_blank'><FontAwesomeIcon className={styles.footerSocialLink} icon={faYoutubeSquare} /></Link>
      </div>
    </section>
  )
}