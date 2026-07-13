export interface Trail {
  name: string;
  placeholder: boolean;
  image: string;
  imageAlt: string;
  location: string;
  distance: string;
  terrain: string;
  history: string;
  photoCount: string;
  relatedInterviews: string;
}

export const trails: Trail[] = [
  {
    name: 'Sample course profile',
    placeholder: true,
    image: '/assets/trail-placeholder.svg',
    imageAlt: 'Neutral placeholder illustration of a wooded cross-country trail',
    location: 'Delaware location to be documented',
    distance: 'Course distance to be verified',
    terrain: 'Terrain notes forthcoming',
    history: 'This sample shows where a researched course history will appear. No historical claims are being made.',
    photoCount: 'Photographs forthcoming',
    relatedInterviews: 'Related interviews forthcoming'
  }
];
