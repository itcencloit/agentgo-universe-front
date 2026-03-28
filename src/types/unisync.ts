export type AppSection = "dashboard" | "roadmap" | "resumeLab" | "pivotLab" | "mockSimulation";

export type GlobalPage =
  | "home"
  | "roadmap"
  | "mentoring"
  | "employment"
  | "recruitment"
  | "diagnosis"
  | "sitemap";

export interface SidebarItem {
  description: string;
  id: AppSection;
  label: string;
}

export interface MetricCard {
  description: string;
  title: string;
  value: string;
}

export interface FeedItem {
  body: string;
  category: string;
  cta?: string;
  title: string;
  tone: "amber" | "blue" | "emerald" | "rose";
}

export interface RoadmapStep {
  focus: string;
  id: string;
  semester: string;
  status: "Completed" | "In Progress" | "Next";
}

export interface ActionItem {
  deadline: string;
  id: string;
  insight: string;
  skills: string[];
  title: string;
}

export interface ExperienceNode {
  category: "Academic" | "Activity" | "Internship";
  id: string;
  mappedQuestionId?: string;
  tags: string[];
  title: string;
}

export interface ResumeQuestion {
  hint: string;
  id: string;
  prompt: string;
}

export interface MatchCard {
  company: string;
  evidence: string;
  fit: string;
  id: string;
  role: string;
}

export interface TransferableSkill {
  from: string;
  id: string;
  skill: string;
  to: string;
  evidence: string;
  interviewTip: string;
  consultingCheck: string[];
  relatedCompanies: string[];
}

export interface ScenarioCard {
  headline: string;
  id: string;
  summary: string;
  target: string;
}

export interface AlumniPath {
  id: string;
  milestone: string;
  stage: string;
}