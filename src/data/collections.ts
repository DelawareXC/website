export interface CollectionItem {
  title: string;
  placeholder: boolean;
  category: 'Photographs' | 'Race Programs' | 'Results' | 'Yearbooks' | 'Newspapers' | 'Maps' | 'Artifacts';
  date: string;
  description: string;
  rights: string;
  image: string;
  imageAlt: string;
}

export const collections: CollectionItem[] = [
  {
    title: 'Sample archival object',
    placeholder: true,
    category: 'Photographs',
    date: 'Date to be verified',
    description: 'A demonstration record showing the planned descriptive fields for future digitized materials.',
    rights: 'Rights and attribution information forthcoming before publication.',
    image: '/assets/archive-placeholder.svg',
    imageAlt: 'Placeholder frame representing a future digitized archival object'
  }
];

export const archiveCategories = [
  'Photographs',
  'Race Programs',
  'Results',
  'Yearbooks',
  'Newspapers',
  'Maps',
  'Artifacts'
] as const;
