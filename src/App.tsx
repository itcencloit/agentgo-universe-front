import { useState } from 'react'
import { AppShell } from './components/layout/AppShell'
import { CounselingPage } from './components/pages/CounselingPage'
import { DashboardPage } from './components/pages/DashboardPage'
import { DiagnosisPage } from './components/pages/DiagnosisPage'
import { MockSimulationPage } from './components/pages/MockSimulationPage'
import { PivotLabPage } from './components/pages/PivotLabPage'
import { RecruitmentPage } from './components/pages/RecruitmentPage'
import { RoadmapPage } from './components/pages/RoadmapPage'
import { SitemapPage } from './components/pages/SitemapPage'
import { defaultRoadmapSelection } from './data/roadmap'
import type { GlobalPage } from './types/unisync'

const PAGE_TITLES: Record<GlobalPage, string> = {
  home: 'HOME',
  roadmap: 'My로드맵',
  mentoring: '졸업선배 노하우·멘토링',
  employment: '취업정보',
  recruitment: '채용정보',
  diagnosis: '진단실시',
  counseling: '상담예약',
  sitemap: '사이트맵',
}

function App() {
  const [activePage, setActivePage] = useState<GlobalPage>('home')
  const [roadmapSelection, setRoadmapSelection] = useState(defaultRoadmapSelection)

  return (
    <AppShell
      activePage={activePage}
      onRoadmapSelect={(selection) => {
        setRoadmapSelection(selection)
        setActivePage('roadmap')
      }}
      pageTitle={PAGE_TITLES[activePage]}
      onPageChange={setActivePage}
    >
      {activePage === 'home' && <DashboardPage />}
      {activePage === 'roadmap' && (
        <RoadmapPage
          selection={roadmapSelection}
          onSelectionChange={setRoadmapSelection}
        />
      )}
      {activePage === 'mentoring' && <PivotLabPage />}
      {activePage === 'employment' && <MockSimulationPage />}
      {activePage === 'recruitment' && <RecruitmentPage />}
      {activePage === 'diagnosis' && <DiagnosisPage />}
      {activePage === 'counseling' && <CounselingPage />}
      {activePage === 'sitemap' && <SitemapPage />}
    </AppShell>
  )
}

export default App
