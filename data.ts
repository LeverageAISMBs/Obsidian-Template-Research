import { Template, TrendDataPoint, MarketShareDataPoint } from './types';

export const templates: Template[] = [
  {
    id: 1,
    name: "Neural-Zettel v4",
    category: "neural",
    author: "Community",
    tagline: "The AI-Augmented Second Brain",
    desc: "The dominant template of 2026. It abandons folder structures entirely in favor of AI-generated tags and graph-based navigation. Ideal for those who want their notes to 'talk back' to them.",
    stats: { automation: 95, ease: 40, aesthetics: 70, mobile: 60, cost: 20 },
    plugins: ["Dataview", "Smart Connections AI", "Graph Analysis", "OmniSearch"],
    structure: "Flat (No Folders)",
    users: "Researchers, Data Scientists"
  },
  {
    id: 2,
    name: "LifeOS '26 Minimal",
    category: "productivity",
    author: "Kepano (Inspired)",
    tagline: "Frictionless Daily Tracking",
    desc: "A reaction against complexity. This system focuses purely on daily notes, rapid logging, and aggregation. It uses native properties heavily to avoid plugin debt.",
    stats: { automation: 30, ease: 95, aesthetics: 90, mobile: 100, cost: 0 },
    plugins: ["Calendar", "Periodic Notes", "Templater"],
    structure: "Temporal (Daily/Weekly)",
    users: "Journalers, Minimalists"
  },
  {
    id: 3,
    name: "Academic Nexus 7",
    category: "academic",
    author: "PhD Collective",
    tagline: "From Citation to Publication",
    desc: "Deep integration with Zotero 7. Features automated literature review tables, citation mapping, and export-to-LaTeX pipelines. It turns Obsidian into a thesis factory.",
    stats: { automation: 70, ease: 50, aesthetics: 60, mobile: 40, cost: 10 },
    plugins: ["Zotero Integration", "Pandoc", "Excalidraw", "Projects"],
    structure: "Project-Based",
    users: "PhD Students, Academics"
  },
  {
    id: 4,
    name: "Creator's Pipeline",
    category: "creative",
    author: "YouTuber Alliance",
    tagline: "Idea to Upload",
    desc: "A Kanban-centric workflow designed for video production and blog writing. Features script templates with built-in time estimation and asset checklists.",
    stats: { automation: 60, ease: 80, aesthetics: 85, mobile: 70, cost: 5 },
    plugins: ["Kanban", "Make.md", "Dataview"],
    structure: "Status-Based (Kanban)",
    users: "YouTubers, Writers"
  },
  {
    id: 5,
    name: "CorpStrat Pro",
    category: "productivity",
    author: "Enterprise Ops",
    tagline: "Meeting & Project Mastery",
    desc: "Designed for the corporate environment. Links people (CRM) to meetings to projects. Uses heavy templating to standardize meeting minutes and action items.",
    stats: { automation: 50, ease: 70, aesthetics: 75, mobile: 80, cost: 0 },
    plugins: ["Tasks", "Templater", "Dataview", "Projects"],
    structure: "Relational DB",
    users: "PMs, Executives"
  },
  {
    id: 6,
    name: "Omni-Journal AI",
    category: "neural",
    author: "StartUp Lab",
    tagline: "Self-Reflection Auto-Pilot",
    desc: "Uses local LLMs to analyze your daily journal entries and summarize weekly trends in mood, productivity, and recurring thoughts automatically.",
    stats: { automation: 90, ease: 60, aesthetics: 80, mobile: 50, cost: 30 },
    plugins: ["Text Generator", "Charts", "Dataview"],
    structure: "Temporal + Analytical",
    users: "Self-Improvers"
  }
];

export const trendData: TrendDataPoint[] = [
  { year: '2023', neural: 10, para: 80, zettel: 40 },
  { year: '2024', neural: 25, para: 75, zettel: 42 },
  { year: '2025', neural: 60, para: 50, zettel: 45 },
  { year: 'Jan 26', neural: 85, para: 40, zettel: 43 },
];

export const marketShareData: MarketShareDataPoint[] = [
  { name: 'Productivity/PARA', value: 35, fill: '#e7e5e4' },
  { name: 'Neural/AI-Driven', value: 30, fill: '#4f46e5' },
  { name: 'Academic/Research', value: 20, fill: '#a8a29e' },
  { name: 'Creative/Kanban', value: 15, fill: '#818cf8' },
];
