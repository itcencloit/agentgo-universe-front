import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InteractionToast } from '../ui/InteractionToast'

const myRoadmapItems = [
  { title: '진로설계', status: '진행', sub: '품질관리 직무 중심', tone: 'text-[#0f9f8f]' },
  { title: '경력개발', status: '진행', sub: '식품기사 준비 중', tone: 'text-[#3a5fd9]' },
  { title: '연구수행', status: '진행', sub: '캡스톤 문서화', tone: 'text-[#f59e0b]' },
  { title: '학년별 로드맵', status: '보기', sub: '4학년 1학기 플랜', tone: 'text-[#7cb342]' },
]

const roadmapBoxes = [
  {
    title: '졸업 후 커리어 설계',
    status: '품질관리 중심',
    icon: '🎓',
    ai: '희창유업·CJ 우선 경로 정리',
  },
  {
    title: '목표기업 분석',
    status: '코카콜라·CJ 비교중',
    badge: 'GAP',
    icon: '🏢',
    ai: 'AI 기업 분석 92%',
  },
  { title: '직업기초역량진단', status: '82점 완료', icon: '📊', ai: '의사소통·문제해결 강점' },
  { title: '스펙정보', status: '총 6건', icon: '🏆', ai: '전공·실험·자격 준비 반영' },
  {
    title: '목표기업 유사여부',
    status: '희창유업 96%',
    badge: 'MATCH',
    icon: '🔍',
    ai: '식품 R&D 직무 적합도 높음',
  },
  { title: '맞춤 채용정보', status: '8건', icon: '💼', ai: 'AI 추천 공고 실시간' },
  { title: '이력서 작성', status: '1차 초안 진행중', icon: '📝', ai: '식품 R&D 자소서 문항 설계' },
  {
    title: '나의 희망진로현황',
    status: '식품 품질·연구',
    icon: '🎯',
    ai: '부산·서울 기업 중심 탐색',
  },
]

const programNotices = [
  { label: '마감임박', title: '식품기사 실기 대비 단기반 신청 마감', date: '26-03-29' },
  { label: '추천', title: '희창유업·코카콜라 품질 직무 자소서 첨삭 프로그램', date: '26-03-24' },
  { label: '신규', title: '캡스톤 결과 수치화 포트폴리오 특강', date: '26-03-21' },
]

const completionStatus = [
  { label: '총 이수학점', value: '98학점', tone: 'text-[#1e2d45]' },
  { label: '전공 이수', value: '54학점', tone: 'text-[#1e2d45]' },
  { label: '교양 이수', value: '32학점', tone: 'text-[#1e2d45]' },
  { label: '졸업 요건', value: '미충족', tone: 'text-[#c2410c]' },
]

const semesterCourses = [
  { category: '전공필수', title: '식품위생학', credit: '3학점', grade: 'A+' },
  { category: '전공선택', title: '식품미생물학', credit: '3학점', grade: 'A' },
  { category: '교양', title: '기술창업과 진로설계', credit: '2학점', grade: 'B+' },
  { category: '전공필수', title: '식품가공학', credit: '3학점', grade: 'A' },
  { category: '전공선택', title: '식품분석학', credit: '3학점', grade: 'B+' },
  { category: '전공선택', title: '발효식품학', credit: '3학점', grade: 'A-' },
  { category: '전공필수', title: '식품화학', credit: '3학점', grade: 'B+' },
  { category: '교양', title: '영어회화', credit: '2학점', grade: 'A' },
  { category: '전공선택', title: '식품품질관리학', credit: '3학점', grade: 'A+' },
]

const COURSES_PER_PAGE = 4

const campusNotices = [
  { tag: '학교', title: '2026학년도 1학기 수강정정 일정 안내', date: '2026-03-28' },
  { tag: '학과', title: '식품과학부 현장실습 신청자 서류 제출 공지', date: '2026-03-27' },
  { tag: '학사', title: '졸업예정자 이수구분 확인 및 정정 기간 안내', date: '2026-03-25' },
]

