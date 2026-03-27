import { SectionCard } from '../ui/SectionCard'

const diagnosisCards = [
  { title: '직업기초역량진단', description: '의사소통, 문제해결, 자원관리 역량을 점검합니다.', score: '82점' },
  { title: '진로성숙도검사', description: '진로결정 수준과 준비도를 확인합니다.', score: '74점' },
  { title: '취업준비도검사', description: '서류, 면접, 정보탐색 준비 상태를 측정합니다.', score: '68점' },
  { title: '직무적성검사', description: '선호 직무와 적합 직무를 비교합니다.', score: '91점' },
]

export function DiagnosisPage() {
  return (
    <div className="space-y-4">
      <SectionCard eyebrow="진단실시" title="역량 진단">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {diagnosisCards.map((card) => (
            <div key={card.title} className="rounded-md border border-[#dce4f3] bg-[#f8fbff] p-5">
              <div className="text-sm font-semibold text-[#6d7a8e]">{card.title}</div>
              <div className="mt-3 text-sm leading-6 text-[#647387]">{card.description}</div>
              <div className="mt-5 text-3xl font-bold text-[#316bff]">{card.score}</div>
              <button type="button" className="mt-4 rounded border border-[#cdd8ec] bg-white px-4 py-2 text-sm font-semibold text-[#536174]">
                결과 보기
              </button>
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="rounded-xl border border-[#dce4f3] bg-[#f3f6fb] px-5 py-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">AI</div>
          <span className="text-sm font-semibold text-[#364457]">AI 진단 결과 종합 해석</span>
          <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white ml-1">시나리오 시연</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white border border-[#dce4f3] p-4">
            <div className="text-xs font-semibold text-[#2e7d32] uppercase tracking-wide mb-3">강점 영역</div>
            <div className="space-y-3">
              {[{ label: '직무적성', score: 91, color: '#2e7d32', pct: '91%' }, { label: '직업기초역량', score: 82, color: '#1a56b0', pct: '82%' }].map(item => (
                <div key={item.label} className="flex items-center justify-between text-sm gap-3">
                  <span className="text-[#364457] shrink-0">{item.label}</span>
                  <div className="flex items-center gap-2 flex-1">
                    <div className="h-2 flex-1 rounded-full bg-[#e8eef6] overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: item.pct, backgroundColor: item.color }} />
                    </div>
                    <span className="text-xs font-bold shrink-0" style={{ color: item.color }}>{item.score}점</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-[#64748b] leading-5">직무 적합도와 기초 역량이 우수합니다. 현재 관심 직무(식품 R&D) 방향성이 적성과 잘 맞습니다.</p>
          </div>

          <div className="rounded-lg bg-white border border-[#dce4f3] p-4">
            <div className="text-xs font-semibold text-[#f55d78] uppercase tracking-wide mb-3">보완 필요 영역</div>
            <div className="space-y-3">
              {[{ label: '취업준비도', score: 68, color: '#f55d78', pct: '68%' }, { label: '진로성숙도', score: 74, color: '#f0b03f', pct: '74%' }].map(item => (
                <div key={item.label} className="flex items-center justify-between text-sm gap-3">
                  <span className="text-[#364457] shrink-0">{item.label}</span>
                  <div className="flex items-center gap-2 flex-1">
                    <div className="h-2 flex-1 rounded-full bg-[#e8eef6] overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: item.pct, backgroundColor: item.color }} />
                    </div>
                    <span className="text-xs font-bold shrink-0" style={{ color: item.color }}>{item.score}점</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-[#64748b] leading-5">서류·면접 준비도와 진로 확신도가 상대적으로 낮습니다. 자소서 완성 및 모의 면접 경험이 필요합니다.</p>
          </div>

          <div className="rounded-lg bg-white border border-[#dce4f3] p-4">
            <div className="text-xs font-semibold text-[#3a5fd9] uppercase tracking-wide mb-3">AI 강화 추천 액션</div>
            <div className="space-y-2">
              {[
                { priority: '1순위', action: '식품기사 필기 접수 (D-5)', reason: '취업준비도 중 자격증 항목 최저, CJ제일제당 R&D 필수 요건' },
                { priority: '2순위', action: 'R&D 자소서 1번 문항 완성', reason: '실험 경험 STAR 구조 정리 미완료' },
                { priority: '3순위', action: '진로 목표 구체화', reason: '진로성숙도 74점, 식품 R&D 세부 직무(신제품개발·소재탐색) 방향 확정 필요' },
              ].map(item => (
                <div key={item.priority} className="rounded bg-[#f8fafd] border border-[#e8eef6] px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-[#3a5fd9]">{item.priority}</span>
                    <span className="text-xs font-semibold text-[#364457]">{item.action}</span>
                  </div>
                  <div className="mt-0.5 text-[11px] text-[#64748b]">{item.reason}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
