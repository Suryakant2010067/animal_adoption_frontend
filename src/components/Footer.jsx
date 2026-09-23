export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-icon">🐾</span>
          <strong>PawHome</strong>
          <p>Every pet deserves a loving home.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/animals">Browse Pets</a>
          <a href="/about">About Us</a>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📧 hello@pawhome.org</p>
          <p>📞 +91 98765 43210</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © 2026 PawHome Animal Adoption. Made with ❤️
        </div>
      </div>
    </footer>
  )
}