const lookupTimestamp = '2026-03-27 11:13:49 기준'

export function DashboardPage() {
  const [coursePage, setCoursePage] = useState(0)
  const [feedback, setFeedback] = useState<string | null>(null)
  const navigate = useNavigate()
  const totalCoursePages = Math.ceil(semesterCourses.length / COURSES_PER_PAGE)
  const pagedCourses = semesterCourses.slice(
    coursePage * COURSES_PER_PAGE,
    (coursePage + 1) * COURSES_PER_PAGE,
  )

  useEffect(() => {
    if (!feedback) return
    const timer = window.setTimeout(() => setFeedback(null), 1800)
    return () => window.clearTimeout(timer)
  }, [feedback])

  return (
    <div className="space-y-4">
      <InteractionToast message={feedback} />
      <div className="grid gap-4 lg:grid-cols-2">
        {/* 좌측: My정보 (요청 내용 반영) */}
        <section className="rounded-md border border-[#d6def0] bg-white shadow-sm overflow-hidden flex flex-col lg:min-h-[420px]">
          <div className="border-b border-[#e4e9f2] px-5 py-3 text-[17px] font-semibold text-[#37455e] bg-[#f8fafd]">
            <span className="mr-2 inline-block h-4 w-1 bg-[#415d8d] align-middle" />
            <span>My정보</span>
            <div className="mt-1 text-[11px] font-normal text-[#8a9ab5]">{lookupTimestamp}</div>
          </div>
          <div className="p-5 flex flex-1 flex-col">
            <div className="grid grid-cols-2 gap-y-4 border-b border-[#e4e9f2] pb-5 text-sm md:grid-cols-4">
              {[
                { label: '이름', value: '클로잇' },
                { label: '학번', value: '2023304032' },
                { label: '학년', value: '4학년' },
                { label: '소속', value: '식품공학과' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-[#7b8597]">{item.label}</div>
                  <div className="mt-1 font-bold text-[#1e2d45]">{item.value}</div>
                </div>
              ))}
            </div>
            {/* My로드맵 */}
            <div className="mt-5 border-b border-[#e4e9f2] pb-5">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[#7b8597]">
                My로드맵
              </div>
              <div className="grid grid-cols-2 gap-2">
                {myRoadmapItems.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() =>
                      setFeedback(`${item.title} 항목을 기준으로 다음 준비 흐름을 확인합니다.`)
                    }
                    className="rounded-md border border-[#e4e9f2] bg-[#f8fafd] px-3 py-3 text-left hover:border-[#c9d9f8] hover:bg-[#eef4ff] transition-colors"
                  >
                    <div className={`text-xs font-bold ${item.tone}`}>{item.title}</div>
                    <div className="mt-0.5 text-[10px] font-semibold text-[#7b8597]">
                      {item.status}
                    </div>
                    <div className="mt-1 text-[10px] text-[#a0aec0] leading-snug">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 우측: 나의 이수현황 */}
        <section className="rounded-md border border-[#d6def0] bg-white shadow-sm overflow-hidden flex flex-col lg:min-h-[420px]">
          <div className="border-b border-[#e4e9f2] px-5 py-3 text-[17px] font-semibold text-[#37455e] bg-[#f8fafd] flex items-center justify-between gap-3">
            <div>
              <span className="mr-2 inline-block h-4 w-1 bg-[#415d8d] align-middle" />
              <span>나의 이수현황</span>
              <div className="mt-1 text-[11px] font-normal text-[#8a9ab5]">{lookupTimestamp}</div>
            </div>
            <button
              type="button"
              onClick={() => navigate('/diagnosis')}
              className="text-[11px] font-semibold text-[#5b86f7] hover:text-[#3a5fd9]"
            >
              더보기&gt;
            </button>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="grid grid-cols-4 gap-2">
              {completionStatus.map((item) => (
                <div
                  key={item.label}
                  className="rounded-md border border-[#e4e9f2] bg-[#f8fafd] px-3 py-3 text-center"
                >
                  <div className="text-[10px] text-[#7b8597] truncate">{item.label}</div>
                  <div className={`mt-1.5 text-[15px] font-bold ${item.tone} whitespace-nowrap`}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-md border border-[#e4e9f2] bg-white overflow-hidden">
              <div className="grid grid-cols-[72px_1fr_64px_56px] bg-[#f3f6fb] px-4 py-2 text-[11px] font-semibold text-[#6b778c]">
                <span>이수구분</span>
                <span>과목명</span>
                <span>학점</span>
                <span>성적</span>
              </div>
              <div className="divide-y divide-[#eef2f7]">
                {pagedCourses.map((course) => (
                  <div
                    key={course.title}
                    className="grid grid-cols-[72px_1fr_64px_56px] items-center px-4 py-3 text-sm text-[#41516a]"
                  >
                    <span className="text-[11px] font-medium text-[#7b8597]">
                      {course.category}
                    </span>
                    <span className="font-medium text-[#1e2d45]">{course.title}</span>
                    <span>{course.credit}</span>
                    <span className="font-bold text-[#3a5fd9]">{course.grade}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 flex items-center justify-center gap-1.5">
              {Array.from({ length: totalCoursePages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCoursePage(i)}
                  className={`rounded-full transition-colors ${
                    i === coursePage
                      ? 'h-2 w-2 bg-[#3a5fd9]'
                      : 'h-1.5 w-1.5 bg-[#d0d9ea] hover:bg-[#a0b0cc]'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="space-y-5">
        <section className="rounded-md border border-[#d6def0] bg-white">
          <div className="flex items-center justify-between border-b border-[#e4e9f2] px-5 py-3 bg-[#f8fafd]">
            <div className="text-[17px] font-semibold text-[#37455e]">
              <span className="mr-2 inline-block h-4 w-1 bg-[#415d8d] align-middle" />
              My 커리어 로드맵
            </div>
            <button
              type="button"
              onClick={() => navigate('/roadmap')}
              className="rounded bg-[#5b86f7] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#3a5fd9] transition-colors"
            >
              학년별 로드맵 확인
            </button>
          </div>
          <div className="grid grid-cols-2 border-t border-[#eef2f7] md:grid-cols-4">
            {roadmapBoxes.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => {
                  if (item.title === '이력서 작성') {
                    navigate('/resume-lab')
                  } else if (item.title === '맞춤 채용정보') {
                    navigate('/recruitment')
                  } else if (item.title === '목표기업 분석') {
                    navigate('/employment')
                  } else if (item.title === '직업기초역량진단') {
                    navigate('/diagnosis')
                  } else {
                    setFeedback(`${item.title} 영역은 현재 선택 기준에 맞춰 확장할 수 있습니다.`)
                  }
                }}
                className={`flex flex-col items-center border-[#e6ebf4] px-4 py-4 text-center group hover:bg-[#fbfcfe] transition-colors ${
                  index % 4 !== 3 ? 'md:border-r' : ''
                } ${index < 4 ? 'border-b' : ''} ${item.title === '이력서 작성' ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e1ee] bg-[#f3f6fb] text-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-xs text-[#7c8799] group-hover:text-[#364457]">
                  {item.title}
                </div>
                <div className="mt-2 text-[13px] font-bold text-[#ff5b76]">{item.status}</div>
                <div className="mt-2 flex h-[22px] flex-wrap items-center justify-center gap-1">
                  {item.badge ? (
                    <span className="inline-flex rounded bg-[#ff5b76] px-1.5 py-0.5 text-[9px] font-bold text-white">
                      {item.badge}
                    </span>
                  ) : null}
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-[#eef2fb] px-2 py-0.5 text-[9px] font-bold text-[#3a5fd9] border border-[#dce4f3]">
                    <span className="opacity-70">AI</span> {item.ai.replace('AI ', '')}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <div className="grid gap-5 lg:grid-cols-2">
          <section className="rounded-md border border-[#d6def0] bg-white overflow-hidden shadow-sm">
            <div className="flex items-center justify-between border-b border-[#e4e9f2] px-5 py-3 bg-[#f8fafd]">
              <div className="text-[17px] font-semibold text-[#37455e]">
                <span className="mr-2 inline-block h-4 w-1 bg-[#415d8d] align-middle" />
                <span>진로/취업프로그램</span>
                <div className="mt-1 text-[11px] font-normal text-[#8a9ab5]">{lookupTimestamp}</div>
              </div>
              <button
                type="button"
                onClick={() => setFeedback('진로·취업 프로그램 전체 목록으로 이어지는 버튼입니다.')}
                className="text-[11px] font-semibold text-[#5b86f7] hover:text-[#3a5fd9]"
              >
                더보기&gt;
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 p-4">
              <div className="rounded-2xl bg-[#5b86f7] px-4 py-4 text-center text-white shadow-sm">
                <div className="text-4xl font-black">23</div>
                <div className="mt-1 text-xs opacity-90">전체</div>
              </div>
              <div className="rounded-2xl bg-[#f1f3f7] px-4 py-4 text-center text-[#5c6573] border border-[#e2e8f0]">
                <div className="text-4xl font-black text-[#3a5fd9]">3</div>
                <div className="mt-1 text-xs">진행중</div>
              </div>
              <div className="rounded-2xl bg-[#f1f3f7] px-4 py-4 text-center text-[#5c6573] border border-[#e2e8f0]">
                <div className="text-4xl font-black text-[#10b981]">4</div>
                <div className="mt-1 text-xs">신청/참여</div>
              </div>
            </div>
            <div className="border-t border-[#e4e9f2] px-4 py-2 bg-[#fdfefe]">
              {programNotices.map((item) => (
                <div
                  key={`${item.title}-${item.date}`}
                  className="grid grid-cols-[62px_1fr_74px] items-center gap-3 border-b border-[#eef2f7] py-2.5 last:border-b-0 hover:bg-[#f8fbff] transition-colors rounded px-1"
                >
                  <span
                    className={`inline-flex w-fit rounded px-2 py-0.5 text-[10px] font-bold text-white ${item.label === '마감임박' ? 'bg-[#ff5b76]' : 'bg-[#3a5fd9]'}`}
                  >
                    {item.label}
                  </span>
                  <span className="truncate text-sm text-[#41516a] font-medium">{item.title}</span>
                  <span className="text-right text-[11px] text-[#8a9ab5]">{item.date}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-md border border-[#d6def0] bg-white overflow-hidden shadow-sm">
            <div className="flex items-center justify-between border-b border-[#e4e9f2] px-5 py-3 bg-[#f8fafd]">
              <div className="text-[17px] font-semibold text-[#37455e]">
                <span className="mr-2 inline-block h-4 w-1 bg-[#415d8d] align-middle" />
                <span>공지사항</span>
                <div className="mt-1 text-[11px] font-normal text-[#8a9ab5]">{lookupTimestamp}</div>
              </div>
              <button
                type="button"
                onClick={() => setFeedback('학교·학과 공지 전체 목록으로 이어지는 버튼입니다.')}
                className="text-[11px] font-semibold text-[#5b86f7] hover:text-[#3a5fd9]"
              >
                더보기&gt;
              </button>
            </div>
            <div className="p-4 space-y-3">
              {campusNotices.map((notice) => (
                <div
                  key={`${notice.title}-${notice.date}`}
                  className="rounded-xl border border-[#e8eef6] bg-[#f8fafd] px-4 py-3 hover:border-[#cfd9eb] hover:bg-white transition-colors"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded bg-[#e7eefb] px-2 py-0.5 text-[10px] font-bold text-[#3a5fd9]">
                      {notice.tag}
                    </span>
                    <span className="text-[11px] text-[#8a9ab5]">{notice.date}</span>
                  </div>
                  <div className="mt-2 text-sm font-medium text-[#1e2d45]">{notice.title}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
