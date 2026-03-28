import { Fragment, useState } from 'react'
import { departmentCompanies, departmentEmploymentPosts, studentProfile } from '../../data/foodEngineering'
import { SectionCard } from '../ui/SectionCard'

type EmploymentTab = 'resource' | 'report' | 'reference' | 'company'

const TABS: { id: EmploymentTab; label: string }[] = [
  { id: 'resource', label: '취업자료실' },
  { id: 'company', label: '기업정보' },
  { id: 'report', label: '기업 분석 리포트' },
  { id: 'reference', label: '직무 참고자료' },
]

// ─── 취업자료실 데이터 ─────────────────────────────────────────────────────────

const resourceSummaries: Record<string, string> = {
  '[AI 추천] 희창유업 품질관리 직무 합격 가이드':
    '희창유업 품질관리 직무 기준으로 전공 교과, 자격 준비, 학과 게시판 채용 패턴을 묶어 지원 전략을 정리한 요약 자료입니다. 품질평가·위생 계열 과목을 어떤 경험 문장으로 바꿔야 하는지까지 포함합니다.',
  '[AI 추천] 식품기사 실기 핵심 요약집 (품질관리 특화)':
    '품질관리 직무 지원자를 기준으로 식품기사 실기 범위를 우선순위별로 압축한 자료입니다. HACCP, 위생 기준, 품질 판정과 직접 연결되는 파트를 먼저 보도록 구성했습니다.',
  '[이수그룹] 2026 이수그룹 신입사원 공개채용 (~4/14(화) 오전 10시)':
    '대기업 공개채용 일정과 모집 직무 범위를 정리한 공고입니다. 식품 계열 학생이 지원 가능한 직무와 제출 일정, 확인해야 할 기본 요건을 빠르게 파악할 수 있습니다.',
  '[삼성웰스토리] 2026년 푸드페스타 사전신청 안내':
    '푸드 산업 직무 이해와 기업 접점 확보에 활용할 수 있는 행사 안내입니다. 직무 탐색 단계에서 업계 트렌드와 기업 포지셔닝을 파악하는 데 도움이 됩니다.',
  '[CJ제일제당] 2026 상반기 CJ제일제당 식품사업부문 신입사원 모집 (~4/1 17시)':
    'CJ제일제당 식품사업부문 채용 공고 핵심만 요약한 자료입니다. 전공 적합도, 우대 자격, 지원 마감 시점, 품질·연구 직무 지원 시 체크해야 할 포인트를 중심으로 읽을 수 있습니다.',
}

const personalizedNoticeRecommendations = [
  {
    category: '프로그램 추천',
    title: '식품기사 실기 핵심 요약집 우선 열람',
    reason: '식품위생학, 품질평가, HACCP 학습 흐름이 이어져 자격증 자료 활용도가 높습니다.',
  },
  {
    category: '채용 공지',
    title: 'CJ제일제당 식품사업부문 공고 확인',
    reason: '관심 직무와 전공 적합도가 모두 높아 이번 주 우선 확인 공지로 분류됩니다.',
  },
]

const resourceSnapshotCards = [
  {
    label: '핵심 열람 자료',
    value: '23건',
    note: '채용공고 18건, 기업분석 2건, 자격 자료 3건을 식품공학 4학년 기준으로 재분류했습니다.',
  },
  {
    label: 'AI 우선 검토',
    value: '5건',
    note: '품질관리와 품질·연구 직무에 직접 쓰이는 자료만 상단에 배치했습니다.',
  },
]

const resourceBreakdown = [
  { label: '채용공고', value: '18건', note: '학과 게시판과 기업 공고를 통합 반영' },
  { label: '기업분석보고서', value: '2건', note: '희창유업, 코카콜라 직무 분석 정리' },
  { label: '자격증 자료', value: '3건', note: '식품기사, 위생사 중심 요약 자료' },
]

// ─── 기업 분석 리포트 데이터 ──────────────────────────────────────────────────

