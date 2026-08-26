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
  },
  {
    slug: 'delaware-state-university-xc-course',
    name: 'Delaware State University XC Course',
    mapLabel: 'Delaware State University',
    location: 'Delaware State University, Delaware',
    marker: [39.2847395, -75.585303],
    routeUrl: '/data/courses/delaware-state-university-xc-course.geojson',
    distance: 'Approximately 2.98 miles',
    status: 'Submitted GPX route',
    note: 'Route geometry records the submitted GPX track. Historical course alignment verification is ongoing.'
  },
  {
    slug: 'lums-pond-xc-course',
    name: 'Lums Pond XC Course',
    mapLabel: 'Lums Pond',
    location: 'Lums Pond, Delaware',
    marker: [39.56552, -75.709471],
    routeUrl: '/data/courses/lums-pond-xc-course.geojson',
    distance: 'Approximately 3.28 miles',
    status: 'Submitted GPX route',
    note: 'Route geometry records the submitted Apple Health GPX track. Historical course alignment verification is ongoing.'
  }
];
