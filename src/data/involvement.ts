export interface InvolvementPath {
  id: string;
  title: string;
  text: string;
}

export const involvementPaths: InvolvementPath[] = [
  {
    id: 'share',
    title: 'Share a Memory',
    text: 'Describe a meet, course, team tradition, person, or moment that may help guide future research. Personal recollections will be treated as contributions to investigate and contextualize.'
  },
  {
    id: 'interview',
    title: 'Suggest an Interview',
    text: 'Recommend a coach, runner, alumnus, official, organizer, family member, or community voice for consideration by the oral history program.'
  },
  {
    id: 'materials',
    title: 'Contribute Historical Materials',
    text: 'Tell the project about relevant photographs, programs, results, clippings, maps, yearbooks, artifacts, or team records. Contributors must have the right to share submitted materials.'
  },
  {
    id: 'identify',
    title: 'Identify a Person, Place, or Photograph',
    text: 'Help add context to an unidentified image, location, event, or participant. Suggested identifications will be reviewed against available evidence.'
  },
  {
    id: 'volunteer',
    title: 'Volunteer',
    text: 'Express interest in research, transcription, scanning, description, mapping, accessibility review, or community outreach. Volunteer roles are still being planned.'
  },
  {
    id: 'participation',
    title: 'School and Community Participation',
    text: 'Schools, teams, libraries, historical organizations, and community groups may suggest materials or future collaboration. No institutional partnerships are implied at this stage.'
  }
];
