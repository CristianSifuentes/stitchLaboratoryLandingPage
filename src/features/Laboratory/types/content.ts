export type Essay = {
  id: string;
  title: string;
  category: string;
  meta: string;
  summary: string;
  image: string;
};

export type LabCard = {
  id: string;
  title: string;
  description: string;
  kind: 'code' | 'quote' | 'media' | 'note' | 'metric';
};
