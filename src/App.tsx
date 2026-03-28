import { useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { DashboardPage } from './components/pages/DashboardPage'
import { DiagnosisPage } from './components/pages/DiagnosisPage'
import { MockSimulationPage } from './components/pages/MockSimulationPage'
import { PivotLabPage } from './components/pages/PivotLabPage'
import { RecruitmentPage } from './components/pages/RecruitmentPage'
import { ResumeLabPage } from './components/pages/ResumeLabPage'
import { RoadmapPage } from './components/pages/RoadmapPage'
import { SitemapPage } from './components/pages/SitemapPage'
import { defaultRoadmapSelection } from './data/roadmap'
import type { GlobalPage } from './types/unisync'

const PAGE_TITLES: Record<GlobalPage, string> = {
  home: 'HOME',
  roadmap: 'My로드맵',
  resumeLab: '자소서 설계',
  mentoring: '졸업선배 노하우·멘토링',
  employment: '취업자료·기업분석',
  recruitment: '채용정보',
  diagnosis: '역량진단',
  sitemap: '사이트맵',
}

const PATH_TO_PAGE: Record<string, GlobalPage> = {
  '/': 'home',
  '/dashboard': 'home',
  '/roadmap': 'roadmap',
  '/resume-lab': 'resumeLab',
  '/mentoring': 'mentoring',
  '/employment': 'employment',
  '/recruitment': 'recruitment',
  '/diagnosis': 'diagnosis',
  '/sitemap': 'sitemap',
}

function App() {
  const location = useLocation()
  const activePage = PATH_TO_PAGE[location.pathname] || 'home'
  const [roadmapSelection, setRoadmapSelection] = useState(defaultRoadmapSelection)

  return (
    <AppShell
      activePage={activePage}
      pageTitle={PAGE_TITLES[activePage]}
      onRoadmapSelect={(selection) => {
        setRoadmapSelection(selection)
        // Navigation will be handled by Link or useNavigate in child components
      }}
    >
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<Navigate to="/" replace />} />
        <Route
          path="/roadmap"
          element={
            <RoadmapPage
              selection={roadmapSelection}
              onSelectionChange={setRoadmapSelection}
            />
          }
        />
        <Route path="/resume-lab" element={<ResumeLabPage />} />
        <Route path="/mentoring" element={<PivotLabPage />} />
        <Route path="/employment" element={<MockSimulationPage />} />
        <Route path="/recruitment" element={<RecruitmentPage />} />
        <Route path="/diagnosis" element={<DiagnosisPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
      </Routes>
    </AppShell>
  )
}

export default App
