import { useState } from 'react'
import { pivotMatches, transferableSkills } from '../../data/unisync'
import { mentorProfiles } from '../../data/foodEngineering'
import { SectionCard } from '../ui/SectionCard'

export function PivotLabPage() {
  const [selectedMatchId, setSelectedMatchId] = useState(pivotMatches[0]?.id ?? '')
  const [selectedMentorName, setSelectedMentorName] = useState<string | null>(null)

  // 김민서 멘토 데이터 (요청 사양 반영)
  const minseoMentor = {
    mentor: '김민서',
    company: '희창유업',
    job: '품질관리',
    score: 96,
    summary: '부산 식품기업 품질관리 직무에 입사해 원료 입고 검사, 공정 위생 점검, 클레임 원인 분석을 담당하고 있습니다.',
    advice: '식품위생학, 품질평가 실험, 캡스톤 결과를 한 흐름으로 묶어 설명하면 서류 설득력이 높아집니다.',
    prep: ['식품기사 준비', '품질관리 자소서', '실험 결과 수치화'],
    faq: [
      '현업에서 가장 자주 보는 품질 지표',
      '신입이 맡는 검사 업무 범위',
      '현장 실무에 도움 된 전공 과목'
    ]
  }

  const mentorCandidates = [minseoMentor, mentorProfiles[1], mentorProfiles[2]]
  const selectedMentor = mentorCandidates.find((mentor) => mentor.mentor === selectedMentorName) ?? null

  const openMentorPanel = (name: string) => {
    setSelectedMentorName((current) => (current === name ? null : name))
  }

  return (
    <div className="space-y-4">
      <SectionCard eyebrow="졸업생 노하우" title="클로잇 학생에게 바로 연결되는 선배 인사이트">
        <div className="rounded-xl border border-[#dce4f3] bg-[#f3f6fb] px-5 py-4">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-xs font-bold text-white">AI</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-[#364457]">AI 멘토 자동 매칭 리포트</span>
                <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white">시나리오 시연</span>
              </div>
              <p className="mt-1 text-sm text-[#64748b]">클로잇 학생의 전공 실험 이력과 희창유업 품질관리 직무의 연관성을 분석한 결과입니다.</p>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                {mentorCandidates.map((mentor) => (
                  <button
                    key={mentor.mentor}
                    type="button"
                    onClick={() => openMentorPanel(mentor.mentor)}
                    className={`rounded-lg border p-3 text-left transition-all ${selectedMentor?.mentor === mentor.mentor ? 'border-[#3a5fd9] bg-white shadow-md' : 'border-[#dce4f3] bg-white/50 hover:bg-white'}`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-[#364457] text-sm">{mentor.mentor}</span>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${mentor.score >= 90 ? 'bg-[#e8f5e9] text-[#2e7d32]' : 'bg-[#e3f0ff] text-[#1a56b0]'}`}>{mentor.score}%</span>
                    </div>
                    <div className="mt-1 text-xs text-[#64748b]">{mentor.company} · {mentor.job}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {mentorCandidates.map((mentor) => {
            const isOpen = selectedMentor?.mentor === mentor.mentor
            return (
              <div key={mentor.mentor} className="overflow-hidden rounded-xl border border-[#dce4f3] bg-white">
                <button
                  type="button"
                  onClick={() => openMentorPanel(mentor.mentor)}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-all ${
                    isOpen ? 'bg-[#f7fbff]' : 'hover:bg-[#f8fbff]'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[15px] font-bold text-[#1e2d45]">{mentor.mentor}</span>
                      <span className="text-sm text-[#64748b]">· {mentor.company} {mentor.job}</span>
                    </div>
                    <div className="mt-1 text-sm text-[#64748b]">{mentor.summary}</div>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${mentor.score >= 90 ? 'bg-[#e8f5e9] text-[#2e7d32]' : 'bg-[#e3f0ff] text-[#1a56b0]'}`}>
                      {mentor.score}%
                    </span>
                    <span className={`text-xs font-bold text-[#7d8798] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </div>
                </button>

                {isOpen ? (
                  <div className="border-t border-[#e8eef6] bg-[#fbfcff] px-5 py-5">
                    <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                      <div className="rounded-xl border border-[#dce4f3] bg-[linear-gradient(135deg,#f7fbff_0%,#eef4ff_100%)] p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="text-[11px] font-bold tracking-[0.14em] text-[#3a5fd9] uppercase">TOP MENTOR INSIGHT</div>
                            <div className="mt-2 text-[22px] font-bold text-[#1e2d45]">
                              {mentor.mentor} <span className="text-sm font-normal text-[#64748b]">· {mentor.company} {mentor.job}</span>
                            </div>
                          </div>
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-[#3a5fd9] text-lg font-black text-[#3a5fd9] shadow-sm">
                            {mentor.score}%
                          </div>
                        </div>

                        <div className="mt-6 rounded-xl bg-white/90 p-5 border border-[#dce4f3] relative">
                          <div className="absolute -top-3 left-4 bg-[#3a5fd9] text-white px-2 py-0.5 text-[10px] font-bold rounded">선배 한 줄 조언</div>
                          <p className="text-[14.5px] leading-7 text-[#344257] font-semibold italic">
                            "{mentor.advice}"
                          </p>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {mentor.prep.map((item) => (
                            <span key={item} className="rounded-full bg-[#eef2fb] px-4 py-1.5 text-xs font-bold text-[#3a5fd9] border border-[#c9d9f8]">
                              #{item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-xl border border-[#dce4f3] bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-[11px] font-bold tracking-[0.14em] text-[#7d8798] uppercase">MENTOR FAQ</div>
                          <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[9px] font-bold text-white">AI 정리</span>
                        </div>
                        <div className="space-y-3">
                          {mentor.faq.map((question, index) => (
                            <div key={question} className="group rounded-lg border border-[#e8eef6] bg-[#f8fbff] p-4">
                              <div className="flex items-start gap-3">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-[11px] font-bold text-white">
                                  {index + 1}
                                </span>
                                <span className="text-sm font-semibold text-[#344257]">{question}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 rounded-lg bg-[#f3f6fb] p-3 border border-dashed border-[#c9d9f8]">
                          <p className="text-[11px] leading-5 text-[#647387]">
                            AI가 클로잇 학생의 현재 목표 직무와 가장 가까운 선배 질문 주제를 먼저 정리했습니다. 필요한 항목만 열어 보고 상담 질문 초안으로 이어갈 수 있습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </SectionCard>

      <div className="space-y-4">
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
      </div>
    </div>
  )
}
