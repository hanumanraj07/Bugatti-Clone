import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/bolide.css';

const Bolide = () => {
  const performanceSpecs = [
    { label: "Vehicle weight(dry weight)", value: "1450 kg" },
    { label: "Power", value: "1600 hp" },
    { label: "Weight-to-power ratio", value: "0.91 kg/hp" },
    { label: "Maximum torque", value: "1600 Nm" },
    { label: "Top speed", value: "380 km/h" },
    { label: "0 - 100 km/h", value: "2.2 s" }
  ];

  const visionSections = [
    {
      src: "https://bugatti.imgix.net/677d9d4ad76b0a4caa83dec6/bolide-hero2025-moodcut-01.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m",
      title: "VISIONARY",
      text: ["Pushing boundaries beyond imagination, the", "BOLIDE's sophisticated design and", "performance-oriented form reinterprets", "BUGATTI's iconic history."]
    },
    {
      src: "https://bugatti.imgix.net/677d9d82d76b0a4caa83e2b5/bolide-hero2025-moodcut-02.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m",
      title: "UNMATCHED PRECISION",
      text: ["Every curve and duct is engineered for", "maximum aerodynamic efficiency,", "defining the new era of track-focused", "performance."]
    },
    {
      src: "https://bugatti.imgix.net/677d9dc4d76b0a4caa83e6b3/bolide-hero2025-moodcut-03.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m",
      title: "ENGINEERING MARVEL",
      text: ["At the heart of the BOLIDE lies the", "legendary W16 engine, optimized for", "unprecedented power-to-weight", "perfection."]
    }
  ];

  const interiorSections = [
    {
      type: 'image',
      src: "https://bugatti.imgix.net/675da4f25d0933e674d490b9/02-BUGATTI-Bolide-High-Speed-Testing.jpg?auto=format,compress&cs=srgb&sharp=10&w=926&dpr=1",
      title: "ENTER BEAST MODE",
      text: "Awaken 1,600 horses"
    },
    {
      type: 'image',
      src: "https://bugatti.imgix.net/675da7005d0933e674d490e2/18-BUGATTI_BOLIDE-testing.jpg?auto=format,compress&cs=srgb&sharp=10&w=926&dpr=1",
      title: "TRACK FOCUS",
      text: "Designed solely for the track, the BOLIDE offers an uncompromising driving experience where every element is stripped back to its purest form."
    },
    {
      type: 'image',
      src: "https://bugatti.imgix.net/675da4f25d0933e674d490b9/02-BUGATTI-Bolide-High-Speed-Testing.jpg?auto=format,compress&cs=srgb&sharp=10&w=926&dpr=1",
      title: "UNRIVALED CONTROL",
      text: "The cockpit is a sanctuary of speed, featuring advanced ergonomics that keep the driver perfectly connected to the machine at all times."
    },
    {
      type: 'image',
      src: "https://bugatti.imgix.net/675da7005d0933e674d490e2/18-BUGATTI_BOLIDE-testing.jpg?auto=format,compress&cs=srgb&sharp=10&w=926&dpr=1",
      title: "LIGHTWEIGHT ETHOS",
      text: "Extensive use of carbon fiber and 3D-printed titanium components ensures the BOLIDE remains incredibly light while maintaining structural integrity."
    }
  ];

  return (
    <div>
      <Navbar showLogoLink={true} />

      <div className="hero-video">
        <video loop autoPlay muted
          src="https://bugatti.imgix.net/677db0f500446b3d453825c2/bolide-hero2025-desktop-v2_4k.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m"></video>
      </div>

      <div className="solitaire">
        <img src="https://bugatti.imgix.net/67fd09e3e7036b2ee3b70d26/bolide-wordmark-flat-3.svg?auto=format,compress&cs=srgb&sharp=10&w=926&dpr=1"
          className="white-logo" alt="" />
      </div>

      <div className="linemid">
        <div className="line">Le Pur Sang Des Automobiles</div>
      </div>

      <div className="dismid">
        <Link to="/">
          <div className="discover">Discover the Programme Solitaire</div>
        </Link>
      </div>

      {visionSections.map((section, index) => (
        <div key={index} className="vision">
          <div className="vision-video">
            <video muted loop autoPlay src={section.src}></video>
          </div>
          <div className="vision-text">
            <h1>{section.title}</h1>
            {section.text.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      ))}

      <div className="performance-container">
        <h1>PERFORMANCE</h1>
        <div className="spec-table">
          {performanceSpecs.map((spec, index) => (
            <div key={index}>
              <div className="spec-row">
                <div className="spec-label">{spec.label}</div>
                <div className="spec-value">{spec.value}</div>
              </div>
              {index < performanceSpecs.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>

      {interiorSections.map((section, index) => (
        <div key={index} className={`intirior${index + 1}`}>
          <img src={section.src} alt="" />
          <div className={`intirior${index + 1}-text`}>
            <h1>{section.title}</h1>
            <p>{section.text}</p>
          </div>
        </div>
      ))}

      <div className="aerodynamics">
        <div className="aerodynamics-video">
          <video muted loop autoPlay
            src="https://bugatti.imgix.net/677d9e02d76b0a4caa83f093/bolide-hero2025-moodcut-04.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m"></video>
        </div>
        <div className="aerodynamics-text">
          <h1>THE HIGHEST STANDARDS</h1>
          <p>No other hypercar of this caliber completes such</p>
          <p>an exacting and complex test program. At each</p>
          <p>stage of the process, the vehicle is subjected </p>
          <p>to relentless tests, checks and correction </p>
          <p>loops - which can only be adequately carried</p>
          <p>out at aerospace and military facilities.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Bolide;
