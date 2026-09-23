import { useState } from 'react'
import { Link } from 'react-router-dom'
import { submitAdoption } from '../api'

export default function AdoptionForm({ animal }) {
  const [form, setForm] = useState({
    adopterName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setStatus({ type: '', message: '' })
    try {
      await submitAdoption({ ...form, animalId: animal.id })
      setStatus({
        type: 'success',
        message: `Request saved in the database for ${animal.name}. Our team will contact you within 24 hours.`,
      })
      setForm({ adopterName: '', email: '', phone: '', address: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="adoption-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h3>Adopt {animal.name}</h3>
        <p className="form-subtitle">
          Your details are sent securely to our Java backend and stored in the database.
        </p>
      </div>

      {status.message && (
        <div className={`alert alert-${status.type}`}>
          {status.message}
          {status.type === 'success' && (
            <Link to="/admin" className="alert-link">View in Admin Dashboard →</Link>
          )}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="adopterName">Full Name *</label>
        <input id="adopterName" name="adopterName" value={form.adopterName}
          onChange={handleChange} required placeholder="Your full name" />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" value={form.email}
            onChange={handleChange} required placeholder="you@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" type="tel" value={form.phone}
            onChange={handleChange} required placeholder="+91 98765 43210" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="address">Address *</label>
        <input id="address" name="address" value={form.address}
          onChange={handleChange} required placeholder="Your full address" />
      </div>

      <div className="form-group">
        <label htmlFor="message">Why do you want to adopt {animal.name}?</label>
        <textarea id="message" name="message" rows="4" value={form.message}
          onChange={handleChange} placeholder="Tell us about yourself and your home..." />
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
        {submitting ? 'Saving to database…' : 'Submit Adoption Request'}
      </button>
    </form>
  )
}
