import projects from '../data/projects.js';

function Portfolio({ featuredOnly = false, limit }) {
  let list = featuredOnly ? projects.filter((p) => p.featured) : projects;
  if (limit) list = list.slice(0, limit);

  return (
    <div className="portfolio-grid">
      {list.map((project) => (
        <article className="project-card" key={project.id}>
          <div className="project-card__media">
            <img
              src={project.image}
              alt={`${project.name} interface preview`}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="project-card__category">{project.category}</span>
          </div>
          <div className="project-card__body">
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <ul className="tag-list tag-list--mono">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="project-card__links">
              {project.links.live !== '#' && (
                <a href={project.links.live} target="_blank" rel="noreferrer">Live site</a>
              )}
              {project.links.code !== '#' && (
                <a href={project.links.code} target="_blank" rel="noreferrer">Source</a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Portfolio;
