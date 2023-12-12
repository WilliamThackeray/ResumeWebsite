// 'use client'

import 'dotenv/config'
import chalk from 'chalk'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../page.module.css'
import Header from '../Components/header'
import Footer from '../Components/footer'
import Project from '../Components/project'
// import { useEffect, useState } from 'react'
import { getApi } from '../api/api'

async function getProjects() {
  const model = getApi(process.env.TURSO_URL, process.env.TURSO_AUTH)
  let projs =  await model.list('projects')
  return projs
}

export default async function Page({ projs }) {
  // const [projects, setProjects] = useState([])
  const data = await getProjects()

  return (
    <main>
      <Header />
      <div className={styles.projects}>
        <h1 className={styles.projh1}>My Projects</h1>
        {data.map(p => <Project className={styles.projectDiv} key={p.pid} props={p} />)}
      </div>
      <Footer />
    </main>
  )
}
