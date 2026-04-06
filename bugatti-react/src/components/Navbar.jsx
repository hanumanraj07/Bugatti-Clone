import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/dropdown.css';

const BugattiLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2468.89 566.93" fill="currentColor">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="4" result="turbulence"></feTurbulence>
      <feComposite in="SourceGraphic" in2="turbulence" operator="in"></feComposite>
    </filter>
    <path d="M272.56 273.34c28.81-26.48 45.95-63.86 45.95-107.47 0-89.56-65.41-154.97-155.75-154.97H0v545.13h174.44c92.67 0 160.42-66.97 160.42-159.64 0-52.18-23.36-95.79-62.3-123.04ZM87.22 95.01h72.42c42.83 0 71.65 28.81 71.65 70.87s-28.81 70.87-71.65 70.87H87.22V95.01Zm84.1 376.91h-84.1V320.84h84.1c45.17 0 76.32 30.37 76.32 75.54s-31.15 75.54-76.32 75.54ZM648.69 406.51c0 44.39-31.93 76.32-76.32 76.32s-76.32-31.93-76.32-76.32V10.9h-87.22v389.38c0 96.56 68.53 166.65 163.54 166.65s163.54-70.09 163.54-166.65V10.9h-87.22v395.61ZM993.03 0c-95.01 0-163.54 70.09-163.54 166.65v233.62c0 96.56 68.53 166.65 163.54 166.65s163.54-70.09 163.54-166.65V241.41H993.03v84.11h76.32v80.99c0 44.39-31.93 76.32-76.32 76.32s-76.32-31.93-76.32-76.32V160.42c0-44.39 31.93-76.32 76.32-76.32s76.32 31.93 76.32 76.32v14.02h87.22v-7.79C1156.57 70.09 1088.04 0 993.03 0ZM1344.1 10.9l-125.38 545.12h86.44L1330.08 447h147.96l24.92 109.02h86.44L1464.03 10.9H1344.1Zm5.45 351.99 54.51-239.08 54.51 239.08h-109.02ZM1604.2 95.01h119.93l.78 461.02h85.66l.78-461.02h119.92V10.9H1604.2v84.11zM1976.59 95.01h119.93l.78 461.02h85.66l.78-461.02h119.92V10.9h-327.07v84.11zM2381.67 10.9h87.22v545.12h-87.22z" filter="false"></path>
  </svg>
);

const BugattiB = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 699.12 525.6" fill="currentColor" className="h-10 w-10 md:hidden">
    <path d="M0 0h541.16c.61.13 1.21.35 1.83.38C555.66.93 568.1 3 580.2 6.74c42.46 13.12 72.98 39.79 90.73 80.66 7.23 16.64 10.83 34.17 11.87 52.28.76 13.32.01 26.52-2.66 39.57-5.77 28.21-18.99 52.35-39.87 72.25-.43.41-.79.89-1.16 1.31.19.23.23.3.29.35.64.48 1.28.96 1.92 1.43 23.74 17.5 40.43 40.17 49.82 68.13 3.88 11.55 6.45 23.38 6.98 35.6.03.62.26 1.22.4 1.83v23.02c-.15.76-.36 1.52-.42 2.29-.11 1.35-.04 2.72-.18 4.07-1.12 10.34-3.02 20.54-6.12 30.49-11.58 37.21-33.98 65.84-67.98 85.11-24.33 13.79-50.78 19.97-78.57 19.99-180.7.11-361.39.06-542.09.06H.39V387.2h86.96v25.33c0 8.44-.04 16.88.03 25.26 3.88.49 210.3.31 212.05-.15V301.77h-89.07v41.46c-2.96.56-85.22.42-86.9-.1V172.72h86.92v41.43c2.99.55 87.39.43 89.04-.07V87.25H87.31v44.67H.23V3.32C.23 2.21.08 1.1.01-.01Zm400.29 438.03H538.37c7.38 0 14.69-.66 21.83-2.62 22.38-6.13 37.82-19.87 44.98-42.11 5.09-15.8 4.95-31.82-.19-47.62-5.52-16.97-16.45-29.38-32.59-37.06-10.04-4.78-20.72-6.89-31.81-6.97-9.35-.07-18.71-.01-28.06-.01H400.3v136.4Zm.07-350.94v127.39h127.97c7.16 0 14.19-.93 21.05-2.99 19.73-5.91 33.39-18.35 40.05-37.96 4.23-12.46 4.75-25.27 1.97-38.08-4.68-21.58-17.39-36.41-38.21-44.07-8.88-3.27-18.15-4.29-27.56-4.29-40.86.02-81.71 0-122.57 0h-2.71Z"></path>
  </svg>
);

