import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchAnimals } from '../api'
import AnimalCard from '../components/AnimalCard'

export default function Home() {
  const [featured, setFeatured] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnimals()
      .then(data => setFeatured(data.slice(0, 3)))
      .catch(() => setFeatured([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-bg-shape" aria-hidden />
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-badge">B.Tech Final Year · Major Project</span>
            <h1>Smart Animal Adoption Platform</h1>
            <p>
              PawHome is a full-stack web application — React frontend, Java Spring Boot
              backend, REST API, and database — built to connect rescued pets with loving homes.
            </p>
            <div className="hero-actions">
              <Link to="/animals" className="btn btn-primary btn-lg">Browse Pets</Link>
              <Link to="/admin" className="btn btn-outline btn-lg">View Submissions</Link>
            </div>
            <div className="tech-pills">
              <span>React</span>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST API</span>
              <span>Docker</span>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=700"
              alt="Happy dog and cat together"
            />
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div className="stat-item">
            <strong>8+</strong>
            <span>Rescue Pets Listed</span>
          </div>
          <div className="stat-item">
            <strong>REST</strong>
            <span>API Architecture</span>
          </div>
          <div className="stat-item">
            <strong>100%</strong>
            <span>Form → Database</span>
          </div>
          <div className="stat-item">
            <strong>Live</strong>
            <span>Cloud Deployed</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Featured</span>
            <h2>Pets Waiting for a Home</h2>
            <p>Data loaded dynamically from the Spring Boot backend</p>
          </div>
          {loading ? (
            <div className="animal-grid">
              {[1, 2, 3].map(n => (
                <div key={n} className="skeleton-card" />
              ))}
            </div>
          ) : (
            <div className="animal-grid">
              {featured.map(animal => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
          )}
          <div className="section-cta">
            <Link to="/animals" className="btn btn-primary">View All Pets →</Link>
          </div>
        </div>
      </section>

      <section className="how-it-works section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Workflow</span>
            <h2>How Adoption Works</h2>
            <p>End-to-end flow you can explain in your project viva</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">1</div>
              <h3>Browse</h3>
              <p>Frontend fetches pet list from <code>GET /api/animals</code>.</p>
            </div>
            <div className="step-card">
              <div className="step-num">2</div>
              <h3>Apply</h3>
              <p>Form data is posted to <code>POST /api/adoptions</code>.</p>
            </div>
            <div className="step-card">
              <div className="step-num">3</div>
              <h3>Review</h3>
              <p>Admin dashboard shows all records from the database.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
