import React, { useState } from "react";
import { experienceNodes, resumeQuestions } from "../../data/unisync";
import { AiChatPanel } from "../ui/AiChatPanel";
import { SectionCard } from "../ui/SectionCard";

const programCategories = [
  { label: "전체", value: "23", active: true },
  { label: "관심 프로그램", value: "5" },
  { label: "My 프로그램", value: "4" },
];

const programCards = [
  {
    id: "p1",
    title: "식품기사 자격증 단기 합격 프로그램",
    team: "커리어개발팀",
    status: "진행중",
    applyPeriod: "2026.03.01(일) ~ 2026.04.20(일)",
    eduPeriod: "2026.03.09(월) ~ 2026.06.30(화)",
    keyword: "#식품기사 #자격증",
  },
  {
    id: "p2",
    title: "품질·연구 직무 자기소개서 첨삭 & 1:1 화상 컨설팅",
    team: "커리어개발팀",
    status: "진행중",
    applyPeriod: "2026.03.01(일) ~ 2027.02.28(일)",
    eduPeriod: "2026.03.01(일) ~ 2027.02.28(일)",
    keyword: "#자기소개서 #품질관리",
  },
  {
    id: "p3",
    title: "[식품기업] 희창유업·코카콜라·삼양그룹 면접 마스터 클래스",
    team: "커리어개발팀",
    status: "진행중",
    applyPeriod: "2026.03.19(목) ~ 2026.04.12(일)",
    eduPeriod: "2026.04.14(화)",
    keyword: "#식품공학 #면접특강",
  },
];

const companyFeedbackCards = [
  {
    company: "희창유업",
    focus: "품질관리 자소서 포인트",
    body: "식품위생학및종합설계, 품질평가 실험, HACCP 이해를 한 흐름으로 묶는 것이 좋습니다. 현장 점검과 기록 정확도를 강조하는 문장이 더 유리합니다.",
    action: "지원동기보다 직무 이해 문항부터 먼저 정리",
  },
  {
    company: "코카콜라음료",
    focus: "품질·연구 직무 포인트",
    body: "식품화학, 식품미생물학, 안정성 평가 경험을 연구 지원형 관점으로 다시 설명하는 편이 적합합니다. 실험 과정의 기준 준수와 결과 해석을 함께 넣는 것이 좋습니다.",
    action: "실험 경험을 배합·평가 관점으로 재서술",
  },
  {
    company: "삼양그룹",
    focus: "신제품개발 문항 포인트",
    body: "캡스톤디자인 경험을 단순 수업 사례가 아니라 공정 개선과 아이디어 검증 사례로 재해석해야 합니다. 변화 전후 수치가 들어가면 설득력이 올라갑니다.",
    action: "캡스톤 결과를 문제-개선-성과 순서로 정리",
  },
];

