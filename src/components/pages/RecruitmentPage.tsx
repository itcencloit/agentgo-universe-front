import { useState } from 'react'
import { departmentRecruitments, studentProfile } from '../../data/foodEngineering'

const quickMenus = [
  { label: '이번 달\n공채 일정', icon: '📅' },
  { label: '관심 기업\n전동 정보', icon: '🏢' },
  { label: '요즘\n커리어 트렌드', icon: '📈' },
  { label: '연봉\n계산기', icon: '💰' },
]

function dDay(deadline: string) {
  const diff = Math.ceil((new Date(deadline).getTime() - Date.now()) / 86400000)
  if (diff <= 0) return { label: '마감', color: 'bg-[#e0e0e0] text-[#757575]' }
  if (diff <= 5) return { label: `D-${diff}`, color: 'bg-[#fdecea] text-[#c62828]' }
  if (diff <= 14) return { label: `D-${diff}`, color: 'bg-[#fff3e0] text-[#e65100]' }
  return { label: `D-${diff}`, color: 'bg-[#e3f0ff] text-[#1a56b0]' }
}

function AiScoreBadge({ score }: { score: number }) {
  const color =
    score >= 90 ? 'bg-[#e8f5e9] text-[#2e7d32]' :
    score >= 75 ? 'bg-[#e3f0ff] text-[#1a56b0]' :
    'bg-[#f5f5f5] text-[#616161]'
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${color}`}>
      AI {score}%
    </span>
  )
}

export function RecruitmentPage() {
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set())
  const [expandedReasons, setExpandedReasons] = useState<Set<string>>(new Set())

  const toggleBookmark = (id: string) =>
    setBookmarked((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const toggleReason = (id: string) =>
    setExpandedReasons((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  return (
    <div className="space-y-4">
      {/* AI Insight 배너 */}
      <div className="rounded-xl border border-[#c9d9f8] bg-gradient-to-r from-[#eef3ff] to-[#f3f6fb] px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-xs font-bold text-white">
            AI
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-bold tracking-wide text-[#3a5fd9] uppercase">오늘의 AI Insight</span>
              <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white">시나리오 시연</span>
            </div>
            <p className="mt-1 text-sm font-semibold text-[#364457]">
              AI가 {studentProfile.name}님의 이력과 관심 활동을 분석해 맞춤 공고를 선별했어요.
            </p>
            <p className="mt-0.5 text-xs text-[#64748b]">
              전공 {studentProfile.major} · 목표직무 {studentProfile.targetRole} · 선호지역 {studentProfile.preferredRegions.join('·')} 기준
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['오늘의 인기공고', 'AI 추천 공고만 보기', '마감임박순'].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  className="rounded-full border border-[#c5d5f7] bg-white px-3 py-1 text-[11px] font-semibold text-[#3a5fd9] hover:bg-[#eef3ff]"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 메인 2컬럼 레이아웃 */}
      <div className="grid gap-4 xl:grid-cols-[1fr_260px]">
        {/* 좌측: 공고 카드 목록 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[#364457]">AI 매칭 공고 <span className="text-[#3a5fd9]">{departmentRecruitments.length}건</span></span>
            <div className="flex gap-1">
              {['전체', '추천채용', '일반채용', '마감임박'].map((tab, i) => (
                <button
                  key={tab}
                  type="button"
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold ${i === 0 ? 'bg-[#3a5fd9] text-white' : 'bg-[#f1f3f7] text-[#546173] hover:bg-[#e8eef6]'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {departmentRecruitments.map((row) => {
              const dd = dDay(row.deadline)
              const isBookmarked = bookmarked.has(row.id)
              const isReasonOpen = expandedReasons.has(row.id)
              return (
                <div
                  key={row.id}
                  className="relative overflow-hidden rounded-xl border border-[#dce4f3] bg-white p-4 shadow-sm hover:border-[#a8c0f0] hover:shadow-md transition-all"
                >
                  {/* 북마크 */}
                  <button
                    type="button"
                    onClick={() => toggleBookmark(row.id)}
                    className="absolute right-3 top-3 text-lg leading-none"
                    aria-label="북마크"
                  >
                    {isBookmarked ? '🔖' : '🤍'}
                  </button>

                  {/* 타입 + D-day */}
                  <div className="flex items-center gap-2 pr-8">
                    <span className="rounded bg-[#eef2fb] px-2 py-0.5 text-[11px] font-semibold text-[#3a5fd9]">
                      {row.type}
                    </span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${dd.color}`}>
                      {dd.label}
                    </span>
                    {row.status === '마감임박' && (
                      <span className="rounded bg-[#fdecea] px-2 py-0.5 text-[11px] font-semibold text-[#c62828]">
                        마감임박
                      </span>
                    )}
                  </div>

                  {/* 기업명 + 직무 */}
                  <div className="mt-2">
                    <div className="text-xs text-[#64748b]">{row.company}</div>
                    <div className="mt-0.5 text-[15px] font-bold text-[#1e2d45]">{row.role}</div>
                  </div>

                  {/* AI 매칭도 */}
                  <div className="mt-3 rounded-lg bg-[#f8fafd] border border-[#e8eef6] px-3 py-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <AiScoreBadge score={row.aiScore} />
                      <span className="text-[10px] font-semibold text-[#546173] uppercase tracking-wide">매칭 근거</span>
                    </div>
                    <p className="text-[11px] leading-5 text-[#4f5f78]">{row.aiReasonSummary}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {row.evidenceTags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-[#64748b] border border-[#dce4f3]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleReason(row.id)}
                      className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-[#3a5fd9] hover:underline"
                    >
                      {isReasonOpen ? '상세 분석 닫기' : '상세 분석 보기'}
                    </button>
                    {isReasonOpen ? (
                      <ul className="mt-3 space-y-1.5 border-t border-[#e8eef6] pt-3">
                        {row.aiReasonDetails.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-[11px] leading-5 text-[#64748b]">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#3a5fd9]" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  {/* 마감일 + 조회수 */}
                  <div className="mt-3 flex items-center justify-between text-xs text-[#8a9ab5]">
                    <span>마감 {row.deadline}</span>
                    <span>조회 {row.views}</span>
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    className="mt-3 w-full rounded-lg bg-[#3a5fd9] py-2 text-sm font-semibold text-white hover:bg-[#2e4dbf] transition-colors"
                  >
                    공고 바로가기
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* 우측: 맞춤 정보 패널 */}
        <div className="space-y-3">
          {/* 맞춤 정보 헤더 */}
          <div className="rounded-xl bg-gradient-to-br from-[#3a5fd9] to-[#6b8ef5] p-4 text-white">
            <div className="text-[11px] font-semibold text-white/70 mb-1">맞춤 정보</div>
            <div className="text-sm font-bold leading-5">
              {studentProfile.name}님을 위한<br />커리어 성장 정보
            </div>
            <button
              type="button"
              className="mt-3 w-full rounded-lg border border-white/30 bg-white/15 py-1.5 text-[11px] font-semibold text-white hover:bg-white/25 transition-colors"
            >
              커리어 위험 성장 공고 받기 →
            </button>
          </div>

          {/* 빠른 메뉴 */}
          <div className="rounded-xl border border-[#dce4f3] bg-white p-3">
            <div className="grid grid-cols-2 gap-2">
              {quickMenus.map((m) => (
                <button
                  key={m.label}
                  type="button"
                  className="rounded-lg border border-[#e8eef6] bg-[#f8fafd] p-3 text-center hover:border-[#a8c0f0] hover:bg-[#eef3ff] transition-colors"
                >
                  <div className="text-xl">{m.icon}</div>
                  <div className="mt-1 text-[10px] font-semibold text-[#546173] leading-4 whitespace-pre-line">{m.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 10초 컷 공고 추천 */}
          <div className="rounded-xl border border-[#dce4f3] bg-white p-4">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-sm">⚡</span>
              <span className="text-xs font-bold text-[#364457]">10초 컷 나만의 공고 받기</span>
            </div>
            <div className="space-y-2">
              {[
                { icon: '🔍', label: '기관을 직접 찾고 있어요' },
                { icon: '📋', label: '직무명으로 더 검색할게요' },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="flex w-full items-center gap-2 rounded-lg border border-[#e0e8f5] bg-[#f8fafd] px-3 py-2 text-xs text-[#4a5d8a] hover:border-[#a8c0f0] hover:bg-[#eef3ff] transition-colors"
                >
                  <span>{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 채용 현황 요약 */}
          <div className="rounded-xl border border-[#dce4f3] bg-white p-4">
            <div className="text-xs font-semibold text-[#546173] mb-3">채용 현황</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: '추천채용', value: '4', highlight: true },
                { label: '일반채용', value: '12', highlight: false },
                { label: '품질·안전', value: '5', highlight: false },
                { label: 'R&D 직무', value: '7', highlight: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-lg px-3 py-3 text-center ${item.highlight ? 'bg-[#3a5fd9] text-white' : 'bg-[#f1f3f7] text-[#546173]'}`}
                >
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="mt-0.5 text-[11px]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
