export const name = 'Fareed Hassan';

export const shortName = 'Fareed';

export const color = '#111827';

export const links = {
  home: { name: 'Home', href: '/' },
  about: { name: 'About', href: '/about' },
  tool: { name: 'Tools and Platforms', href: '/tool' },
  experience: { name: 'Experience', href: '/experience' },
};
type Links = typeof links;
type LinkKey = keyof Links;

export const navLinks: LinkKey[] = ['about', 'tool', 'experience'];
