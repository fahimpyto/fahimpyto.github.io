export interface NavItem {
  label: string;
  path: string;
}

const navigation: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Articles', path: '/articles' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

export default navigation;
