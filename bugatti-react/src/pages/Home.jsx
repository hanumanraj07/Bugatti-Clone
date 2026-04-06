import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const carRefs = useRef([]);

  useEffect(() => {
    carRefs.current.forEach((car) => {
      if (car) {
        const video = car.querySelector('.car-video');
        if (video) {
          car.addEventListener('mouseenter', () => video.play());
          car.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
          });
        }
      }
    });
  }, []);

  const cars = [
    {
      image: "https://bugatti.imgix.net/6733871ced9d56f31c5f0182/bugatti-tourbillon-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=442&fp-x=0.5&fp-y=0.5&dpr=1",
      video: "https://bugatti.imgix.net/68220e13f5c0fd72764d8617/2025-model-teaser-videos-tourbillon_720.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m",
      subtitle: "timeless icon",
      titleImage: "https://bugatti.imgix.net/67079fd3fa42b0c51df171f2/tourbillon.png?auto=format,compress&cs=srgb&sharp=10&w=328&dpr=1",
      link: "/chiron"
    },
    {
      image: "https://bugatti.imgix.net/677e8130e825e63ca2bd56fe/bugatti-w16mistral-card_v3.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=442&fp-x=0.5&fp-y=0.5&dpr=1",
      video: "https://bugatti.imgix.net/68220e5df5c0fd72764da4fe/2025-model-teaser-videos-w16mistral_720.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m",
      subtitle: "Timeless elegance and speed",
      titleImage: "https://bugatti.imgix.net/67079cfafa42b0c51df16f7f/mistral.png?auto=format,compress&cs=srgb&sharp=10&w=328&dpr=1",
      link: "/bolide"
    },
    {
      image: "https://bugatti.imgix.net/6733878496f2c0c4a773f58b/bugatti-bolide-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=442&fp-x=0.5&fp-y=0.5&dpr=1",
      video: "https://bugatti.imgix.net/68220e7cf5c0fd72764dbe84/2025-model-teaser-videos-bolide_720.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m",
      subtitle: "Timeless elegance and speed",
      titleImage: "https://bugatti.imgix.net/67079f31fa42b0c51df1719b/bolide.png?auto=format,compress&cs=srgb&sharp=10&w=328&dpr=1",
      link: "/bolide"
    },
    {
      image: "https://bugatti.imgix.net/67338aa2ed9d56f31c5f0689/bugatti-chiron-card-02.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=442&fp-x=0.5&fp-y=0.5&dpr=1",
      subtitle: "Timeless elegance and speed",
      titleImage: "https://bugatti.imgix.net/67079f94fa42b0c51df171b9/chiron.png?auto=format,compress&cs=srgb&sharp=10&w=328&dpr=1",
      link: "/chiron"
    },
    {
      image: "https://bugatti.imgix.net/673387e8ed9d56f31c5f01c5/bugatti-divo-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=442&fp-x=0.5&fp-y=0.5&dpr=1",
      subtitle: "Timeless elegance and speed",
      titleImage: "https://bugatti.imgix.net/67079c56fa42b0c51df16e98/divo.png?auto=format,compress&cs=srgb&sharp=10&w=328&dpr=1",
      link: "/chiron"
    },
    {
      image: "https://bugatti.imgix.net/6733881f96f2c0c4a773f5b2/bugatti-centodieci-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=442&fp-x=0.5&fp-y=0.5&dpr=1",
      subtitle: "Timeless elegance and speed",
      titleImage: "https://bugatti.imgix.net/67079bbcfa42b0c51df16dda/centodieci.png?auto=format,compress&cs=srgb&sharp=10&w=328&dpr=1",
      link: "/bolide"
    }
  ];

  const historyImages = [
    {
      src: "https://bugatti.imgix.net/6734a2b6eae7ef2f6d1c330d/02%20BUGATTI_Custmer-Car-Gathering.jpg?auto=format,compress&cs=srgb&sharp=10&w=926&dpr=1",
      title: "DISCOVER BUGATTI"
    },
    {
      src: "https://bugatti.imgix.net/6734a28b8d33578d8bd2af36/01%20BUGATTI_Type%2035%20Making%20of%20a%20Champion_edit.jpg?auto=format,compress&cs=srgb&sharp=10&w=926&dpr=1",
      title: "Our History"
    },
    {
      src: "https://bugatti.imgix.net/6734a52ceae7ef2f6d1c380c/AB105132_Crop.jpg?auto=format,compress&cs=srgb&sharp=10&w=926&dpr=1",
      title: "Careers at BUGATTI"
    }
  ];

  const footerImages = [
    "https://media-api.flockler.com/instagram/image/3763582108346894881",
    "https://media-api.flockler.com/instagram/video_cover/3762821533811670528",
    "https://media-api.flockler.com/instagram/image/3761427639429558795",
    "https://media-api.flockler.com/instagram/video_cover/3760679183690391252",
    "https://media-api.flockler.com/instagram/video_cover/3760579238751676064",
    "https://media-api.flockler.com/instagram/image/3759220563169012745"
  ];

  return (
    <div>
      <Navbar />

      <div className="hero-video">
        <video loop autoPlay muted
          src="https://bugatti.imgix.net/689485bb9fe9b36d36421e76/250807-solitaire-brouillard-video-trailer-landscape.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m"></video>
      </div>

      <div className="solitaire">
        <img src="https://bugatti.imgix.net/689394f09fe9b36d362dec02/Solitaire_Wordmark_black_tight.svg?auto=format,compress&cs=srgb&sharp=10&w=512&dpr=1"
          className="white-logo" alt="" />
      </div>

      <div className="linemid">
        <div className="line">Rooted in tradition. Built to leave a legacy.</div>
      </div>

      <div className="dismid">
        <div className="discover">
          <Link to="/chiron">Discover the Programme Solitaire</Link>
        </div>
      </div>

      <div className="record">
        <video loop muted autoPlay
          src="https://bugatti.imgix.net/677db9af00446b3d45384493/mistral-worldrecord-cut-2k.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m"></video>
        <div className="record-txt">
          <div className="bigger">
            <p>A RECORD-BREAKING</p>
            <p>FORCE OF NATURE</p>
          </div>
          <div className="mid">
            <p>Setting a new benchmark at</p>
            <p>453.91 km/h. A triumph of</p>
            <p>passion, precision, and</p>
            <p>performance.</p>
          </div>
          <div className="small">
            <p><a href="">WATCH THE</a></p>
            <p><a href="">RECORD</a></p>
          </div>
        </div>
      </div>

      <div className="mansion">
        <p>LA MAISON BUGATTI</p>
      </div>

      <div className="la">
        {historyImages.map((item, index) => (
          <div key={index} className="three">
            <div>
              <img className="history" src={item.src} alt="" />
            </div>
            <div>
              <p>{item.title}</p>
            </div>
            <div><a href="">LEARN MORE</a></div>
          </div>
        ))}
      </div>

      <div className="cursive">
        <img className="italic"
          src="https://bugatti.imgix.net/67fd1191e7036b2ee3b81ecb/If comparable it is no longer Bugatti-1.svg?auto=format,compress&cs=srgb&sharp=10&w=328&dpr=1"
          alt="" />
      </div>

      <div className="Hyper">
        <p>Our Hyper Sports Cars</p>
      </div>

      <div className="container">
        {cars.map((car, index) => (
          <div key={index} className="car" ref={el => carRefs.current[index] = el}>
            {car.video ? (
              <div className="media-wrapper">
                <img src={car.image} className="car-img" alt="" />
                <video className="car-video" muted loop preload="metadata">
                  <source src={car.video} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div className="main-img">
                <img id="car" src={car.image} alt="" />
              </div>
            )}
            <div className="timeless">
              <p>{car.subtitle}</p>
            </div>
            <div className="turbo">
              <img id="text" src={car.titleImage} alt="" />
            </div>
            <div className="learn">
              <Link to={car.link}>Learn more</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="Hyper">
        <p>BUGATTI Sur Mesure</p>
      </div>

      <p className="pin">The pinnacle of automotive engineering and ultra-luxury lifestyle.</p>

      <div className="bugatti-cell">
        <div className="image">
          <img src="https://bugatti.imgix.net/67346e73c5aae03fb24d085d/04_bugatti_chiron_macaron.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=380&fp-x=0.5&fp-y=0.5&dpr=1"
            alt="" />
        </div>
        <div className="bugatti-text">
          <h1>HERITAGE,</h1>
          <h1>CRAFTSMANSHIP AND</h1>
          <h1>INNOVATION</h1>
          <br /><br />
          <p>At BUGATTI, we translate our customers'</p>
          <p>visions to create unique pieces of personalized</p>
          <p>automotive art.</p>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <p><a href="">LEARN MORE ABOUT SUR MESURE</a></p>
        </div>
      </div>

      <div className="Hyper">
        <p>BUGATTI Live</p>
      </div>

      <div className="footer-img">
        {footerImages.map((img, index) => (
          <img key={index} src={img} alt="" />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
