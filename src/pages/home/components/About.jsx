const aboutHands = '/assets/about/about-hands.png';

function About() {
  const handleSpotlight = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <section className="page-hero container page-hero-about section-reveal" id="about">
      <div className="page-hero-content">
        <span className="kicker">01 / ABOUT THE IET</span>
        <h1>
          Working together to
          <br />
          engineer a better
          <br />
          <em>world.</em>
        </h1>
        <p>
          We are the IET and we inspire, inform and influence the global engineering community to
          engineer a better world. As a diverse home across engineering and technology, we share
          knowledge that helps make better sense of the world in order to solve the challenges that
          matter. It’s why we are uniquely placed to champion engineering.
        </p>
        <div className="page-body-actions">
          <a className="button outline" href="/about">
            <span className="btn-icon-circle">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
            <span>Explore our story</span>
          </a>
        </div>
      </div>
      <div
        className="page-hero-art interactive-art"
        onMouseMove={handleSpotlight}
        aria-label="IET Hands Graphic"
      >
        <img src={aboutHands} alt="IET Connection" />
      </div>
    </section>
  );
}

export default About;

