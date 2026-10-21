
function ProjectPreview() {
  return (
    <div className="project-card">
      <h3>Adepsol Real Estate</h3>

      <p>
        A real estate website designed and developed
        to showcase property services.
      </p>

      <div className="website-frame">
        <iframe
          src="https://adepsol-real-estate-fajopmccd-passionate-hands.vercel.app/"
          title="Adepsol Real Estate Website Preview"
          loading="lazy"
          width="100%"
          height="500"
        />
      </div>

      <a
        href="https://adepsol-real-estate-fajopmccd-passionate-hands.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Live Website ↗
      </a>
    </div>
  );
}

export default ProjectPreview;
