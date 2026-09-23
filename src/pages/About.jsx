export default function About() {
  return (
    <>
      <section className="page-header-section section">
        <div className="container">
          <div className="page-header">
            <h1>About PawHome</h1>
            <p>Connecting rescued animals with loving families since 2020</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              PawHome is an animal adoption platform dedicated to finding permanent,
              loving homes for rescued dogs, cats, and rabbits. We work with local shelters
              and volunteers to ensure every pet gets the care and attention they deserve.
            </p>
            <p>
              Every animal on our platform is health-checked, vaccinated, and ready to
              become part of your family. Our adoption process is simple, transparent,
              and designed to match the right pet with the right home.
            </p>
            <h2>Why Adopt?</h2>
            <ul className="about-list">
              <li>Save a life and reduce shelter overcrowding</li>
              <li>Get a vaccinated, health-checked companion</li>
              <li>Support ethical pet ownership</li>
              <li>Gain a loyal friend who will love you unconditionally</li>
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
