import styles from '../page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Project({props}) {

  return (
    <div className={styles.projectsDiv}>
      <Image src={(props.img_name === 'svg1') ? `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='40' height='40' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='%232a4365'/%3E%3Cpath d='M1 20L20 0L0 0zM20 40L39 20L40 40z' fill='%231a202c'/%3E%3Cpath d='M0 20L18 40L20 20L0 20M20 20L22 0L40 20L20 20z' fill='%23ecc94b'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E` : `/images/${props.img_name}`} width={100} height={100} alt='' />
      <div className={styles.projectInfo}>
        <Link href={props.url} target='_blank' className={styles.projectLink}>{props.name}</Link>
        <p>{props.description}</p>
      </div>
    </div>
  )
}