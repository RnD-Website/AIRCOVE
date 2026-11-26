// PLACEHOLDER service areas: replace with the real operating area.
const names = [
  'Downtown', 'Riverside', 'Lakeview', 'Oak Hill', 'Maple Grove', 'Westfield',
  'Eastwood', 'Northgate', 'Southpark', 'Hillcrest', 'Brookside', 'Cedar Heights',
];
const slug = (s) => s.toLowerCase().replace(/\s+/g, '-');
export const locations = names.map((name) => ({
  name,
  slug: slug(name),
  blurb: `Same-day AC repair, installation and maintenance for homes and businesses in ${name}.`,
}));
