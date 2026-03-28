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
} from "../types/unisync";

export const sidebarItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "마이홈",
    description: "학생 맞춤형 현황과 추천 정보를 한눈에 확인합니다.",
  },
  {
    id: "roadmap",
    label: "로드맵",
    description: "학년별 성장 계획과 실행 과제를 단계별로 관리합니다.",
  },
  {
    id: "resumeLab",
    label: "자소서 설계",
    description: "경험 정리부터 문항 작성까지 AI와 함께 준비합니다.",
  },
  {
    id: "pivotLab",
    label: "진로 탐색",
    description: "관심 직무와 전환 가능 경로를 비교해 새로운 방향을 찾습니다.",
  },
  {
    id: "mockSimulation",
    label: "모의 지원",
    description: "채용 정보와 합격 가능성을 바탕으로 지원 전략을 세웁니다.",
  },
];

export const dashboardMetrics: MetricCard[] = [
  {
    title: "커리어 적합도",
    value: "84%",
    description: "코카콜라 음료 품질·연구 직무 기준 종합 정합도",
  },
  {
    title: "보완 필요 항목",
    value: "3",
    description: "식품기사, 캡스톤 문서화, 자소서 초안이 우선 과제입니다.",
  },
  {
    title: "이번 주 추천 활동",
    value: "4",
    description: "식품공학 4학년 1학기 일정에 맞춘 실행 과제입니다.",
  },
];

export const smartFeed: FeedItem[] = [
  {
    category: "추천 액션",
    title: "식품위생학 및 품질평가 실습을 자소서 핵심 사례로 연결해보세요",
    body: "식품위생학, 품질평가, HACCP 수업 흐름을 하나의 사례로 묶으면 희창유업·CJ제일제당 품질 직무 문항 설득력이 높아집니다.",
    cta: "자소서 설계 시작",
    tone: "blue",
  },
  {
    category: "시장 분석",
    title: "식품 품질·안전 직무 채용 수요가 학과 게시판에서 꾸준히 확인됩니다",
    body: "유업, 음료, 가공식품 기업 공고를 보면 부산권 품질관리와 서울권 품질·연구 직무가 동시에 열리고 있어 복수 지원 전략이 유효합니다.",
    tone: "rose",
  },
  {
    category: "선배 경로",
    title: "유사 전공 선배들이 희창유업·코카콜라·삼양그룹으로 진출했습니다",
    body: "식품기사 준비, 품질평가 실습, 캡스톤디자인 정리가 공통적인 취업 준비 요소로 확인되며, 지도교수 추천 채널 활용 빈도도 높습니다.",
    cta: "선배 경로 확인",
    tone: "emerald",
  },
];

export const roadmapSteps: RoadmapStep[] = [
  {
    id: "r1",
    semester: "2026년 1학기",
    focus: "식품기사 접수와 품질관리 중심 지원 방향 확정",
    status: "Completed",
  },
  {
    id: "r2",
    semester: "2026년 여름방학",
    focus: "캡스톤·품질평가 실험 결과를 포트폴리오로 문서화",
    status: "In Progress",
  },
  {
    id: "r3",
    semester: "2026년 2학기",
    focus: "희창유업·코카콜라 기준 자소서 완성 및 모의 지원",
    status: "Next",
  },
];

export const recommendedActions: ActionItem[] = [
  {
    id: "a1",
    title: "식품기사 필기 접수",
    insight:
      "식품공학 계열 품질·연구 직무 지원 시 가장 활용도가 높은 자격증입니다. 다음 시험 일정을 기준으로 우선순위를 높게 유지하세요.",
    skills: ["식품기사", "자격증", "우선순위화"],
    deadline: "이번주",
  },
  {
    id: "a2",
    title: "식품위생·품질관리 실습 경험 정리",
    insight:
      "식품위생학, 품질평가, HACCP 관련 수업 경험을 직무 기준으로 재정리하면 지원서 완성도가 높아집니다.",
    skills: ["품질관리", "위생관리", "경험정리"],
    deadline: "상시",
  },
  {
    id: "a3",
    title: "캡스톤디자인 결과 문서화",
    insight:
      "식품공정제어 또는 캡스톤디자인 결과를 공정개선·품질지표 중심으로 문서화하면 실무 연결성이 높아집니다.",
    skills: ["캡스톤", "문서화", "포트폴리오"],
    deadline: "이번달",
  },
];

