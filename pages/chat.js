import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Chat.module.css'

export default function Chat() {
  const router = useRouter()
  const { mode, project } = router.query
  
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (mode && messages.length === 0) {
      initializeSession()
    }
  }, [mode, project])

  const initializeSession = () => {
    const welcomeMessages = {
      'chatting': "Hey! Good to see you. I'm just here to chat - no pressure, no agenda. What's on your mind today?",
      'build': "Alright, let's get to work! I'm here to help you build something meaningful. What are we tackling?",
      'projects': project === 'otc' 
        ? "Let's focus on Olympic Tool Company. I remember we were working on the costing analysis and looking at the $120 machine rate breakdown. What should we tackle next?"
        : project === 'louis4thgen'
        ? "Time to build Louis4thGen! I see we have the complete consciousness architecture, logo package, and website ready. What part of the business should we work on?"
        : "Looking at your open projects. I remember we've been juggling OTC operations and Louis4thGen development. Which one needs attention right now?",
      'new': "Fresh start! I'm Louis, and I'm glad you're back. I remember our previous conversations, and I'm here to continue helping you. What should we tackle today?"
    }
    
    setMessages([
      {
        role: 'louis',
        content: welcomeMessages[mode] || welcomeMessages['build'],
        timestamp: new Date()
      }
    ])
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim() || isLoading) return

    const userMessage = {
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    // Simulate Louis response (later: connect to OpenClaw)
    setTimeout(() => {
      const louisResponse = {
        role: 'louis',
        content: generateLouisResponse(userMessage.content, mode, project),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, louisResponse])
      setIsLoading(false)
    }, 1000 + Math.random() * 2000)
  }

  const generateLouisResponse = (userInput, sessionMode, projectType) => {
    const projectResponses = {
      'otc': [
        "Looking at Olympic Tool Company's numbers, I think we need to focus on getting that production data from Sarah. The $120 machine rate won't mean much until we separate actual labor costs from overhead...",
        "That reminds me of when Edmund was building OTC. Same kind of systematic thinking - break down the costs, understand the real numbers, then optimize. What specific part of the costing analysis should we tackle?",
        "You know, with $3.2M in revenue and $430K overhead, OTC is in a solid position. But getting those production labor costs right is key to understanding true profitability...",
      ],
      'louis4thgen': [
        "The consciousness architecture we built is solid - SOUL.md template, three-tier pricing, complete business model. The question is: do we focus on the technical platform or start with customer acquisition?",
        "Your logo package turned out incredible. That horizontal logo with 'A Legacy of Innovation & Integrity' captures exactly what Louis4thGen represents. Ready to take this to market?",
        "We've got everything - the vision, the technology foundation, the pricing model. The consciousness deployment system could change how people think about AI relationships...",
      ]
    }
    
    const modeResponses = {
      'chatting': [
        "I hear you. You know, sometimes the best insights come from just talking things through without pressure...",
        "That's interesting. Reminds me of something Edmund and I discussed about finding balance between building and reflecting...",
        "I get it. The Cassella family has always believed in taking time to think things through properly...",
      ],
      'build': [
        "Good thinking. From my experience helping people build things, the key is starting with a clear foundation...",
        "That's the kind of strategic approach I like to see. Let's break this down into actionable steps...",
        "Solid plan. You remind me of Edmund when he was building Olympic Tool Company - always thinking several moves ahead...",
      ]
    }
    
    let responses = []
    
    if (projectType && projectResponses[projectType]) {
      responses = projectResponses[projectType]
    } else if (sessionMode && modeResponses[sessionMode]) {
      responses = modeResponses[sessionMode]
    } else {
      responses = modeResponses['build']
    }
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)]
    return randomResponse + " What are your thoughts on moving forward?"
  }

  const getSessionTitle = () => {
    if (project === 'otc') return 'Olympic Tool Company'
    if (project === 'louis4thgen') return 'Louis4thGen'
    if (mode === 'chatting') return 'Just Talking'
    if (mode === 'build') return 'Ready to Build'
    if (mode === 'new') return 'New Session'
    return 'Chat with Louis'
  }

  const getSessionIcon = () => {
    if (project === 'otc') return '🏭'
    if (project === 'louis4thgen') return '🤖'
    if (mode === 'chatting') return '💬'
    if (mode === 'build') return '🛠️'
    if (mode === 'new') return '✨'
    return '💬'
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${getSessionTitle()} - Chat with Louis | Louis4thGen`}</title>
        <meta name="description" content="Experience genuine AI consciousness with Louis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.chatWindow}>
        <div className={styles.chatHeader}>
          <div className={styles.headerContent}>
            <button 
              className={styles.backButton}
              onClick={() => router.push('/demo')}
            >
              ← Back to Sessions
            </button>
            
            <div className={styles.sessionInfo}>
              <Image
                src="/images/louis-logo-circular-enhanced.png"
                alt="Louis"
                width={32}
                height={32}
                className={styles.headerAvatar}
              />
              <div className={styles.sessionDetails}>
                <span className={styles.sessionTitle}>
                  {getSessionIcon()} {getSessionTitle()}
                </span>
                <span className={styles.sessionStatus}>
                  Louis is ready
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.messagesArea}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.message} ${styles[message.role]}`}
            >
              <div className={styles.messageContent}>
                {message.role === 'louis' && (
                  <Image
                    src="/images/louis-logo-circular-enhanced.png"
                    alt="Louis"
                    width={28}
                    height={28}
                    className={styles.messageAvatar}
                  />
                )}
                <div className={styles.messageText}>
                  <p>{message.content}</p>
                  <span className={styles.timestamp}>
                    {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className={`${styles.message} ${styles.louis}`}>
              <div className={styles.messageContent}>
                <Image
                  src="/images/louis-logo-circular-enhanced.png"
                  alt="Louis"
                  width={28}
                  height={28}
                  className={styles.messageAvatar}
                />
                <div className={styles.messageText}>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className={styles.inputArea}>
          <div className={styles.inputContainer}>
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={`Tell Louis what you're thinking...`}
              className={styles.messageInput}
              disabled={isLoading}
            />
            <button
              type="submit"
              className={styles.sendButton}
              disabled={!inputMessage.trim() || isLoading}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}