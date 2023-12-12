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
import { getApi } from '../Server/api'

// export async function getStaticProps() {
//   const res = await getApi(process.env.TURSO_URL, process.env.TURSO_AUTH).list('')
//   const projs = await res.json()
//   return { props: { projs } }
// }

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
        <h1>My Projects</h1>
        {data.map(p => <Project className={styles.projectDiv} props={p} />)}
      </div>
      <Footer />
    </main>
  )
}
