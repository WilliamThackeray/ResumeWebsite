'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../page.module.css'
import Header from '../components/header'
import Footer from '../components/footer'


export default function Page() {
  return (
    <main>
      <Header />
      Projects Content Here
      <Footer />
    </main>
  )
}