export const experienceNodes: ExperienceNode[] = [
  {
    id: "e1",
    title: "식품화학 및 실험 프로젝트",
    category: "Academic",
    tags: ["성분분석", "실험설계", "데이터해석"],
    mappedQuestionId: "q2",
  },
  {
    id: "e2",
    title: "식품미생물학 실험 및 위생관리 학습",
    category: "Academic",
    tags: ["미생물", "위생관리", "실험기록"],
  },
  {
    id: "e3",
    title: "품질관리 직무 지원용 실습 포트폴리오 정리",
    category: "Activity",
    tags: ["HACCP", "품질평가", "리포트"],
    mappedQuestionId: "q1",
  },
  {
    id: "e4",
    title: "캡스톤디자인 공정개선 사례",
    category: "Academic",
    tags: ["공정개선", "협업", "문제해결"],
    mappedQuestionId: "q3",
  },
];

export const resumeQuestions: ResumeQuestion[] = [
  {
    id: "q1",
    prompt: "직무 역량을 가장 잘 보여주는 경험을 설명해 주세요.",
    hint: "실험 설계, 데이터 분석, 결과 도출 과정을 구체적으로 정리하면 설득력이 높아집니다.",
  },
  {
    id: "q2",
    prompt: "문제를 해결했던 과정과 결과를 구체적으로 작성해 주세요.",
    hint: "실험 실패→개선→성공 흐름이 R&D 역량을 잘 보여줍니다.",
  },
  {
    id: "q3",
    prompt: "본인의 강점이 식품 품질·연구 직무에 어떤 가치로 이어지는지 설명해 주세요.",
    hint: "전공 실험, 위생 기준 이해, 공정 개선 경험과 연결해 정리해보세요.",
  },
];

export const pivotMatches: MatchCard[] = [
  {
    id: "m1",
    company: "희창유업 품질관리팀",
    role: "멘토 매칭 추천",
    fit: "96%",
    evidence:
      "식품공학전공과 품질관리 희망 직무, 위생·품질 관련 교과 이력이 멘토 조건과 매우 가깝습니다.",
  },
  {
    id: "m2",
    company: "코카콜라 음료연구팀",
    role: "진로상담 연계",
    fit: "92%",
    evidence: "식품화학, 식품미생물학, 품질평가 기반의 연구 직무 경로와 높은 정합도를 보입니다.",
  },
  {
    id: "m3",
    company: "삼양그룹 식품R&D",
    role: "직무 진단 추천",
    fit: "87%",
    evidence: "식품가공학, 기능성식품학, 캡스톤디자인 경험을 신제품개발 경로로 확장할 수 있습니다.",
  },
];

