// Authentication system for Louis4thGen website

const AUTHORIZED_USERS = [
  'Louis.4th.gen@gmail.com',
  'ecassella@olympic-tool.com', 
  'edmund@louis4thgen.com',
  'louis@louis4thgen.com'
]

export function isAuthorized(email) {
  if (!email) return false
  
  // Convert to lowercase for comparison
  const normalizedEmail = email.toLowerCase().trim()
  
  return AUTHORIZED_USERS.some(authorizedEmail => 
    authorizedEmail.toLowerCase() === normalizedEmail
  )
}

export function getAuthError(email) {
  if (!email) return 'Email address is required'
  if (!isAuthorized(email)) return 'Access restricted. Please contact edmund@louis4thgen.com for access.'
  return null
}

// Demo mode check
export function isDemoMode() {
  return process.env.NODE_ENV === 'development'
}