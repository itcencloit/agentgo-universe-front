export type RoadmapMode = "career" | "growth" | "research";
export type RoadmapViewMode = "detail" | "yearly";

export type RoadmapTask = {
  description: string;
  icon: string;
  id: string;
  title: string;
};

export type RoadmapModeMeta = {
  description: string;
  gradient: string;
  id: RoadmapMode;
  step: string;
  title: string;
};

export type RoadmapSelection = {
  mode: RoadmapMode;
  taskId: string;
  viewMode: RoadmapViewMode;
};

export const roadmapModes: RoadmapModeMeta[] = [
  {
    id: "career",
    step: "step 1.",
    title: "진로설계 로드맵",
    description: "품질관리·식품연구 직무 탐색, 진단 결과 해석, 목표 기업 설정 중심",
    gradient: "from-[#46a98e] to-[#96c85e]",
  },
  {
    id: "growth",
    step: "step 2.",
    title: "경력개발 로드맵",
    description: "식품기사 준비, 품질·위생 교과 연계, 자소서·포트폴리오 정리 중심",
    gradient: "from-[#4a8fe5] to-[#63c0ef]",
  },
  {
    id: "research",
    step: "step 3.",
    title: "연구수행 로드맵",
    description: "학업계획, 지도교수 상담, 캡스톤·연구실적, 시험 준비 중심",
    gradient: "from-[#f2ae55] to-[#f8c07e]",
  },
];

export const roadmapItems: Record<RoadmapMode, RoadmapTask[]> = {
  career: [
    {
      id: "career-1",
      title: "진로적성검사",
      description: "진단 결과를 바탕으로 식품 품질관리와 식품 연구 직무 중 우선 방향을 정리합니다.",
      icon: "적성",
    },
    {
      id: "career-2",
      title: "목표직업탐색",
      description: "희창유업, 코카콜라음료, CJ제일제당 등 목표 기업과 직무를 구체화합니다.",
      icon: "탐색",
    },
    {
      id: "career-3",
      title: "직업기초역량진단",
      description:
        "직업기초역량진단 결과를 확인하고 서류·면접 준비와 연결할 보완 포인트를 확인합니다.",
      icon: "역량",
    },
    {
      id: "career-4",
      title: "목표가치선정",
      description: "근무 지역, 직무 성장성, 품질·위생 전문성 등 진로 결정 기준을 정리합니다.",
      icon: "가치",
    },
  ],
  growth: [
    {
      id: "growth-1",
      title: "진로/취업프로그램",
      description:
        "식품기사, 품질관리 자소서, 면접 특강 등 현재 참여해야 할 프로그램을 확인합니다.",
      icon: "프로그램",
    },
    {
      id: "growth-2",
      title: "교과목 정보",
      description: "식품위생학, 품질평가, HACCP 관련 교과를 직무 역량과 연결해 정리합니다.",
      icon: "교과",
    },
    {
      id: "growth-3",
      title: "경력포트폴리오",
      description: "캡스톤, 실험, 프로젝트 경험을 품질관리 직무형 포트폴리오로 정리합니다.",
      icon: "포트폴리오",
    },
  ],
  research: [
    {
      id: "research-1",
      title: "학업계획서",
      description:
        "4학년 1학기 기준 남은 전공 과목과 자격 준비를 함께 반영한 학업 계획을 정리합니다.",
      icon: "계획",
    },
    {
      id: "research-2",
      title: "지도교수 배정상담",
      description: "지도교수 배정을 위한 상담을 진행합니다.",
      icon: "상담",
    },
    {
      id: "research-3",
      title: "연구지도 교과목 상담",
      description: "연구지도 교과목과 이수 계획을 점검합니다.",
      icon: "교과",
    },
    {
      id: "research-4",
      title: "연구실적",
      description: "캡스톤디자인, 품질평가 실험, 발표 자료를 연구 실적 형태로 정리합니다.",
      icon: "실적",
    },
    {
      id: "research-5",
      title: "어학시험/종합시험",
      description: "식품기사, 어학시험, 졸업요건 시험 일정을 함께 관리합니다.",
      icon: "시험",
    },
    {
      id: "research-6",
      title: "비교과 실적",
      description: "비교과 활동과 성과를 누적 관리합니다.",
      icon: "비교과",
    },
  ],
};

export const roadmapDescriptions: Record<RoadmapMode, string> = {
  career:
    "진단 결과와 전공 흐름을 기반으로 식품 품질관리·연구 직무 중 우선 경로를 정하고 목표 기업을 구체화합니다.",
  growth:
    "교과, 프로그램, 자격증, 자소서를 연결해 4학년 취업 준비 이력을 실제 지원 가능한 수준으로 끌어올립니다.",
  research:
    "학업계획, 지도교수 상담, 캡스톤 및 시험 준비를 한 흐름으로 묶어 남은 학기 수행 계획을 관리합니다.",
};

export const defaultRoadmapSelection: RoadmapSelection = {
  mode: "research",
  taskId: "research-1",
  viewMode: "detail",
};

export function getRoadmapModeByTask(taskId: string): RoadmapMode {
  return (
    roadmapModes.find((mode) => roadmapItems[mode.id].some((item) => item.id === taskId))?.id ??
    defaultRoadmapSelection.mode
  );
}
