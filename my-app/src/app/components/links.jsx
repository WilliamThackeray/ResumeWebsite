'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from '../page.module.css'

 
export default function Links() {
  const pathname = usePathname()
  console.log(pathname)
 
  return (
    <>
      <Link 
        className={styles.link}
        href="/">
        Home
      </Link>
      <Link
        className={styles.link}
        href="/about"
      >
        About
      </Link>
      <Link
        className={styles.link}
        href="/resume"
      >
        Resume
      </Link>
      <Link
        className={styles.link}
        href="/projects"
      >
        Projects
      </Link>
    </>
  )
}