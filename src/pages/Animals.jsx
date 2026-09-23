import { useEffect, useState } from 'react'
import { fetchAnimals } from '../api'
import AnimalCard from '../components/AnimalCard'

const FILTERS = ['all', 'Dog', 'Cat', 'Rabbit']

export default function Animals() {
  const [animals, setAnimals] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    setError('')
    fetchAnimals(filter)
      .then(setAnimals)
      .catch(() => setError('Could not load animals. Make sure the backend is running.'))
      .finally(() => setLoading(false))
  }, [filter])

  return (
    <section className="section page-header-section">
      <div className="container">
        <div className="page-header">
          <h1>Available Pets</h1>
          <p>Find the perfect companion for your family</p>
        </div>

        <div className="filter-bar">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All Pets' : f + 's'}
            </button>
          ))}
        </div>

        {loading && <p className="loading-text">Loading pets...</p>}
        {error && <div className="alert alert-error">{error}</div>}

        {!loading && !error && animals.length === 0 && (
          <p className="empty-text">No pets available in this category right now.</p>
        )}

        <div className="animal-grid">
          {animals.map(animal => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
    </section>
  )
}
