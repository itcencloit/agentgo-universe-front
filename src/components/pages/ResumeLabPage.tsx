import { useState } from 'react'
import { experienceNodes, resumeQuestions } from '../../data/unisync'
import { AiChatPanel } from '../ui/AiChatPanel'
import { SectionCard } from '../ui/SectionCard'

const programCategories = [
  { label: '전체', value: '1185', active: true },
  { label: '관심 프로그램', value: '0' },
  { label: 'My 프로그램', value: '9' },
]

const programCards = [
  {
    id: 'p1',
    title: '공기업 NCS 합격 단기 완성 프로그램',
    team: '커리어개발팀',
    status: '진행중',
    applyPeriod: '2026.02.23(월) ~ 2026.05.29(금)',
    eduPeriod: '2026.03.09(월) ~ 2026.07.31(금)',
    keyword: '#NCS교육',
  },
  {
    id: 'p2',
    title: '자기소개서 첨삭 & 1:1 화상 컨설팅',
    team: '커리어개발팀',
    status: '진행중',
    applyPeriod: '2026.03.01(일) ~ 2027.02.28(일)',
    eduPeriod: '2026.03.01(일) ~ 2027.02.28(일)',
    keyword: '#자기소개서',
  },
  {
    id: 'p3',
    title: '[대기업] 면접 마스터 클래스: 면접 기초부터 실전까지',
    team: '커리어개발팀',
    status: '진행중',
    applyPeriod: '2026.03.19(목) ~ 2026.04.12(일)',
    eduPeriod: '2026.04.14(화)',
    keyword: '#취업 #면접특강',
  },
]

export function ResumeLabPage() {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(experienceNodes[0]?.id ?? null)
  const [manualMappings, setManualMappings] = useState<Record<string, string>>(
    Object.fromEntries(
      experienceNodes
        .filter((node) => node.mappedQuestionId)
        .map((node) => [node.mappedQuestionId as string, node.id]),
    ),
  )

  const selectedNode = experienceNodes.find((node) => node.id === selectedNodeId) ?? null

  return (
    <div className="space-y-4">
      <SectionCard eyebrow="진로·취업프로그램" title="프로그램 현황">
        <div className="grid gap-3 md:grid-cols-3">
          {programCategories.map((category) => (
            <div
              key={category.label}
              className={`rounded-2xl px-4 py-5 text-center ${
                category.active ? 'bg-[#5d84f0] text-white' : 'bg-[#f1f3f7] text-[#546173]'
              }`}
            >
              <div className="text-sm">{category.label}</div>
              <div className="mt-2 text-4xl font-bold">{category.value}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-md bg-[#dff3fb] px-4 py-4">
          <div className="grid gap-3 md:grid-cols-[1fr_170px_156px]">
            <input
              readOnly
              value="프로그램명을 입력해주세요."
              className="rounded border border-[#d6def0] bg-white px-4 py-3 text-sm text-[#7c8799]"
            />
            <div className="rounded border border-[#d6def0] bg-white px-4 py-3 text-sm text-[#5f6d82]">상세검색</div>
            <button type="button" className="rounded bg-[#5d84f0] px-4 py-3 text-sm font-semibold text-white">
              검색
            </button>
          </div>
        </div>
      </SectionCard>

      <div className="rounded-xl border border-[#dce4f3] bg-[#f3f6fb] p-4">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-[#3a5fd9] px-3 py-1 text-[11px] font-semibold text-white">AI 기능</span>
          <span className="text-sm font-semibold text-[#364457]">취업 컨설팅 및 자소서 피드백 — 시나리오 시연</span>
        </div>
        <AiChatPanel title="AI 자소서·취업 어시스턴트" placeholder="직무·자격증·자소서 문항 등 무엇이든 물어보세요." />
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
        <SectionCard eyebrow="프로그램 목록" title="추천 프로그램">
          <div className="grid gap-4 xl:grid-cols-3">
            {programCards.map((program) => (
              <div key={program.id} className="overflow-hidden rounded-md border border-[#d8e0ef] bg-white">
                <div className="h-40 bg-[linear-gradient(135deg,#edf3ff_0%,#c7d9ff_100%)] px-4 py-4">
                  <div className="flex justify-end">
                    <span className="rounded bg-[#ff617f] px-2 py-1 text-xs font-semibold text-white">
                      {program.status}
                    </span>
                  </div>
                  <div className="mt-8 text-[15px] font-semibold leading-7 text-[#2f3f58]">{program.title}</div>
                </div>
                <div className="space-y-3 p-4">
                  <div className="text-sm font-semibold text-[#6b82ff]">{program.team}</div>
                  <div className="text-sm leading-6 text-[#49586f]">{program.title}</div>
                  <div className="space-y-1 text-sm text-[#69778b]">
                    <div>신청 : {program.applyPeriod}</div>
                    <div>교육 : {program.eduPeriod}</div>
                    <div>키워드 : {program.keyword}</div>
                  </div>
                  <div className="rounded border border-[#bed0ff] px-3 py-2 text-sm font-semibold text-[#5d84f0]">
                    취업역량 {program.keyword}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="문항 매핑" title="자기소개서 설계">
          <div className="space-y-4">
            <div className="grid gap-3">
              {experienceNodes.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`rounded-md border p-4 text-left ${
                    selectedNodeId === node.id ? 'border-[#bfd4ff] bg-[#eef4ff]' : 'border-[#dce4f3] bg-[#f8fbff]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold text-[#344257]">{node.title}</div>
                    <div className="rounded bg-white px-2 py-1 text-xs text-[#6d7a8e]">{node.category}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {node.tags.map((tag) => (
                      <span key={tag} className="rounded bg-white px-2 py-1 text-xs text-[#66758b]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            {resumeQuestions.map((question) => {
              const mappedNode = experienceNodes.find((node) => node.id === manualMappings[question.id])

              return (
                <div key={question.id} className="rounded-md border border-[#dce4f3] bg-[#f8fbff] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="rounded bg-white px-2 py-1 text-xs font-semibold text-[#6d7a8e]">
                      {question.id.toUpperCase()}
                    </div>
                    <div className="text-xs text-[#7d8798]">{mappedNode ? '연결 완료' : '연결 대기'}</div>
                  </div>
                  <div className="mt-3 font-semibold text-[#344257]">{question.prompt}</div>
                  <div className="mt-2 text-sm text-[#647387]">{question.hint}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (!selectedNode) {
                          return
                        }

                        setManualMappings((current) => ({ ...current, [question.id]: selectedNode.id }))
                      }}
                      className="rounded bg-[#316bff] px-3 py-1 text-xs font-semibold text-white"
                    >
                      선택 노드 연결
                    </button>
                    {mappedNode ? (
                      <button
                        type="button"
                        onClick={() =>
                          setManualMappings((current) => {
                            const next = { ...current }
                            delete next[question.id]
                            return next
                          })
                        }
                        className="rounded border border-[#d6e0f0] bg-white px-3 py-1 text-xs font-semibold text-[#556276]"
                      >
                        연결 해제
                      </button>
                    ) : null}
                  </div>
                  <div className="mt-4 rounded-md border border-dashed border-[#d6e0f0] bg-white p-4 text-sm text-[#647387]">
                    {mappedNode
                      ? `${mappedNode.title} 경험을 중심으로 상황, 역할, 실행, 결과 순서로 정리하는 구성을 권장합니다.`
                      : '왼쪽에서 경험 노드를 선택한 뒤 현재 문항과 연결해 주세요.'}
                  </div>
                </div>
              )
            })}
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
