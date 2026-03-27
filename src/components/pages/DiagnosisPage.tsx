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
    </div>
  )
}