const StoreIcon = () => (
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTUgOXYyMGgyMlY5Wm01IDBzMC02IDYtNnM2IDYgNiA2Ii8+PC9zdmc+" alt="" />
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar = ({ showLogoLink = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="menu">
        <div className="menu-line" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="up"></div>
          <div className="down"></div>
        </div>
        <div className="menu-name">
          <p>MENU</p>
        </div>

        {isMenuOpen && (
          <div className="dropdown-menu">
            <button className="close-button" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </button>

            <div className="main-grid">
              <ul className="nav-list">
                <li>
                  <span className="nav-section-heading">Hyper Sports Cars</span>
                  <div>
                    <button className="nav-link active" data-tab-value="current-models">
                      <span className="nav-link-text">Current Models</span>
                      <span>›</span>
                    </button>
                    <button className="nav-link" data-tab-value="contemporary-models">
                      <span className="nav-link-text">Contemporary Models</span>
                      <span>›</span>
                    </button>
                    <button className="nav-link" data-tab-value="classic-icons">
                      <span className="nav-link-text">Classic Icons</span>
                      <span>›</span>
                    </button>
                    <button className="nav-link" data-tab-value="individualization">
                      <span className="nav-link-text">Individualization</span>
                      <span>›</span>
                    </button>
                  </div>
                </li>
                <li>
                  <span className="nav-section-heading">La Marque</span>
                  <div>
                    <a href="#" className="nav-link">
                      <span className="nav-link-text">Company</span>
                      <span>›</span>
                    </a>
                    <a href="#" className="nav-link">
                      <span className="nav-link-text">Careers</span>
                    </a>
                    <a href="#" className="nav-link">
                      <span className="nav-link-text">Newsroom</span>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="nav-section-heading">Ownership</span>
                  <div>
                    <a href="#" className="nav-link">
                      <span className="nav-link-text">Dealer Finder</span>
                    </a>
                    <a href="#" className="nav-link">
                      <span className="nav-link-text">Customer Service</span>
                    </a>
                    <a href="#" className="nav-link">
                      <span className="nav-link-text">La Maison Pur Sang</span>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="nav-section-heading">Lifestyle</span>
                  <div>
                    <button className="nav-link" data-tab-value="collections">
                      <span className="nav-link-text">Collections</span>
                      <span>›</span>
                    </button>
                    <a href="#" className="nav-link">
                      <span className="nav-link-text">BUGATTI Store</span>
                    </a>
                  </div>
                </li>
              </ul>

              <div className="content-panel">
                <Link to="/chiron" className="car-card-link">
                  <div className="car-card">
                    <div className="card-image-wrapper">
                      <img alt="a blue Bugatti Tourbillon sports car"
                        src="https://bugatti.imgix.net/6733871ced9d56f31c5f0182/bugatti-tourbillon-card.jpg?auto=format,compress&cs=srgb&sharp=10&w=512"
                        className="card-image" />
                      <video className="card-video"
                        src="https://bugatti.imgix.net/68220e13f5c0fd72764d8617/2025-model-teaser-videos-tourbillon_720.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m"
                        muted loop autoPlay playsInline></video>
                    </div>
                    <div className="card-overlay"></div>
                    <div className="card-title">TOURBILLON</div>
                  </div>
                </Link>

                <Link to="/bolide" className="car-card-link">
                  <div className="car-card">
                    <div className="card-image-wrapper">
                      <img alt="a black Bugatti W16 Mistral convertible sports car"
                        src="https://bugatti.imgix.net/677e8130e825e63ca2bd56fe/bugatti-w16mistral-card_v3.jpg?auto=format,compress&cs=srgb&sharp=10&w=512"
                        className="card-image" />
                      <video className="card-video"
                        src="https://bugatti.imgix.net/68220e5df5c0fd72764da4fe/2025-model-teaser-videos-w16mistral_720.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m"
                        muted loop autoPlay playsInline></video>
                    </div>
                    <div className="card-overlay"></div>
                    <div className="card-title">W16 MISTRAL</div>
                  </div>
                </Link>

                <Link to="/bolide" className="car-card-link">
                  <div className="car-card">
                    <div className="card-image-wrapper">
                      <img alt="a black Bugatti W16 Mistral convertible sports car"
                        src="https://bugatti.imgix.net/6733878496f2c0c4a773f58b/bugatti-bolide-card.jpg?auto=format,compress&cs=srgb&sharp=10&w=512&dpr=1"
                        className="card-image" />
                      <video className="card-video"
                        src="https://bugatti.imgix.net/68220e7cf5c0fd72764dbe84/2025-model-teaser-videos-bolide_720.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m"
                        muted loop autoPlay playsInline></video>
                    </div>
                    <div className="card-overlay"></div>
                    <div className="card-title">BOLIDE</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {showLogoLink ? (
        <Link to="/">
          <div className="logo">
            <BugattiLogo />
          </div>
        </Link>
      ) : (
        <div className="logo">
          <BugattiLogo />
        </div>
      )}

      <div className="bugatti-b">
        <BugattiB />
      </div>

      <div className="store">
        <span>STORE</span>
        <StoreIcon />
      </div>
    </div>
  );
};

export default Navbar;
