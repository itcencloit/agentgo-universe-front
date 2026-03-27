import { certifications, curriculumHighlights, departmentRecruitments, majorSummary, studentProfile } from '../../data/foodEngineering'

const myInfoRows = [
  { label: '이름', value: studentProfile.name },
  { label: '학번', value: studentProfile.studentId },
  { label: '학년', value: studentProfile.grade },
  { label: '소속', value: studentProfile.department },
]

const myCdpCards = [
  { title: '신청 프로그램', value: '9' },
  { title: '관심 프로그램', value: '0' },
  { title: '추천 진행현황', value: '0' },
  { title: '관심 채용행사', value: '0' },
]

const roadmapBoxes = [
  { title: '졸업 후 커리어 설계', status: '설정 필요', icon: '🎓' },
  { title: '목표기업 분석', status: '설정 필요', badge: 'GAP', icon: '🏢' },
  { title: '직업기초역량진단', status: '실시 필요', icon: '📊' },
  { title: '스펙정보', status: '총 0건', icon: '🏆' },
  { title: '목표기업 유사여부', status: '임시 커리어맵', badge: 'GAP', icon: '🔍' },
  { title: '맞춤 채용정보', status: '8건', icon: '💼' },
  { title: '이력서 작성', status: '설정 필요', icon: '📝' },
  { title: '나의 희망진로현황', status: '실시 필요', icon: '🎯' },
]

const programNotices = [
  { label: '마감임박', title: '[삼성웰스토리] 2026년 푸드페스타 사전신청 안내', date: '26-03-25' },
  { label: '신규', title: '대안단백질(Alt Protein) 글로벌 대학(원)생 프로그램 모집', date: '26-03-12' },
  { label: '신규', title: '[참관 안내] CJ프레시웨이 푸드 솔루션 페어 2026', date: '26-03-03' },
]

const jobNotices = [
  { label: '긴급', title: '[엠에스씨] 품질안전팀 신입사원 채용', date: '26-04-09' },
  { label: '신규', title: '[희창유업] 품질관리 신입사원 채용', date: '26-04-12' },
  { label: '신규', title: '[코카콜라] 음료 품질·연구 직무 채용', date: '26-04-18' },
]

const serviceLinks = ['로드맵 설정', '진로설계', curriculumHighlights[3].courses[0], curriculumHighlights[3].courses[3]]

