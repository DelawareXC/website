export type ArchiveCategory =
  | 'Photographs'
  | 'Race Programs'
  | 'Results'
  | 'Yearbooks'
  | 'Newspapers'
  | 'Maps'
  | 'Artifacts'
  | 'Team Records';

export interface ArchiveItem {
  slug: string;
  itemId: string;
  title: string;
  placeholder: boolean;
  category: ArchiveCategory;
  date: string;
  creator: string;
  affiliation: string;
  description: string;
  collection: string;
  rightsStatement: string;
  source: string;
  relatedPeople: string[];
  relatedPlaces: string[];
  image: string;
  imageAlt: string;
  assetUrl?: string;
}

export const archiveItems: ArchiveItem[] = [
  {
    slug: 'sample-archival-object',
    itemId: 'PLACEHOLDER-0001',
    title: 'Sample archival object',
    placeholder: true,
    category: 'Photographs',
    date: 'Date to be verified',
    creator: 'Creator to be identified',
    affiliation: 'School or organization to be verified',
    description:
      'This demonstration record shows the descriptive fields planned for a future digitized item. It is not an actual archival holding.',
    collection: 'Collection assignment forthcoming',
    rightsStatement:
      'Placeholder rights statement. Ownership and reuse conditions must be established before publication.',
    source: 'Source and provenance forthcoming',
    relatedPeople: ['Related people forthcoming'],
    relatedPlaces: ['Related place or trail forthcoming'],
    image: '/assets/archive-placeholder.svg',
    imageAlt: 'Placeholder frame representing a future digitized archival object'
  }
];

export const archiveCategories: ArchiveCategory[] = [
  'Photographs',
  'Race Programs',
  'Results',
  'Yearbooks',
  'Newspapers',
  'Maps',
  'Artifacts',
  'Team Records'
];
