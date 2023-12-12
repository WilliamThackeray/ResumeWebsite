'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../page.module.css'
import Header from '../Components/header'
import Footer from '../Components/footer'


export default function Page() {
  return (
    <main>
      <Header />
      Resume Content Here
      <Footer />
    </main>
  )
}
