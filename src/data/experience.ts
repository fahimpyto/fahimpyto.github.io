export interface ExperienceItem {
  title: string;
  date: string;
  description: string;
  tags: string[];
  category: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: 'Published metascrub on PyPI',
    date: '2026',
    description: 'Released metascrub, a CLI tool for stripping AI metadata from images. Supports C2PA manifest parsing, multi-format cleaning, and realistic EXIF injection.',
    tags: ['Python', 'CLI', 'EXIF', 'PyPI'],
    category: 'Open Source',
  },
  {
    title: 'Started Technical SEO articles',
    date: '2026',
    description: 'Began writing about Technical SEO, structured data, accessibility, and Core Web Vitals to share practical knowledge.',
    tags: ['SEO', 'Writing', 'Web'],
    category: 'Writing',
  },
  {
    title: 'Built first automation project',
    date: '2025',
    description: 'Created Python-based automation tools for web scraping and data processing using BeautifulSoup, Selenium, and Playwright.',
    tags: ['Python', 'Automation', 'Web Scraping'],
    category: 'Project',
  },
  {
    title: 'Started learning Python',
    date: '2024',
    description: 'Began programming journey with Python, focusing on automation, data analysis, and web development.',
    tags: ['Python', 'Learning'],
    category: 'Learning',
  },
];

export default experienceData;
