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
        className={`link ${pathname === '/' ? 'active' : ''}`}
        href="/">
        Home
      </Link>
      <Link
        href="/about"
      >
        About
      </Link>
      <Link
        href="/resume"
      >
        Resume
      </Link>
      <Link
        href="/projects"
      >
        Projects
      </Link>
    </>
  )
}