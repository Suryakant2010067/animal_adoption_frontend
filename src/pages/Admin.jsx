import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchAdoptions } from '../api'

function formatDate(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

export default function Admin() {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  async function load() {
    setLoading(true)
    setError('')
    try {
      const data = await fetchAdoptions()
      setRequests(Array.isArray(data) ? data : [])
    } catch {
      setError('Could not load requests. Wake up the Render backend and try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const pending = requests.filter(r => r.status === 'PENDING').length

  return (
    <section className="section admin-page">
      <div className="container">
        <div className="admin-header">
          <div>
            <span className="section-label">Admin Panel</span>
            <h1>Adoption Requests</h1>
            <p>
              Form submissions are saved in the backend database table{' '}
              <code>adoption_requests</code> via REST API{' '}
              <code>POST /api/adoptions</code>.
            </p>
          </div>
          <button type="button" className="btn btn-outline" onClick={load} disabled={loading}>
            {loading ? 'Refreshing…' : 'Refresh'}
          </button>
        </div>

        <div className="admin-stats">
          <div className="admin-stat-card">
            <span>Total requests</span>
            <strong>{requests.length}</strong>
          </div>
          <div className="admin-stat-card">
            <span>Pending review</span>
            <strong>{pending}</strong>
          </div>
          <div className="admin-stat-card">
            <span>Storage</span>
            <strong>H2 Database</strong>
          </div>
        </div>

        <div className="info-banner">
          <strong>Where does form data go?</strong>
          <p>
            React form → Java Spring Boot API → H2 database on Render. Open this page during
            your viva to show live submissions. Data persists while the server is running
            (free tier may reset after long sleep).
          </p>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        {loading ? (
          <p className="loading-text">Loading adoption requests…</p>
        ) : requests.length === 0 ? (
          <div className="empty-panel">
            <p>No adoption requests yet.</p>
            <Link to="/animals" className="btn btn-primary">Browse pets & submit a test form</Link>
          </div>
        ) : (
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Pet</th>
                  <th>Adopter</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th>Submitted</th>
                </tr>
              </thead>
              <tbody>
                {requests.map(req => (
                  <tr key={req.id}>
                    <td>{req.id}</td>
                    <td>
                      <strong>{req.animal?.name ?? '—'}</strong>
                      <span className="cell-muted">{req.animal?.species}</span>
                    </td>
                    <td>{req.adopterName}</td>
                    <td>
                      <div>{req.email}</div>
                      <span className="cell-muted">{req.phone}</span>
                    </td>
                    <td className="cell-address">{req.address}</td>
                    <td className="cell-message">{req.message || '—'}</td>
                    <td>
                      <span className={`status-pill status-${req.status?.toLowerCase()}`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="cell-muted">{formatDate(req.submittedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}
