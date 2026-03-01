import { useMemo } from 'react';
import { useLaboratoryStore } from '../store/laboratoryStore';
import { essays } from '../services/contentRepository';

export const ExplorationPage = () => {
  const search = useLaboratoryStore((state) => state.search);
  const setSearch = useLaboratoryStore((state) => state.setSearch);

  const filteredEssays = useMemo(() => {
    if (!search.trim()) return essays;
    const term = search.toLowerCase();
    return essays.filter((essay) => `${essay.title} ${essay.summary}`.toLowerCase().includes(term));
  }, [search]);

  return (
    <section className="section container">
      <div className="section-header exploration-header">
        <h1>Knowledge Graph Exploration</h1>
        <input
          className="search-input"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search knowledge nodes..."
        />
      </div>
      <div className="knowledge-grid">
        {filteredEssays.map((essay) => (
          <article key={essay.id} className="knowledge-node">
            <h3>{essay.title}</h3>
            <p>{essay.summary}</p>
            <span>{essay.category}</span>
          </article>
        ))}
      </div>
    </section>
  );
};
