'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from '../page.module.css'
import Links from './links'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className={styles.head}>
      <Link href="/">William Thackeray</Link>
      <Links />
    </header>
  )
}