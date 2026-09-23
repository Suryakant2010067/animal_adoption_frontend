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
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-badge">🐾 Find Your New Best Friend</span>
            <h1>Give a Loving Home to a Pet in Need</h1>
            <p>
              PawHome connects rescued dogs, cats, and rabbits with caring families.
              Browse our available pets and start your adoption journey today.
            </p>
            <div className="hero-actions">
              <Link to="/animals" className="btn btn-primary btn-lg">Browse Pets</Link>
              <Link to="/about" className="btn btn-outline btn-lg">Learn More</Link>
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
            <strong>500+</strong>
            <span>Pets Adopted</span>
          </div>
          <div className="stat-item">
            <strong>50+</strong>
            <span>Rescue Partners</span>
          </div>
          <div className="stat-item">
            <strong>100%</strong>
            <span>Vaccinated Pets</span>
          </div>
          <div className="stat-item">
            <strong>24hr</strong>
            <span>Response Time</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Pets</h2>
            <p>Meet some of our adorable friends waiting for a home</p>
          </div>
          {loading ? (
            <p className="loading-text">Loading pets...</p>
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
            <h2>How Adoption Works</h2>
            <p>Three simple steps to bring your new companion home</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">1</div>
              <h3>Browse</h3>
              <p>Explore our list of available dogs, cats, and rabbits.</p>
            </div>
            <div className="step-card">
              <div className="step-num">2</div>
              <h3>Apply</h3>
              <p>Fill out the adoption form for the pet you love.</p>
            </div>
            <div className="step-card">
              <div className="step-num">3</div>
              <h3>Adopt</h3>
              <p>Meet your pet and welcome them into your family!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
