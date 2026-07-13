export interface InterviewCategory {
  title: string;
  icon: string;
  description: string;
}

export interface MethodologyStep {
  step: string;
  title: string;
  description: string;
}

export interface EthicsPrinciple {
  title: string;
  description: string;
}

export interface FeaturedInterviewPreview {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const interviewCategories: InterviewCategory[] = [
  {
    title: 'Athletes',
    icon: 'A',
    description:
      'First-person accounts of training, competition, teammates, courses, traditions, and the experience of running.'
  },
  {
    title: 'Coaches',
    icon: 'C',
    description:
      'Reflections on mentorship, program building, changing practices, team culture, and the landscapes where teams trained.'
  },
  {
    title: 'Officials',
    icon: 'O',
    description:
      'Perspectives on organizing fair competition, applying rules, managing meets, and witnessing the sport across eras.'
  },
  {
    title: 'Alumni',
    icon: 'AL',
    description:
      'Memories that connect school experiences to later life and show how teams and courses remain part of personal history.'
  },
  {
    title: 'Parents & Families',
    icon: 'F',
    description:
      'Stories of support, travel, encouragement, volunteering, and the family networks that help cross country communities thrive.'
  },
  {
    title: 'Community Members',
    icon: 'CM',
    description:
      'Accounts from meet workers, course stewards, photographers, journalists, supporters, and others who sustain the sport.'
  }
];

export const methodologySteps: MethodologyStep[] = [
  {
    step: '01',
    title: 'Research',
    description: 'Review available records and prepare historically grounded topics and questions.'
  },
  {
    step: '02',
    title: 'Pre-interview conversation',
    description: 'Discuss the project, possible subjects, recording process, permissions, and narrator questions.'
  },
  {
    step: '03',
    title: 'Recorded interview',
    description: 'Create a thoughtful recording that leaves room for memory, reflection, context, and complexity.'
  },
  {
    step: '04',
    title: 'Transcript',
    description: 'Prepare an accessible written record and check names, terms, and passages that require clarification.'
  },
  {
    step: '05',
    title: 'Review by narrator',
    description: 'Invite the narrator to review the interview materials and confirm publication permissions.'
  },
  {
    step: '06',
    title: 'Digital preservation',
    description: 'Organize durable files, descriptive metadata, rights information, and preservation copies.'
  },
  {
    step: '07',
    title: 'Public archive',
    description: 'Publish approved materials with context, attribution, accessible formats, and responsible access.'
  }
];

export const ethicsPrinciples: EthicsPrinciple[] = [
  {
    title: 'Informed consent',
    description: 'Narrators should understand the project, the recording process, and how approved materials may be used.'
  },
  {
    title: 'Narrator review',
    description: 'Each narrator has an opportunity to review interview materials before anything is made public.'
  },
  {
    title: 'Respect for privacy',
    description: 'Personal boundaries, sensitive experiences, and the privacy of people mentioned in an interview deserve care.'
  },
  {
    title: 'Attribution',
    description: 'Interviews are presented with clear credit and enough context for visitors to understand whose perspective they hear.'
  },
  {
    title: 'Archival preservation',
    description: 'Recordings, transcripts, permissions, and descriptive information are organized for long-term stewardship.'
  },
  {
    title: 'Responsible public access',
    description: 'Access decisions balance the value of an open historical record with the responsibilities owed to narrators and communities.'
  }
];

export const featuredInterviewPreviews: FeaturedInterviewPreview[] = [
  {
    title: 'Coach Interview',
    description: 'A future conversation about coaching, mentorship, team culture, and changes in the sport.',
    image: '/assets/portrait-placeholder.svg',
    imageAlt: 'Placeholder portrait for a future coach oral history'
  },
  {
    title: 'Athlete Interview',
    description: 'A future first-person account of training, racing, teammates, courses, and lasting memories.',
    image: '/assets/portrait-placeholder.svg',
    imageAlt: 'Placeholder portrait for a future athlete oral history'
  },
  {
    title: 'Official Interview',
    description: 'A future perspective on meet administration, officiating, competition, and the history witnessed firsthand.',
    image: '/assets/portrait-placeholder.svg',
    imageAlt: 'Placeholder portrait for a future official oral history'
  },
  {
    title: 'Alumni Interview',
    description: 'A future reflection on school, community, personal growth, and the memories that endure after competition.',
    image: '/assets/portrait-placeholder.svg',
    imageAlt: 'Placeholder portrait for a future alumni oral history'
  }
];
