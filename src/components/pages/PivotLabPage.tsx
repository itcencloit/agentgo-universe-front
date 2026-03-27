import { useState } from 'react'
import { lifecycleScenarios, pivotMatches, transferableSkills } from '../../data/unisync'
import { SectionCard } from '../ui/SectionCard'

const mentorRows = [
  {
    type: '취업',
    mentor: '김채훈',
    company: '오퍼레이션',
    department: '서비스팀',
    job: 'IT·인터넷',
    major: '사회학과',
    year: '2023',
    count: '5/5',
  },
  {
    type: '취업',
    mentor: '박은진',
    company: '한화에어로스페이스',
    department: '추진단약1팀',
    job: '연구개발·설계',
    major: '화학과',
    year: '2025',
    count: '5/5',
  },
  {
    type: '취업',
    mentor: '한이진',
    company: 'LG에너지솔루션',
    department: '선행개발',
    job: '연구개발·설계',
    major: '신소재공학부',
    year: '2026',
    count: '10/10',
  },
]

export function PivotLabPage() {
  const [selectedMatchId, setSelectedMatchId] = useState(pivotMatches[0]?.id ?? '')
  const selectedMatch = pivotMatches.find((match) => match.id === selectedMatchId) ?? pivotMatches[0]

  return (
    <div className="space-y-4">
      <SectionCard eyebrow="멘토링 검색" title="올해 활동 중인 선배멘토를 검색해 보세요">
        <div className="rounded-md bg-[#dff3fb] px-4 py-4">
          <div className="grid gap-3 md:grid-cols-[1fr_170px_156px]">
            <input
              readOnly
              value="졸업학과, 회사명(학교명), 직무 등 검색 키워드를 입력하세요."
              className="rounded border border-[#d6def0] bg-white px-4 py-3 text-sm text-[#7c8799]"
            />
            <div className="rounded border border-[#d6def0] bg-white px-4 py-3 text-sm text-[#5f6d82]">상세검색</div>
            <button type="button" className="rounded bg-[#5d84f0] px-4 py-3 text-sm font-semibold text-white">
              검색
            </button>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-md border border-[#d6def0]">
          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-[#f3f5f8] text-[#536174]">
              <tr>
                <th className="px-3 py-3 text-left">멘토구분</th>
                <th className="px-3 py-3 text-left">졸업생 멘토</th>
                <th className="px-3 py-3 text-left">회사(학교)</th>
                <th className="px-3 py-3 text-left">부서(학과)</th>
                <th className="px-3 py-3 text-left">직무구분</th>
                <th className="px-3 py-3 text-left">졸업학과</th>
                <th className="px-3 py-3 text-left">졸업년도</th>
                <th className="px-3 py-3 text-left">질문가능횟수</th>
                <th className="px-3 py-3 text-left">신청</th>
              </tr>
            </thead>
            <tbody>
              {mentorRows.map((row) => (
                <tr key={`${row.mentor}-${row.company}`} className="border-t border-[#e7edf6] text-[#46556c]">
                  <td className="px-3 py-3">{row.type}</td>
                  <td className="px-3 py-3">{row.mentor}</td>
                  <td className="px-3 py-3">{row.company}</td>
                  <td className="px-3 py-3">{row.department}</td>
                  <td className="px-3 py-3">{row.job}</td>
                  <td className="px-3 py-3">{row.major}</td>
                  <td className="px-3 py-3">{row.year}</td>
                  <td className="px-3 py-3">{row.count}</td>
                  <td className="px-3 py-3">
                    <button type="button" className="rounded bg-[#6fd2de] px-3 py-1 text-xs font-semibold text-white">
                      질문
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      <div className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
        <SectionCard eyebrow="추천 매칭" title="상담 연결 추천">
          <div className="space-y-3">
            {pivotMatches.map((match) => (
              <button
                key={match.id}
                type="button"
                onClick={() => setSelectedMatchId(match.id)}
                className={`block w-full rounded-md border p-4 text-left ${
                  selectedMatchId === match.id ? 'border-[#bfd4ff] bg-[#eef4ff]' : 'border-[#dce4f3] bg-[#f8fbff]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm text-[#6d7a8e]">{match.company}</div>
                    <div className="mt-1 font-semibold text-[#344257]">{match.role}</div>
                  </div>
                  <div className="rounded bg-[#316bff] px-3 py-1 text-sm font-semibold text-white">{match.fit}</div>
                </div>
                <div className="mt-3 text-sm text-[#647387]">{match.evidence}</div>
              </button>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="상담 준비" title="전환 가능 역량">
          <div className="space-y-3">
            {transferableSkills.map((skill) => (
              <div key={skill.id} className="rounded-md border border-[#dce4f3] bg-[#f8fbff] p-4">
                <div className="text-sm text-[#6d7a8e]">{skill.from}</div>
                <div className="mt-1 font-semibold text-[#344257]">{skill.skill}</div>
                <div className="mt-2 text-sm text-[#647387]">연결 항목: {skill.to}</div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard eyebrow="선택된 매칭" title="매칭 근거">
        <div className="grid gap-4 md:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-md bg-[linear-gradient(135deg,#316bff_0%,#4aa2ff_100%)] p-5 text-white">
            <div className="text-sm text-white/80">{selectedMatch.company}</div>
            <div className="mt-2 text-2xl font-semibold">{selectedMatch.role}</div>
            <div className="mt-4 text-5xl font-bold">{selectedMatch.fit}</div>
          </div>
          <div className="rounded-md border border-[#dce4f3] bg-[#f8fbff] p-5 text-sm leading-7 text-[#556276]">
            {selectedMatch.evidence}
            <div className="mt-4">
              상담 선호도, 질문 주제, 전공 유사도, 활동 이력을 종합해 연결 우선순위를 제안합니다.
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard eyebrow="멘토링 흐름" title="이용 시나리오">
        <div className="grid gap-4 md:grid-cols-3">
          {lifecycleScenarios.map((scenario) => (
            <div key={scenario.id} className="rounded-md border border-[#dce4f3] bg-[#f8fbff] p-4">
              <div className="text-xs font-semibold tracking-[0.14em] text-[#7d8798]">{scenario.target}</div>
              <div className="mt-3 font-semibold text-[#344257]">{scenario.headline}</div>
              <div className="mt-2 text-sm leading-6 text-[#647387]">{scenario.summary}</div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
