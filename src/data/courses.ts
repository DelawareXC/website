export interface CourseMapRecord {
  slug: string;
  name: string;
  mapLabel: string;
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
    mapLabel: 'Killens Pond',
    location: 'Killens Pond State Park, Delaware',
    marker: [38.981837, -75.542132],
    routeUrl: '/data/courses/killens-pond-state-park-course.geojson',
    distance: 'Approximately 3.2 miles',
    status: 'Field-walked route',
    note: 'Route geometry records the submitted field walk. Historical course alignment verification is ongoing.'
  },
  {
    slug: 'sandhill-fields-xc-course',
    name: 'Sandhill Fields XC Course',
    mapLabel: 'Sandhill Fields',
    location: 'Sandhill Fields, Delaware',
    marker: [38.7029485, -75.372627],
    routeUrl: '/data/courses/sandhill-fields-xc-course.geojson',
    distance: 'Approximately 3.13 miles',
    status: 'Submitted GPX route',
    note: 'Route geometry records the submitted GPX track. Historical course alignment verification is ongoing.'
  }
];
