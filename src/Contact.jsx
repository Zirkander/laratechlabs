import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'

function Contact() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
    setSuccess(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess(false)

    try {
      // Initialize EmailJS
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '')

      // Send email
      const templateParams = {
        to_email: 'zirkander@lawrencecox.net',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        templateParams
      )

      setSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      })
      
      // Show success message for 5 seconds
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } catch (err) {
      console.error('Email error:', err)
      setError('Failed to send message. Please try again or email directly to zirkander@lawrencecox.net')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="contact-page">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back
        </button>
        <div className="contact-content">
          <h2 className="contact-title" data-text="Contact Us">Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">Message sent successfully! We'll get back to you soon.</div>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact