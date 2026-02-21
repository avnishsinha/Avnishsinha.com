'use client'

import { useState } from 'react'

interface EmailLinkProps {
  className?: string
  copiedClassName?: string
  normalText?: string
  copiedText?: string
  normalIcon?: string
  copiedIcon?: string
  showIcon?: boolean
}

export default function EmailLink({ 
  className = '', 
  copiedClassName,
  normalText = 'Email Me',
  copiedText = 'Email Copied!',
  normalIcon = 'mail',
  copiedIcon = 'check_circle',
  showIcon = true
}: EmailLinkProps) {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText('avnishkumarsinha69@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2500)
    } catch (err) {
      // Fallback: open mailto link
      window.location.href = 'mailto:avnishkumarsinha69@gmail.com'
    }
  }

  const finalClassName = emailCopied && copiedClassName ? copiedClassName : className

  return (
    <a
      href="mailto:avnishkumarsinha69@gmail.com"
      onClick={handleEmailClick}
      className={finalClassName}
      title={emailCopied ? 'Email copied to clipboard!' : 'Click to copy email'}
    >
      {showIcon && (
        <span className="material-symbols-outlined">
          {emailCopied ? copiedIcon : normalIcon}
        </span>
      )}
      {emailCopied ? copiedText : normalText}
    </a>
  )
}
