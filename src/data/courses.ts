export interface CourseMapRecord {
  slug: string;
  name: string;
  location: string;
  marker: [number, number];
  routeUrl: string;
  distance: string;
  status: string;
  note: string;
}

export const courses: CourseMapRecord[] = [
  {
    slug: 'killens-pond-state-park-course',
    name: 'Killens Pond State Park Course',
    location: 'Killens Pond State Park, Delaware',
    marker: [38.981837, -75.542132],
    routeUrl: '/data/courses/killens-pond-state-park-course.geojson',
    distance: 'Approximately 3.2 miles',
    status: 'Field-walked route',
    note: 'Route geometry records the submitted field walk. Historical course alignment verification is ongoing.'
  }
];