const companyReports = [
  {
    company: '희창유업',
    badge: '학과공고',
    badgeColor: 'bg-[#e3f0ff] text-[#1a56b0]',
    title: '희창유업 품질관리 직무 채용 패턴 분석 리포트',
    date: '26-03-20',
    aiScore: 96,
    recommended: true,
    tags: ['수시채용', '식품기사 필수', '학과 추천'],
    summary:
      '희창유업은 학과 게시판을 통한 수시 채용 비중이 전체의 70% 이상을 차지합니다. 품질관리 직무 합격자 대부분이 식품기사 보유자이며, 캡스톤 디자인 프로젝트의 품질 개선 사례를 강조한 지원서가 높은 합격률을 보였습니다. 4학년 1학기 식품기사 취득 후 학과 교수 추천 루트를 적극 활용하는 전략이 최우선입니다.',
    highlights: [
      { label: '주 채용 루트', value: '학과 게시판 수시 (70%)' },
      { label: '우대 자격', value: '식품기사 (사실상 필수)' },
      { label: '선호 경험', value: '품질평가·위생 실험, 캡스톤 개선 사례' },
      { label: '채용 시기', value: '4월·9월 집중' },
    ],
  },
  {
    company: '코카콜라음료',
    badge: '기업공고',
    badgeColor: 'bg-[#e8f5e9] text-[#2e7d32]',
    title: '코카콜라음료 품질·연구 직무 채용 분석 리포트',
    date: '26-03-15',
    aiScore: 93,
    recommended: true,
    tags: ['상하반기 공채', 'R&D 수시', '영어 우대'],
    summary:
      '코카콜라음료는 상반기(4월)와 하반기(9월) 정기 공채 외에 R&D 직무 수시 채용을 병행합니다. 품질·연구 직무는 식품공학 전공 우대가 명시되어 있으며, 음료 관련 실험 경험과 영어 능력(OPIc IM 이상)을 중요시합니다. 전공 적합도가 매우 높아 AI 매칭도 93%로 우선 타깃 기업으로 분류됩니다.',
    highlights: [
      { label: '채용 방식', value: '정기 공채 + R&D 수시 병행' },
      { label: '전공 우대', value: '식품공학·화학·생명공학' },
      { label: '영어 기준', value: 'OPIc IM 이상 우대' },
      { label: '핵심 경험', value: '음료·발효 실험, 관능평가' },
    ],
  },
  {
    company: 'CJ제일제당',
    badge: '대기업',
    badgeColor: 'bg-[#fff3e0] text-[#e65100]',
    title: 'CJ제일제당 식품사업부문 신입 채용 분석 리포트',
    date: '26-03-10',
    aiScore: 88,
    recommended: false,
    tags: ['상반기 공채', '경쟁률 높음', 'TOEIC 700+'],
    summary:
      'CJ제일제당 식품사업부문은 매년 상반기 공개채용을 진행하며 경쟁률이 높습니다(예상 20:1 이상). 품질·연구 직무는 식품공학 전공자를 선호하며, TOEIC 700점 이상, 식품기사 자격증 보유자를 우대합니다. 대기업 특성상 공채 일정이 타이트하므로 4월 초 마감일 전 서류 준비를 완료해야 합니다.',
    highlights: [
      { label: '채용 시기', value: '상반기 공채 (3~4월 마감)' },
      { label: '예상 경쟁률', value: '20:1 이상' },
      { label: '어학 기준', value: 'TOEIC 700점 이상' },
      { label: '우대 자격', value: '식품기사, 품질경영기사' },
    ],
  },
]

const reportSnapshotCards = [
  {
    label: '분석 완료 기업',
    value: '3건',
    note: '관심 직무 기준 희창유업, 코카콜라음료, CJ제일제당 분석 완료.',
  },
  {
    label: 'AI 전략 추출',
    value: '2건',
    note: 'AI 매칭도 90% 이상 기업의 맞춤 합격 전략을 우선 추출했습니다.',
  },
]

// ─── 직무 참고자료 데이터 ──────────────────────────────────────────────────────

