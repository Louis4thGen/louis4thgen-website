// Authentication system for Louis4thGen website

const AUTHORIZED_CREDENTIALS = {
  'edmund': 'Louis4thGen2026!',
  'demo': 'preview',
  'guest': 'Louis4thGen'
}

export function isAuthorized(username, password) {
  if (!username || !password) return false
  
  // Convert username to lowercase for comparison
  const normalizedUsername = username.toLowerCase().trim()
  
  return AUTHORIZED_CREDENTIALS[normalizedUsername] === password
}

export function getAuthError(username, password) {
  if (!username) return 'Username is required'
  if (!password) return 'Password is required'
  if (!isAuthorized(username, password)) {
    return 'Invalid credentials. Please contact edmund@louis4thgen.com for access.'
  }
  return null
}

// Get user display name
export function getUserDisplayName(username) {
  const normalizedUsername = username.toLowerCase().trim()
  
  const displayNames = {
    'edmund': 'Edmund',
    'demo': 'Demo User', 
    'guest': 'Guest User'
  }
  
  return displayNames[normalizedUsername] || username
}

// Demo mode check
export function isDemoMode() {
  return process.env.NODE_ENV === 'development'
}