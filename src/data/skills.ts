export interface SkillGroup {
  domain: string;
  color: string;
  icon: string;
  skills: string[];
}

const skillsData: SkillGroup[] = [
  {
    domain: 'Python',
    color: '#3776AB',
    icon: 'python',
    skills: ['BeautifulSoup', 'Selenium', 'Playwright', 'Requests', 'Asyncio'],
  },
  {
    domain: 'Data',
    color: '#10B981',
    icon: 'database',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
  },
  {
    domain: 'Web',
    color: '#F59E0B',
    icon: 'globe',
    skills: ['Django', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    domain: 'SEO',
    color: '#8B5CF6',
    icon: 'search',
    skills: ['Technical SEO', 'Structured Data', 'Accessibility', 'Core Web Vitals'],
  },
  {
    domain: 'AI / ML',
    color: '#EC4899',
    icon: 'brain',
    skills: ['AI-assisted Automation', 'Prompt Engineering', 'ML Fundamentals'],
  },
  {
    domain: 'Tools',
    color: '#64748B',
    icon: 'terminal',
    skills: ['Git', 'GitHub', 'Linux', 'VS Code'],
  },
];

export default skillsData;
