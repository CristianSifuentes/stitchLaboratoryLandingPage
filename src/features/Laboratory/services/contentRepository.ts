import type { Essay, LabCard } from '../types/content';

export const essays: Essay[] = [
  {
    id: 'design-systems',
    title: 'The Future of Interface Design',
    category: 'Design Systems',
    meta: 'Nov 14, 2023 • 8 min read',
    summary:
      'As AI interfaces become more prevalent, the traditional GUI is dissolving into intent-driven interactions.',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ethics-ai',
    title: 'The Ethics of AI Alignment',
    category: 'Philosophy',
    meta: 'Oct 02, 2023 • 12 min read',
    summary:
      'Exploring the divergence between human values and computational optimization in modern intelligence systems.',
    image:
      'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=1200&q=80',
  },
];

export const labCards: LabCard[] = [
  { id: 'code', title: 'Framer Motion Snippet', description: 'Reusable animation variant for staged reveal.', kind: 'code' },
  { id: 'quote', title: 'Morning Pages', description: 'Complexity is not the enemy. Confusion is.', kind: 'quote' },
  { id: 'audio', title: 'Episode 4: Digital Gardens', description: 'Difference between a blog and a living archive.', kind: 'media' },
  { id: 'note', title: 'Hypertext Gardens', description: 'Reference essay on non-linear browsing history.', kind: 'note' },
  { id: 'metric', title: '24 Experiments Live', description: 'Current laboratory throughput', kind: 'metric' },
];
