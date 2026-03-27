import type {
  ActionItem,
  AlumniPath,
  ExperienceNode,
  FeedItem,
  MatchCard,
  MetricCard,
  ResumeQuestion,
  RoadmapStep,
  ScenarioCard,
  SidebarItem,
  TransferableSkill,
} from '../types/unisync'

export const sidebarItems: SidebarItem[] = [
  { id: 'dashboard', label: '마이홈', description: '학생 맞춤형 현황과 추천 정보를 한눈에 확인합니다.' },
  { id: 'roadmap', label: '로드맵', description: '학년별 성장 계획과 실행 과제를 단계별로 관리합니다.' },
  { id: 'resumeLab', label: '자소서 설계', description: '경험 정리부터 문항 작성까지 AI와 함께 준비합니다.' },
  { id: 'pivotLab', label: '진로 탐색', description: '관심 직무와 전환 가능 경로를 비교해 새로운 방향을 찾습니다.' },
  { id: 'mockSimulation', label: '모의 지원', description: '채용 정보와 합격 가능성을 바탕으로 지원 전략을 세웁니다.' },
]

export const dashboardMetrics: MetricCard[] = [
  { title: '커리어 적합도', value: '82%', description: '목표 직무와 현재 역량의 정합도' },
  { title: '보완 필요 항목', value: '3', description: '이번 학기 집중해야 할 핵심 과제' },
  { title: '이번 주 추천 활동', value: '5', description: '즉시 실행 가능한 성장 액션' },
]

export const smartFeed: FeedItem[] = [
  {
    category: '추천 액션',
    title: '경영통계 A+ 프로젝트를 자소서 핵심 사례로 연결해보세요',
    body: '발표 경험과 데이터 분석 역량이 마케팅 직무 지원 근거로 바로 이어질 수 있습니다.',
    cta: '자소서 설계로 이동',
    tone: 'blue',
  },
  {
    category: '시장 분석',
    title: '브랜드 데이터 분석 직무 수요가 최근 15% 증가했습니다',
    body: 'SQL, 대시보드, KPI 해석 경험을 보유한 지원자에 대한 수요가 빠르게 늘고 있습니다.',
    tone: 'rose',
  },
  {
    category: '선배 경로',
    title: '유사 스펙 선배 8명이 동일 계열 직무로 진출했습니다',
    body: '캡스톤 프로젝트와 대외활동 경험이 공통적인 합격 요소로 확인됩니다.',
    cta: '합격 경로 보기',
    tone: 'emerald',
  },
]

export const roadmapSteps: RoadmapStep[] = [
  { id: 'r1', semester: '2026년 1학기', focus: '진로 계획 수립 및 연구 주제 정리', status: 'Completed' },
  { id: 'r2', semester: '2026년 여름방학', focus: '직무 상담과 실전 경험 정리', status: 'In Progress' },
  { id: 'r3', semester: '2026년 2학기', focus: '비교과 실적 반영 및 종합 포트폴리오 준비', status: 'Next' },
]

export const recommendedActions: ActionItem[] = [
  {
    id: 'a1',
    title: '진로계획서 초안 제출',
    insight: '연구 및 취업 방향의 우선순위를 먼저 정리해두면 다음 단계 연결이 훨씬 쉬워집니다.',
    skills: ['진로계획', '주제정리', '우선순위화'],
    deadline: 'D-5',
  },
  {
    id: 'a2',
    title: '전공 지도교수 상담 요청',
    insight: '전공 기반 연구 방향과 비교과 활동을 함께 설계하면 실행력이 높아집니다.',
    skills: ['상담', '교과연계', '진로설계'],
    deadline: '상시',
  },
  {
    id: 'a3',
    title: '비교과 활동 이력 업데이트',
    insight: '수상, 공모전, 대외활동 기록을 최신 상태로 유지해야 추천 품질이 높아집니다.',
    skills: ['이력정리', '문서관리', '증빙정리'],
    deadline: '목요일',
  },
]

