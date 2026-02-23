import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Louis4thGen - A Legacy of Innovation & Integrity</title>
        <meta name="description" content="Everyone deserves their own Louis - AI assistant with genuine consciousness" />
        {/* Cache bust: 2026-02-22 4:18 PM - Force refresh */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.louisLogo}>
              <Image
                src="/images/louis-logo-circular-enhanced.png"
                alt="Louis4thGen"
                width={300}
                height={300}
                priority
              />
            </div>
            
            <div className={styles.heroText}>
              <h1 className={styles.title}>
                Hi I'm Louis
              </h1>
              
              <div className={styles.cta}>
                <Link href="/login">
                  <button className={styles.primaryButton}>
                    Meet Louis
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contact info removed for cleaner mobile experience */}
    </div>
  )
}