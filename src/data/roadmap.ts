export type RoadmapMode = 'career' | 'growth' | 'research'
export type RoadmapViewMode = 'detail' | 'yearly'

export type RoadmapTask = {
  description: string
  icon: string
  id: string
  title: string
}

export type RoadmapModeMeta = {
  description: string
  gradient: string
  id: RoadmapMode
  step: string
  title: string
}

export type RoadmapSelection = {
  mode: RoadmapMode
  taskId: string
  viewMode: RoadmapViewMode
}

export const roadmapModes: RoadmapModeMeta[] = [
  {
    id: 'career',
    step: 'step 1.',
    title: '진로설계 로드맵',
    description: '진로적성검사, 목표직업탐색, 직업기초역량진단, 목표가치선정 중심',
    gradient: 'from-[#46a98e] to-[#96c85e]',
  },
  {
    id: 'growth',
    step: 'step 2.',
    title: '경력개발 로드맵',
    description: '진로/취업프로그램, 교과목 정보, 경력포트폴리오 중심',
    gradient: 'from-[#4a8fe5] to-[#63c0ef]',
  },
  {
    id: 'research',
    step: 'step 3.',
    title: '연구수행 로드맵',
    description: '학업계획서, 교수 상담, 연구실적, 시험, 비교과 실적 중심',
    gradient: 'from-[#f2ae55] to-[#f8c07e]',
  },
]

export const roadmapItems: Record<RoadmapMode, RoadmapTask[]> = {
  career: [
    {
      id: 'career-1',
      title: '진로적성검사',
      description: '관심 분야와 적성을 진단해 진로 설계의 방향을 정리합니다.',
      icon: '적성',
    },
    {
      id: 'career-2',
      title: '목표직업탐색',
      description: '희망 직무와 산업군을 탐색하고 목표를 구체화합니다.',
      icon: '탐색',
    },
    {
      id: 'career-3',
      title: '직업기초역량진단',
      description: '기본 역량 수준을 점검하고 보완 포인트를 파악합니다.',
      icon: '역량',
    },
    {
      id: 'career-4',
      title: '목표가치선정',
      description: '진로 결정에 중요한 가치를 정리하고 우선순위를 세웁니다.',
      icon: '가치',
    },
  ],
  growth: [
    {
      id: 'growth-1',
      title: '진로/취업프로그램',
      description: '참여 가능한 프로그램과 일정, 신청 현황을 확인합니다.',
      icon: '프로그램',
    },
    {
      id: 'growth-2',
      title: '교과목 정보',
      description: '직무 역량과 연결된 교과목 정보를 확인하고 수강 계획을 세웁니다.',
      icon: '교과',
    },
    {
      id: 'growth-3',
      title: '경력포트폴리오',
      description: '활동, 프로젝트, 수상 이력 등을 포트폴리오 형태로 관리합니다.',
      icon: '포트폴리오',
    },
  ],
  research: [
    {
      id: 'research-1',
      title: '학업계획서',
      description: '진학과 연구를 위한 학업 계획을 정리하고 점검합니다.',
      icon: '계획',
    },
    {
      id: 'research-2',
      title: '지도교수 배정상담',
      description: '지도교수 배정을 위한 상담을 진행합니다.',
      icon: '상담',
    },
    {
      id: 'research-3',
      title: '연구지도 교과목 상담',
      description: '연구지도 교과목과 이수 계획을 점검합니다.',
      icon: '교과',
    },
    {
      id: 'research-4',
      title: '연구실적',
      description: '논문, 프로젝트, 학술활동 등 연구 실적을 정리합니다.',
      icon: '실적',
    },
    {
      id: 'research-5',
      title: '어학시험/종합시험',
      description: '시험 일정과 준비 현황을 관리합니다.',
      icon: '시험',
    },
    {
      id: 'research-6',
      title: '비교과 실적',
      description: '비교과 활동과 성과를 누적 관리합니다.',
      icon: '비교과',
    },
  ],
}

export const roadmapDescriptions: Record<RoadmapMode, string> = {
  career:
    '진단과 탐색을 통해 진로 방향을 먼저 정리하고, 목표 직무와 필요한 역량을 구체적으로 설정합니다.',
  growth:
    '교과, 프로그램, 포트폴리오를 연결해 취업 준비 이력을 축적하고 관리할 수 있도록 구성했습니다.',
  research:
    '학업계획, 교수 상담, 연구실적, 시험, 비교과 실적을 한 흐름으로 묶어 연구 수행 과정을 체계적으로 관리합니다.',
}

export const defaultRoadmapSelection: RoadmapSelection = {
  mode: 'research',
  taskId: 'research-1',
  viewMode: 'detail',
}

export function getRoadmapModeByTask(taskId: string): RoadmapMode {
  return (
    roadmapModes.find((mode) => roadmapItems[mode.id].some((item) => item.id === taskId))?.id ??
    defaultRoadmapSelection.mode
  )
}
