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
    slug: 'demo-interview-john-doe',
    name: 'John Doe',
    placeholder: true,
    category: 'Coaches',
    portrait: '/assets/portrait-placeholder.svg',
    portraitAlt: 'Demonstration portrait placeholder for the fictional John Doe interview record',
    role: 'Coach — demonstration role only',
    school: 'Delaware High School — demonstration school only',
    yearsActive: '1988–2004 — demonstration dates only',
    interviewDate: 'Demonstration interview — no real interview date',
    biography:
      'Demonstration interview only. John Doe is a fictional placeholder used to show how a future narrator biography will appear. This text does not describe a real person, school affiliation, coaching career, or historical event.',
    summary:
      'Demonstration interview only. This fictional record previews the structure and presentation planned for future reviewed oral histories. No interview was conducted, and none of the information on this page should be treated as historical evidence.',
    transcript: [
      {
        timestamp: '00:00:00',
        speaker: 'John Doe — demonstration narrator',
        text: '[Demonstration transcript only. A reviewed excerpt from a future real interview would appear here.]'
      },
      {
        timestamp: '00:00:30',
        speaker: 'Demonstration interviewer',
        text: '[Demonstration question only. This is not a quotation or record of an actual conversation.]'
      }
    ],
    gallery: [
      {
        src: '/assets/portrait-placeholder.svg',
        alt: 'Demonstration portrait placeholder; not a photograph of a real interview participant',
        caption: 'Demonstration image only — no real person is depicted.'
      },
      {
        src: '/assets/trail-placeholder.svg',
        alt: 'Demonstration landscape placeholder for the fictional interview record',
        caption: 'Demonstration related-place image only — no historical location is identified.'
      },
      {
        src: '/assets/archive-placeholder.svg',
        alt: 'Demonstration archival item placeholder for the fictional interview record',
        caption: 'Demonstration archive image only — no real collection item is represented.'
      }
    ],
    relatedPeople: ['Demonstration related person — placeholder only'],
    relatedSchools: ['Delaware High School — demonstration school only'],
    relatedTrails: ['Demonstration related trail — placeholder only'],
    relatedArchiveItems: ['Demonstration archive item — placeholder only'],
    keywords: ['demonstration interview', 'placeholder', 'oral history template'],
    citation:
      '“John Doe — Demonstration Interview,” Delaware Cross Country Archive, fictional demonstration record, not a real interview, accessed [date].',
    copyright:
      'Demonstration statement only. This fictional record contains no real interview recording or participant-contributed materials.',
    permissions:
      'Demonstration statement only. No publication permission is implied because this is not a real interview or narrator record.'
  },
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
