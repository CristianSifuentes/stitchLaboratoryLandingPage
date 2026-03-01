import { essays } from '../services/contentRepository';

export const EssayGrid = () => (
  <section className="section container">
    <div className="section-header">
      <h2>Polished Essays</h2>
      <button type="button" className="link-button">View Archive →</button>
    </div>
    <div className="essays-grid">
      {essays.map((essay) => (
        <article className="essay-card" key={essay.id}>
          <img src={essay.image} alt={essay.title} loading="lazy" />
          <div className="essay-body">
            <p className="meta">{essay.category} • {essay.meta}</p>
            <h3>{essay.title}</h3>
            <p>{essay.summary}</p>
            <button className="link-button" type="button">Read Article</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);
