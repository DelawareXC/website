export type OralHistoryCategory =
  | 'Coaches'
  | 'Runners'
  | 'Alumni'
  | 'Officials'
  | 'Community Members';

export interface OralHistory {
  slug: string;
  name: string;
  placeholder: boolean;
  category: OralHistoryCategory;
  portrait: string;
  portraitAlt: string;
  role: string;
  affiliation: string;
  yearsActive: string;
  interviewDate: string;
  summary: string;
  videoUrl?: string;
  transcriptUrl?: string;
  relatedTrails: string[];
  keywords: string[];
}

export const oralHistoryCategories: OralHistoryCategory[] = [
  'Coaches',
  'Runners',
  'Alumni',
  'Officials',
  'Community Members'
];

export const oralHistories: OralHistory[] = [
  {
    slug: 'sample-interview-record',
    name: 'Sample interview record',
    placeholder: true,
    category: 'Community Members',
    portrait: '/assets/portrait-placeholder.svg',
    portraitAlt: 'Placeholder portrait silhouette for a future oral history participant',
    role: 'Role to be documented',
    affiliation: 'School or organization to be verified',
    yearsActive: 'Years to be verified',
    interviewDate: 'Interview date forthcoming',
    summary:
      'This record demonstrates the fields planned for a future, consented oral history. It does not represent a real person, interview, or historical claim.',
    relatedTrails: ['Related trail records forthcoming'],
    keywords: ['placeholder', 'oral history workflow']
  }
];
