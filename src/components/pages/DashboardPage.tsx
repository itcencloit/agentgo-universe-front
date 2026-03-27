const myInfoRows = [
  { label: '이름', value: '클로잇' },
  { label: '학번', value: '2010304032' },
  { label: '학년', value: '4학년' },
  { label: '소속', value: '식품영양학과' },
]

const myCdpCards = [
  { title: '신청 프로그램', value: '9' },
  { title: '관심 프로그램', value: '0' },
  { title: '추천 진행현황', value: '0' },
  { title: '관심 채용행사', value: '0' },
]

const roadmapBoxes = [
  { title: '졸업 후 커리어 설계', status: '설정 필요' },
  { title: '목표기업 분석', status: '설정 필요', badge: 'GAP' },
  { title: '직업기초역량진단', status: '실시 필요' },
  { title: '스펙정보', status: '총 0건' },
  { title: '목표기업 유사여부', status: '임시 커리어맵', badge: 'GAP' },
  { title: '맞춤 채용정보', status: '8건' },
  { title: '이력서 작성', status: '설정 필요' },
  { title: '나의 희망진로현황', status: '실시 필요' },
]

const programNotices = [
  { label: '진행중', title: 'CJ제일제당 채용연계형 R&D 인턴십 설명회', date: '26-03-15' },
  { label: '진행중', title: '식품기사 취득 집중 대비 프로그램 (필기+실기)', date: '26-03-01' },
  { label: '진행중', title: '식품산업 취업 전략 및 R&D 자소서 특강', date: '26-03-19' },
]

const jobNotices = [
  { label: '긴급', title: '[CJ제일제당] 2026 상반기 식품 R&D 신입 채용', date: '26-04-10' },
  { label: '신규', title: '[농심] 중앙연구소 식품공학 신입연구원 모집', date: '26-04-15' },
  { label: '신규', title: '[풀무원] 기술원 식품연구 인턴 채용', date: '26-04-20' },
]

const serviceLinks = ['로드맵 설정', '진로설계', '경력개발', '직무 탐색']

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
              <span className="ml-auto text-xs text-[#8a9ab5]">4학년 1학기 · 목표: CJ제일제당 R&D</span>
            </div>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg bg-white border border-[#e0e8f5] p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f55d78] text-[10px] font-bold text-white">1</span>
                  <span className="text-xs font-semibold text-[#f55d78]">긴급 · D-5</span>
                </div>
                <div className="text-sm font-semibold text-[#364457]">식품기사 필기 접수</div>
                <div className="mt-1 text-xs text-[#64748b]">CJ제일제당 R&D 합격자 78% 보유 자격증. 다음 시험 D-60.</div>
              </div>
              <div className="rounded-lg bg-white border border-[#e0e8f5] p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f0b03f] text-[10px] font-bold text-white">2</span>
                  <span className="text-xs font-semibold text-[#f0b03f]">권장</span>
                </div>
                <div className="text-sm font-semibold text-[#364457]">연구실 인턴 신청 마감 확인</div>
                <div className="mt-1 text-xs text-[#64748b]">교내 식품연구실 인턴 경험이 자소서 핵심 근거가 됩니다.</div>
              </div>
              <div className="rounded-lg bg-white border border-[#e0e8f5] p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">3</span>
                  <span className="text-xs font-semibold text-[#3a5fd9]">추천</span>
                </div>
                <div className="text-sm font-semibold text-[#364457]">자소서 Q3 경험 노드 연결</div>
                <div className="mt-1 text-xs text-[#64748b]">대체단백질 연구가 Q3 문항과 아직 연결되지 않았습니다.</div>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-[#eef2fb] border border-[#d6e0f4] px-4 py-2.5 text-sm text-[#4a5d8a]">
              <span className="font-semibold">AI 로드맵 분석:</span> 현재 8개 로드맵 항목 중 5개가 미설정 상태입니다. 식품기사 취득과 연구실 인턴을 완료하면 CJ제일제당 R&D 커리어 적합도가 84% → 93%로 향상될 것으로 예측됩니다.
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
                <div className="mt-4 text-sm text-[#617086]">아이티센 교수</div>
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
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e1ee] text-[#8da0bc]">
                    ●
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
                  <div className="text-4xl font-bold">1185</div>
                  <div className="mt-1 text-sm">전체</div>
                </div>
                <div className="rounded-2xl bg-[#f1f3f7] px-4 py-4 text-center text-[#5c6573]">
                  <div className="text-4xl font-bold">4</div>
                  <div className="mt-1 text-sm">진행중</div>
                </div>
                <div className="rounded-2xl bg-[#f1f3f7] px-4 py-4 text-center text-[#5c6573]">
                  <div className="text-4xl font-bold">2</div>
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
                  채용공고/추천채용
                </div>
                <button type="button" className="rounded bg-[#5b86f7] px-3 py-1 text-xs text-white">
                  더보기
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2 p-4">
                <div className="rounded-2xl bg-[#5b86f7] px-4 py-4 text-center text-white">
                  <div className="text-4xl font-bold">5</div>
                  <div className="mt-1 text-sm">추천채용</div>
                </div>
                <div className="rounded-2xl bg-[#f1f3f7] px-4 py-4 text-center text-[#5c6573]">
                  <div className="text-4xl font-bold">92</div>
                  <div className="mt-1 text-sm">일반채용</div>
                </div>
                <div className="rounded-2xl bg-[#f1f3f7] px-4 py-4 text-center text-[#5c6573]">
                  <div className="text-4xl font-bold">33</div>
                  <div className="mt-1 text-sm">인턴채용</div>
                </div>
              </div>
              <div className="border-t border-[#e4e9f2] px-4 py-3">
                {jobNotices.map((item) => (
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
          </div>
        </div>
      </div>
    </div>
  )
}
