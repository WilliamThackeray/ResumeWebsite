'use server'

import chalk from "chalk";
import NodeMailer from 'nodemailer'

// export default class Mailer {
//   constructor(server, port, login, pword) {
//     this.server = server
//     this.port = port
//     this.login = login
//     this.pword = pword

//     // initialize transporter
//     this.smtpTransport = NodeMailer.createTransport({
//       host: this.server,
//       secureConnection: true,
//       port: this.port,
//       secure: false,
//       auth: {
//         user: this.login,
//         pass: this.pword
//       },
//     })
//     // confirm transport connection
//     this.smtpTransport.verify(function (error, success) {
//       if (error) {
//         console.log(chalk.red.bgGrey(error));
//       } else {
//         console.log("Server is ready to take our messages");
//       }
//     });
//   }


//   async sendMail(msg) {
//     // send message object
//     try {
//       smtpTransport.sendMail(message, (err, success) => {
//         if (err) {
//           console.log(chalk.red(err))
//         } else {
//           console.log(chalk.green.bold('Email sent successfully.'))
//         }
//       })
//     } catch(err) {
//       console.log(chalk.red(err))
//     }
//   }
// }

export async function setupMailer(req, res) {
  // initialize transporter
  smtpTransport = NodeMailer.createTransport({
    host: req.host,
    secureConnection: true,
    port: req.port,
    secure: false,
    auth: {
      user: req.user,
      pass: req.pass
    }
  })
  // confirm transport connection
  smtpTransport.verify(async function (error, success) {
    if (error) {
      console.log(chalk.red.bgGrey(error));
    } else {
      console.log("Server is ready to take our messages");
    }
  })
  return smtpTransport
}

// // call this function to initialize the class in another file
// export default async function getMailer(server, port, login, pword) {
//   return new Mailer(server, port, login, pword)
// }