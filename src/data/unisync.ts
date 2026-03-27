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
  { id: 'dashboard', label: 'MY HOME', description: '학생 포털 대시보드' },
  { id: 'roadmap', label: 'My로드맵', description: '학년별 로드맵과 연구수행' },
  { id: 'resumeLab', label: '자기소개서 설계', description: '프로그램과 문항 설계' },
  { id: 'pivotLab', label: '진로 피벗', description: '졸업선배 멘토링과 전환 근거' },
  { id: 'mockSimulation', label: '모의지원', description: '취업정보와 기업 탐색' },
]

export const dashboardMetrics: MetricCard[] = [
  { title: '커리어 적합도', value: '82%', description: '목표 직무 기준' },
  { title: '보완 필요 항목', value: '3', description: '포트폴리오와 면접 기준' },
  { title: '이번 주 추천 액션', value: '5', description: '즉시 신청 가능한 항목' },
]

export const smartFeed: FeedItem[] = [
  {
    category: '추천 액션',
    title: '경영통계 A+ 프로젝트를 자기소개서 문항과 연결',
    body: '분석 결과와 발표 경험이 데이터 기반 직무의 핵심 근거로 연결됩니다.',
    cta: '자기소개서 설계로 이동',
    tone: 'blue',
  },
  {
    category: '시장 분석',
    title: '브랜드 데이터 분석 직무 수요가 최근 15% 증가',
    body: 'SQL, 대시보드, KPI 해석 경험이 반복적으로 요구되고 있습니다.',
    tone: 'rose',
  },
  {
    category: '선배 경로',
    title: '유사 스펙 졸업선배 8명이 동일 직무로 합격',
    body: '캡스톤 프로젝트, 대외활동, 하계 인턴 경험이 공통으로 확인됩니다.',
    cta: '합격 경로 보기',
    tone: 'emerald',
  },
]

export const roadmapSteps: RoadmapStep[] = [
  { id: 'r1', semester: '2026년 1학기', focus: '학업계획서 작성 및 연구 주제 정리', status: 'Completed' },
  { id: 'r2', semester: '2026년 여름방학', focus: '지도교수 상담과 연구실적 정리', status: 'In Progress' },
  { id: 'r3', semester: '2026년 2학기', focus: '비교과 실적 반영과 종합시험 준비', status: 'Next' },
]

export const recommendedActions: ActionItem[] = [
  {
    id: 'a1',
    title: '학업계획서 초안 제출',
    insight: '연구 수행의 출발점이라 가장 먼저 정리해야 하는 항목입니다.',
    skills: ['학업계획', '연구주제', '기초정리'],
    deadline: 'D-5',
  },
  {
    id: 'a2',
    title: '연구지도 교과목 상담 신청',
    insight: '전공 연구 방향과 교과 이수를 함께 점검할 수 있습니다.',
    skills: ['상담', '교과설계', '연구방향'],
    deadline: 'Open',
  },
  {
    id: 'a3',
    title: '비교과 실적 업데이트',
    insight: '장학, 공모전, 세미나 이력을 최신 상태로 유지해야 합니다.',
    skills: ['실적정리', '서류관리', '증빙'],
    deadline: 'Thu',
  },
]

export const experienceNodes: ExperienceNode[] = [
  { id: 'e1', title: '경영통계 A+ 팀 프로젝트', category: 'Academic', tags: ['분석', '발표', 'KPI'], mappedQuestionId: 'q2' },
  { id: 'e2', title: '교내 데이터 마케팅 동아리 운영', category: 'Activity', tags: ['리더십', '캠페인', '조율'] },
  { id: 'e3', title: '로컬 브랜드 SNS 인턴십', category: 'Internship', tags: ['운영', '리포트', '성과'], mappedQuestionId: 'q1' },
  { id: 'e4', title: '빅데이터 SQL 스터디 리드', category: 'Activity', tags: ['SQL', '교육', '주도'], mappedQuestionId: 'q3' },
]

export const resumeQuestions: ResumeQuestion[] = [
  { id: 'q1', prompt: '직무 역량을 가장 잘 보여주는 경험을 설명해 주세요.', hint: '성과 수치와 본인의 역할을 함께 정리합니다.' },
  { id: 'q2', prompt: '문제를 해결하거나 협업했던 사례를 작성해 주세요.', hint: '문제 상황, 해결 과정, 결과를 순서대로 적습니다.' },
  { id: 'q3', prompt: '본인의 강점이 회사에 어떤 가치로 이어지는지 설명해 주세요.', hint: '지원 기업의 요구 역량과 연결합니다.' },
]

export const pivotMatches: MatchCard[] = [
  { id: 'm1', company: '오퍼레이션팀', role: '멘토링 매칭 추천', fit: '96%', evidence: '현재 전공과 직무 관심사, 멘토 선호 키워드가 가장 가깝습니다.' },
  { id: 'm2', company: '취업지원관', role: '진로상담 연계', fit: '91%', evidence: '상담 이력과 관심 직무 기준으로 우선 연결 대상에 포함됩니다.' },
  { id: 'm3', company: '졸업선배 그룹', role: '직무 간담회 추천', fit: '88%', evidence: '선배 사례와 유사한 활동 패턴이 확인됩니다.' },
]

export const transferableSkills: TransferableSkill[] = [
  { id: 't1', from: '동아리 행사 운영', skill: '이해관계자 조율', to: '멘토링 프로그램 운영 이해' },
  { id: 't2', from: '통계 프로젝트 발표', skill: '인사이트 설명력', to: '직무 질문 정리와 상담 준비' },
  { id: 't3', from: 'SQL 스터디 리드', skill: '구조화된 문제 해결', to: '기업 분석과 지원 전략 수립' },
]

export const lifecycleScenarios: ScenarioCard[] = [
  { id: 's1', target: '멘토 탐색', headline: '선배 멘토 검색과 질문 준비', summary: '직무 키워드와 졸업학과 기준으로 멘토를 탐색하고 질문 주제를 정리합니다.' },
  { id: 's2', target: '멘토 상담', headline: '상담 신청과 답변 관리', summary: '상담 신청 후 답변을 기록하고 후속 액션을 바로 연결합니다.' },
  { id: 's3', target: '후기 활용', headline: '취업·진학 후기에서 경로 추출', summary: '선배 후기를 바탕으로 필요한 활동과 시점을 역산합니다.' },
]

export const alumniPath: AlumniPath[] = [
  { id: 'p1', stage: '자료실', milestone: '취업뉴스와 취업자료실에서 최신 트렌드 확인' },
  { id: 'p2', stage: '기업탐색', milestone: '희망 기업과 지역별 채용 여건을 비교 분석' },
  { id: 'p3', stage: '프로그램', milestone: '진로·취업프로그램에서 필요한 특강과 컨설팅 신청' },
  { id: 'p4', stage: '지원준비', milestone: '모의지원 결과와 선배 경로를 바탕으로 최종 지원 전략 수립' },
]
