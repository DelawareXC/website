export interface UpdateItem {
  title: string;
  date: string;
  type: string;
  summary: string;
  placeholder: boolean;
}

export const updates: UpdateItem[] = [
  {
    title: 'Project beta launched',
    date: 'Launch date forthcoming',
    type: 'Project update',
    summary: 'This placeholder announces the first public beta and will be replaced by a dated project note at launch.',
    placeholder: true
  }
];
