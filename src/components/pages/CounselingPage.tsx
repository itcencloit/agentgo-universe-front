import { SectionCard } from '../ui/SectionCard'

const counselingCards = [
  { title: '기초조사지', description: '상담 전 기본 진로 정보를 입력합니다.' },
  { title: '교수님 상담', description: '학업, 연구, 진학 방향 상담을 예약합니다.' },
  { title: '취업지원관 상담', description: '이력서, 면접, 취업전략 상담을 진행합니다.' },
  { title: '외부컨설턴트 컨설팅', description: '직무별 전문가와 맞춤 컨설팅을 진행합니다.' },
]

const counselingRows = [
  { type: '교수님 상담', advisor: '아이티센 교수', date: '2026-04-01 14:00', status: '예약완료' },
  { type: '취업지원관 상담', advisor: '김지원 컨설턴트', date: '2026-04-03 10:00', status: '대기중' },
]

export function CounselingPage() {
  return (
    <div className="space-y-4">
      <SectionCard eyebrow="상담예약" title="상담 메뉴">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {counselingCards.map((card) => (
            <div key={card.title} className="rounded-md border border-[#dce4f3] bg-[#f8fbff] p-5">
              <div className="text-[17px] font-semibold text-[#344257]">{card.title}</div>
              <div className="mt-3 min-h-[72px] text-sm leading-6 text-[#647387]">{card.description}</div>
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
