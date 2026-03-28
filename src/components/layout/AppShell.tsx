import type { PropsWithChildren, ReactNode } from 'react'
import favicon from '../../assets/favicon.svg'
import type { RoadmapSelection } from '../../data/roadmap'
import { studentProfile } from '../../data/foodEngineering'
import type { GlobalPage } from '../../types/unisync'
import { Header } from './Header'

type AppShellProps = PropsWithChildren<{
  activePage: GlobalPage
  onPageChange: (page: GlobalPage) => void
  onRoadmapSelect: (selection: RoadmapSelection) => void
  pageTitle: string
}>

const sectionMenuMap: Record<GlobalPage, { title: string; items: string[]; accent: string }> = {
  home: {
    title: 'MY HOME',
    accent: '#4c8de1',
    items: ['My정보', '나의 이수현황', 'My 커리어 로드맵', '진로/취업프로그램', '공지사항'],
  },
  roadmap: {
    title: '연구수행',
    accent: '#4c8de1',
    items: ['학업계획서', '기업정보', '기업 분석 리포트', '직무 참고자료'],
  },
  mentoring: {
    title: '졸업선배 노하우·멘토링',
    accent: '#4c8de1',
    items: [
      'AI 멘토 자동 매칭 리포트',
      '추천 선배 인사이트',
      '멘토링 상담 연결 추천',
      '전환 가능 역량',
      '선배 FAQ',
      '선배초청 직무간담회',
    ],
  },
  employment: {
    title: '취업자료·기업분석',
    accent: '#4c8de1',
    items: ['취업자료실', '기업정보', '기업 분석 리포트', '직무 참고자료'],
  },
  recruitment: {
    title: '채용정보',
    accent: '#4c8de1',
    items: ['추천채용', '일반채용', '채용설명회', '캠퍼스리크루팅'],
  },
  diagnosis: {
    title: '진단실시',
    accent: '#4c8de1',
    items: ['전체 역량분석', '직업기초역량진단', '진로성숙도검사', '취업준비도검사', '직무적성검사', ],
  },
  sitemap: {
    title: '사이트맵',
    accent: '#69758a',
    items: ['HOME', 'My로드맵', '졸업선배 노하우·멘토링', '취업자료·기업분석', '채용정보', '진단실시'],
  },
}

type QuickMenuItem = {
  label: string
  page: GlobalPage
  icon: ReactNode
}

const quickMenus: QuickMenuItem[] = [
  {
    label: '공지사항',
    page: 'home',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-2.83-2h5.66A3 3 0 0110 18z" />
      </svg>
    ),
  },
  {
    label: 'My로드맵',
    page: 'roadmap',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: '선배 멘토링',
    page: 'mentoring',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm5 2a2 2 0 11-4 0 2 2 0 014 0zm-4 7a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zm10 7v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
  },
  {
    label: '자료·기업분석',
    page: 'employment',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: '채용정보',
    page: 'recruitment',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>
    ),
  },
  {
    label: 'AI역량검사',
    page: 'diagnosis',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: '사이트맵',
    page: 'sitemap',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 8a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zm6-6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
]

export function AppShell({
  activePage,
  children,
  onPageChange,
  onRoadmapSelect,
  pageTitle,
}: AppShellProps) {
  const sectionMenu = sectionMenuMap[activePage]

  return (
    <div className="min-h-screen bg-[#f3f5f9] text-slate-900">
      <Header
        activePage={activePage}
        onPageChange={onPageChange}
        onRoadmapSelect={onRoadmapSelect}
      />

      <main className="mx-auto grid max-w-[1380px] gap-4 px-5 py-4 xl:grid-cols-[192px_minmax(0,1fr)_144px]">
        <aside className="sticky top-4 flex h-[calc(100vh-2rem)] flex-col space-y-3 self-start py-2">
          <section className="rounded-md border border-[#e1e6ef] bg-white p-4 text-center shadow-sm">
            <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#dfe6f3_0%,#cfd8e9_100%)] p-4">
              <img src={favicon} alt="User avatar" className="h-full w-full object-contain" />
            </div>
            <div className="mt-4 text-[15px] font-semibold text-[#37455e]">{studentProfile.name}</div>
            <div className="mt-2 text-sm leading-6 text-[#5e6d83]">
              식품과학부/식품공학전공
            </div>
            <div className="mt-2 text-sm text-[#5e6d83]">{studentProfile.grade}</div>
            <div className="mt-1 text-sm text-[#5e6d83]">아이티센 교수</div>
          </section>

          <section className="rounded-md border border-[#e1e6ef] shadow-sm overflow-hidden">
            <div
              className="px-4 py-3 text-[15px] font-semibold text-white"
              style={{ backgroundColor: sectionMenu.accent }}
            >
              {sectionMenu.title}
            </div>
            <div className="space-y-3 px-4 py-4 text-sm text-[#4d5c73]">
              {sectionMenu.items.map((item, index) => (
                <div key={item} className={index === 0 ? 'font-semibold text-[#3e6cb5]' : ''}>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <div className="sticky bottom-0 mt-auto border-t border-[#d9e1ee] bg-[#f3f5f9] px-1 py-3 text-center text-[11px] leading-5 text-[#7b8798]">
            Copyright ⓒ 2026 ITCEN CLOIT Company. All right reserved.
          </div>
        </aside>

        <div className="min-w-0">
          <div className="mb-3 text-sm text-[#6f7c90]">Home &gt; {pageTitle}</div>
          {children}
        </div>

        <aside className="space-y-3">
          <section className="overflow-hidden rounded-md border border-[#e1e6ef] bg-white shadow-sm">
            <div className="bg-[#3f4654] px-4 py-3 text-sm font-bold text-white">QUICK MENU</div>
            <div className="grid grid-cols-2 gap-y-5 px-3 py-5">
              {quickMenus.map((item) => {
                const isActive = item.page === activePage
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => onPageChange(item.page)}
                    className="group text-center"
                  >
                    <div
                      className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-md border transition-colors ${
                        isActive
                          ? 'border-[#3e6cb5] bg-[#3e6cb5] text-white'
                          : 'border-[#d7deea] bg-[#f7f9fc] text-[#355b92] group-hover:border-[#3e6cb5] group-hover:bg-[#eef3fb] group-hover:text-[#3e6cb5]'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div
                      className={`text-[11px] font-semibold leading-4 transition-colors ${
                        isActive ? 'text-[#3e6cb5]' : 'text-[#4a5870] group-hover:text-[#3e6cb5]'
                      }`}
                    >
                      {item.label}
                    </div>
                  </button>
                )
              })}
            </div>
          </section>
        </aside>
      </main>
    </div>
  )
}
