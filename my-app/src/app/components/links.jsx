'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export default function Links() {
  const pathname = usePathname()
  console.log(pathname)
 
  return (
    <>
      <Link 
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