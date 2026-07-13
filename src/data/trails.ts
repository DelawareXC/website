export interface Trail {
  slug: string;
  name: string;
  placeholder: boolean;
  location: string;
  distance: string;
  terrain: string;
  historicalSignificance: string;
  photographs: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  mapUrl?: string;
  relatedInterviews: string[];
  accessNotes: string;
}

export const trails: Trail[] = [
  {
    slug: 'sample-course-profile',
    name: 'Sample course profile',
    placeholder: true,
    location: 'Delaware location to be documented',
    distance: 'Course distance to be verified',
    terrain: 'Terrain notes forthcoming',
    historicalSignificance:
      'This sample shows where a researched course history will appear. It makes no claim about a real route, place, or event.',
    photographs: [
      {
        src: '/assets/trail-placeholder.svg',
        alt: 'Neutral placeholder illustration of a wooded cross-country trail',
        caption: 'Documentary photograph forthcoming after review.'
      }
    ],
    relatedInterviews: ['Related oral histories forthcoming'],
    accessNotes:
      'Placeholder only. Public access, route conditions, property boundaries, and accessibility have not been verified.'
  }
];
