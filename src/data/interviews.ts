export interface Interview {
  name: string;
  placeholder: boolean;
  portrait: string;
  portraitAlt: string;
  role: string;
  school: string;
  yearsActive: string;
  summary: string;
  videoUrl?: string;
  transcriptUrl?: string;
}

export const interviews: Interview[] = [
  {
    name: 'Sample interview record',
    placeholder: true,
    portrait: '/assets/portrait-placeholder.svg',
    portraitAlt: 'Placeholder portrait silhouette for a future oral history participant',
    role: 'Role to be documented',
    school: 'School or community affiliation forthcoming',
    yearsActive: 'Years to be verified',
    summary: 'This card demonstrates how a future, consented oral history will appear. It is not a real interview or historical record.',
    videoUrl: '#',
    transcriptUrl: '#'
  }
];
