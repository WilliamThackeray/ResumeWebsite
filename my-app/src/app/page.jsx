'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './page.module.css'
import Header from './Components/header'
import Footer from './Components/footer'
import { getApi } from './Server/api'


export default function Page() {
  return (
    <main>
      <Header />
      <div className={styles.main}>
        <section className={styles.homeSec}>
          <h2>Home</h2>
          <div className={styles.homeDiv}>
            <Image
              src="/images/stGeorge.JPG"
              width={391.25}
              height={259.375}
              alt="Picture of the William with his wife."
            />
            <div>
              <h3>William Thackeray</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a dictum mi, quis consectetur erat. Aliquam neque nulla, egestas vel pharetra at, interdum fermentum orci. Vivamus elementum est augue, luctus pretium sapien bibendum nec. Donec venenatis sodales tortor a accumsan. Integer semper quis lectus sit amet pulvinar. Mauris id orci eu leo semper maximus. </p>
            </div>
          </div>
        </section>
        <section className={styles.projSec}>
          <h2>My Recent Projects</h2>
          <div className={styles.projCard}>
            <Image
              src="/images/placeholder.png"
              width={350}
              height={200}
              alt='Placeholder image'
            />
            <div>
              <h3>Frequency Word Counter</h3>
              <p>A word counter I made to count the frequency of specified words in a given text.</p>
            </div>
          </div>
        </section>
        <section className={styles.resSec}>
          <h2><Link href="/resume">Resume</Link></h2>
        </section>
        <section className={styles.contactSec}>
          <h2>Contact Me</h2>
          <form>
            <label htmlFor="name">Name: <input type="text" /></label>
            <label htmlFor="email">Email: <input type="email" /></label>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <input type="submit" value="send" />
          </form>
        </section>
        <Footer />
      </div>
    </main>
  )
}