const jobReferences = [
  {
    category: '직무가이드',
    categoryColor: 'bg-[#f3f0ff] text-[#5b3fa6]',
    title: '식품 품질관리 직무 완전 가이드',
    date: '26-03-01',
    recommended: true,
    tags: ['품질관리', 'QA', 'HACCP', '식품기사'],
    summary:
      '식품 품질관리 직무는 원료 수입 검사부터 완제품 출하 검사까지 전 공정의 품질을 관리합니다. 주요 업무는 ①원재료 품질 검사 ②공정 중 품질 모니터링 ③HACCP 관리 ④클레임 대응 ⑤품질 문서 관리입니다. 식품기사 자격증과 HACCP 관련 교과목 이수가 서류 통과의 핵심입니다.',
    keyPoints: [
      { label: '핵심 업무', value: '원료·공정·완제품 품질 검사 및 관리' },
      { label: '필수 역량', value: '식품기사, HACCP 이해, 실험 분석 능력' },
      { label: '커리어패스', value: 'QA → 품질팀장 → 품질경영 → 임원' },
      { label: '연봉 범위', value: '초봉 2,800~3,400만 원 (중소·중견 기준)' },
    ],
  },
  {
    category: '직무가이드',
    categoryColor: 'bg-[#f3f0ff] text-[#5b3fa6]',
    title: '식품 R&D(연구개발) 직무 완전 가이드',
    date: '26-02-28',
    recommended: true,
    tags: ['R&D', '신제품개발', '식품공학', '연구직'],
    summary:
      '식품 R&D 직무는 신제품 개발, 기존 제품 개선, 원가 절감 연구를 담당합니다. 주요 업무는 ①원료 탐색 및 배합 설계 ②시제품 제조 및 관능평가 ③유통기한 설정 ④법규 검토 ⑤생산 기술 이전입니다. 전공 지식 외에 창의적 문제해결력과 협업 능력을 강조하는 직무입니다.',
    keyPoints: [
      { label: '핵심 업무', value: '신제품 개발, 배합 설계, 관능평가' },
      { label: '필수 역량', value: '식품화학·가공학 심화, 실험 능력, 영어' },
      { label: '커리어패스', value: '연구원 → 선임 → 책임 → R&D 팀장' },
      { label: '연봉 범위', value: '초봉 3,200~4,000만 원 (대기업 기준)' },
    ],
  },
  {
    category: '자격증',
    categoryColor: 'bg-[#f1f3f7] text-[#546173]',
    title: '식품기사 자격증 취득 전략 (품질관리 직무 특화)',
    date: '26-02-20',
    recommended: false,
    tags: ['식품기사', '필기', '실기', '취득 전략'],
    summary:
      '식품기사는 필기(식품위생학·식품화학·식품미생물학·식품가공학·식품공학개론 5과목)와 실기(식품생산관리 실무)로 구성됩니다. 품질관리 직무 취업을 위해서는 4학년 1학기(2026년 3월 접수 → 5월 시험)에 취득하는 것이 최적 타이밍입니다. HACCP·식품위생 파트를 우선 공략하세요.',
    keyPoints: [
      { label: '시험 일정', value: '2026년 5월 필기 → 7월 실기 (예정)' },
      { label: '합격 기준', value: '각 과목 40점·평균 60점 이상' },
      { label: '우선 공략', value: 'HACCP, 식품위생, 품질 판정 파트' },
      { label: '취득 효과', value: '희창유업·코카콜라 서류 합격률 ↑' },
    ],
  },
  {
    category: '업무지식',
    categoryColor: 'bg-[#e3f0ff] text-[#1a56b0]',
    title: 'HACCP 인증 및 식품 품질시스템 실무 이해',
    date: '26-02-15',
    recommended: false,
    tags: ['HACCP', '위생관리', '품질시스템', 'ISO'],
    summary:
      'HACCP(위해요소중점관리기준)은 식품 품질관리 직무의 핵심 업무 기반입니다. 이 자료는 HACCP 7원칙과 12절차, 실제 식품공장 적용 사례, 면접에서 자주 나오는 HACCP 질문 유형을 정리합니다. 학과 수업의 식품위생학·식품공장설계 교과 내용과 연결하여 이해하면 면접 답변 구성에 바로 활용 가능합니다.',
    keyPoints: [
      { label: '핵심 내용', value: 'HACCP 7원칙, 12절차, CCP 설정 방법' },
      { label: '면접 활용', value: 'HACCP 경험 질문 답변 구성 가이드 포함' },
      { label: '관련 교과', value: '식품위생학, 식품공장설계 연계' },
      { label: '취업 연계', value: '품질관리·위생관리 직무 서류 차별화' },
    ],
  },
]

const referenceSnapshotCards = [
  {
    label: '직무 가이드',
    value: '2건',
    note: '품질관리·R&D 직무별 업무 내용, 역량, 커리어패스를 정리했습니다.',
  },
  {
    label: '자격·업무 지식',
    value: '2건',
    note: '식품기사 취득 전략과 HACCP 실무 이해 자료를 포함합니다.',
  },
]

