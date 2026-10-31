import { useState } from 'react'
import { profile } from '../../data/profile'

const initial = { name: '', email: '', message: '' }

function validate({ name, email, message }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Please enter your name.'
  if (!email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email address.'
  if (message.trim().length < 10) errors.message = 'Message should be at least 10 characters.'
  return errors
}

/**
 * There is no submission backend. Once profile.email is set, a valid submission opens the
 * visitor's email app with the message pre-filled. Until then it says plainly that nothing was sent.
 */
export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'mailto' | 'unconfigured'

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      setStatus(null)
      return
    }
    if (profile.email) {
      const subject = encodeURIComponent(`Portfolio message from ${values.name}`)
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('mailto')
    } else {
      setStatus('unconfigured')
    }
  }

  const field =
    'w-full border bg-ink px-4 py-3 text-base text-paper placeholder:text-mute/60 transition-colors focus:border-accent focus:outline-none'

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {[
        { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
        { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
      ].map(({ name, label, type, autoComplete }) => (
        <div key={name}>
          <label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-mute">
            {label}
          </label>
          <input
            id={name}
            name={name}
            type={type}
            autoComplete={autoComplete}
            value={values[name]}
            onChange={onChange}
            aria-invalid={Boolean(errors[name])}
            aria-describedby={errors[name] ? `${name}-error` : undefined}
            className={`${field} ${errors[name] ? 'border-red-400' : 'border-line'}`}
          />
          {errors[name] && (
            <p id={`${name}-error`} className="mt-2 text-sm text-red-400">
              {errors[name]}
            </p>
          )}
        </div>
      ))}

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-mute">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${field} resize-y ${errors.message ? 'border-red-400' : 'border-line'}`}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center bg-accent px-8 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-paper"
      >
        Send message
      </button>

      <div role="status" aria-live="polite">
        {status === 'mailto' && (
          <p className="border border-line p-4 text-sm text-mute">
            Your email app should now open with the message pre-filled. It is <strong className="text-paper">not sent</strong> until you send it from there.
          </p>
        )}
        {status === 'unconfigured' && (
          <p className="border border-dashed border-line p-4 text-sm text-mute">
            <strong className="text-paper">Your message was not sent.</strong> This form is not connected to an email address or
            submission service yet. Please reach out via GitHub in the meantime.
          </p>
        )}
      </div>
    </form>
  )
}
