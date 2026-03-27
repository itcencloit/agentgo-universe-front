import { useState } from 'react'
import { lifecycleScenarios, pivotMatches, transferableSkills } from '../../data/unisync'
import { SectionCard } from '../ui/SectionCard'

const mentorRows = [
  {
    type: '취업',
    mentor: '김은지',
    company: 'CJ제일제당',
    department: 'R&D센터',
    job: '식품연구개발',
    major: '식품영양학과',
    year: '2023',
    count: '5/5',
  },
  {
    type: '취업',
    mentor: '박성민',
    company: '농심',
    department: '중앙연구소',
    job: '신제품개발',
    major: '식품공학과',
    year: '2024',
    count: '3/5',
  },
  {
    type: '취업',
    mentor: '이수연',
    company: '풀무원',
    department: '기술원',
    job: '식품R&D',
    major: '식품영양학과',
    year: '2025',
    count: '10/10',
  },
]

export function PivotLabPage() {
  const [selectedMatchId, setSelectedMatchId] = useState(pivotMatches[0]?.id ?? '')
  const selectedMatch = pivotMatches.find((match) => match.id === selectedMatchId) ?? pivotMatches[0]

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-[#dce4f3] bg-[#f3f6fb] px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-xs font-bold text-white">AI</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-[#364457]">AI 멘토 자동 매칭</span>
              <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white">시나리오 시연</span>
            </div>
            <p className="mt-1 text-sm text-[#64748b]">전공(식품영양학과)·관심직무(식품 R&D)·실험 이력을 기반으로 현재 활동 중인 멘토와의 적합도를 자동 분석했습니다.</p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {[
                { name: '김은지', company: 'CJ제일제당', job: '식품연구개발', score: 97, reason: '동일 전공·동일 목표 기업·실험 이력 일치' },
                { name: '박성민', company: '농심', job: '신제품개발', score: 89, reason: '식품공학 유사 전공, 대기업 R&D 경로 참고 가능' },
                { name: '이수연', company: '풀무원', job: '식품R&D', score: 84, reason: '동일 전공, 건강기능식품 R&D 경로 유사' },
              ].map(m => (
                <div key={m.name} className="rounded-lg bg-white border border-[#dce4f3] p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-[#364457] text-sm">{m.name}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${m.score >= 90 ? 'bg-[#e8f5e9] text-[#2e7d32]' : m.score >= 80 ? 'bg-[#e3f0ff] text-[#1a56b0]' : 'bg-[#f5f5f5] text-[#616161]'}`}>{m.score}%</span>
                  </div>
                  <div className="mt-1 text-xs text-[#64748b]">{m.company} · {m.job}</div>
                  <div className="mt-2 text-xs text-[#64748b]">{m.reason}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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

      <div className="rounded-xl border border-[#dce4f3] bg-white px-5 py-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">AI</div>
          <span className="text-sm font-semibold text-[#364457]">AI 상담 질문 자동 생성</span>
          <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white ml-1">시나리오 시연</span>
          <span className="ml-auto text-xs text-[#8a9ab5]">선택 멘토: 김은지 (CJ제일제당 · 식품연구개발)</span>
        </div>
        <p className="text-sm text-[#64748b] mb-3">선택한 멘토의 이력과 학생 프로필을 분석해 상담에서 활용할 질문 초안을 생성했습니다.</p>
        <div className="space-y-2">
          {[
            { tag: '직무 이해', q: 'CJ제일제당 R&D에서 신제품 하나를 개발할 때 실제 프로세스(소재 탐색→배합→관능평가)가 어떻게 진행되나요?' },
            { tag: '스펙 조언', q: '식품영양학과 출신으로 CJ제일제당 R&D에 합격하셨는데, 준비 과정에서 가장 결정적이었던 경험은 무엇인가요?' },
            { tag: '자소서 전략', q: '실험 경험을 자소서에서 어떻게 표현했을 때 좋은 반응을 받으셨나요? 수치화 방법이 궁금합니다.' },
            { tag: '준비 시점', q: '4학년 1학기에 식품기사 준비와 연구실 인턴 중 어느 것을 먼저 집중하는 것이 좋을까요?' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg border border-[#e8eef6] bg-[#f8fafd] p-3">
              <span className="mt-0.5 shrink-0 rounded bg-[#eef2fb] px-2 py-0.5 text-[11px] font-semibold text-[#3a5fd9]">{item.tag}</span>
              <span className="text-sm text-[#364457]">{item.q}</span>
            </div>
          ))}
        </div>
      </div>

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
