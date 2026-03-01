import { labCards } from '../services/contentRepository';

export const LabMasonry = () => (
  <section className="section section-dark">
    <div className="container">
      <div className="section-header">
        <h2>The Lab</h2>
        <p className="muted">Notes, code snippets, and half-baked ideas.</p>
      </div>
      <div className="masonry-grid">
        {labCards.map((card) => (
          <article key={card.id} className={`masonry-card ${card.kind}`}>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
