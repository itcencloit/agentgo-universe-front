import { departmentRecruitments, studentProfile } from '../../data/foodEngineering'

const roadmapBoxes = [
  { title: '졸업 후 커리어 설계', status: '설정 필요', icon: '🎓', ai: 'AI 설정 분석 중' },
  { title: '목표기업 분석', status: '설정 필요', badge: 'GAP', icon: '🏢', ai: 'AI 기업 분석 80%' },
  { title: '직업기초역량진단', status: '실시 필요', icon: '📊', ai: 'AI 결과 해석 대기' },
  { title: '스펙정보', status: '총 0건', icon: '🏆', ai: 'AI 스펙 매칭 45%' },
  { title: '목표기업 유사여부', status: '임시 커리어맵', badge: 'GAP', icon: '🔍', ai: 'AI 적합도 분석' },
  { title: '맞춤 채용정보', status: '8건', icon: '💼', ai: 'AI 추천 공고 실시간' },
  { title: '이력서 작성', status: '설정 필요', icon: '📝', ai: 'AI 문항 설계 제안' },
  { title: '나의 희망진로현황', status: '실시 필요', icon: '🎯', ai: 'AI 진로 피벗 탐색' },
]

const programNotices = [
  { label: '마감임박', title: '[삼성웰스토리] 2026년 푸드페스타 사전신청 안내', date: '26-03-25' },
  { label: '신규', title: '대안단백질(Alt Protein) 글로벌 대학(원)생 프로그램 모집', date: '26-03-12' },
  { label: '신규', title: '[참관 안내] CJ프레시웨이 푸드 솔루션 페어 2026', date: '26-03-03' },
]

const serviceLinks = ['AI 자기소개서 솔루션', 'AI 면접 솔루션', 'AI 역량검사 (잡다)', '현직자 멘토링 (잇다)']

