import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchAnimal } from '../api'
import AdoptionForm from '../components/AdoptionForm'

export default function AnimalDetail() {
  const { id } = useParams()
  const [animal, setAnimal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    fetchAnimal(id)
      .then(setAnimal)
      .catch(() => setError('Pet not found or backend is unavailable.'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div className="container section"><p className="loading-text">Loading...</p></div>
  if (error) return (
    <div className="container section">
      <div className="alert alert-error">{error}</div>
      <Link to="/animals" className="btn btn-outline">← Back to Pets</Link>
    </div>
  )

  return (
    <section className="section">
      <div className="container">
        <Link to="/animals" className="back-link">← Back to all pets</Link>
        <div className="detail-grid">
          <div className="detail-image">
            <img src={animal.imageUrl} alt={animal.name} />
          </div>
          <div className="detail-info">
            <span className="species-badge">{animal.species}</span>
            <h1>{animal.name}</h1>
            <p className="detail-meta">{animal.breed} · {animal.age} years old · {animal.gender}</p>
            <p className="detail-desc">{animal.description}</p>
            <div className="detail-tags">
              <span className="tag">Size: {animal.size}</span>
              {animal.vaccinated && <span className="tag tag-green">✓ Vaccinated</span>}
              {animal.available && <span className="tag tag-blue">Available</span>}
            </div>
            <AdoptionForm animal={animal} />
          </div>
        </div>
      </div>
    </section>
  )
}