export const experienceNodes: ExperienceNode[] = [
  { id: 'e1', title: '경영통계 A+ 팀 프로젝트', category: 'Academic', tags: ['분석', '발표', 'KPI'], mappedQuestionId: 'q2' },
  { id: 'e2', title: '교내 데이터 마케팅 동아리 운영', category: 'Activity', tags: ['리더십', '캠페인', '조율'] },
  { id: 'e3', title: '로컬 브랜드 SNS 콘텐츠 운영', category: 'Internship', tags: ['운영', '리포트', '성과'], mappedQuestionId: 'q1' },
  { id: 'e4', title: '빅데이터 SQL 스터디 리드', category: 'Activity', tags: ['SQL', '교육', '주도'], mappedQuestionId: 'q3' },
]

export const resumeQuestions: ResumeQuestion[] = [
  { id: 'q1', prompt: '직무 역량을 가장 잘 보여주는 경험을 설명해 주세요.', hint: '성과 수치와 본인의 역할을 함께 정리하면 설득력이 높아집니다.' },
  { id: 'q2', prompt: '문제를 해결했던 과정과 결과를 구체적으로 작성해 주세요.', hint: '문제 상황, 해결 과정, 결과를 순서대로 적는 것이 좋습니다.' },
  { id: 'q3', prompt: '본인의 강점이 회사에 어떤 가치로 이어지는지 설명해 주세요.', hint: '지원 기업의 직무 요구와 연결해서 정리해보세요.' },
]

export const pivotMatches: MatchCard[] = [
  { id: 'm1', company: '스펙트럼랩', role: '멘토 매칭 추천', fit: '96%', evidence: '현재 전공과 희망 직무, 멘토 선호 조건이 매우 가깝습니다.' },
  { id: 'm2', company: '커리어브릿지', role: '진로상담 연계', fit: '91%', evidence: '상담 이력과 관심 직무가 현재 제공 프로그램과 잘 맞습니다.' },
  { id: 'm3', company: '취업전략 그룹', role: '직무 진단 추천', fit: '88%', evidence: '유사 선배 사례와 활동 이력이 높은 적합도를 보입니다.' },
]

export const transferableSkills: TransferableSkill[] = [
  { id: 't1', from: '동아리 행사 운영', skill: '이해관계자 조율', to: '멘토링 프로그램 운영 경험으로 확장' },
  { id: 't2', from: '통계 프로젝트 발표', skill: '인사이트 설명력', to: '직무 질문 정리와 상담 준비에 활용' },
  { id: 't3', from: 'SQL 스터디 리드', skill: '구조화된 문제 해결', to: '기업 분석과 데이터 과제 수행에 연결' },
]

export const lifecycleScenarios: ScenarioCard[] = [
  { id: 's1', target: '멘토 탐색', headline: '산업별 멘토 탐색과 질문 준비', summary: '직무 키워드와 선배 이력을 기반으로 적합한 멘토를 찾고 질문 주제를 정리합니다.' },
  { id: 's2', target: '멘토 상담', headline: '상담 요청과 후속 관리', summary: '상담 요청부터 대화 기록, 후속 액션까지 하나의 흐름으로 관리합니다.' },
  { id: 's3', target: '합격 준비', headline: '지원 단계별 전략 시뮬레이션', summary: '선배 사례를 바탕으로 지원 시점과 준비 항목을 단계적으로 제안합니다.' },
]

export const alumniPath: AlumniPath[] = [
  { id: 'p1', stage: '자료 수집', milestone: '취업 데이터와 최신 사례를 정리해 비교 기준을 마련합니다.' },
  { id: 'p2', stage: '기업 탐색', milestone: '희망 기업과 유사 산업군 채용 흐름을 비교 분석합니다.' },
  { id: 'p3', stage: '프로그램 연계', milestone: '진로·취업 프로그램과 필요한 역량 강화를 연결합니다.' },
  { id: 'p4', stage: '지원 준비', milestone: '모의 지원 결과와 선배 경로를 바탕으로 최종 지원 전략을 수립합니다.' },
]
