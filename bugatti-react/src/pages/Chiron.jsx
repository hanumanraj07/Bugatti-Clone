import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import '../styles/chiron.css';

const Chiron = () => {
  const performanceSpecs = [
    { label: "Engine type", value: "W16" },
    { label: "Power output", value: "1,103 kW" },
    { label: "Maximum torque", value: "1,600 Nm" },
    { label: "0 - 100 km/h", value: "2.4 s" }
  ];

  const interiorSections = [
    {
      type: 'image',
      src: "https://bugatti.imgix.net/6766cff6627849f44b5fe166/03_chiron_driver-side_web.jpg?auto=format,compress&cs=srgb&sharp=10&w=926&dpr=1",
      title: "INNER BEAUTY",
      text: "The CHIRON excels not only in speed, but comfort. Exquisite materiality and a unique atmosphere are what make this hyper sports car truly enjoyable."
    },
    {
      type: 'image',
      src: "https://bugatti.imgix.net/6766d04f627849f44b5fe61c/Bugatti-Chiron-2017-1600-5c.jpeg?auto=format,compress&cs=srgb&sharp=10&w=926&dpr=1",
      title: "INNER BEAUTY",
      text: "The central console inlay, milled from a single piece of solid aluminum, has independent controls with adjustable displays."
    },
    {
      type: 'image',
      src: "https://bugatti.imgix.net/6766d074625ddcf42f485078/22_chiron_speedometer_print.jpg?auto=format,compress&cs=srgb&sharp=10&w=926&dpr=1",
      title: "INNER BEAUTY",
      text: "The cockpit layout proudly displays the magic 500 km/h mark [310 mph]. The mechanical speedometer adds to the timeless, analogue appeal."
    },
    {
      type: 'video',
      src: "https://bugatti.imgix.net/6766d0ad627849f44b5fef62/engine-chiron-desktop.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m",
      title: "TITANIUM BOOST",
      text: "The dramatically optimized 8.0 L W16 engine delivers more. More speed. More acceleration. More emotion. Catapulting the car to 420 km/h [260 mph] while four turbochargers pump away - accelerating with ease and linear power."
    },
    {
      type: 'video',
      src: "https://bugatti.imgix.net/6766d12b627849f44b5ff641/Chiron-IV-5-DESKTOP.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m",
      title: "LIGHTWEIGHT TITANIUM",
      subtitle: "EXHAUST SYSTEM",
      text: "For an extra boost, the new lightweight titanium exhaust system reduces back pressure, maximizing the engine power further."
    },
    {
      type: 'image',
      src: "https://bugatti.imgix.net/6766d22b625ddcf42f48676c/bugatti_chiron_27_chiron_keys_print.jpg?auto=format,compress&cs=srgb&sharp=10&w=926&dpr=1",
      title: "ENTER BEAST MODE",
      text: "Awaken 1,500 horses"
    },
    {
      type: 'image',
      src: "https://bugatti.imgix.net/6766d2ff627849f44b600206/bugatti_chiron_28_chiron_speed-key_print.jpg?auto=format,compress&cs=srgb&sharp=10&w=926&dpr=1",
      title: "SPEED KEY",
      text: "Activate Top Speed mode - with the car's permission - by utilizing the Speed Key. The CHIRON is now perfectly poised to go beyond the electronically-limited 380 km/h all the way to 420 km/h."
    }
  ];

  const renderInteriorSection = (section, index) => {
    const textClass = `intirior${(index % 4) + 1}-text`;

    return (
      <div key={index} className={`intirior${(index % 4) + 1}`}>
        {section.type === 'video' ? (
          <video muted loop autoPlay src={section.src}></video>
        ) : (
          <img src={section.src} alt="" />
        )}
        <div className={textClass}>
          <h1>{section.title}</h1>
          {section.subtitle && <h1>{section.subtitle}</h1>}
          <p>{section.text}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar showLogoLink={true} />

      <div className="hero-video">
        <video loop autoPlay muted
          src="https://bugatti.imgix.net/6766ca8f627849f44b5fa3e7/chiron-intro-desktop.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m"></video>
      </div>

      <div className="solitaire">
        <img src="https://bugatti.imgix.net/67fd0ad8e7036b2ee3b72218/chiron-wordmark-flat.svg?auto=format,compress&cs=srgb&sharp=10&w=594&dpr=1"
          className="white-logo" alt="" />
      </div>

      <div className="linemid">
        <div className="line">Beauty meets Beast</div>
      </div>

      <div className="dismid">
        <div className="discover">
          <a className="special" href="/bolide">Discover the Programme Solitaire</a>
        </div>
      </div>

      <div className="vision">
        <div className="vision-video">
          <video muted loop autoPlay
            src="https://bugatti.imgix.net/6766cc42627849f44b5faaa6/bugatti_chiron_360_16x9_v01-output.mp4"></video>
        </div>
        <div className="vision-text">
          <h1>VISIONARY</h1>
          <p>Pushing boundaries beyond imagination, the</p>
          <p>CHIRON's sophisticated design and</p>
          <p>performance-oriented form reinterprets</p>
          <p>BUGATTI's iconic history.</p>
        </div>
      </div>

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

      <div className="aerodynamics">
        <div className="aerodynamics-video">
          <video muted loop autoPlay
            src="https://bugatti.imgix.net/6766cd9a625ddcf42f482c82/Chiron-IV-2-DESKTOP.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m"></video>
        </div>
        <div className="aerodynamics-text">
          <h1>AÉRODYNAMIQUE</h1>
          <p>Intelligent aerodynamics begin at the</p>
          <p>distinctive front design of the CHIRON,</p>
          <p>serving as intake, routing air to the front</p>
          <p>brakes. Functionality fuses with aesthetics</p>
          <p>across the CHIRON's distinct profile</p>
          <p>- enhancing cooling efficiency to the engine.</p>
        </div>
      </div>

      <div className="aerodynamics">
        <div className="aerodynamics-video">
          <video muted loop autoPlay
            src="https://bugatti.imgix.net/6766ce98627849f44b5fdd06/Chiron-IV-3-DESKTOP.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m"></video>
        </div>
        <div className="aerodynamic1-text">
          <h1>AERODYNAMICS</h1>
          <p>Its jet-like active rear wing folds</p>
          <p>upwards - controlling downforce</p>
          <p>and braking from its top speeds.</p>
        </div>
      </div>

      {interiorSections.map(renderInteriorSection)}

      <div className="aerodynamics">
        <div className="aerodynamics-video">
          <video muted loop autoPlay
            src="https://bugatti.imgix.net/6766d32c627849f44b600bee/chiron-8-iv-desktop.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m"></video>
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

export default Chiron;