export function DashboardPage() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-[#dce4f3] bg-[#f3f6fb] px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-xs font-bold text-white">
            AI
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-[#364457]">AI 오늘의 브리핑</span>
              <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white">시나리오 시연</span>
              <span className="ml-auto text-xs text-[#8a9ab5]">4학년 1학기 · 목표: {studentProfile.targetCompany}</span>
            </div>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg bg-white border border-[#e0e8f5] p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f55d78] text-[10px] font-bold text-white">1</span>
                  <span className="text-xs font-semibold text-[#f55d78]">긴급 · D-5</span>
                </div>
                <div className="text-sm font-semibold text-[#364457]">{certifications[0].name} 필기 접수</div>
                <div className="mt-1 text-xs text-[#64748b]">품질관리·연구개발 직무 연결도가 가장 높은 핵심 자격증입니다.</div>
              </div>
              <div className="rounded-lg bg-white border border-[#e0e8f5] p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f0b03f] text-[10px] font-bold text-white">2</span>
                  <span className="text-xs font-semibold text-[#f0b03f]">권장</span>
                </div>
                <div className="text-sm font-semibold text-[#364457]">품질·위생 실습 경험 정리</div>
                <div className="mt-1 text-xs text-[#64748b]">식품위생학, HACCP, 품질평가 수업 경험을 직무 역량으로 연결할 시점입니다.</div>
              </div>
              <div className="rounded-lg bg-white border border-[#e0e8f5] p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">3</span>
                  <span className="text-xs font-semibold text-[#3a5fd9]">추천</span>
                </div>
                <div className="text-sm font-semibold text-[#364457]">캡스톤디자인 사례 자소서 반영</div>
                <div className="mt-1 text-xs text-[#64748b]">4학년 전공 프로젝트를 연구개발·공정개선 사례로 정리해둘 필요가 있습니다.</div>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-[#eef2fb] border border-[#d6e0f4] px-4 py-2.5 text-sm text-[#4a5d8a]">
              <span className="font-semibold">AI 로드맵 분석:</span> 현재 8개 로드맵 항목 중 5개가 미설정 상태입니다.
              식품기사 준비와 식품위생·품질 관련 경험 정리를 완료하면 식품 품질·연구 직무 적합도가 84%에서 92%까지 향상될 것으로 예측됩니다.
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md border border-[#d6def0] bg-white p-5 shadow-sm">
        <div className="space-y-5">
          <div className="grid gap-5 lg:grid-cols-2">
            <section className="rounded-md border border-[#d6def0] bg-white">
              <div className="border-b border-[#e4e9f2] px-5 py-3 text-[17px] font-semibold text-[#37455e]">
                <span className="mr-2 inline-block h-4 w-1 bg-[#415d8d] align-middle" />
                My정보
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3 border-b border-[#e4e9f2] pb-4 text-sm md:grid-cols-4">
                  {myInfoRows.map((item) => (
                    <div key={item.label}>
                      <div className="text-[#7b8597]">{item.label}</div>
                      <div className="mt-1 font-semibold text-[#364152]">{item.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-[#617086]">{majorSummary.description}</div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-md bg-[#f3f5f8] px-4 py-3 text-center text-sm text-[#566274]">
                    <div>진로취업상담 (4/4)</div>
                    <div className="mt-1 font-semibold text-[#3b4658]">예약된 상담 없음</div>
                  </div>
                  <div className="rounded-md bg-[#f3f5f8] px-4 py-3 text-center text-sm text-[#566274]">
                    <div>교수님 상담</div>
                    <div className="mt-1 font-semibold text-[#3b4658]">예약된 상담 없음</div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {serviceLinks.map((item) => (
                    <div
                      key={item}
                      className="rounded-md border border-[#dbe3f0] bg-[#f8faff] px-4 py-2 text-sm text-[#4a5f83]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-md border border-[#d6def0] bg-white">
              <div className="border-b border-[#e4e9f2] px-5 py-3 text-[17px] font-semibold text-[#37455e]">
                <span className="mr-2 inline-block h-4 w-1 bg-[#415d8d] align-middle" />
                My CDP
              </div>
              <div className="px-5 py-3 text-right text-sm text-[#6b82ff]">
                2018-02-28까지 상담/프로그램 이용 이력을 확인할 수 있습니다.
              </div>
              <div className="grid grid-cols-2 gap-3 p-4 pt-0">
                {myCdpCards.map((card) => (
                  <div key={card.title} className="rounded-md border border-[#d6def0] bg-white px-5 py-4">
                    <div className="text-[15px] text-[#617086]">{card.title}</div>
                    <div className="mt-2 text-4xl font-bold text-[#314a77]">{card.value}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="rounded-md border border-[#d6def0] bg-white">
            <div className="flex items-center justify-between border-b border-[#e4e9f2] px-5 py-3">
              <div className="text-[17px] font-semibold text-[#37455e]">
                <span className="mr-2 inline-block h-4 w-1 bg-[#415d8d] align-middle" />
                My 커리어 로드맵
              </div>
              <button type="button" className="rounded bg-[#5b86f7] px-3 py-1.5 text-xs font-semibold text-white">
                학년별로드맵 보기
              </button>
            </div>
            <div className="grid grid-cols-2 border-t border-[#eef2f7] md:grid-cols-4">
              {roadmapBoxes.map((item, index) => (
                <div
                  key={item.title}
                  className={`min-h-[114px] border-[#e6ebf4] px-4 py-4 text-center ${
                    index % 4 !== 3 ? 'md:border-r' : ''
                  } ${index < 4 ? 'border-b' : ''}`}
                >
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e1ee] bg-[#f3f6fb] text-xl">
                    {item.icon}
                  </div>
                  <div className="text-sm text-[#7c8799]">{item.title}</div>
                  <div className="mt-2 font-semibold text-[#ff5b76]">{item.status}</div>
                  {item.badge ? (
                    <div className="mt-2 inline-flex rounded bg-[#ff5b76] px-2 py-0.5 text-[10px] font-bold text-white">
                      {item.badge}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <div className="grid gap-5 lg:grid-cols-2">
            <section className="rounded-md border border-[#d6def0] bg-white">
              <div className="flex items-center justify-between border-b border-[#e4e9f2] px-5 py-3">
                <div className="text-[17px] font-semibold text-[#37455e]">
                  <span className="mr-2 inline-block h-4 w-1 bg-[#415d8d] align-middle" />
                  진로/취업프로그램
                </div>
                <button type="button" className="rounded bg-[#5b86f7] px-3 py-1 text-xs text-white">
                  더보기
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2 p-4">
                <div className="rounded-2xl bg-[#5b86f7] px-4 py-4 text-center text-white">
                  <div className="text-4xl font-bold">23</div>
                  <div className="mt-1 text-sm">전체</div>
                </div>
                <div className="rounded-2xl bg-[#f1f3f7] px-4 py-4 text-center text-[#5c6573]">
                  <div className="text-4xl font-bold">3</div>
                  <div className="mt-1 text-sm">진행중</div>
                </div>
                <div className="rounded-2xl bg-[#f1f3f7] px-4 py-4 text-center text-[#5c6573]">
                  <div className="text-4xl font-bold">4</div>
                  <div className="mt-1 text-sm">신청/참여</div>
                </div>
              </div>
              <div className="border-t border-[#e4e9f2] px-4 py-3">
                {programNotices.map((item) => (
                  <div
                    key={`${item.title}-${item.date}`}
                    className="grid grid-cols-[62px_1fr_74px] items-center gap-3 border-b border-[#eef2f7] py-2 last:border-b-0"
                  >
                    <span className="inline-flex w-fit rounded bg-[#ff5b76] px-2 py-0.5 text-[11px] font-semibold text-white">
                      {item.label}
                    </span>
                    <span className="truncate text-sm text-[#41516a]">{item.title}</span>
                    <span className="text-right text-sm text-[#6f7c90]">{item.date}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-md border border-[#d6def0] bg-white">
              <div className="flex items-center justify-between border-b border-[#e4e9f2] px-5 py-3">
                <div className="text-[17px] font-semibold text-[#37455e]">
                  <span className="mr-2 inline-block h-4 w-1 bg-[#415d8d] align-middle" />
                  AI 추천 채용공고
                </div>
                <button type="button" className="rounded bg-[#5b86f7] px-3 py-1 text-xs text-white">
                  더보기
                </button>
              </div>
              <div className="p-4 space-y-2">
                {departmentRecruitments.slice(0, 3).map((row) => {
                  const diff = Math.ceil((new Date(row.deadline).getTime() - Date.now()) / 86400000)
                  const ddLabel = diff <= 0 ? '마감' : `D-${diff}`
                  const ddColor = diff <= 5 ? 'bg-[#fdecea] text-[#c62828]' : 'bg-[#e3f0ff] text-[#1a56b0]'
                  const scoreColor = row.aiScore >= 90 ? 'bg-[#e8f5e9] text-[#2e7d32]' : 'bg-[#e3f0ff] text-[#1a56b0]'
                  return (
                    <div key={row.id} className="flex items-center gap-3 rounded-lg border border-[#e8eef6] bg-[#f8fafd] px-3 py-2.5 hover:border-[#a8c0f0] transition-colors">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-xs font-semibold text-[#364457]">{row.company}</span>
                          <span className="text-[11px] text-[#8a9ab5]">·</span>
                          <span className="truncate text-xs text-[#64748b]">{row.role}</span>
                        </div>
                        <div className="mt-1 flex items-center gap-1.5">
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${ddColor}`}>{ddLabel}</span>
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${scoreColor}`}>AI {row.aiScore}%</span>
                        </div>
                      </div>
                      <button type="button" className="shrink-0 rounded bg-[#3a5fd9] px-2.5 py-1 text-[11px] font-semibold text-white">
                        보기
                      </button>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
