export const studentProfile = {
  name: '클로잇',
  studentId: '2023304032',
  grade: '4학년',
  department: '식품과학부',
  major: '식품공학전공',
  targetRole: '식품 R&D',
  targetCompany: '코카콜라 음료 품질·연구 직무',
  preferredRegions: ['부산', '경남', '서울'],
}

export const majorSummary = {
  title: '식품공학전공',
  description:
    '식품의 가공, 저장, 품질관리, 위생 및 신제품 개발 역량을 기반으로 식품산업 실무형 인재를 양성합니다.',
}

export const certifications = [
  {
    id: 'cert-1',
    name: '식품기사',
    priority: 'high',
    subjects: ['식품가공학', '식품공학', '식품위생학', '식품화학', '식품저장학', '냉동공학', '식품미생물학', '생화학 및 발효학'],
    relatedJobs: ['식품 R&D', '품질관리', '생산관리'],
  },
  {
    id: 'cert-2',
    name: '수산제조기사',
    priority: 'medium',
    subjects: ['수산가공학', '통조림제조학', '냉동냉장학', '식품위생학', '수산화학'],
    relatedJobs: ['수산가공', '냉동냉장', '품질안전'],
  },
  {
    id: 'cert-3',
    name: '위생사',
    priority: 'medium',
    subjects: ['환경위생학', '위생관계법규', '공중보건학', '식품위생학', '위생곤충학'],
    relatedJobs: ['위생관리', '식품안전', '품질보증'],
  },
]

export const curriculumHighlights = [
  { year: 1, courses: ['식품공학개론', '식품영양학개론', '미생물학', '유기화학'] },
  { year: 2, courses: ['생화학', '식품미생물학', '식품화학및실험', '식품단위조작및실험'] },
  { year: 3, courses: ['식품가공학및실험', '식품공학및실험', '수산가공학및실험', '식품생물공학'] },
  { year: 4, courses: ['식품위생학및종합설계', '식품품질평가및종합설계', '식품공정제어', '캡스톤디자인'] },
]

export const departmentRecruitments = [
  {
    id: 'recruit-1',
    type: '일반채용',
    company: '희창유업',
    role: '품질관리 신입사원',
    deadline: '2026-04-12',
    postedAt: '2025-12-17',
    status: '접수중',
    views: 176,
    aiScore: 95,
    aiReason: '식품공학 전공, 식품위생·품질 교과 및 위생사·식품기사 준비와 직접 연결됩니다.',
  },
  {
    id: 'recruit-2',
    type: '일반채용',
    company: '코카콜라',
    role: '음료 품질·연구 직무',
    deadline: '2026-04-18',
    postedAt: '2025-05-21',
    status: '접수중',
    views: 497,
    aiScore: 93,
    aiReason: '식품화학, 식품미생물학, 품질평가 역량과 가장 높은 정합도를 보입니다.',
  },
  {
    id: 'recruit-3',
    type: '추천채용',
    company: '엠에스씨',
    role: '품질안전팀 신입사원',
    deadline: '2026-04-09',
    postedAt: '2024-12-18',
    status: '마감임박',
    views: 520,
    aiScore: 91,
    aiReason: '식품위생학 및 HACCP 관련 교과와 품질안전 직무가 자연스럽게 연결됩니다.',
  },
  {
    id: 'recruit-4',
    type: '일반채용',
    company: '삼양그룹',
    role: '식품 연구개발 신입',
    deadline: '2026-04-22',
    postedAt: '2024-09-26',
    status: '신청가능',
    views: 511,
    aiScore: 88,
    aiReason: '식품가공학, 기능성식품학, 식품신제품개발론 기반의 R&D 적합도가 높습니다.',
  },
]

export const departmentEmploymentPosts = [
  { category: '기업행사', title: '[삼성웰스토리] 2026년 푸드페스타 사전신청 안내: ~3/31(화) 12시', views: '20', date: '2026-03-25' },
  { category: '공모전', title: '[2026 KT&G 상상마당 코코챌린지] 친환경 화장품 창업 공모전: 3.23~4.23 17시', views: '19', date: '2026-03-25' },
  { category: '프로그램', title: '대안단백질(Alt Protein) 분야 글로벌 대학(원)생 프로그램 참가자 모집', views: '71', date: '2026-03-12' },
  { category: '기업행사', title: '[참관 안내] CJ프레시웨이 푸드 솔루션 페어 2026', views: '153', date: '2026-03-03' },
  { category: '채용공고', title: '(주)희창유업 채용공고', views: '176', date: '2025-12-17' },
  { category: '채용공고', title: '[코카콜라 채용공고]', views: '497', date: '2025-05-21' },
  { category: '채용공고', title: '엠에스씨 품질안전팀 신입사원 채용공고', views: '520', date: '2024-12-18' },
  { category: '채용공고', title: '삼양그룹 신입사원 모집 안내', views: '511', date: '2024-09-26' },
]

export const departmentCompanies = [
  { state: '학과공고', name: '삼성웰스토리', type: '대기업', area: '서울', sales: '비공개', pay: '3,800' },
  { state: '학과공고', name: 'CJ프레시웨이', type: '대기업', area: '서울', sales: '비공개', pay: '3,900' },
  { state: '학과공고', name: '코카콜라', type: '대기업', area: '서울', sales: '비공개', pay: '4,000' },
  { state: '학과공고', name: '희창유업', type: '중견기업', area: '부산', sales: '비공개', pay: '3,500' },
  { state: '학과공고', name: '엠에스씨', type: '중견기업', area: '부산', sales: '비공개', pay: '3,400' },
  { state: '학과공고', name: '삼양그룹', type: '대기업', area: '서울', sales: '비공개', pay: '4,100' },
]

export const mentorProfiles = [
  {
    type: '취업',
    mentor: '김민서',
    company: '희창유업',
    department: '품질관리팀',
    job: '품질관리',
    major: '식품공학전공',
    year: '2024',
    count: '5/5',
    score: 96,
    reason: '동일 전공, 품질관리 직무, 위생·HACCP 교과 연계성이 높습니다.',
  },
  {
    type: '취업',
    mentor: '박지훈',
    company: '코카콜라',
    department: '음료연구팀',
    job: '품질·연구',
    major: '식품공학전공',
    year: '2025',
    count: '3/5',
    score: 92,
    reason: '식품화학·미생물학·품질평가 과목 기반으로 연구 직무 연결이 가능합니다.',
  },
  {
    type: '취업',
    mentor: '이서현',
    company: '삼양그룹',
    department: '식품R&D',
    job: '신제품개발',
    major: '식품공학전공',
    year: '2023',
    count: '10/10',
    score: 87,
    reason: '식품가공, 기능성식품, 캡스톤디자인 경험을 신제품개발로 확장할 수 있습니다.',
  },
]
