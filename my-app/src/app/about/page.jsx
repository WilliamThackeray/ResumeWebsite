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
      <div className={styles.aboutPage}>
        <h1>About</h1>
        <section className={styles.aboutSections}>
          <Image src={'/images/familyPicture.JPG'} width={400} height={266.75} alt='William with his family'></Image>
          <div>
            <h3>My Family</h3>
            <p>We are a lovely little family of three. I have known my wife Audrie for over 10 years. We grew up near each other and spent most of that time as just friends. Skipping a lot of the in between, we eventually started dating, fell in love, and got married. We got married in 2020 so it was a different wedding than either of us had imagined we would have, but it was special and we wouldn't go back to change it. We recently had our little baby, Ruth. She is so precious and we have enjoyed being first time parents.</p>
          </div>
        </section>
        <section className={styles.aboutSections}>
          <div>
            <h3>Me</h3>
            <p>I have a lot of passions in my life. I love to play video games. I love to play Dungeons and Dragons. I love to think of new ideas. I love logic and puzzles. I love to play board games. And I love to code. There are so many things I love to do in this world and coding is one that I always come back to. There is a very fun thing about being able to think up ideas and ways to make things easier if you could just create a program or something else to do it for you. Coding is one of the things I really enjoy doing as a lot of the time it feels like one big logic puzzle to me. I aslo very much enjoy working with others and being on a team. Many of my favorite hobbies require teamwork. In high school, I was on a water polo team and we were quite successful. I enjoyed being able to work with and rely on others to accomplish a goal. Another one of my passions is rock climbing. This requires at least two people and it creates a special bond of trust. </p>
          </div>
          <Image src={'/images/williamThackerayProfilePic.JPG'} width={350} height={350} alt='Headshot of William'></Image>
        </section>
      </div>
      <Footer />
    </main>
  )
}
