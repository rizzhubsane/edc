import { useState } from 'react'

const STORAGE_KEY = 'edc-newsletter-email'

export function NewsletterSubscribe({ className = '' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(() => {
    try {
      return window.localStorage.getItem(STORAGE_KEY) ? 'done' : 'idle'
    } catch {
      return 'idle'
    }
  })

  function onSubmit(event) {
    event.preventDefault()
    const value = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus('error')
      return
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* ignore quota / private mode */
    }
    setStatus('done')
  }

  return (
    <aside className={`card-surface card-surface--still w-full max-w-[26rem] shrink-0 p-6 md:p-7 ${className}`}>
      <p className="font-heading text-[20px] font-semibold tracking-[-0.03em] text-ink">
        Subscribe to the newsletter
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">
        Get eDC updates: events, programmes, and stories from IIT Delhi&apos;s entrepreneurship ecosystem.
      </p>

      {status === 'done' ? (
        <p className="mt-6 text-[15px] leading-relaxed text-ink" role="status">
          You&apos;re on the list. We&apos;ll write when there&apos;s something worth sharing.
        </p>
      ) : (
        <form className="mt-6" onSubmit={onSubmit} noValidate>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <input
              id="newsletter-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                if (status === 'error') setStatus('idle')
              }}
              aria-invalid={status === 'error'}
              aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
              className="field min-w-0 flex-1"
            />
            <button type="submit" className="pill pill-fill w-full shrink-0 sm:w-auto">
              Subscribe
            </button>
          </div>
          {status === 'error' ? (
            <p id="newsletter-error" className="mt-2 text-[13px] text-brand-bright" role="alert">
              Enter a valid email address.
            </p>
          ) : null}
        </form>
      )}
    </aside>
  )
}

export default NewsletterSubscribe
