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
  { title: '커리어 적합도', value: '84%', description: '목표 직무와 현재 역량의 정합도' },
  { title: '보완 필요 항목', value: '3', description: '이번 학기 집중해야 할 핵심 과제' },
  { title: '이번 주 추천 활동', value: '4', description: '즉시 실행 가능한 성장 액션' },
]

export const smartFeed: FeedItem[] = [
  {
    category: '추천 액션',
    title: '식품성분분석 실험 보고서를 자소서 핵심 사례로 연결해보세요',
    body: '원료 분석 및 실험 설계 경험이 CJ제일제당 R&D 직무 지원 근거로 직접 연결됩니다.',
    cta: '자소서 설계로 이동',
    tone: 'blue',
  },
  {
    category: '시장 분석',
    title: '식품 R&D 직무 채용 수요가 최근 18% 증가했습니다',
    body: '건강기능식품·대체단백질 분야 R&D 인력 수요가 빠르게 늘고 있으며, 식품기사 보유자가 우대됩니다.',
    tone: 'rose',
  },
  {
    category: '선배 경로',
    title: '유사 스펙 선배 6명이 CJ제일제당·농심 R&D로 진출했습니다',
    body: '식품기사 취득과 교내 연구실 인턴 경험이 공통적인 합격 요소로 확인됩니다.',
    cta: '합격 경로 보기',
    tone: 'emerald',
  },
]

export const roadmapSteps: RoadmapStep[] = [
  { id: 'r1', semester: '2026년 1학기', focus: '진로 계획 수립 및 식품기사 취득 준비', status: 'Completed' },
  { id: 'r2', semester: '2026년 여름방학', focus: '연구실 인턴 수행 및 포트폴리오 정리', status: 'In Progress' },
  { id: 'r3', semester: '2026년 2학기', focus: '자소서 완성 및 CJ제일제당 모의 지원', status: 'Next' },
]

export const recommendedActions: ActionItem[] = [
  {
    id: 'a1',
    title: '식품기사 필기 접수',
    insight: 'CJ제일제당 R&D 합격자의 78%가 식품기사를 보유하고 있습니다. 다음 시험까지 D-60입니다.',
    skills: ['식품기사', '자격증', '우선순위화'],
    deadline: 'D-5',
  },
  {
    id: 'a2',
    title: '지도교수 연구실 인턴 신청',
    insight: '교내 식품연구실 인턴 경험이 자소서 핵심 근거로 연결됩니다. 이번 학기 신청 마감을 확인하세요.',
    skills: ['연구인턴', '실험설계', '연구실적'],
    deadline: '상시',
  },
  {
    id: 'a3',
    title: '대체단백질 연구 보고서 정리',
    insight: '현재 진행 중인 대체단백질 소재 탐색 연구를 자소서 Q3 문항과 연결하는 작업이 필요합니다.',
    skills: ['연구정리', '문서화', '포트폴리오'],
    deadline: '목요일',
  },
]

export const experienceNodes: ExperienceNode[] = [
  { id: 'e1', title: '식품성분분석 A+ 실험 프로젝트', category: 'Academic', tags: ['원료분석', '실험설계', 'GC-MS'], mappedQuestionId: 'q2' },
  { id: 'e2', title: '교내 식품연구 동아리 운영', category: 'Activity', tags: ['리더십', '관능평가', '공동연구'] },
  { id: 'e3', title: '식품기업 품질관리 인턴십', category: 'Internship', tags: ['HACCP', '품질검사', '리포트'], mappedQuestionId: 'q1' },
  { id: 'e4', title: '대체단백질 소재 탐색 연구', category: 'Academic', tags: ['신소재', '문헌고찰', '실험'], mappedQuestionId: 'q3' },
]

export const resumeQuestions: ResumeQuestion[] = [
  { id: 'q1', prompt: '직무 역량을 가장 잘 보여주는 경험을 설명해 주세요.', hint: '실험 설계, 데이터 분석, 결과 도출 과정을 구체적으로 정리하면 설득력이 높아집니다.' },
  { id: 'q2', prompt: '문제를 해결했던 과정과 결과를 구체적으로 작성해 주세요.', hint: '실험 실패→개선→성공 흐름이 R&D 역량을 잘 보여줍니다.' },
  { id: 'q3', prompt: '본인의 강점이 CJ제일제당 R&D에 어떤 가치로 이어지는지 설명해 주세요.', hint: '신제품 개발 파이프라인(소재 탐색→배합→관능평가→출시)과 연결해 정리해보세요.' },
]

export const pivotMatches: MatchCard[] = [
  { id: 'm1', company: 'CJ제일제당 R&D센터', role: '멘토 매칭 추천', fit: '97%', evidence: '식품영양학과 전공과 R&D 희망 직무, 실험 이력이 멘토 조건과 매우 가깝습니다.' },
  { id: 'm2', company: '농심 중앙연구소', role: '진로상담 연계', fit: '89%', evidence: '유사 직무 경로와 식품공학 전공 이력이 일치합니다.' },
  { id: 'm3', company: '풀무원 기술원', role: '직무 진단 추천', fit: '84%', evidence: '건강기능식품 R&D 관심도와 활동 이력이 높은 적합도를 보입니다.' },
]

export const transferableSkills: TransferableSkill[] = [
  { id: 't1', from: '식품성분분석 실험 수행', skill: '데이터 기반 의사결정', to: '신소재 탐색 및 배합 실험 설계로 확장' },
  { id: 't2', from: '관능평가 패널 운영 경험', skill: '소비자 인사이트 도출', to: '신제품 개발 초기 컨셉 검증에 활용' },
  { id: 't3', from: '품질관리 인턴십 HACCP 실무', skill: '규정 기반 문제 해결', to: '생산 공정 품질 보증 업무에 직접 연결' },
]

export const lifecycleScenarios: ScenarioCard[] = [
  { id: 's1', target: '멘토 탐색', headline: '식품업계 R&D 선배 탐색과 질문 준비', summary: '직무 키워드와 선배 이력을 기반으로 CJ제일제당·농심·풀무원 출신 멘토를 찾고 질문 주제를 정리합니다.' },
  { id: 's2', target: '멘토 상담', headline: '상담 요청과 후속 관리', summary: '상담 요청부터 대화 기록, 후속 액션까지 하나의 흐름으로 관리합니다.' },
  { id: 's3', target: '합격 준비', headline: 'R&D 지원 단계별 전략 시뮬레이션', summary: '선배 사례를 바탕으로 식품기사 취득 시점과 자소서 준비 일정을 단계적으로 제안합니다.' },
]

export const alumniPath: AlumniPath[] = [
  { id: 'p1', stage: '자료 수집', milestone: 'CJ제일제당·농심·오뚜기 등 식품 대기업 R&D 채용 패턴과 자격 요건을 정리합니다.' },
  { id: 'p2', stage: '기업 탐색', milestone: '목표 기업과 유사 식품 기업의 R&D 직무를 비교 분석해 지원 전략을 세웁니다.' },
  { id: 'p3', stage: '프로그램 연계', milestone: '식품기사 취득, 관능평가 교육, 연구실 인턴 등 역량 강화 경로를 연결합니다.' },
  { id: 'p4', stage: '지원 준비', milestone: '모의 지원 결과와 선배 합격 경로를 바탕으로 자소서·면접 전략을 완성합니다.' },
]