export const ResumeLabPage: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(
    experienceNodes[0]?.id ?? null
  );
  const [manualMappings, setManualMappings] = useState<Record<string, string>>(
    Object.fromEntries(
      experienceNodes
        .filter((node) => node.mappedQuestionId)
        .map((node) => [node.mappedQuestionId as string, node.id])
    )
  );

  const selectedNode = experienceNodes.find((node) => node.id === selectedNodeId) ?? null;

  return (
    <div className="space-y-4">
      <SectionCard eyebrow="진로·취업프로그램" title="프로그램 현황">
        {/* ... existing code ... */}
        <div className="grid gap-3 md:grid-cols-3">
          {programCategories.map((category) => (
            <div
              key={category.label}
              className={`rounded-2xl px-4 py-5 text-center ${
                category.active ? "bg-[#5d84f0] text-white" : "bg-[#f1f3f7] text-[#546173]"
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
              value="식품기사, 품질관리 자소서, 희창유업 면접 프로그램 중심으로 탐색 중입니다."
              className="rounded border border-[#d6def0] bg-white px-4 py-3 text-sm text-[#4a5d8a]"
            />
            <div className="rounded border border-[#d6def0] bg-white px-4 py-3 text-sm text-[#5f6d82]">
              상세검색
            </div>
            <button
              type="button"
              className="rounded bg-[#5d84f0] px-4 py-3 text-sm font-semibold text-white"
            >
              검색
            </button>
          </div>
        </div>
      </SectionCard>

      <div className="rounded-xl border border-[#dce4f3] bg-[#f3f6fb] p-4">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-[#3a5fd9] px-3 py-1 text-[11px] font-semibold text-white">
            AI 기능
          </span>
          <span className="text-sm font-semibold text-[#364457]">
            식품공학 4학년 기준 취업 컨설팅 및 자소서 피드백
          </span>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
          <AiChatPanel
            title="AI 자소서·취업 어시스턴트"
            placeholder="직무·자격증·자소서 문항 등 무엇이든 물어보세요."
          />
          <div className="rounded-xl border border-[#c9d9f8] bg-white p-4">
            <div className="text-xs font-bold text-[#3a5fd9] mb-3 uppercase tracking-wider">
              AI STAR 코칭 가이드
            </div>
            <div className="space-y-3">
              {[
                {
                  label: "Situation",
                  desc: "캡스톤에서 품질 편차 원인을 점검했던 배경 정리",
                  status: "완료",
                },
                {
                  label: "Task",
                  desc: "품질 기준에 맞는 개선 목표와 역할 범위를 명확화",
                  status: "진행중",
                },
                {
                  label: "Action",
                  desc: "실험 설계, 점검표 작성, 결과 비교 등 실제 수행 행동 정리",
                  status: "진행중",
                },
                {
                  label: "Result",
                  desc: "오차 감소, 재작업률 개선 등 수치 중심 성과 보완 필요",
                  status: "보완",
                },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-[#e8eef6] pl-3 py-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#364457]">{item.label}</span>
                    <span
                      className={`text-[10px] ${item.status === "완료" ? "text-[#2e7d32]" : item.status === "진행중" ? "text-[#1a56b0]" : "text-[#d97706]"}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="mt-0.5 text-[11px] text-[#64748b] leading-4">{item.desc}</div>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full rounded bg-[#eef2fb] py-2 text-[11px] font-semibold text-[#3a5fd9]">
              품질관리 문항용 STAR 초안 만들기
            </button>
          </div>
        </div>
      </div>

      <SectionCard eyebrow="기업·산업 피드백" title="자소서 개선안">
        <div className="grid gap-4 xl:grid-cols-3">
          {companyFeedbackCards.map((card) => (
            <div key={card.company} className="rounded-xl border border-[#dce4f3] bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3a5fd9]">
                {card.company}
              </div>
              <div className="mt-2 text-[18px] font-semibold text-[#1e2d45]">{card.focus}</div>
              <p className="mt-3 text-sm leading-7 text-[#5f6f85]">{card.body}</p>
              <div className="mt-4 rounded-lg bg-[#f3f6fb] px-4 py-3 text-sm font-medium text-[#3d4a5c]">
                개선 포인트: {card.action}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="rounded-xl border border-[#c9d9f8] bg-gradient-to-r from-[#eef3ff] to-[#f3f6fb] p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">
            AI
          </div>
          <span className="text-sm font-semibold text-[#364457]">AI 전략 설계도 추천</span>
          <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white ml-1">
            학생 기준 분석
          </span>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <div className="w-full h-full border-2 border-dashed border-[#3a5fd9] rounded-full" />
          </div>
          <div className="grid gap-6 md:grid-cols-3 relative z-10">
            {[
              {
                q: "Q1. 지원동기 및 포부",
                node: "식품공학 전공 심화",
                reason: "전공 전문성과 목표 기업의 기술 방향성 일치",
              },
              {
                q: "Q2. 문제해결 경험",
                node: "캡스톤디자인 A+ 프로젝트",
                reason: "갈등 관리 및 기술적 난제 해결 과정 강조",
              },
              {
                q: "Q3. 직무 관련 강점",
                node: "HACCP 품질 교육 이수",
                reason: "품질관리 직무 핵심 역량 증빙 최적",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="rounded-lg border border-[#e8eef6] bg-[#f8fafd] p-3 w-full">
                  <div className="text-[10px] font-bold text-[#3a5fd9] mb-1">{item.q}</div>
                  <div className="text-xs font-semibold text-[#364457] truncate">{item.node}</div>
                </div>
                <div className="h-4 w-px bg-[#dce4f3] my-1" />
                <div className="rounded-full bg-[#3a5fd9] text-white px-2 py-0.5 text-[10px] font-bold italic">
                  Match
                </div>
                <div className="h-4 w-px bg-[#dce4f3] my-1" />
                <div className="text-[10px] text-[#64748b] leading-4 bg-[#f3f6fb] p-2 rounded w-full border border-dashed border-[#dce4f3]">
                  {item.reason}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
        <SectionCard eyebrow="프로그램 목록" title="추천 프로그램">
          <div className="grid gap-4 xl:grid-cols-3">
            {programCards.map((program) => (
              <div
                key={program.id}
                className="overflow-hidden rounded-md border border-[#d8e0ef] bg-white"
              >
                <div className="h-40 bg-[linear-gradient(135deg,#edf3ff_0%,#c7d9ff_100%)] px-4 py-4">
                  <div className="flex justify-end">
                    <span className="rounded bg-[#ff617f] px-2 py-1 text-xs font-semibold text-white">
                      {program.status}
                    </span>
                  </div>
                  <div className="mt-8 text-[15px] font-semibold leading-7 text-[#2f3f58]">
                    {program.title}
                  </div>
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
                    selectedNodeId === node.id
                      ? "border-[#bfd4ff] bg-[#eef4ff]"
                      : "border-[#dce4f3] bg-[#f8fbff]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold text-[#344257]">{node.title}</div>
                    <div className="rounded bg-white px-2 py-1 text-xs text-[#6d7a8e]">
                      {node.category}
                    </div>
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
              const mappedNode = experienceNodes.find(
                (node) => node.id === manualMappings[question.id]
              );

              return (
                <div
                  key={question.id}
                  className="rounded-md border border-[#dce4f3] bg-[#f8fbff] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="rounded bg-white px-2 py-1 text-xs font-semibold text-[#6d7a8e]">
                      {question.id.toUpperCase()}
                    </div>
                    <div className="text-xs text-[#7d8798]">
                      {mappedNode ? "문항 연결 완료" : "추천 경험 선택 필요"}
                    </div>
                  </div>
                  <div className="mt-3 font-semibold text-[#344257]">{question.prompt}</div>
                  <div className="mt-2 text-sm text-[#647387]">{question.hint}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (!selectedNode) {
                          return;
                        }

                        setManualMappings((current) => ({
                          ...current,
                          [question.id]: selectedNode.id,
                        }));
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
                            const next = { ...current };
                            delete next[question.id];
                            return next;
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
                      : "왼쪽에서 현재 학생 이력과 가장 가까운 경험을 선택하면 해당 문항에 맞는 초안 흐름을 만들 수 있습니다."}
                  </div>
                </div>
              );
            })}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
