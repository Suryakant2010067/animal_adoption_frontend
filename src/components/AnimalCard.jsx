import { Link } from 'react-router-dom'

export default function AnimalCard({ animal }) {
  return (
    <article className="animal-card">
      <div className="animal-card-image">
        <img src={animal.imageUrl} alt={animal.name} loading="lazy" />
        <span className="species-badge">{animal.species}</span>
      </div>
      <div className="animal-card-body">
        <h3>{animal.name}</h3>
        <p className="animal-meta">{animal.breed} · {animal.age} yr · {animal.gender}</p>
        <p className="animal-desc">{animal.description}</p>
        <div className="animal-tags">
          <span className="tag">{animal.size}</span>
          {animal.vaccinated && <span className="tag tag-green">Vaccinated</span>}
        </div>
        <Link to={`/animals/${animal.id}`} className="btn btn-outline btn-block">
          View & Adopt
        </Link>
      </div>
    </article>
  )
}
