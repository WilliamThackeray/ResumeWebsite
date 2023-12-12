import styles from './page.module.css'
import images404 from './Data/images404.js'
import Image from 'next/image'
import Header from './Components/header'
import Footer from './Components/footer'
import Link from 'next/link'

export default function NotFound() {
  const image404 = pickImage()
  
  function pickImage() {
    return images404[Math.trunc(Math.random() * images404.length)]
  }

  return (
    <main>
      <Header />
      <div className={styles.notFound}>
        <h1>Error 404</h1>
        <Image src={image404.path} width={350} height={350} alt='404 message' />
        <h2>{image404.heading}</h2>
        <p>
          {image404.desc}
        </p>
        <Link href='/'>Back to Home</Link>
      </div>
      <Footer />
    </main>
  )
}