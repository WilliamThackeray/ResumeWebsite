'use client'

// import NodeMailer from 'nodemailer'
import { setupMailer } from '../api/mailer'

// async function getTransporter() {
//   const tp = getMailer(process.env.SMTP_SERVER, process.env.SMTP_PORT, process.env.SMTP_LOGIN, process.env.SMTP_PASSWORD)
//   return tp
// }

export default async function ContactForm({ props }) {


  async function sendMail() {
    // get form values
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let msg = document.querySelector('#message')

    // put form values into a message object
    let message = {
      subject: `Resume Website: ${name}`,
      to: 'will_thack@comcast.net',
      from: email,
      text: msg
    }
    console.log(chalk.yellow('Message Object: ', message))

    await mailer.sendMail(message)

  }

  return (
    <form>
      <label htmlFor="name">Name: <input type="text" name='name' id='name' /></label>
      <label htmlFor="email">Email: <input type="email" name='email' id='email' /></label>
      <div>
        <label htmlFor="message">Message:
          <textarea name="message" id="message" cols="30" rows="10"></textarea></label>
      </div>
      <input type="button" id='sendMailBtn' value="Send Email" onClick={sendMail} />
    </form>
  )
}