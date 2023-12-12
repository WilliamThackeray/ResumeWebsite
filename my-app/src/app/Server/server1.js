// This file will do all the database calls from here.
import 'dotenv/config'

import chalk from 'chalk'

// DATABASE SETUP

import { createClient } from "@libsql/client/web";

console.log(chalk.yellow('URL: ', process.env.TURSO_URL))

const client = createClient({
  url: `libsql://resume-williamthackeray.turso.io`,
  authToken: `eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTEyLTA4VDE5OjUxOjE3LjU1MDI4Mzg2WiIsImlkIjoiYmE0ZjY4NWItOTYwMC0xMWVlLTlmNDctMWFmN2QwZmE4ZTBiIn0.aSO1kPHz9SFPnOYgo_17CfF2LrMV8jF2vuqMPon3LFOlfLYMxwGhX-lwqx5S3HuJLxCWNuborVJNasG8_A-aCg`
})
console.log(chalk.red(JSON.stringify(client)))



// DATABASE CRUD
// projects need: id, name, description, img_name, url
// createTable()
async function createTable() {
  try {
    const res = await client.execute('create table if not exists projects (pid integer primary key autoincrement, name text, description text, img_name text, url text)')
    console.log(chalk.yellow(`Table Created Successfully`))
  } catch (err) {
    console.log(chalk.red(err))
  }
}

const projects = [
  // {
  //   name: `Word Frequency Counter`,
  //   img_name: `svg1`,
  //   description: `The word Frequency Counter I made is useful for tracking the amount of times you use chosen words within a set of text. You can type what words you want to track and and then scan a bit of text to check their frequency.`,
  //   url: `https://transcendent-liger-926971.netlify.app/`
  // },
  // {
  //   name: `Mock Biñho League`,
  //   img_name: `binho.png`,
  //   description: `Biñho is a finger soccer tabletop game. I made this site for a project during the Fall sememster of 2022. The site implements what would be a league for Biñho and has the ability to add future teams and data for those teams. `,
  //   url: `https://genuine-croquembouche-add040.netlify.app/`
  // },
  // {
  //   name: `Sorianos Sweets`,
  //   img_name: `sorianos_sweets.jpeg`,
  //   description: `Soriano's Sweets is a website advertising the cookies that a coworker sells. It's a simple single page site but one she can use to share with others in which they can reach out to her and order cookies.`,
  //   url: `https://exquisite-gingersnap-05c180.netlify.app/#about`
  // }
]

// addProject(projects)
async function addProject(projects) {
  try {
    for (let project of projects) {
      try {
        const res = await client.execute(`insert into projects (name, img_name, description, url) values('${project.name}', '${project.img_name}', "${project.description}", '${project.url}')`)
        console.log(chalk.yellow('Project Added Successfully'))
      } catch(err) {
        console.log(chalk.red(err))
      }
    }

  } catch(err) {
    console.log(chalk.red(err))
  }
}

console.log(chalk.yellow(JSON.stringify(await getProjects())))
export async function getProjects() {
  const res = await client.execute('select * from projects')
  return res.rows
}

// LOGIN 
// import Bun from 'bun'
const salt = 10

async function addUser(user) { // will only be used to add the admin login user
  // user should be an object containing the username and password to add to the DB
  let hashedPassword
  
  try {
    hashedPassword = await Bun.password.hash(user.password, {algorithm: 'bcrypt', cost: salt})

    const res = await client.execute(`insert into users values (000, '${user.username}', '${hashedPassword}')`)
  } catch (err) {
    console.log(chalk.red(err))
  }
}

export default async function checkLogin(user) {
  // user should be an object containing the attempted login information
  let isMatch

  try {
    const res = await client.execute(`select * from users where username = '${user.username}'`)

    let hash = res.rows[0][2]

    isMatch = await Bun.password.verify(user.password, hash)
  } catch(err) {
    console.log(chalk.red(err))
  }
  return isMatch
}