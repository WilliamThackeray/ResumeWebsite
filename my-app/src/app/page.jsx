    // 'use server'
    'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './page.module.css'
import Header from './Components/header'
import Footer from './Components/footer'
import Project from './Components/project'
import ContactForm from './Components/contactForm'
import { getApi } from './api/api'
import chalk from 'chalk'

// async function getProjects() {
//   const model = getApi(process.env.TURSO_URL, process.env.TURSO_AUTH)
//   let projs = await model.list('projects')
//   return projs
// }

export default async function Page() {
  // const projects = await getProjects()
  // const projects = projs
  // var smtpTransport = NodeMailer.createTransport({
  //   host: process.env.SMTP_SERVER,
  //   secureConnection: true,
  //   port: process.env.SMTP_PORT,
  //   secure: false,
  //   auth: {
  //     user: process.env.SMTP_LOGIN,
  //     pass: process.env.SMTP_PASSWORD
  //   },
    // tls:{
    //     secureProtocol: "TLSv1_method"
    // }
  // });
  // verify connection configuration
  // smtpTransport.verify(function (error, success) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Server is ready to take our messages");
  //   }
  // });

  // async function sendMail() {
  //   // get form values
  //   let name = document.querySelector('#name')
  //   let email = document.querySelector('#email')
  //   let msg = document.querySelector('#message')

  //   // put form values into a message object
  //   let message = {
  //     subject: `Resume Website: ${name}`,
  //     to: 'will_thack@comcast.net',
  //     from: email,
  //     text: msg
  //   }
  //   console.log(chalk.yellow('Message Object: ', message))

  //   // send message object
  //   smtpTransport.sendMail(message, (err, success) => {
  //     if (err) {
  //       console.log(chalk.red(err))
  //     } else {
  //       console.log(chalk.green.bold('Email sent successfully.'))
  //     }
  //   })

  // }
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
        {/* <section className={styles.projSec}>
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
        </section> */}
        <section className={styles.resSec}>
          <h2><Link href="/resume">Resume</Link></h2>
        </section>
        <section className={styles.contactSec}>
          <h2>Connect with me!</h2>
          <ContactForm  />
        </section>
        <Footer />
      </div>
    </main>
  )
}
