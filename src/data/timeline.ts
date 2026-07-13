export type TimelineCategory = 'Governance' | 'Championships' | 'Project';

export interface TimelineMilestone {
  id: string;
  dateLabel: string;
  title: string;
  category: TimelineCategory;
  icon: string;
  summary: string;
  details: string[];
  sourceLabel?: string;
  sourceUrl?: string;
}

const stateChampionsHistoryUrl =
  'https://education.delaware.gov/diaa/sport_championships/state_champions_history/';
const aboutDiaaUrl = 'https://education.delaware.gov/diaa/about_diaa/';
const crossCountryChampionshipsUrl =
  'https://education.delaware.gov/diaa/sport_championships/fall_sports/cross_country/';

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'dssaa-established-1966',
    dateLabel: '1966',
    title: 'DSSAA is established',
    category: 'Governance',
    icon: '◆',
    summary:
      'The Delaware Secondary School Athletic Association is established as the statewide governing body for interscholastic athletics, replacing the Delaware Association of Secondary Administrators.',
    details: [
      'The Delaware Association of Secondary Administrators governed interscholastic athletics from 1947 to 1966.',
      'DSSAA was formed as the growth of interscholastic athletics created the need for a separate governing body.'
    ],
    sourceLabel: 'DIAA State Champions History',
    sourceUrl: stateChampionsHistoryUrl
  },
  {
    id: 'boys-cross-country-championship-1970',
    dateLabel: '1970',
    title: 'Boys Cross Country State Championship added',
    category: 'Championships',
    icon: '◎',
    summary:
      'The Delaware high school Boys Cross Country State Championship is added to the official state championship program.',
    details: [
      'DIAA’s championship history identifies 1970 as the year boys cross country joined the state championship program.',
      'Boys soccer was also added to the state championship program that year.'
    ],
    sourceLabel: 'DIAA State Champions History',
    sourceUrl: stateChampionsHistoryUrl
  },
  {
    id: 'diaa-replaces-dssaa-2002',
    dateLabel: '2002',
    title: 'DIAA replaces DSSAA',
    category: 'Governance',
    icon: '▦',
    summary:
      'The Delaware Interscholastic Athletic Association officially replaces DSSAA as the governing organization for Delaware interscholastic athletics.',
    details: [
      'DSSAA was dissolved in July 2002.',
      'DIAA took its place with the same goals, objectives, and responsibilities.'
    ],
    sourceLabel: 'DIAA About',
    sourceUrl: aboutDiaaUrl
  },
  {
    id: 'division-structure-2020',
    dateLabel: '2020',
    title: 'Modern Division I and Division II championship structure',
    category: 'Championships',
    icon: '▤',
    summary:
      'The DIAA Cross Country Championships are organized using the modern Division I and Division II championship structure shown in the official championship results.',
    details: [
      'The official 2020 results are organized separately for Girls Division I, Girls Division II, Boys Division I, and Boys Division II.',
      'This structure is preserved in DIAA’s published archive of past championship results.'
    ],
    sourceLabel: 'DIAA Cross Country Championships',
    sourceUrl: crossCountryChampionshipsUrl
  },
  {
    id: 'killens-pond-championships-2025',
    dateLabel: '2025',
    title: 'State Championships at Killens Pond State Park',
    category: 'Championships',
    icon: '★',
    summary:
      'The DIAA Cross Country State Championships are held at Killens Pond State Park.',
    details: [
      'DIAA’s event information identifies Killens Pond State Park in Felton as the race location.',
      'The championship program includes Division I and Division II races for girls and boys.'
    ],
    sourceLabel: 'DIAA Cross Country Championships',
    sourceUrl: crossCountryChampionshipsUrl
  },
  {
    id: 'archive-launch-2026',
    dateLabel: '2026',
    title: 'Delaware Cross Country Archive launches',
    category: 'Project',
    icon: '◌',
    summary:
      'The Delaware Cross Country Archive project is launched to preserve the history, memories, places, and people of Delaware cross country through oral history, digital archives, maps, and historical research.',
    details: [
      'The project begins as a long-term digital humanities and community history initiative.',
      'Its developing framework brings together oral histories, archival records, trail documentation, mapping, photographs, and community participation.'
    ]
  }
];