export function DashboardPage() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
        {/* 좌측: My정보 (요청 내용 반영) */}
        <section className="rounded-md border border-[#d6def0] bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="border-b border-[#e4e9f2] px-5 py-3 text-[17px] font-semibold text-[#37455e] bg-[#f8fafd]">
            <span className="mr-2 inline-block h-4 w-1 bg-[#415d8d] align-middle" />
            My정보
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="grid grid-cols-2 gap-y-4 border-b border-[#e4e9f2] pb-5 text-sm md:grid-cols-4">
              {[
                { label: '이름', value: '클로잇' },
                { label: '학번', value: '2023304032' },
                { label: '학년', value: '4학년' },
                { label: '소속', value: '식품과학부' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-[#7b8597]">{item.label}</div>
                  <div className="mt-1 font-bold text-[#1e2d45]">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-md bg-[#f3f5f8] px-4 py-3 text-center text-sm text-[#566274] border border-[#eef2f6]">
                <div className="text-[11px] uppercase tracking-wider mb-1">진로취업상담 (4/4)</div>
                <div className="font-bold text-[#3b4658]">예약된 상담 없음</div>
              </div>
              <div className="rounded-md bg-[#f3f5f8] px-4 py-3 text-center text-sm text-[#566274] border border-[#eef2f6]">
                <div className="text-[11px] uppercase tracking-wider mb-1">교수님 상담</div>
                <div className="font-bold text-[#3b4658]">예약된 상담 없음</div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {serviceLinks.map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-[#dbe3f0] bg-[#f8fafd] px-3 py-2 text-[11px] font-bold text-[#4a5f83] text-center hover:bg-[#eef4ff] transition-colors cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 우측: AI 커리어 지능 */}
        <section className="rounded-md border border-[#d6def0] bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="border-b border-[#e4e9f2] px-5 py-3 text-[17px] font-semibold text-[#37455e] flex justify-between items-center bg-[#f8fafd]">
            <div>
              <span className="mr-2 inline-block h-4 w-1 bg-[#3a5fd9] align-middle" />
              AI 커리어 지능
            </div>
            <div className="flex items-center gap-1.5">
              <span className="flex h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-[10px] font-bold text-[#10b981] uppercase tracking-wider">실시간 반영</span>
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="grid gap-3 md:grid-cols-[1fr_120px]">
              <div className="rounded-xl border border-[#c9d9f8] bg-[linear-gradient(135deg,#f0f7ff_0%,#eef2fb_100%)] p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#3a5fd9]">전공-직무 연결 분석</div>
                <p className="mt-2 text-xs leading-5 text-[#344257]">
                  식품위생학(A+) 성취도와 품질관리 핵심 역량의 연결도가 높아 현재 직무 전환 기반은 안정적입니다.
                </p>
                <div className="mt-3 rounded-lg bg-white/80 px-3 py-2 text-[11px] text-[#4a5d8a]">
                  기준 직무: {studentProfile.targetCompany}
                </div>
              </div>
              <div className="rounded-xl border border-[#dce4f3] bg-[#fbfcfe] px-4 py-4 text-center">
                <div className="text-[10px] font-bold uppercase tracking-wide text-[#8a9ab5]">합격 가능성</div>
                <div className="mt-3 text-3xl font-black text-[#1e2d45]">78%</div>
                <div className="mt-2 text-[10px] font-bold text-[#059669]">최근 대비 +4%</div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-[#e8eef6] bg-[#f8fbff] px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-bold text-[#364457]">오늘 우선 액션</div>
                <span className="text-[10px] text-[#8a9ab5]">목표: {studentProfile.targetCompany}</span>
              </div>
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                <div className="rounded-lg border border-[#fca5a5] bg-white px-3 py-3">
                  <div className="text-[10px] font-bold text-[#c62828]">긴급 일정</div>
                  <div className="mt-1 text-sm font-semibold text-[#1e2d45]">CJ제일제당 자소서 마감</div>
                  <div className="mt-1 text-[11px] text-[#64748b]">D-4 내 제출 필요</div>
                </div>
                <div className="rounded-lg border border-[#fbbf24] bg-white px-3 py-3">
                  <div className="text-[10px] font-bold text-[#b45309]">보완 과제</div>
                  <div className="mt-1 text-sm font-semibold text-[#1e2d45]">식품기사 원서 접수</div>
                  <div className="mt-1 text-[11px] text-[#64748b]">접수 마감 2026-04-14</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="rounded-md border border-[#d6def0] bg-white p-5 shadow-sm">
        <div className="space-y-5">
          <section className="rounded-md border border-[#d6def0] bg-white">
            <div className="flex items-center justify-between border-b border-[#e4e9f2] px-5 py-3 bg-[#f8fafd]">
              <div className="text-[17px] font-semibold text-[#37455e]">
                <span className="mr-2 inline-block h-4 w-1 bg-[#415d8d] align-middle" />
                My 커리어 로드맵
              </div>
              <button type="button" className="rounded bg-[#5b86f7] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#3a5fd9] transition-colors">
                학년별로드맵 보기
              </button>
            </div>
            <div className="grid grid-cols-2 border-t border-[#eef2f7] md:grid-cols-4">
              {roadmapBoxes.map((item, index) => (
                <div
                  key={item.title}
                  className={`min-h-[120px] border-[#e6ebf4] px-4 py-4 text-center group hover:bg-[#fbfcfe] transition-colors ${
                    index % 4 !== 3 ? 'md:border-r' : ''
                  } ${index < 4 ? 'border-b' : ''}`}
                >
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e1ee] bg-[#f3f6fb] text-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-xs text-[#7c8799] group-hover:text-[#364457]">{item.title}</div>
                  <div className="mt-2 text-[13px] font-bold text-[#ff5b76]">{item.status}</div>
                  <div className="mt-2 flex flex-wrap items-center justify-center gap-1">
                    {item.badge ? (
                      <span className="inline-flex rounded bg-[#ff5b76] px-1.5 py-0.5 text-[9px] font-bold text-white">
                        {item.badge}
                      </span>
                    ) : null}
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-[#eef2fb] px-2 py-0.5 text-[9px] font-bold text-[#3a5fd9] border border-[#dce4f3]">
                      <span className="opacity-70">AI</span> {item.ai.replace('AI ', '')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid gap-5 lg:grid-cols-2">
            <section className="rounded-md border border-[#d6def0] bg-white overflow-hidden shadow-sm">
              <div className="flex items-center justify-between border-b border-[#e4e9f2] px-5 py-3 bg-[#f8fafd]">
                <div className="text-[17px] font-semibold text-[#37455e]">
                  <span className="mr-2 inline-block h-4 w-1 bg-[#415d8d] align-middle" />
                  진로/취업프로그램
                </div>
                <button type="button" className="rounded bg-[#5b86f7] px-3 py-1 text-xs text-white hover:bg-[#3a5fd9]">
                  더보기
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
                    <span className={`inline-flex w-fit rounded px-2 py-0.5 text-[10px] font-bold text-white ${item.label === '마감임박' ? 'bg-[#ff5b76]' : 'bg-[#3a5fd9]'}`}>
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
                  AI 추천 채용공고
                </div>
                <button type="button" className="rounded bg-[#5b86f7] px-3 py-1 text-xs text-white hover:bg-[#3a5fd9]">
                  더보기
                </button>
              </div>
              <div className="p-4 space-y-3">
                {departmentRecruitments.slice(0, 3).map((row) => {
                  const diff = Math.ceil((new Date(row.deadline).getTime() - Date.now()) / 86400000)
                  const ddLabel = diff <= 0 ? '마감' : `D-${diff}`
                  const ddColor = diff <= 5 ? 'bg-[#fdecea] text-[#c62828]' : 'bg-[#e3f0ff] text-[#1a56b0]'
                  const scoreColor = row.aiScore >= 90 ? 'bg-[#e8f5e9] text-[#2e7d32]' : 'bg-[#e3f0ff] text-[#1a56b0]'
                  return (
                    <div key={row.id} className="flex items-center gap-3 rounded-xl border border-[#e8eef6] bg-[#f8fafd] px-4 py-3 hover:border-[#3a5fd9] hover:bg-white transition-all shadow-sm">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold text-[#1e2d45]">{row.company}</span>
                          <span className="text-[10px] text-[#8a9ab5]">|</span>
                          <span className="truncate text-[11px] text-[#64748b] font-medium">{row.role}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <span className={`rounded-lg px-2 py-0.5 text-[9px] font-black tracking-tighter ${ddColor}`}>{ddLabel}</span>
                          <span className={`rounded-lg px-2 py-0.5 text-[9px] font-black tracking-tighter ${scoreColor} border border-current opacity-80`}>AI {row.aiScore}%</span>
                        </div>
                      </div>
                      <button type="button" className="shrink-0 rounded-full bg-[#3a5fd9] px-4 py-1.5 text-[11px] font-bold text-white hover:bg-[#2e4dbf] shadow-sm">
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
