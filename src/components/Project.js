import React from "react";

function Project({ id, name, src, alt, links }) {
  // const [ isSelected, setIsSelected ] = useState(false);

  return (
    <a href={links.site} target="_blank" rel="noreferrer">
      <section className="project-frame" key={id}>
        <figure 
          className="image is-5by4"
          // onMouseEnter={setIsSelected(true)}
          // onMouseLeave={setIsSelected(false)}
          >
          <img src={src} alt={alt}></img>
        </figure>
        <figcaption>{name}</figcaption>
      </section>
    </a>);
}

export default Project;
