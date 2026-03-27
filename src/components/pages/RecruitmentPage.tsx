import { SectionCard } from '../ui/SectionCard'

const recruitmentStats = [
  { label: '추천채용', value: '18' },
  { label: '일반채용', value: '142' },
  { label: '인턴채용', value: '37' },
  { label: '채용설명회', value: '6' },
]

const recruitmentRows = [
  { type: '추천채용', company: 'CJ제일제당', role: '식품R&D 신입연구원', deadline: '2026-04-10', status: '접수중', aiScore: 97, aiReason: '전공·관심직무·실험이력 모두 일치, 목표 기업' },
  { type: '일반채용', company: '농심', role: '중앙연구소 신제품개발', deadline: '2026-04-15', status: '접수중', aiScore: 89, aiReason: '전공 일치, 유사 R&D 경로, 선배 진출 사례 확인' },
  { type: '인턴채용', company: '풀무원', role: '기술원 식품연구 인턴', deadline: '2026-04-20', status: '예정', aiScore: 84, aiReason: '관심 직무 일치, 건강기능식품 R&D 연계 가능' },
  { type: '일반채용', company: '오뚜기', role: '품질관리연구원', deadline: '2026-04-25', status: '신청가능', aiScore: 76, aiReason: '전공 일치, QC 경험 연계 가능, 직무 방향 일부 전환 필요' },
]

function AiScoreBadge({ score }: { score: number }) {
  const color =
    score >= 90 ? 'bg-[#e8f5e9] text-[#2e7d32]' :
    score >= 75 ? 'bg-[#e3f0ff] text-[#1a56b0]' :
    'bg-[#f5f5f5] text-[#616161]'

  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${color}`}>
      {score}%
    </span>
  )
}

export function RecruitmentPage() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-[#dce4f3] bg-[#f3f6fb] px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-xs font-bold text-white">
            AI
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#364457]">AI 채용공고 자동 매칭</span>
              <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white">시나리오 시연</span>
            </div>
            <p className="mt-1 text-sm leading-6 text-[#5d6b7e]">
              등록된 프로필(전공: 식품영양학과 / 관심직무: 식품R&D·신제품개발 / 선호지역: 서울·경기)을 기준으로
              현재 공고와의 적합도를 AI가 자동 분석했습니다. 마감 임박 공고는 상단에 우선 배치됩니다.
            </p>
          </div>
        </div>
      </div>

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

      <SectionCard eyebrow="모집 공고" title="AI 매칭 채용 리스트">
        <div className="overflow-hidden rounded-md border border-[#d6def0]">
          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-[#f3f5f8] text-[#536174]">
              <tr>
                <th className="px-4 py-3 text-left">구분</th>
                <th className="px-4 py-3 text-left">기업명</th>
                <th className="px-4 py-3 text-left">모집직무</th>
                <th className="px-4 py-3 text-left">마감일</th>
                <th className="px-4 py-3 text-left">상태</th>
                <th className="px-4 py-3 text-left">AI 매칭도</th>
                <th className="px-4 py-3 text-left">매칭 근거</th>
                <th className="px-4 py-3 text-left">지원</th>
              </tr>
            </thead>
            <tbody>
              {recruitmentRows.map((row) => (
                <tr key={`${row.company}-${row.role}`} className="border-t border-[#e7edf6] text-[#46556c]">
                  <td className="px-4 py-3">{row.type}</td>
                  <td className="px-4 py-3 font-semibold text-[#344257]">{row.company}</td>
                  <td className="px-4 py-3">{row.role}</td>
                  <td className="px-4 py-3">{row.deadline}</td>
                  <td className="px-4 py-3">{row.status}</td>
                  <td className="px-4 py-3">
                    <AiScoreBadge score={row.aiScore} />
                  </td>
                  <td className="px-4 py-3 text-xs text-[#64748b]">{row.aiReason}</td>
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
