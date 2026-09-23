import { Link } from 'react-router-dom'

const STACK = [
  { title: 'Frontend', items: ['React 18', 'React Router', 'HTML5 & CSS3', 'Vite'] },
  { title: 'Backend', items: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'REST API'] },
  { title: 'Database', items: ['H2 (in-memory)', 'JPA Entities', 'adoption_requests table'] },
  { title: 'DevOps', items: ['Docker', 'Render (Backend)', 'GitHub', 'Vercel (Frontend)'] },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Project Overview</span>
          <h1>PawHome — Major Project</h1>
          <p>
            A full-stack animal adoption system demonstrating modern web development,
            API design, and cloud deployment for academic evaluation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Technology Stack</h2>
            <p>Modules and tools used in this project</p>
          </div>
          <div className="stack-grid">
            {STACK.map(block => (
              <div key={block.title} className="stack-card">
                <h3>{block.title}</h3>
                <ul>
                  {block.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="flow-card">
            <h2>Where does form data go?</h2>
            <ol className="flow-steps">
              <li>User fills the adoption form on the React website.</li>
              <li>
                Frontend sends JSON to{' '}
                <code>POST /api/adoptions</code> on the Spring Boot server (Render).
              </li>
              <li>
                Backend validates input and saves a row in the{' '}
                <code>adoption_requests</code> database table (linked to the pet).
              </li>
              <li>
                Admin opens <Link to="/admin">/admin</Link> to view all submissions via{' '}
                <code>GET /api/adoptions</code>.
              </li>
            </ol>
            <Link to="/admin" className="btn btn-primary">Open Admin Dashboard</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Problem Statement</h2>
            <p>
              Many rescued animals remain in shelters because adoption processes are
              fragmented and offline. PawHome digitizes pet discovery, online application,
              and admin review in one platform.
            </p>
            <h2>Objectives</h2>
            <ul className="about-list">
              <li>Display available pets with search/filter by species</li>
              <li>Collect adoption applications through validated forms</li>
              <li>Persist data using a relational database via JPA</li>
              <li>Expose REST APIs for frontend integration</li>
              <li>Deploy using Docker and cloud hosting</li>
            </ul>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600"
              alt="Volunteer with rescue dog"
            />
          </div>
        </div>
      </section>
    </>
  )
}
