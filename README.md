# Dev Folio - Developer Portfolio Template

A modern, animated, and fully responsive developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Smooth Animations** - Framer Motion-like transitions throughout the UI
- **Dark/Light Mode** - Toggle between themes with system preference detection
- **Responsive Design** - Mobile-first approach, works on all devices
- **Contact Form** - Send messages via WhatsApp or Email
- **Dynamic Sections** - Projects, Skills, Experience, Education, Blogs, Testimonials
- **TypeScript** - Fully typed for better development experience
- **Recharts Integration** - Beautiful skill visualization charts

---

## Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd dev-folio-main

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

---

## Project Structure

```
dev-folio-main/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Layout.tsx      # Main layout with navbar, sidebar, footer
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Main landing page
│   │   ├── Contact.tsx     # Contact form page
│   │   └── ...
│   ├── services/          # Data and configuration
│   │   ├── constants.ts    # Developer info, site settings, stats
│   │   ├── projects.ts     # Projects data
│   │   ├── skills.ts       # Skills data
│   │   ├── experience.ts   # Work experience data
│   │   ├── education.ts    # Education data
│   │   ├── blogs.ts        # Blog posts data
│   │   ├── testimonials.ts # Customer testimonials
│   │   └── types.ts        # TypeScript interfaces
│   ├── App.tsx            # Main app component
│   ├── index.tsx          # Entry point
│   └── index.css          # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

---

## Customization Guide

### 1. Developer Information

Edit `src/services/constants.ts` to update your personal info:

```typescript
export const DEV_INFO: DeveloperInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio description",
  email: "your@email.com",
  github: "github.com/username",
  linkedin: "linkedin.com/in/username",
  twitter: "twitter.com/username",
  instagram: "instagram.com/username",
  facebook: "facebook.com/username",
  tiktok: "tiktok.com/@username",
  telegram: "t.me/username",
  whatsapp: "whatsapp.com/channel/...",
  youtube: "youtube.com/@username",
  location: "City, Country",
  phone: "+1234567890"  // International format
};

export const WEB_INFO = {
  siteName: "YOUR BRAND",
  logoUrl: "https://your-logo-url.com/logo.png"
};
```

### 2. Projects

Edit `src/services/projects.ts`:

```typescript
export const PROJECTS: Project[] = [
  {
    id: "unique-project-id",
    title: "Project Title",
    description: "Project description...",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://live-url.com",
    images: [
      "https://image-url-1.com/img1.png",
      "https://image-url-2.com/img2.png"
    ],
    category: "Fullstack",  // Options: 'Fullstack' | 'Frontend' | 'Backend' | 'AI'
    status: "Completed"     // Options: 'Completed' | 'In Progress' | 'Concept'
  },
  // Add more projects...
];
```

### 3. Skills

Edit `src/services/skills.ts`:

```typescript
export const SKILLS: Skill[] = [
  {
    name: "React",
    level: 90,  // 0-100
    category: "Frontend"  // Options: 'Frontend' | 'Backend' | 'Database' | 'CDN' | 'PaaS' | 'DevOps' | 'AI' | 'Language'
  },
  // Add more skills...
];
```

### 4. Work Experience

Edit `src/services/experience.ts`:

```typescript
export const EXPERIENCE: WorkExperience[] = [
  {
    company: "Company Name",
    position: "Job Title",
    duration: "2022 - Present",
    description: "Job description...",
    companyImage: "https://company-logo-url.com/logo.png",
    location: "City, Country"
  },
  // Add more experience...
];
```

### 5. Education

Edit `src/services/education.ts`:

```typescript
export const EDUCATION: Education[] = [
  {
    degree: "Bachelor's in Computer Science",
    school: "University Name",
    year: "2018 - 2022",
    grade: "First Class Honors",
    description: "Achievements and coursework...",
    institutionImage: "https://institution-logo-url.com/logo.png"
  },
  // Add more education...
];
```

### 6. Blogs

Edit `src/services/blogs.ts`:

```typescript
export const BLOGS: Blog[] = [
  {
    id: "blog-unique-id",
    title: "Blog Title",
    excerpt: "Brief excerpt...",
    content: `<h2>HTML Content</h2><p>Full blog content with HTML...</p>`,
    date: "Jan 01, 2025",
    readTime: "5 min read",
    category: "Technology",
    image: "https://blog-image-url.com/image.png",
    tags: ["Tech", "Programming"]
  },
  // Add more blogs...
];
```

### 7. Testimonials

Edit `src/services/testimonials.ts`:

```typescript
export const TESTIMONIALS = [
  {
    quote: "Testimonial quote text...",
    author: "Client Name",
    position: "Position, Company",
    image: "https://client-image-url.com/avatar.png"
  },
  // Add more testimonials...
];
```

### 8. Philosophy/Values

Edit the `PHILOSOPHY` array in `src/services/constants.ts`:

```typescript
export const PHILOSOPHY = [
  {
    title: "Innovation First",
    description: "Your philosophy description...",
    icon: "💡"  // Emoji icon
  },
  // Add more philosophies...
];
```

### 9. Stats

Edit the `STATS` array in `src/services/constants.ts`:

```typescript
export const STATS = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Delivered", value: "15+" },
  // Add more stats...
];
```

---

## Adding New Sections

### Adding a new social media link

1. Add the field to `DeveloperInfo` interface in `src/services/types.ts`:

```typescript
export interface DeveloperInfo {
  // ... existing fields
  youtube: string;  // Add this
}
```

2. Add the value in `src/services/constants.ts`:

```typescript
export const DEV_INFO: DeveloperInfo = {
  // ... existing fields
  youtube: "youtube.com/@username"
};
```

3. Add the social link in `src/components/Layout.tsx` and `src/pages/Contact.tsx`:

```typescript
{ id: 'youtube', url: `${DEV_INFO.youtube}`, icon: <YourYouTubeSVG /> },
```

### Adding a new project category

1. Update the `category` type in `src/services/types.ts`:

```typescript
category: 'Fullstack' | 'Frontend' | 'Backend' | 'AI' | 'Mobile';
```

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Manual Build

```bash
npm run build
```

The build output will be in the `dist/` folder.

---

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Styling
- **Recharts** - Charts and graphs

---

## License

This project is for personal use. Feel free to modify and use it for your own portfolio.

---

## Support

For questions or issues, please open an issue on GitHub or contact the developer.

---

## Credits

Built with love by XP Tools
