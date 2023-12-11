'use client'

import chalk from 'chalk'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../page.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import checkLogin from '@/server/server'
import { useState } from 'react'

export default function Page() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function attemptLogin() {
    console.log(chalk.green('attemptLogin()'))
    console.log(chalk.green('username: ', username))
    checkLogin({username, password})
  }

  return (
    <div className={styles.login}>
      <h1>Welcome to the Admin Login Page</h1>
      <h2>If you aren't an admin, turn back now.</h2>
      <form>
        <label for='username'>Username: <input id='username' name='username' type='text' onChange={setUsername(document.querySelector('#username').value)}></input></label>
        <label for='password'>Password: <input id='password' name='password' type='password' onChange={setPassword(document.querySelector('#password').value)}></input></label>
        <button type='submit' onClick={checkLogin}>Admin Login</button>
      </form>
    </div>
  )
}