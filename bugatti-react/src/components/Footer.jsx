const Footer = () => {
  const letters = ['B', 'U', 'G', 'A', 'T', 'T', 'I'];

  return (
    <>
      <div className="footer">
        <div className="one">
          <div className="col">
            <p id="grey">HYPER SPORTS CARS</p>
            <p>TOURBILLON</p>
            <p>W16 MISTRAL</p>
            <p>BOLIDE</p>
            <p>CHIRON</p>
            <p>LA VOITURE NOIRE</p>
            <p>DIVO</p>
            <p>CENTODIECI</p>
          </div>
          <div className="col">
            <p id="grey">LA MARQUE</p>
            <p>Discover BUGATTI</p>
            <p>Careers</p>
            <p>Newsroom</p>
            <p>Classic Icons</p>
            <p>Historic Models</p>
            <p>Racing Legends</p>
            <p>Les Patrons</p>
            <p>La Maison Pur Sang</p>
            <p>Sur Mesure</p>
            <p>Dealer Finder</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <p id="grey">LIFESTYLE</p>
            <p>Art of Living</p>
            <p>Apparel & Accessories</p>
            <p>Watches & Jewellery</p>
            <p>Collectibles & Model Cars</p>
            <p>Store</p>
          </div>
          <div className="col">
            <p id="grey">CUSTOMER SERVICE</p>
            <p>Individual Service and Contact</p>
            <p>Maintenance</p>
            <p>Service Partner Network</p>
            <p>Passeport Tranquillité</p>
            <p>Warranty</p>
            <p>Roadside Assistance</p>
            <p>Genuine Parts</p>
            <p>BUGATTI Accessories</p>
          </div>
        </div>
        <div className="two">
          <p>© 2025 BUGATTI Automobiles S.A.S.</p>
        </div>
        <div className="three">
          <p>Legal Notice &nbsp;&nbsp;&nbsp; Privacy Policy &nbsp;&nbsp;&nbsp; Cookie Policy &nbsp;&nbsp;&nbsp;
            Privacy Settings &nbsp;&nbsp;&nbsp; Compliance & Whistleblower &nbsp;&nbsp;&nbsp; Fuel Consumption
            &nbsp;&nbsp;&nbsp; Modern Slavery Statement</p>
          <p>Gender Equality Index</p>
        </div>
        <div className="four">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="grey">
            <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
          </svg>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="grey">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="grey">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.28 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="grey">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </div>
      </div>

      <div className="footer-section">
        {letters.map((letter, index) => (
          <h1 key={index} className="animated-text-container">
            <span className="letter">{letter}</span>
          </h1>
        ))}
      </div>
    </>
  );
};

export default Footer;
