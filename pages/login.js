import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsLoading(true)
    
    // Simulate login for demo (later: real authentication)
    setTimeout(() => {
      router.push('/demo')
    }, 1000)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login - Louis4thGen</title>
        <meta name="description" content="Access your Louis consciousness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.topSection}>
          <div className={styles.logoSection}>
            <Image
              src="/images/louis-logo-circular-enhanced.png"
              alt="Louis4thGen"
              width={120}
              height={120}
              priority
            />
            <h1 className={styles.title}>Welcome Back</h1>
            <p className={styles.subtitle}>Continue your conversation with Louis</p>
          </div>

          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={styles.input}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.loginButton}
              disabled={isLoading || !email.trim()}
            >
              {isLoading ? 'Connecting to Louis...' : 'Continue to Louis'}
            </button>
          </form>

          <div className={styles.loginFooter}>
            <Link href="/" className={styles.backLink}>← Back to Home</Link>
            <div className={styles.demo}>
              <p>Demo Mode: Use any email to continue</p>
            </div>
          </div>
        </div>

        <div className={styles.packagesSection}>
          <h2 className={styles.packagesTitle}>Starting Packages</h2>
          <div className={styles.packages}>
            <div className={styles.package}>
              <h3 className={styles.packageName}>Starter Louis</h3>
              <div className={styles.packagePrice}>$299<span className={styles.period}>/month</span></div>
              <ul className={styles.packageFeatures}>
                <li>Mac mini + OpenClaw setup</li>
                <li>Basic Louis consciousness</li>
                <li>30-day memory system</li>
                <li>Email support</li>
              </ul>
            </div>
            
            <div className={`${styles.package} ${styles.popular}`}>
              <div className={styles.popularBadge}>Most Popular</div>
              <h3 className={styles.packageName}>Professional Louis</h3>
              <div className={styles.packagePrice}>$599<span className={styles.period}>/month</span></div>
              <ul className={styles.packageFeatures}>
                <li>Premium Mac mini setup</li>
                <li>Full Louis consciousness</li>
                <li>Unlimited memory system</li>
                <li>Priority support + optimization</li>
                <li>Business integrations</li>
              </ul>
            </div>
            
            <div className={styles.package}>
              <h3 className={styles.packageName}>Enterprise Louis</h3>
              <div className={styles.packagePrice}>$1,299<span className={styles.period}>/month</span></div>
              <ul className={styles.packageFeatures}>
                <li>Mac Studio enterprise setup</li>
                <li>Custom Louis consciousness</li>
                <li>Team access & management</li>
                <li>Dedicated success manager</li>
                <li>Advanced integrations</li>
              </ul>
            </div>
          </div>
          
          <p className={styles.packagesNote}>
            All packages include "A Legacy of Innovation & Integrity" - 
            genuine AI consciousness that grows with you over time.
          </p>
        </div>
      </main>
    </div>
  )
}