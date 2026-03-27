import { SectionCard } from '../ui/SectionCard'

const recruitmentStats = [
  { label: '추천채용', value: '18' },
  { label: '일반채용', value: '142' },
  { label: '인턴채용', value: '37' },
  { label: '채용설명회', value: '6' },
]

const recruitmentRows = [
  { type: '추천채용', company: '네오모빌리티', role: '데이터 전략', deadline: '2026-04-02', status: '접수중' },
  { type: '일반채용', company: '에이스텔레콤', role: '서비스 기획', deadline: '2026-04-05', status: '접수중' },
  { type: '인턴채용', company: '미래에너지솔루션', role: '마케팅 인턴', deadline: '2026-04-09', status: '예정' },
  { type: '채용설명회', company: '한국산업플랫폼', role: '캠퍼스 설명회', deadline: '2026-04-11', status: '신청가능' },
]

export function RecruitmentPage() {
  return (
    <div className="space-y-4">
      <SectionCard eyebrow="채용정보" title="채용 현황">
        <div className="grid gap-3 md:grid-cols-4">
          {recruitmentStats.map((item, index) => (
            <div
              key={item.label}
              className={`rounded-2xl px-4 py-5 text-center ${index === 0 ? 'bg-[#5d84f0] text-white' : 'bg-[#f1f3f7] text-[#546173]'}`}
            >
              <div className="text-sm">{item.label}</div>
              <div className="mt-2 text-4xl font-bold">{item.value}</div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard eyebrow="모집 공고" title="추천 채용 리스트">
        <div className="overflow-hidden rounded-md border border-[#d6def0]">
          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-[#f3f5f8] text-[#536174]">
              <tr>
                <th className="px-4 py-3 text-left">구분</th>
                <th className="px-4 py-3 text-left">기업명</th>
                <th className="px-4 py-3 text-left">모집직무</th>
                <th className="px-4 py-3 text-left">마감일</th>
                <th className="px-4 py-3 text-left">상태</th>
                <th className="px-4 py-3 text-left">지원</th>
              </tr>
            </thead>
            <tbody>
              {recruitmentRows.map((row) => (
                <tr key={`${row.company}-${row.role}`} className="border-t border-[#e7edf6] text-[#46556c]">
                  <td className="px-4 py-3">{row.type}</td>
                  <td className="px-4 py-3">{row.company}</td>
                  <td className="px-4 py-3">{row.role}</td>
                  <td className="px-4 py-3">{row.deadline}</td>
                  <td className="px-4 py-3">{row.status}</td>
                  <td className="px-4 py-3">
                    <button type="button" className="rounded bg-[#316bff] px-3 py-1 text-xs font-semibold text-white">
                      보기
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  )
}
