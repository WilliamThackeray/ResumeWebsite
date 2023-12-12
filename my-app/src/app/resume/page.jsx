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
      <div className={styles.resumeBody}>
        <div className={styles.leftSection}>
          <div>
            <h1>William Thackeray</h1>
            <p>Phone: </p>
            <p>Email: </p>
          </div>
          <div>
            <h2>Work Experience</h2>
            <ul>
              <li>
                <h3>SpudToddos</h3>
                <h4>West Jordan, UT — Restaurant/Website Manager</h4>
                <h4><i>June 2016 - PRESENT</i></h4>
                <p>I currently manage employees and oversee opening and closing the restaurant, managing food, money, and time. I manage, update, and change the restaurant website to stay updated and enticing.</p>
              </li>
              <li>
                <h3>Murray City</h3>
                <h4>Murray, UT — Lifeguard</h4>
                <h4><i>February 2015 - August 2016</i></h4>
                <p>I observed and attended to the needs of patrons attending the pool. I also made sure the facilities were clean, safe, and up to code.</p>
              </li>
              <li>
                <h3>Project Match</h3>
                <h4>UVU — Programmer</h4>
                <h4><i>February 2021 - May 2021</i></h4>
                <p>This was an internship style program where I accomplished tasks assigned to me through Kanban and often tackled the issues with extreme programming with my partner.</p>
              </li>
            </ul>
          </div>
          <div>
            <h2>Education</h2>
            <ul>
              <li>
                <h3>Utah Valley University</h3>
                <h4>Orem, UT — Associates of Science</h4>
                <h4><i>January 2020 - December 2021</i></h4>
                <p>Applicable Classes:  Object-Oriented Programming, Discrete Math 1 & 2, Algorithms & Data Structures</p>
              </li>
              <li>
                <h3>Utah Valley University</h3>
                <h4>Orem, UT — CS Bachelor: Full Stack</h4>
                <h4><i>January 2020 - Spring 2024 (In Progress)</i></h4>
                <p>Applicable Classes: Web Development 1-3, Software Engineering, JavaScript Development, C#NET, Mobile Device Programming, NoSQL</p>
              </li>
            </ul>
          </div>
          <div>
            <h2>Skills</h2>
            <ul>
              <li>
                Confident using Github as a distribution software.
              </li>
              <li>
                Comfortable with agile software development methodology of Scrum Programming.
              </li>
              <li>
                Experience outlining projects from beginning to end using current industry practices.
              </li>
              <li>
                Comfortable with extreme programming and working with a team.
              </li>
              <li>
                Confident learning new technologies, databases, and frameworks for web.
              </li>
            </ul>
          </div>
          <div>
            <h2>Awards and Certificates</h2>
            <ul>
              <li>
                <h3>Talent Development Award </h3>
                <p>A scholarship awarded to me from UVU from past performance in classes.</p>
              </li>
              <li>
                <h3>UVU Programmer</h3>
                <p>A certificate of completion awarded to me from UVU.</p>
              </li>
            </ul>
          </div>
          <div className={styles.langFrameDB}>
            <div>
              <h2>Languages</h2>
              <ul>
                <li>Python, JavaScript, NodeJS, C#, HTML, CSS, JQuery, JQueryLite, TypeScript, Bun, SQL</li>
              </ul>
            </div>
            <div>
              <h2>Frameworks</h2>
              <ul>
                <li>React, NextJS</li>
              </ul>
            </div>
            <div>
              <h2>Databases</h2>
              <ul>
                <li>MongoDB, Cassandra, Redis, NEO4J, Turso</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main >
  )
}
