export type AppSection =
  | 'dashboard'
  | 'roadmap'
  | 'resumeLab'
  | 'pivotLab'
  | 'mockSimulation'

export type GlobalPage =
  | 'home'
  | 'roadmap'
  | 'mentoring'
  | 'employment'
  | 'recruitment'
  | 'diagnosis'
  | 'counseling'
  | 'sitemap'

export type SidebarItem = {
  description: string
  id: AppSection
  label: string
}

export type MetricCard = {
  description: string
  title: string
  value: string
}

export type FeedItem = {
  body: string
  category: string
  cta?: string
  title: string
  tone: 'amber' | 'blue' | 'emerald' | 'rose'
}

export type RoadmapStep = {
  focus: string
  id: string
  semester: string
  status: 'Completed' | 'In Progress' | 'Next'
}

export type ActionItem = {
  deadline: string
  id: string
  insight: string
  skills: string[]
  title: string
}

export type ExperienceNode = {
  category: 'Academic' | 'Activity' | 'Internship'
  id: string
  mappedQuestionId?: string
  tags: string[]
  title: string
}

export type ResumeQuestion = {
  hint: string
  id: string
  prompt: string
}

export type MatchCard = {
  company: string
  evidence: string
  fit: string
  id: string
  role: string
}

export type TransferableSkill = {
  from: string
  id: string
  skill: string
  to: string
}

export type ScenarioCard = {
  headline: string
  id: string
  summary: string
  target: string
}

export type AlumniPath = {
  id: string
  milestone: string
  stage: string
}