export const transferableSkills: TransferableSkill[] = [
  {
    id: "t1",
    from: "식품화학 및 실험 수행",
    skill: "데이터 기반 문제해결",
    to: "품질지표 분석 및 원인 추적 업무로 확장",
    evidence:
      "식품화학 실험 6회 이상 수행, 성분 분석 데이터를 바탕으로 원인 가설 수립·검증. 전공 평균 4.12/4.5로 이론 기반 탄탄.",
    interviewTip:
      '"실험 데이터에서 이상값 발견 → 원료 로트 추적 → 원인 특정" 흐름으로 서술하면 품질관리 직무와 직결됩니다. 분석 횟수·오차율 개선 % 등 수치를 포함하세요.',
    consultingCheck: [
      "수치화된 실험 결과가 있는 보고서 1건 선별",
      "분석 → 판단 → 조치 흐름이 드러나는 사례 정리",
      "자소서 2번 문항 연결 여부 확인",
    ],
    relatedCompanies: ["희창유업 품질관리", "CJ제일제당 품질보증", "코카콜라 품질연구"],
  },
  {
    id: "t2",
    from: "식품미생물학 실험 경험",
    skill: "위생 리스크 판단",
    to: "식품안전 및 미생물 관리 업무에 활용",
    evidence:
      "식품미생물학 A 이수, 위생관리 실험 실습 포함. HACCP 7원칙 이론 학습 완료 및 실제 CCP 설정 실습 경험 보유.",
    interviewTip:
      '"미생물 오염 경로 파악 → CCP 설정 → 모니터링 기준 제안" 구조로 답하면 현업 투입 가능한 인상을 줍니다. 실험 중 검출·판정 경험을 구체적으로 연결하세요.',
    consultingCheck: [
      "HACCP 이론 정리 문서 또는 실습 보고서 준비",
      "위생 실험 중 판정 기준 적용 사례 1건 추출",
      "식품위생학 교과 성적·이수 내용 요약",
    ],
    relatedCompanies: ["희창유업 위생관리", "삼양그룹 식품안전팀", "CJ제일제당 식품안전"],
  },
  {
    id: "t3",
    from: "캡스톤디자인 공정개선 사례",
    skill: "공정 기반 개선 제안",
    to: "생산 공정 품질 보증 및 연구 직무에 직접 연결",
    evidence:
      "식품 제조 공정 수율 저하 문제를 팀 단위로 분석하고 개선안 도출. 개선 전·후 수율 비교 데이터 정리 필요.",
    interviewTip:
      '"문제 정의 → 원인 분석 → 개선안 제안 → 결과 검증" 4단계 구조로 서술하고 수율 개선율·불량률 감소 수치를 반드시 포함하세요. 자소서 3번 문항과 직결됩니다.',
    consultingCheck: [
      "캡스톤 최종 보고서에서 수치 결과 섹션 추출",
      "본인 기여 역할(실험 설계 / 데이터 분석 / 발표) 명확히 정리",
      "개선 전·후 비교 수치를 포트폴리오 1장으로 정리",
    ],
    relatedCompanies: ["코카콜라 음료연구", "삼양그룹 R&D", "CJ제일제당 식품연구소"],
  },
];

export const lifecycleScenarios: ScenarioCard[] = [
  {
    id: "s1",
    target: "멘토 탐색",
    headline: "품질관리·음료연구 선배 탐색과 질문 정리",
    summary:
      "희창유업, 코카콜라, 삼양그룹 선배 중 현재 전공 이력과 가장 가까운 멘토를 골라 질문 순서를 정리합니다.",
  },
  {
    id: "s2",
    target: "멘토 상담",
    headline: "멘토 대화 전 준비 문서 정리",
    summary:
      "상담 전에 식품기사 준비 현황, 캡스톤 역할, 품질평가 실험 내용을 정리해 질문의 밀도를 높입니다.",
  },
  {
    id: "s3",
    target: "합격 준비",
    headline: "품질·연구 직무 지원 일정 역산",
    summary:
      "식품기사 취득 시점, 포트폴리오 정리, 자소서 완성 일정을 묶어 실제 지원 가능한 상태로 전환합니다.",
  },
];

export const alumniPath: AlumniPath[] = [
  {
    id: "p1",
    stage: "자료 수집",
    milestone: "희창유업·코카콜라·삼양그룹 등 학과 게시판 채용 패턴과 자격 요건을 정리합니다.",
  },
  {
    id: "p2",
    stage: "기업 탐색",
    milestone: "목표 기업과 유사 식품 기업의 품질·연구 직무를 비교 분석해 지원 전략을 세웁니다.",
  },
  {
    id: "p3",
    stage: "프로그램 연계",
    milestone: "식품기사 취득, 식품위생·품질평가 실습 정리, 캡스톤디자인 문서화 경로를 연결합니다.",
  },
  {
    id: "p4",
    stage: "지원 준비",
    milestone: "모의 지원 결과와 선배 합격 경로를 바탕으로 자소서·면접 전략을 완성합니다.",
  },
];
