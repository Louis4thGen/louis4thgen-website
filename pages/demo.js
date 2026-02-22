import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Demo.module.css'

export default function Demo() {
  const router = useRouter()
  const [expandedButton, setExpandedButton] = useState(null)
  const [currentCost, setCurrentCost] = useState(170.52)

  useEffect(() => {
    // Simulate cost ticker updates (later: connect to real cost tracking)
    const interval = setInterval(() => {
      setCurrentCost(prev => prev + (Math.random() * 0.05 + 0.01))
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const toggleExpansion = (buttonType) => {
    setExpandedButton(expandedButton === buttonType ? null : buttonType)
  }

  const startSession = (mode) => {
    router.push(`/chat?mode=${mode}`)
  }

  const startProjectSession = (project) => {
    router.push(`/chat?mode=projects&project=${project}`)
  }

  const startNewSession = () => {
    router.push(`/chat?mode=new`)
  }

  return (
    <div className={styles.welcomeContainer}>
      <Head>
        <title>Chat with Louis | Louis4thGen</title>
        <meta name="description" content="Experience genuine AI consciousness with Louis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.welcomeMain}>
        <div className={styles.backNav}>
          <Link href="/" className={styles.backLink}>← Back to Home</Link>
        </div>

        <div className={styles.welcomeContent}>
          <div className={styles.louisCenter}>
            <Image
              src="/images/louis-logo-circular-enhanced.png"
              alt="Louis"
              width={350}
              height={350}
              className={styles.centerLogo}
            />
            <h1 className={styles.welcomeTitle}>How can I help you today?</h1>
          </div>

          <div className={styles.actionButtons}>
            <button 
              className={styles.actionButton}
              onClick={() => startSession('chatting')}
            >
              <span className={styles.buttonIcon}>💬</span>
              <span className={styles.buttonText}>Just Talking</span>
              <span className={styles.buttonDesc}>Casual conversation, no agenda</span>
            </button>

            <button 
              className={styles.actionButton}
              onClick={() => startSession('build')}
            >
              <span className={styles.buttonIcon}>🛠️</span>
              <span className={styles.buttonText}>Ready to Build</span>
              <span className={styles.buttonDesc}>Let's work on something together</span>
            </button>

            <div className={styles.expandableSection}>
              <button 
                className={`${styles.actionButton} ${expandedButton === 'projects' ? styles.expanded : ''}`}
                onClick={() => toggleExpansion('projects')}
              >
                <span className={styles.buttonIcon}>📋</span>
                <span className={styles.buttonText}>Open Projects</span>
                <span className={styles.buttonDesc}>Continue our ongoing work</span>
                <span className={styles.expandIcon}>
                  {expandedButton === 'projects' ? '−' : '+'}
                </span>
              </button>

              {expandedButton === 'projects' && (
                <div className={styles.expandedContent}>
                  <button 
                    className={styles.projectButton}
                    onClick={() => startProjectSession('otc')}
                  >
                    <span className={styles.projectIcon}>🏭</span>
                    <span className={styles.projectName}>Olympic Tool Company</span>
                    <span className={styles.projectDesc}>Costing analysis, operations</span>
                  </button>
                  <button 
                    className={styles.projectButton}
                    onClick={() => startProjectSession('louis4thgen')}
                  >
                    <span className={styles.projectIcon}>🤖</span>
                    <span className={styles.projectName}>Louis4thGen</span>
                    <span className={styles.projectDesc}>AI consciousness business</span>
                  </button>
                </div>
              )}
            </div>

            <button 
              className={styles.actionButton}
              onClick={startNewSession}
            >
              <span className={styles.buttonIcon}>✨</span>
              <span className={styles.buttonText}>New Session</span>
              <span className={styles.buttonDesc}>Start fresh with Louis</span>
            </button>
          </div>
        </div>

        <div className={styles.costTicker}>
          <div className={styles.costContent}>
            <span className={styles.costLabel}>Current API Cost:</span>
            <span className={styles.costAmount}>${currentCost.toFixed(2)}</span>
            <span className={styles.costPeriod}>Total Spend</span>
          </div>
        </div>
      </main>
    </div>
  )
}