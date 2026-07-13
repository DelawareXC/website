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
  school: string;
  yearsActive: string;
  interviewDate: string;
  biography: string;
  summary: string;
  videoUrl?: string;
  transcript: Array<{ timestamp: string; speaker: string; text: string }>;
  gallery: Array<{ src: string; alt: string; caption: string }>;
  relatedPeople: string[];
  relatedSchools: string[];
  relatedTrails: string[];
  relatedArchiveItems: string[];
  keywords: string[];
  citation: string;
  copyright: string;
  permissions: string;
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
    role: 'Role placeholder',
    school: 'School placeholder',
    yearsActive: 'Years active placeholder',
    interviewDate: 'Interview date forthcoming',
    biography:
      'This placeholder biography demonstrates where a concise, reviewed account of the narrator’s background and connection to Delaware cross country will appear. It does not describe a real person.',
    summary:
      'This record demonstrates the fields planned for a future, consented oral history. It does not represent a real person, interview, or historical claim.',
    transcript: [
      {
        timestamp: '00:00:00',
        speaker: 'Narrator placeholder',
        text: '[A reviewed transcript excerpt will appear here after a real interview has been recorded, transcribed, and approved.]'
      },
      {
        timestamp: '00:00:30',
        speaker: 'Interviewer placeholder',
        text: '[Interview questions and responses will be presented with timestamps and speaker labels.]'
      }
    ],
    gallery: [
      {
        src: '/assets/portrait-placeholder.svg',
        alt: 'Placeholder frame for a future narrator portrait',
        caption: 'Portrait placeholder — image and credit forthcoming.'
      },
      {
        src: '/assets/trail-placeholder.svg',
        alt: 'Placeholder illustration for a future interview-related trail photograph',
        caption: 'Related-place placeholder — image and context forthcoming.'
      },
      {
        src: '/assets/archive-placeholder.svg',
        alt: 'Placeholder frame for a future interview-related archival image',
        caption: 'Archival-image placeholder — source and rights forthcoming.'
      }
    ],
    relatedPeople: ['Related person placeholder'],
    relatedSchools: ['Related school placeholder'],
    relatedTrails: ['Related trail placeholder'],
    relatedArchiveItems: ['Related archive item placeholder'],
    keywords: ['placeholder', 'oral history template'],
    citation:
      '“Sample interview record,” Delaware Cross Country Archive, interview date forthcoming, placeholder record, accessed [date].',
    copyright:
      'Copyright status placeholder. A future record will identify the applicable rights holder and any restrictions.',
    permissions:
      'Permission status placeholder. Public access will be provided only after the narrator and project complete the review and permission process.'
  }
];