// ─── 공통 헬퍼 ────────────────────────────────────────────────────────────────

function AiBadge() {
  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">
      AI
    </div>
  )
}

function SnapshotSection({ cards, refDate }: { cards: { label: string; value: string; note: string }[]; refDate?: string }) {
  return (
    <div className="rounded-2xl border border-[#dce4f3] bg-[linear-gradient(180deg,#f8fbff_0%,#f3f6fb_100%)] px-5 py-5">
      {refDate && (
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wide text-[#3a5fd9]">자료 요약</div>
            <div className="mt-1 text-sm font-semibold text-[#364457]">
              학과 게시판 자료를 품질관리·품질연구 준비 흐름에 맞게 다시 정리했습니다.
            </div>
          </div>
          <span className="rounded-full border border-[#d6e0f4] bg-white px-3 py-1 text-[11px] font-semibold text-[#64748b]">
            기준일 {refDate}
          </span>
        </div>
      )}
      <div className="grid gap-3 sm:grid-cols-2">
        {cards.map((item) => (
          <div key={item.label} className="rounded-xl border border-[#c9d9f8] bg-white px-4 py-4">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-[#3a5fd9]">{item.label}</div>
            <div className="mt-2 flex items-end gap-3">
              <div className="text-3xl font-bold text-[#1e2d45]">{item.value}</div>
            </div>
            <div className="mt-2 text-sm leading-6 text-[#64748b]">{item.note}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── 컴포넌트 ──────────────────────────────────────────────────────────────────

export function MockSimulationPage() {
  const [activeTab, setActiveTab] = useState<EmploymentTab>('resource')
  const [openedItem, setOpenedItem] = useState<string | null>(null)

  const resourceRefDate = '2026-03-28'

  const sortedPosts = [
    { no: 'AI', category: '기업분석', title: '[AI 추천] 희창유업 품질관리 직무 합격 가이드', author: 'AI 컨설턴트', date: '26-03-20', views: '1,245', hasAttachment: true, recommended: true },
    { no: 'AI', category: '자격증', title: '[AI 추천] 식품기사 실기 핵심 요약집 (품질관리 특화)', author: 'AI 컨설턴트', date: '26-03-15', views: '3,892', hasAttachment: true, recommended: true },
    ...departmentEmploymentPosts,
  ]
  const previewPosts = sortedPosts.slice(0, 5)

  function handleTabChange(tab: EmploymentTab) {
    setActiveTab(tab)
    setOpenedItem(null)
  }

  return (
    <div className="space-y-4">
      {/* 탭 네비게이션 */}
      <div className="flex overflow-x-auto border-b border-[#dce4f3] bg-white px-2">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleTabChange(tab.id)}
            className={`relative shrink-0 px-5 py-4 text-sm font-semibold transition-colors ${
              activeTab === tab.id
                ? 'text-[#1e2d45]'
                : 'text-[#8a9ab5] hover:text-[#546173]'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-[#f4c45f]" />
            )}
          </button>
        ))}
      </div>

      {/* ── 취업자료실 ── */}
      {activeTab === 'resource' && (
        <SectionCard
          eyebrow="취업자료·기업분석"
          title="취업자료실"
          headerRight={
            <button type="button" className="text-sm font-semibold text-[#3a5fd9]">
              전체 자료 확인
            </button>
          }
        >
          <SnapshotSection cards={resourceSnapshotCards} refDate={resourceRefDate} />

          {/* 자료 분포 */}
          <div className="mt-4 rounded-2xl border border-[#dce4f3] bg-[linear-gradient(180deg,#f8fbff_0%,#f3f6fb_100%)] px-5 py-5">
            <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-xl border border-[#c9d9f8] bg-white px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-[#3a5fd9]">AI 개인화 공지 추천</div>
                    <div className="mt-1 text-sm font-semibold text-[#364457]">수강 이력과 관심 직무 기준으로 지금 확인할 공지를 먼저 골랐습니다.</div>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#eef2fb] px-3 py-1 text-[11px] font-semibold text-[#3a5fd9]">추천 2건</span>
                </div>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {personalizedNoticeRecommendations.map((item) => (
                    <div key={item.title} className="rounded-xl border border-[#dce4f3] bg-[#f8fbff] px-4 py-4">
                      <div className="text-[10px] font-semibold uppercase tracking-wide text-[#7d8798]">{item.category}</div>
                      <div className="mt-2 text-sm font-semibold text-[#344257]">{item.title}</div>
                      <div className="mt-2 text-[11px] leading-5 text-[#64748b]">{item.reason}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-[#dce4f3] bg-white px-4 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-[#7d8798]">자료 분포</div>
                <div className="mt-4 space-y-3">
                  {resourceBreakdown.map((item) => (
                    <div key={item.label} className="rounded-xl border border-[#e8eef6] bg-[#f8fbff] px-4 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-[#344257]">{item.label}</span>
                        <span className="text-sm font-bold text-[#3a5fd9]">{item.value}</span>
                      </div>
                      <div className="mt-1 text-[11px] leading-5 text-[#64748b]">{item.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 최근 등록 콘텐츠 */}
          <div className="mt-5 flex items-center justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-[#364457]">최근 등록 콘텐츠</div>
              <div className="mt-1 text-xs text-[#8a9ab5]">AI 정렬 기준일 {resourceRefDate} · 최근 등록일과 학생 프로필 적합도 반영</div>
            </div>
          </div>

          <div className="space-y-3">
            {previewPosts.map((row, i) => {
              const isOpen = openedItem === row.title
              return (
                <Fragment key={`${row.title}-${i}`}>
                  <div className={`rounded-xl border p-4 transition-colors ${isOpen ? 'border-[#bfd4ff] bg-[#f8fbff]' : 'border-[#dce4f3] bg-white'}`}>
                    <button
                      type="button"
                      onClick={() => setOpenedItem((cur) => (cur === row.title ? null : row.title))}
                      className="w-full text-left"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`rounded px-2 py-0.5 text-[10px] font-semibold ${
                              row.category === '채용공고' ? 'bg-[#e3f0ff] text-[#1a56b0]' :
                              row.category === '기업행사' ? 'bg-[#e8f5e9] text-[#2e7d32]' :
                              row.category === '공모전' ? 'bg-[#fff3e0] text-[#e65100]' :
                              row.category === '기업분석' ? 'bg-[#f3f0ff] text-[#5b3fa6]' :
                              'bg-[#f1f3f7] text-[#546173]'
                            }`}>
                              {row.category}
                            </span>
                            {'recommended' in row && row.recommended ? (
                              <span className="rounded bg-[#3a5fd9] px-2 py-0.5 text-[9px] font-bold uppercase text-white">AI Best</span>
                            ) : null}
                            {row.hasAttachment ? (
                              <span className="rounded bg-[#eef2fb] px-2 py-0.5 text-[10px] font-semibold text-[#64748b]">첨부</span>
                            ) : null}
                          </div>
                          <div className="mt-3 text-[15px] font-semibold leading-6 text-[#344257]">{row.title}</div>
                          <div className="mt-2 flex items-center gap-3 text-[11px] text-[#8a9ab5]">
                            <span>등록일 {row.date}</span>
                            {'views' in row ? <span>조회 {row.views}</span> : null}
                          </div>
                        </div>
                        <div className="shrink-0 rounded-full border border-[#dce4f3] px-2.5 py-1 text-[11px] font-semibold text-[#64748b]">
                          {isOpen ? '요약 닫기' : '요약 보기'}
                        </div>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="mt-4 border-t border-[#e8eef6] pt-4">
                        <div className="rounded-xl border border-[#dce4f3] bg-[#f8fbff] px-4 py-4">
                          <div className="flex items-center gap-2">
                            <AiBadge />
                            <div className="text-[11px] font-semibold uppercase tracking-wide text-[#3a5fd9]">요약본</div>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-[#556276]">
                            {resourceSummaries[row.title] ?? '선택한 콘텐츠의 핵심 내용과 이 학생 시나리오에서 먼저 읽어야 할 포인트를 정리한 요약입니다.'}
                          </p>
                          <div className="mt-3 rounded-lg border border-[#e8eef6] bg-white px-3 py-2 text-[11px] leading-5 text-[#64748b]">
                            식품공학전공 4학년, 품질관리 우선 지원, 식품기사 준비 중인 학생 기준으로 필요한 부분만 먼저 추렸습니다.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Fragment>
              )
            })}
          </div>
        </SectionCard>
      )}

      {/* ── 기업 분석 리포트 ── */}
      {activeTab === 'report' && (
        <SectionCard
          eyebrow="취업자료·기업분석"
          title="기업 분석 리포트"
          headerRight={
            <button type="button" className="text-sm font-semibold text-[#3a5fd9]">
              전체 리포트 보기
            </button>
          }
        >
          <SnapshotSection cards={reportSnapshotCards} />

          {/* AI 분석 안내 */}
          <div className="mt-4 rounded-xl border border-[#c9d9f8] bg-gradient-to-r from-[#eef3ff] to-[#f3f6fb] px-5 py-4">
            <div className="flex items-center gap-2">
              <AiBadge />
              <span className="text-sm font-semibold text-[#364457]">AI 기업 분석 리포트</span>
              <span className="rounded-full bg-[#eef2fb] px-2 py-0.5 text-[11px] font-semibold text-[#3a5fd9]">
                {studentProfile.name} 맞춤
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-[#64748b]">
              관심 직무(품질관리·품질연구)와 전공(식품공학) 기준으로 타깃 기업의 채용 패턴, 선호 스펙, 합격 전략을 분석한 리포트입니다.
            </p>
          </div>

          {/* 리포트 목록 */}
          <div className="mt-5">
            <div className="mb-3 text-sm font-semibold text-[#364457]">분석 리포트 목록</div>
            <div className="space-y-3">
              {companyReports.map((report) => {
                const isOpen = openedItem === report.title
                return (
                  <div
                    key={report.title}
                    className={`rounded-xl border p-4 transition-colors ${isOpen ? 'border-[#bfd4ff] bg-[#f8fbff]' : 'border-[#dce4f3] bg-white'}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenedItem((cur) => (cur === report.title ? null : report.title))}
                      className="w-full text-left"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`rounded px-2 py-0.5 text-[10px] font-semibold ${report.badgeColor}`}>
                              {report.badge}
                            </span>
                            {report.recommended && (
                              <span className="rounded bg-[#3a5fd9] px-2 py-0.5 text-[9px] font-bold uppercase text-white">AI Best</span>
                            )}
                            <span className="rounded bg-[#eef2fb] px-2 py-0.5 text-[10px] font-semibold text-[#3a5fd9]">
                              매칭 {report.aiScore}%
                            </span>
                          </div>
                          <div className="mt-3 text-[15px] font-semibold leading-6 text-[#344257]">{report.title}</div>
                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            <span className="text-[11px] text-[#8a9ab5]">작성일 {report.date}</span>
                            {report.tags.map((tag) => (
                              <span key={tag} className="rounded bg-[#f3f5f9] px-2 py-0.5 text-[10px] text-[#64748b]">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="shrink-0 rounded-full border border-[#dce4f3] px-2.5 py-1 text-[11px] font-semibold text-[#64748b]">
                          {isOpen ? '요약 닫기' : '요약 보기'}
                        </div>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="mt-4 border-t border-[#e8eef6] pt-4 space-y-3">
                        <div className="rounded-xl border border-[#dce4f3] bg-[#f8fbff] px-4 py-4">
                          <div className="flex items-center gap-2">
                            <AiBadge />
                            <div className="text-[11px] font-semibold uppercase tracking-wide text-[#3a5fd9]">분석 요약</div>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-[#556276]">{report.summary}</p>
                        </div>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {report.highlights.map((item) => (
                            <div key={item.label} className="flex gap-3 rounded-lg border border-[#e8eef6] bg-white px-3 py-2 text-sm">
                              <span className="w-20 shrink-0 font-semibold text-[#536174]">{item.label}</span>
                              <span className="text-[#46556c]">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </SectionCard>
      )}

      {/* ── 직무 참고자료 ── */}
      {activeTab === 'reference' && (
        <SectionCard
          eyebrow="취업자료·기업분석"
          title="직무 참고자료"
          headerRight={
            <button type="button" className="text-sm font-semibold text-[#3a5fd9]">
              전체 자료 보기
            </button>
          }
        >
          <SnapshotSection cards={referenceSnapshotCards} />

          {/* AI 안내 */}
          <div className="mt-4 rounded-xl border border-[#c9d9f8] bg-white px-5 py-4">
            <div className="flex items-center gap-2">
              <AiBadge />
              <span className="text-sm font-semibold text-[#364457]">직무 참고자료 큐레이션</span>
              <span className="rounded-full bg-[#eef2fb] px-2 py-0.5 text-[11px] font-semibold text-[#3a5fd9]">
                {studentProfile.name} 맞춤
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-[#64748b]">
              품질관리·품질연구 직무를 목표로 하는 식품공학 4학년 기준으로 꼭 알아야 할 직무 가이드, 자격증 전략, 업무 지식 자료를 정리했습니다.
            </p>
          </div>

          {/* 자료 목록 */}
          <div className="mt-5">
            <div className="mb-3 text-sm font-semibold text-[#364457]">직무 자료 목록</div>
            <div className="space-y-3">
              {jobReferences.map((ref) => {
                const isOpen = openedItem === ref.title
                return (
                  <div
                    key={ref.title}
                    className={`rounded-xl border p-4 transition-colors ${isOpen ? 'border-[#bfd4ff] bg-[#f8fbff]' : 'border-[#dce4f3] bg-white'}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenedItem((cur) => (cur === ref.title ? null : ref.title))}
                      className="w-full text-left"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`rounded px-2 py-0.5 text-[10px] font-semibold ${ref.categoryColor}`}>
                              {ref.category}
                            </span>
                            {ref.recommended && (
                              <span className="rounded bg-[#3a5fd9] px-2 py-0.5 text-[9px] font-bold uppercase text-white">AI Best</span>
                            )}
                          </div>
                          <div className="mt-3 text-[15px] font-semibold leading-6 text-[#344257]">{ref.title}</div>
                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            <span className="text-[11px] text-[#8a9ab5]">등록일 {ref.date}</span>
                            {ref.tags.map((tag) => (
                              <span key={tag} className="rounded bg-[#f3f5f9] px-2 py-0.5 text-[10px] text-[#64748b]">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="shrink-0 rounded-full border border-[#dce4f3] px-2.5 py-1 text-[11px] font-semibold text-[#64748b]">
                          {isOpen ? '요약 닫기' : '요약 보기'}
                        </div>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="mt-4 border-t border-[#e8eef6] pt-4 space-y-3">
                        <div className="rounded-xl border border-[#dce4f3] bg-[#f8fbff] px-4 py-4">
                          <div className="flex items-center gap-2">
                            <AiBadge />
                            <div className="text-[11px] font-semibold uppercase tracking-wide text-[#3a5fd9]">요약본</div>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-[#556276]">{ref.summary}</p>
                        </div>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {ref.keyPoints.map((item) => (
                            <div key={item.label} className="flex gap-3 rounded-lg border border-[#e8eef6] bg-white px-3 py-2 text-sm">
                              <span className="w-20 shrink-0 font-semibold text-[#536174]">{item.label}</span>
                              <span className="text-[#46556c]">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </SectionCard>
      )}

      {/* ── 기업정보 ── */}
      {activeTab === 'company' && (
        <div className="space-y-4">
          {/* AI 채용 패턴 분석 */}
          <div className="rounded-xl border border-[#dce4f3] bg-white px-5 py-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <AiBadge />
              <span className="text-[15px] font-bold text-[#1e2d45]">{studentProfile.targetCompany} 채용 패턴 정밀 분석</span>
              <span className="ml-1 rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white">전략 분석</span>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-[#e8eef6] bg-[#f8fafd] p-4">
                <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#536174]">선호 전공 및 스펙</div>
                <div className="space-y-2">
                  {[
                    { label: '식품공학 전공', value: '매우 선호', color: 'text-[#2e7d32]' },
                    { label: '학점 3.5 이상', value: '82% 합격', color: 'text-[#3a5fd9]' },
                    { label: '주요 자격증', value: '식품기사 필수', color: 'text-[#1e2d45]' },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between text-xs">
                      <span className="text-[#64748b]">{row.label}</span>
                      <span className={`font-bold ${row.color}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-[#e8eef6] bg-[#f8fafd] p-4">
                <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#536174]">채용 시기 및 경쟁</div>
                <div className="space-y-2">
                  {[
                    { label: '주요 공고 시점', value: '4월, 9월', color: 'text-[#3a5fd9]' },
                    { label: '채용 유형', value: '수시/학과추천', color: 'text-[#1e2d45]' },
                    { label: '예상 경쟁률', value: '높음 (15:1)', color: 'text-[#f55d78]' },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between text-xs">
                      <span className="text-[#64748b]">{row.label}</span>
                      <span className={`font-bold ${row.color}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-[#c9d9f8] bg-[linear-gradient(135deg,#eef2fb_0%,#dce4f3_100%)] p-4">
                <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#3a5fd9]">AI 맞춤형 필승 전략</div>
                <p className="text-[11px] font-medium leading-5 text-[#4a5d8a]">
                  희창유업은 학과 게시판을 통한 수시 채용 비중이 매우 높습니다. 4학년 1학기에 식품기사를 반드시 취득하고, 캡스톤 프로젝트의 품질 개선 사례를 강조하여 지도교수 추천 채용을 공략하는 것이 가장 효과적입니다.
                </p>
              </div>
            </div>
          </div>

          {/* 기업 목록 */}
          <div>
            <SectionCard eyebrow="기업정보" title="추천 기업 목록" subtitle="2026-03-27 11:13:49 기준">
              <div className="overflow-hidden rounded-md border border-[#d6def0]">
                <table className="min-w-full border-collapse text-sm">
                  <thead className="bg-[#f3f5f8] text-[#536174]">
                    <tr>
                      {['상태', '기업명', '기업분류', '지역', '매출(억)', '초봉(만)', '상세'].map((col) => (
                        <th key={col} className="px-4 py-3 text-left">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {departmentCompanies.map((row) => (
                      <tr key={row.name} className="border-t border-[#e7edf6] text-[#46556c]">
                        <td className="px-4 py-3">{row.state}</td>
                        <td className="px-4 py-3">{row.name}</td>
                        <td className="px-4 py-3">{row.type}</td>
                        <td className="px-4 py-3">{row.area}</td>
                        <td className="px-4 py-3">{row.sales}</td>
                        <td className="px-4 py-3">{row.pay}</td>
                        <td className="px-4 py-3">
                          <button type="button" className="rounded border border-[#cfd9ea] bg-white px-3 py-1 text-xs font-semibold text-[#536174]">
                            기업 분석
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>
          </div>

          {/* AI 기업 분석 GAP */}
          <div className="rounded-xl border border-[#c9d9f8] bg-gradient-to-r from-[#eef3ff] to-[#f3f6fb] px-5 py-4">
            <div className="mb-3 flex items-center gap-2">
              <AiBadge />
              <span className="text-sm font-semibold text-[#364457]">AI 기업 분석</span>
              <span className="ml-1 rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white">학생 기준 분석</span>
              <span className="ml-auto text-xs text-[#8a9ab5]">관심 기업: {studentProfile.targetCompany}</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wide text-[#536174]">채용 패턴 분석</div>
                {[
                  { label: '채용 시기', value: '상반기 학과게시판 중심 수시채용 비중이 높음' },
                  { label: '선호 전공', value: '식품공학, 식품과학, 생명공학, 화학 관련 전공' },
                  { label: '선호 경험', value: '식품위생 실험, 품질평가, 캡스톤디자인, 공정 실습' },
                  { label: '합격 자격증', value: '식품기사, 위생사, 수산제조기사' },
                ].map((row) => (
                  <div key={row.label} className="flex gap-3 rounded-lg border border-[#e8eef6] bg-[#f8fafd] px-3 py-2 text-sm">
                    <span className="w-24 shrink-0 font-semibold text-[#536174]">{row.label}</span>
                    <span className="text-[#46556c]">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wide text-[#536174]">현재 스펙 대비 GAP</div>
                {[
                  { item: '식품기사 자격증', status: '준비중', color: 'text-[#f55d78]' },
                  { item: '식품위생·품질 실습 경험', status: '핵심 교과 이수 완료, 직무형 서술 보완 필요', color: 'text-[#f0b03f]' },
                  { item: '캡스톤·종합설계 사례', status: '성과 수치 정리 전, 포트폴리오화 필요', color: 'text-[#f0b03f]' },
                  { item: '전공 적합도', status: '식품공학전공 (충족)', color: 'text-[#2e7d32]' },
                ].map((row) => (
                  <div key={row.item} className="flex items-center justify-between rounded-lg border border-[#e8eef6] bg-[#f8fafd] px-3 py-2 text-sm">
                    <span className="text-[#364457]">{row.item}</span>
                    <span className={`text-xs font-semibold ${row.color}`}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
