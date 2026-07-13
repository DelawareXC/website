export type TimelineCategory =
  | 'Origins'
  | 'Championships'
  | 'Schools'
  | 'People'
  | 'National Recognition'
  | 'Oral History';

export interface TimelineMilestone {
  id: string;
  dateLabel: string;
  sortEra: string;
  title: string;
  category: TimelineCategory;
  icon: string;
  summary: string;
  researchQuestions: string[];
  sourceNote: string;
  placeholder: boolean;
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'organized-cross-country-origins',
    dateLabel: 'Late 1800s',
    sortEra: '1800s',
    title: 'First organized cross country in Delaware',
    category: 'Origins',
    icon: '◆',
    summary:
      'Research placeholder for identifying the earliest documented organized cross-country activity in Delaware.',
    researchQuestions: [
      'Which surviving records establish the earliest organized activity?',
      'How was the activity described at the time?',
      'Which people, schools, clubs, or communities were involved?'
    ],
    sourceNote: 'No date or historical claim has been established. Primary-source research is required.',
    placeholder: true
  },
  {
    id: 'early-school-programs',
    dateLabel: 'Early 1900s',
    sortEra: '1900s',
    title: 'Early school and community milestones',
    category: 'Schools',
    icon: '▦',
    summary:
      'Placeholder for verified records showing how school or community participation developed during the early twentieth century.',
    researchQuestions: [
      'Which yearbooks, newspapers, programs, or school records survive?',
      'When did documented teams and schedules begin to appear?',
      'How did terminology and participation change over time?'
    ],
    sourceNote: 'Schools, dates, teams, and events will be added only after verification.',
    placeholder: true
  },
  {
    id: 'legendary-coaches',
    dateLabel: 'Mid-1900s',
    sortEra: '1900s',
    title: 'Legendary coaches',
    category: 'People',
    icon: '✦',
    summary:
      'Research placeholder for coaches whose documented work had a lasting influence on Delaware cross country communities.',
    researchQuestions: [
      'What evidence supports a coach’s historical significance?',
      'Whose perspectives should be included in the record?',
      'Which interviews and archival sources can provide context?'
    ],
    sourceNote: 'No individual is named or characterized here. Selection criteria and evidence are still being developed.',
    placeholder: true
  },
  {
    id: 'diaa-championships',
    dateLabel: 'Championship era',
    sortEra: '1900s',
    title: 'DIAA cross country championships',
    category: 'Championships',
    icon: '◎',
    summary:
      'Placeholder for a sourced history of DIAA cross country championships, their administration, formats, courses, and records.',
    researchQuestions: [
      'Which official records document the championship chronology?',
      'How did classifications, formats, and venues change?',
      'What rights and attribution apply to historic results?'
    ],
    sourceNote: 'Dates, results, champions, and administrative history are intentionally omitted pending research.',
    placeholder: true
  },
  {
    id: 'major-school-milestones',
    dateLabel: 'Late 1900s',
    sortEra: '1900s',
    title: 'Major school milestones',
    category: 'Schools',
    icon: '▤',
    summary:
      'Placeholder for significant, well-sourced developments in school programs, participation, courses, and team history.',
    researchQuestions: [
      'How should significance be defined and applied consistently?',
      'Which school and community archives can document change?',
      'How can the timeline represent different regions and experiences fairly?'
    ],
    sourceNote: 'No school, program, achievement, or date is asserted in this sample entry.',
    placeholder: true
  },
  {
    id: 'national-champions',
    dateLabel: '2000s–Present',
    sortEra: '2000s',
    title: 'National champions and recognition',
    category: 'National Recognition',
    icon: '★',
    summary:
      'Research placeholder for verified national-level achievements connected to Delaware cross country.',
    researchQuestions: [
      'Which governing bodies and competitions define the relevant records?',
      'How should Delaware connections and cross-country disciplines be documented?',
      'Which official results can be cited and preserved?'
    ],
    sourceNote: 'No champion, competition, result, or affiliation is claimed here.',
    placeholder: true
  },
  {
    id: 'oral-history-future',
    dateLabel: 'Present & Future',
    sortEra: 'Future',
    title: 'Future oral history milestones',
    category: 'Oral History',
    icon: '◌',
    summary:
      'Planning placeholder for consented interviews, transcript publication, thematic collections, and future community history work.',
    researchQuestions: [
      'Which voices and experiences should the program seek to document?',
      'What review, permission, privacy, and preservation steps are required?',
      'How will future milestones be described without overstating progress?'
    ],
    sourceNote: 'These are prospective project goals, not completed interviews or announced commitments.',
    placeholder: true
  }
];
