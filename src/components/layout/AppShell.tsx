import type { PropsWithChildren } from 'react'
import favicon from '../../assets/favicon.svg'
import type { RoadmapSelection } from '../../data/roadmap'
import type { GlobalPage } from '../../types/unisync'
import { Header } from './Header'

type AppShellProps = PropsWithChildren<{
  activePage: GlobalPage
  onPageChange: (page: GlobalPage) => void
  onRoadmapSelect: (selection: RoadmapSelection) => void
  pageTitle: string
}>

const roadmapShortcuts = [
  { label: '진로설계', tone: 'teal' },
  { label: '경력개발', tone: 'blue' },
  { label: '연구수행', tone: 'amber' },
  { label: '학년별로드맵', tone: 'green' },
] as const

const sectionMenuMap: Record<GlobalPage, { title: string; items: string[]; accent: string }> = {
  home: {
    title: 'MY HOME',
    accent: '#55a7a3',
    items: ['마이홈 대시보드', '나의 이수현황', '공지사항', '취업정보'],
  },
  roadmap: {
    title: '연구수행',
    accent: '#55a7a3',
    items: ['학업계획서', '지도교수 배정상담', '연구지도 교과목 상담', '연구실적', '어학시험/종합시험', '비교과 실적'],
  },
  mentoring: {
    title: '졸업선배 노하우·멘토링',
    accent: '#55a7a3',
    items: [
      '우리학교 졸업선배 정보검색',
      '졸업선배 멘토링상담',
      '졸업선배 멘토등록',
      '졸업선배 취업·진학후기',
      '졸업선배 취업·진학후기 인터뷰',
      '학기별 선배초청 직무간담회',
    ],
  },
  employment: {
    title: '취업정보',
    accent: '#f4c45f',
    items: ['공지사항', '진로·취업프로그램', '제휴회사 안내', '동영상특강', '기업정보', '고연봉 히든기업', '취업자료실'],
  },
  recruitment: {
    title: '채용정보',
    accent: '#4c8de1',
    items: ['추천채용', '일반채용', '인턴채용', '채용설명회', '캠퍼스리크루팅', '지원현황'],
  },
  diagnosis: {
    title: '진단실시',
    accent: '#7da24a',
    items: ['직업기초역량진단', '진로성숙도검사', '취업준비도검사', '직무적성검사', '역량결과보기'],
  },
  counseling: {
    title: '상담예약',
    accent: '#4d8fa8',
    items: ['기초조사지', '교수님 상담', '취업지원관 진로·취업상담', '외부컨설턴트 취업컨설팅', '상담현황'],
  },
  sitemap: {
    title: '사이트맵',
    accent: '#69758a',
    items: ['HOME', 'My로드맵', '졸업선배 노하우·멘토링', '취업정보', '채용정보', '진단실시', '상담예약'],
  },
}

type QuickMenuItem = {
  label: string
  page: GlobalPage
  icon: React.ReactNode
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
    label: '취업정보',
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
    label: '상담예약',
    page: 'counseling',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
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

const toneClassMap = {
  teal: 'bg-[#effaf6] text-[#21a07c] border-[#d3eee5]',
  blue: 'bg-[#eef4ff] text-[#5b86f7] border-[#d6e3ff]',
  amber: 'bg-[#fff7ea] text-[#f1b544] border-[#f7e3b5]',
  green: 'bg-[#eef7ea] text-[#7cab42] border-[#d9e9c4]',
} as const

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M7.5 4.5L13 10L7.5 15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

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
            <div className="mt-4 text-[15px] font-semibold text-[#37455e]">클로잇</div>
            <div className="mt-2 text-sm leading-6 text-[#5e6d83]">
              생명과학대학/식품영양학과
            </div>
            <div className="mt-2 text-sm text-[#5e6d83]">4학년</div>
            <div className="mt-1 text-sm text-[#5e6d83]">아이티센 교수</div>
          </section>

          <section className="rounded-md border border-[#e1e6ef] bg-white p-3 shadow-sm">
            <div className="mb-3 flex items-center gap-2 text-[17px] font-semibold text-[#3e4b60]">
              <span>My로드맵</span>
              <span className="text-[#7d8798]">?</span>
            </div>
            <div className="space-y-2">
              {roadmapShortcuts.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`flex w-full items-center justify-between rounded-md border px-3 py-3 text-sm font-semibold ${toneClassMap[item.tone]}`}
                >
                  <span>{item.label}</span>
                  <span className="text-[11px]">진행</span>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-md border border-[#e1e6ef] bg-white shadow-sm">
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

          <section className="rounded-md border border-[#e1e6ef] bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-[15px] font-semibold text-[#3e4b60]">
              <span>상담예약</span>
              <ChevronRightIcon className="h-4 w-4 shrink-0 text-[#7f8b9b]" />
            </div>
            <div className="mt-4 space-y-2 text-sm text-[#4d5c73]">
              <div>기초조사지</div>
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
