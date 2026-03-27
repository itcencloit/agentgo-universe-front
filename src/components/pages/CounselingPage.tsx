import { SectionCard } from '../ui/SectionCard'

const aiSolutionCards = [
  { icon: '📝', title: 'AI 자기소개서 솔루션', description: '직무·기업 맞춤형 자소서 초안 생성 및 피드백을 제공합니다.', tag: 'AI' },
  { icon: '🎤', title: 'AI 면접 솔루션', description: '예상 질문 생성·답변 코칭·모의 면접 시뮬레이션을 진행합니다.', tag: 'AI' },
  { icon: '🌐', title: 'AI 영어 면접 솔루션', description: '영어 면접 빈출 질문 연습 및 발음·표현 피드백을 제공합니다.', tag: 'AI' },
  { icon: '🧠', title: 'AI 역량검사', description: '잡다(JOBDA) 연동 AI 역량검사로 적합 직무를 진단합니다.', tag: '잡다' },
]

const counselingCards = [
  { icon: '📋', title: '기초조사지', description: '상담 전 기본 진로 정보를 입력합니다.', tag: '' },
  { icon: '👩‍🏫', title: '지도교수 상담', description: '학업·연구·진학·전공 방향에 대해 지도교수님과 상담합니다.', tag: '' },
  { icon: '💼', title: '진로취업 상담', description: '이력서·면접·취업전략 전반을 취업지원관과 상담합니다.', tag: '' },
  { icon: '🤝', title: '온라인 현직자 멘토링', description: '잇다(ITDA) 연동 현직자 멘토와 1:1 온라인 멘토링을 진행합니다.', tag: '잇다' },
]

const counselingRows = [
  { type: '교수님 상담', advisor: '아이티센 교수', date: '2026-04-01 14:00', status: '예약완료' },
  { type: '취업지원관 상담', advisor: '김지원 컨설턴트', date: '2026-04-03 10:00', status: '대기중' },
]

export function CounselingPage() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-[#dce4f3] bg-[#f3f6fb] px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-xs font-bold text-white">AI</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-[#364457]">AI 상담 준비 도우미</span>
              <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white">시나리오 시연</span>
            </div>
            <p className="mt-1 text-sm text-[#64748b]">현재 로드맵 미완료 항목과 진단 결과를 분석해 상담 의제와 준비 체크리스트를 자동으로 생성했습니다.</p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg bg-white border border-[#dce4f3] p-4">
                <div className="text-xs font-semibold text-[#3a5fd9] mb-2">AI 추천 상담 유형</div>
                <div className="space-y-2">
                  {[
                    { type: '취업지원관 상담', reason: '취업준비도 68점 — 서류·면접 준비 집중 필요', badge: '1순위', badgeColor: 'bg-[#3a5fd9] text-white' },
                    { type: '교수님 상담', reason: '진로성숙도 74점 — 목표 직무 방향성 구체화', badge: '2순위', badgeColor: 'bg-[#e8eef6] text-[#3a5fd9]' },
                  ].map(item => (
                    <div key={item.type} className="flex items-start gap-2 rounded bg-[#f8fafd] border border-[#e8eef6] px-3 py-2">
                      <span className={`mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold ${item.badgeColor}`}>{item.badge}</span>
                      <div>
                        <div className="text-sm font-semibold text-[#364457]">{item.type}</div>
                        <div className="text-xs text-[#64748b]">{item.reason}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-white border border-[#dce4f3] p-4">
                <div className="text-xs font-semibold text-[#3a5fd9] mb-2">AI 생성 상담 의제</div>
                <div className="space-y-1.5">
                  {[
                    '자소서 Q1 문항 피드백 요청 (식품화학·식품위생 실험 경험 STAR 구조 연결)',
                    '식품기사 필기 시험 D-5 — 접수 완료 여부 확인 및 학습 계획 공유',
                    '캡스톤디자인 결과를 포트폴리오로 정리하는 방법 상의',
                    '희창유업·코카콜라 채용공고 기준 지원 일정 역산',
                  ].map((agenda, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#364457]">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#eef2fb] text-[10px] font-bold text-[#3a5fd9]">{i + 1}</span>
                      {agenda}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-[#eef2fb] border border-[#d6e0f4] px-4 py-2.5">
              <div className="text-xs font-semibold text-[#3a5fd9] mb-1">AI 상담 준비 체크리스트</div>
              <div className="grid gap-1 md:grid-cols-2 text-xs text-[#4a5d8a]">
                {['이력서 최신 버전 출력', '자소서 Q1 초안 준비', '진단 결과 출력 (4종)', '관심 기업 공고 URL 준비'].map(item => (
                  <div key={item} className="flex items-center gap-1.5">
                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded border border-[#3a5fd9] text-[9px] text-[#3a5fd9]">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionCard eyebrow="AI 솔루션" title="취업 솔루션">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {aiSolutionCards.map((card) => (
            <div key={card.title} className="rounded-xl border border-[#c9d9f8] bg-gradient-to-b from-[#eef3ff] to-[#f8fbff] p-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-2xl">{card.icon}</span>
                <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[10px] font-bold text-white">{card.tag}</span>
              </div>
              <div className="text-sm font-bold text-[#1e2d45]">{card.title}</div>
              <div className="mt-2 text-xs leading-5 text-[#647387]">{card.description}</div>
              <button type="button" className="mt-3 w-full rounded-lg bg-[#3a5fd9] py-1.5 text-xs font-semibold text-white hover:bg-[#2e4dbf]">
                시작하기
              </button>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard eyebrow="상담예약" title="상담 메뉴">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {counselingCards.map((card) => (
            <div key={card.title} className="rounded-md border border-[#dce4f3] bg-[#f8fbff] p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{card.icon}</span>
                {card.tag && (
                  <span className="rounded-full bg-[#e8eef6] px-2 py-0.5 text-[10px] font-semibold text-[#3a5fd9]">{card.tag}</span>
                )}
              </div>
              <div className="mt-2 text-[15px] font-semibold text-[#344257]">{card.title}</div>
              <div className="mt-2 min-h-[60px] text-sm leading-6 text-[#647387]">{card.description}</div>
              <button type="button" className="mt-4 rounded bg-[#4d8fa8] px-4 py-2 text-sm font-semibold text-white">
                이동하기
              </button>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard eyebrow="상담현황" title="예약 상태">
        <div className="overflow-hidden rounded-md border border-[#d6def0]">
          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-[#f3f5f8] text-[#536174]">
              <tr>
                <th className="px-4 py-3 text-left">상담구분</th>
                <th className="px-4 py-3 text-left">상담자</th>
                <th className="px-4 py-3 text-left">예약일시</th>
                <th className="px-4 py-3 text-left">상태</th>
              </tr>
            </thead>
            <tbody>
              {counselingRows.map((row) => (
                <tr key={`${row.type}-${row.date}`} className="border-t border-[#e7edf6] text-[#46556c]">
                  <td className="px-4 py-3">{row.type}</td>
                  <td className="px-4 py-3">{row.advisor}</td>
                  <td className="px-4 py-3">{row.date}</td>
                  <td className="px-4 py-3">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  )
}
