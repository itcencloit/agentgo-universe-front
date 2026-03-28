import React, { useState } from "react";
import { SectionCard } from "../ui/SectionCard";

const diagnosisCards = [
  {
    title: "직업기초역량진단",
    description: "의사소통, 문제해결, 자원관리 역량을 점검합니다.",
    score: "82점",
  },
  { title: "진로성숙도검사", description: "진로결정 수준과 준비도를 확인합니다.", score: "74점" },
  {
    title: "취업준비도검사",
    description: "서류, 면접, 정보탐색 준비 상태를 측정합니다.",
    score: "68점",
  },
  { title: "직무적성검사", description: "선호 직무와 적합 직무를 비교합니다.", score: "91점" },
];

const fitReportSections = [
  {
    title: "학점 및 교과 이수",
    summary:
      "전공 평점과 핵심 교과 이수 흐름이 품질관리 직무의 기본 적합도를 안정적으로 지지합니다.",
    items: [
      "전공 평균 4.12/4.5로 위생·품질 관련 과목에서 높은 성취를 보였습니다.",
      "식품위생학, 품질평가, HACCP 실무 과목 이수 흐름이 직무 요구 역량과 직접 연결됩니다.",
      "실험·검증 중심 과목 비중이 높아 품질 데이터 해석 역량의 근거가 충분합니다.",
    ],
  },
  {
    title: "활동 및 프로젝트",
    summary: "전공 활동은 연구개발보다 품질관리 쪽에 더 직접적인 설명력을 가집니다.",
    items: [
      "캡스톤 프로젝트에서 공정 점검과 결과 기록을 맡아 품질관리형 역할 경험을 확보했습니다.",
      "식품안전 관련 비교과 프로그램 참여 이력이 직무 관심도의 지속성을 보여줍니다.",
      "실험 결과를 표준 기준에 맞춰 정리한 경험이 검수·기록 업무 적합도로 반영됐습니다.",
    ],
  },
  {
    title: "자격 및 보완 요소",
    summary: "현재 적합도는 높지만 자격과 성과 문서화 수준이 올라가면 경쟁력이 더 분명해집니다.",
    items: [
      "식품기사 준비 이력이 있어 직무 연계성은 높게 평가되지만 취득 완료 전이라 가산점은 제한적입니다.",
      "정량 성과가 포함된 포트폴리오가 부족해 연구개발 직무 점수는 상대적으로 낮게 계산됐습니다.",
      "현장형 실습 시간과 개선 성과 수치가 추가되면 품질안전 점수 상승 여지가 큽니다.",
    ],
  },
];

const fitEvidence = [
  { label: "전공 평균", value: "4.12 / 4.5", note: "품질·위생 계열 강세" },
  { label: "핵심 교과", value: "6과목", note: "식품위생학, 품질평가, HACCP 포함" },
  { label: "프로젝트", value: "3건", note: "캡스톤·실험·현장실습 반영" },
  { label: "자격 준비", value: "진행중", note: "식품기사 취득 전 단계" },
];

const strengthMetrics = [
  { label: "교과 연계성", score: 91, color: "#2e7d32", pct: "91%" },
  { label: "실험 기반 해석력", score: 82, color: "#1a56b0", pct: "82%" },
  { label: "전공-직무 연결도", score: 89, color: "#3a5fd9", pct: "89%" },
];

const weaknessMetrics = [
  { label: "자격 근거 확보", score: 68, color: "#f55d78", pct: "68%" },
  { label: "지원 문서 준비", score: 74, color: "#f0b03f", pct: "74%" },
  { label: "성과 정리 수준", score: 66, color: "#d97706", pct: "66%" },
];

const personalReportHighlights = [
  { label: "현재 1순위 직무", value: "품질관리", note: "적합도 94%" },
  { label: "연동 학사 데이터", value: "교과 6 · 프로젝트 3", note: "전공 평균 4.12/4.5 반영" },
  { label: "조치 필요 항목", value: "증빙 공백 3건", note: "식품기사, 포트폴리오, 자소서" },
];

const personalReportSteps = [
  {
    step: "01",
    title: "학사 기반 적합도 판정",
    body: "전공 평균 4.12/4.5, 품질·위생 계열 핵심 교과 6과목, 프로젝트 3건이 반영돼 현재 프로필은 품질관리 직무에 가장 안정적으로 연결됩니다.",
  },
  {
    step: "02",
    title: "지원 단계 공백 확인",
    body: "직무 적합도 자체는 높지만 식품기사 미취득, 캡스톤 결과 수치 미정리, 품질관리 자소서 초안 부재로 인해 강점이 아직 제출 가능한 형태로 완성되지 않았습니다.",
  },
  {
    step: "03",
    title: "학기 내 실행 전환",
    body: "남은 학기 동안 식품기사 1건, 정량 포트폴리오 1건, 지원 문서 초안 1건을 확보하면 현재 강점을 실제 지원 경쟁력으로 전환할 수 있습니다.",
  },
];

const areaDetailContent = {
  strength: {
    label: "AI 판정 근거",
    bullets: [
      "식품위생학및종합설계 이수 이력이 위생 기준 해석과 공정 점검 경험의 근거로 반영됐습니다.",
      "식품품질평가및종합설계에서 수행한 품질지표 확인 경험이 검사·판정 업무와 직접 연결됩니다.",
      "식품미생물학실험과 캡스톤 기록 경험이 원인 점검과 결과 정리 역량으로 해석됐습니다.",
    ],
  },
  weakness: {
    label: "AI 판정 근거",
    bullets: [
      "식품기사 준비는 진행 중이지만 취득 완료 전이라 자격 근거가 아직 서류에 반영되지 않습니다.",
      "캡스톤 결과가 수치와 역할 기준으로 정리되지 않아 프로젝트 경험의 증빙력이 약합니다.",
      "품질관리 직무용 자기소개서 초안이 없어 전공 강점을 지원 문서로 연결하는 단계가 비어 있습니다.",
    ],
  },
} as const;

const recommendedActions = [
  {
    title: "식품기사 접수 일정 확정",
    priority: "우선순위 1",
    badgeTone: "bg-[#3a5fd9] text-white",
    summary: "품질관리 직무 기준으로 가장 먼저 보완해야 할 항목은 자격 근거입니다.",
    evidence: "지원 준비도 68점, 식품기사 취득 전 단계",
    tasks: ["원서 접수 일정 확정", "학습 계획 재배치", "상담 시 일정 공유"],
    impact: "자격 기반 신뢰도를 빠르게 높일 수 있습니다.",
  },
  {
    title: "캡스톤 결과 수치화",
    priority: "우선순위 2",
    badgeTone: "bg-[#e3f0ff] text-[#1a56b0]",
    summary: "프로젝트 경험은 있으나 성과와 역할이 정량화되지 않아 활용도가 낮습니다.",
    evidence: "프로젝트 3건 반영, 포트폴리오 정리 필요",
    tasks: ["성과 수치 추출", "역할 구분 정리", "직무 용어로 재서술"],
    impact: "캡스톤 경험이 지원서 증빙 자료로 전환됩니다.",
  },
  {
    title: "품질관리 자소서 초안 작성",
    priority: "우선순위 3",
    badgeTone: "bg-[#eef2fb] text-[#546173]",
    summary: "강점은 충분하지만 이를 지원 문서로 연결하는 단계가 아직 비어 있습니다.",
    evidence: "직무 적합 강점 91점, 지원서 완성도 66점",
    tasks: ["지원동기 1문항 작성", "교과 강점 연결", "초안 1차 완성"],
    impact: "추천채용 공고에 바로 적용 가능한 초안을 확보할 수 있습니다.",
  },
] as const;

export const DiagnosisPage: React.FC = () => {
  const [isFitReportOpen, setIsFitReportOpen] = useState(false);
  const [openAreaDetail, setOpenAreaDetail] = useState<keyof typeof areaDetailContent | null>(null);

  return (
    <>
      <div className="space-y-4">
        <SectionCard eyebrow="역량진단" title="역량 진단">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {diagnosisCards.map((card) => (
              <div key={card.title} className="rounded-md border border-[#dce4f3] bg-[#f8fbff] p-5">
                <div className="text-sm font-semibold text-[#6d7a8e]">{card.title}</div>
                <div className="mt-3 text-sm leading-6 text-[#647387]">{card.description}</div>
                <div className="mt-5 text-3xl font-bold text-[#316bff]">{card.score}</div>
                <button
                  type="button"
                  className="mt-4 rounded border border-[#cdd8ec] bg-white px-4 py-2 text-sm font-semibold text-[#536174]"
                >
                  진단 결과 확인
                </button>
              </div>
            ))}
          </div>
        </SectionCard>

        <div className="rounded-xl border border-[#c9d9f8] bg-gradient-to-r from-[#eef3ff] to-[#f3f6fb] px-5 py-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">
              AI
            </div>
            <span className="text-sm font-semibold text-[#364457]">AI 진단 요약</span>
            <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white ml-1">
              학생 기준 분석
            </span>
          </div>
          <p className="text-sm leading-6 text-[#64748b]">
            수강 이력, 전공 교과, 실험 경험을 바탕으로 적합 직무와 현재 준비 상태를 분석했습니다.
          </p>

          <div className="mt-4 grid gap-4 xl:grid-cols-[0.96fr_1.04fr]">
            <div className="rounded-lg border border-[#dce4f3] bg-[#f8fbff] p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-[#3a5fd9]">
                  직무 적합도 분석
                </div>
                <button
                  type="button"
                  onClick={() => setIsFitReportOpen(true)}
                  className="text-xs font-semibold text-[#3a5fd9] hover:underline"
                >
                  더보기&gt;
                </button>
              </div>
              <div className="mt-4 flex flex-col items-center">
                <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-[conic-gradient(#316bff_0_94%,#8cb4ff_94%_88%,#dbe7ff_88%_100%)] p-4">
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white text-center">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-[#7d8798]">
                      Best Fit
                    </div>
                    <div className="mt-1 text-2xl font-bold text-[#1e2d45]">품질관리</div>
                    <div className="mt-1 text-4xl font-black text-[#316bff]">94%</div>
                  </div>
                </div>
                <div className="mt-5 grid w-full gap-2">
                  {[
                    { label: "품질안전", score: "88%", tone: "bg-[#eef4ff] text-[#316bff]" },
                    { label: "식품 연구개발", score: "82%", tone: "bg-[#f3f6fb] text-[#536174]" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-lg border border-[#e8eef6] bg-white px-4 py-3"
                    >
                      <span className="text-sm font-semibold text-[#344257]">{item.label}</span>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${item.tone}`}>
                        {item.score}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-sm leading-6 text-[#64748b]">
                  식품위생학·품질평가·HACCP 이수 흐름이 품질관리 직무와 가장 높은 정합도를 보입니다.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-lg bg-white border border-[#dce4f3] p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="text-xs font-semibold text-[#2e7d32] uppercase tracking-wide">
                    강점
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenAreaDetail("strength")}
                    className="text-xs font-semibold text-[#2e7d32] hover:underline"
                  >
                    더보기&gt;
                  </button>
                </div>
                <div className="space-y-3">
                  {strengthMetrics.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between text-sm gap-3"
                    >
                      <span className="text-[#364457] shrink-0">{item.label}</span>
                      <div className="flex items-center gap-2 flex-1">
                        <div className="h-2 flex-1 rounded-full bg-[#e8eef6] overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: item.pct, backgroundColor: item.color }}
                          />
                        </div>
                        <span className="text-xs font-bold shrink-0" style={{ color: item.color }}>
                          {item.score}점
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-[#64748b] leading-5">
                  식품위생학및종합설계, 식품품질평가및종합설계, 식품미생물학실험 이수 이력이 위생
                  기준 해석, 품질지표 확인, 실험 기반 원인 점검 경험으로 연결돼 품질관리 직무
                  설명력이 높은 상태입니다.
                </p>
              </div>

              <div className="rounded-lg bg-white border border-[#dce4f3] p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="text-xs font-semibold text-[#f55d78] uppercase tracking-wide">
                    취약점
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenAreaDetail("weakness")}
                    className="text-xs font-semibold text-[#f55d78] hover:underline"
                  >
                    더보기&gt;
                  </button>
                </div>
                <div className="space-y-3">
                  {weaknessMetrics.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between text-sm gap-3"
                    >
                      <span className="text-[#364457] shrink-0">{item.label}</span>
                      <div className="flex items-center gap-2 flex-1">
                        <div className="h-2 flex-1 rounded-full bg-[#e8eef6] overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: item.pct, backgroundColor: item.color }}
                          />
                        </div>
                        <span className="text-xs font-bold shrink-0" style={{ color: item.color }}>
                          {item.score}점
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-[#64748b] leading-5">
                  식품기사 미취득, 캡스톤 결과 미정리, 품질관리 자소서 초안 부재로 인해 전공 강점을
                  실제 지원서와 포트폴리오로 전환하는 준비가 아직 부족합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <SectionCard eyebrow="개인별 리포트" title="맞춤 취업 준비 리포트">
          <div className="space-y-4">
            <div className="rounded-xl border border-[#dce4f3] bg-[#f8fbff] px-5 py-5">
              <div className="text-sm font-semibold text-[#364457]">
                현재 프로필은 품질관리 직무에 적합하지만, 지원 단계에서 필요한 증빙 3건이 아직 비어
                있습니다.
              </div>
              <p className="mt-3 text-sm leading-7 text-[#64748b]">
                수강 이력, 전공 평균, 프로젝트 경험, 자격 준비 상태를 종합하면 방향성 자체는 이미
                명확합니다. 현재 리포트는 직무 적합도를 다시 설명하기보다, 학사 이력을 실제 지원
                경쟁력으로 전환하기 위해 먼저 채워야 할 공백을 정리한 결과입니다.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {personalReportHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#dce4f3] bg-white px-4 py-4"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7d8798]">
                    {item.label}
                  </div>
                  <div className="mt-2 text-[18px] font-bold text-[#1e2d45]">{item.value}</div>
                  <div className="mt-1 text-xs text-[#64748b]">{item.note}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.12fr_0.88fr]">
              <div className="rounded-xl border border-[#dce4f3] bg-white p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3a5fd9]">
                  판정 흐름
                </div>
                <div className="mt-4 space-y-3">
                  {personalReportSteps.map((item) => (
                    <div
                      key={item.step}
                      className="rounded-lg border border-[#e8eef6] bg-[#fbfcfe] px-4 py-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-xs font-bold text-[#3a5fd9]">
                          {item.step}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1e2d45]">{item.title}</div>
                          <p className="mt-2 text-sm leading-6 text-[#5f6f85]">{item.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-[#dce4f3] bg-white p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3a5fd9]">
                  우선 확보할 자료
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    {
                      title: "식품기사 취득 완료",
                      note: "자격 기반 신뢰도 확보",
                    },
                    {
                      title: "캡스톤 결과 수치화 포트폴리오",
                      note: "프로젝트 경험의 정량 증빙",
                    },
                    {
                      title: "품질관리 자소서 초안",
                      note: "강점 교과를 지원 문서로 연결",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-lg border border-[#e8eef6] bg-[#f8fbff] px-4 py-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#316bff] text-xs font-bold text-white">
                          {index + 1}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1e2d45]">{item.title}</div>
                          <div className="mt-1 text-xs leading-5 text-[#64748b]">{item.note}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard eyebrow="액션 연결" title="AI 추천 액션">
          <div className="grid gap-4 xl:grid-cols-3">
            {recommendedActions.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-xl border border-[#dce4f3] bg-white p-4 shadow-sm transition-all hover:border-[#a8c0f0] hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded bg-[#eef2fb] px-2 py-0.5 text-[11px] font-semibold text-[#3a5fd9]">
                    액션 추천
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${item.badgeTone}`}
                  >
                    {item.priority}
                  </span>
                </div>

                <div className="mt-2">
                  <div className="text-[15px] font-bold text-[#1e2d45]">{item.title}</div>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#556276]">{item.summary}</p>

                <div className="mt-4 rounded-lg border border-[#e8eef6] bg-[#f8fafd] px-3 py-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-[#7d8798]">
                      AI 판정 근거
                    </span>
                  </div>
                  <div className="mt-1 text-xs leading-5 text-[#64748b]">{item.evidence}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.tasks.map((task) => (
                      <span
                        key={task}
                        className="rounded-full border border-[#dce4f3] bg-white px-2 py-0.5 text-[10px] font-semibold text-[#64748b]"
                      >
                        {task}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-start justify-between gap-3 text-xs">
                  <span className="text-[#8a9ab5] shrink-0">예상 효과</span>
                  <span className="text-right leading-5 text-[#2e7d32] font-semibold">
                    {item.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {openAreaDetail ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e2d45]/45 px-4">
          <div className="w-full max-w-2xl overflow-hidden rounded-[32px] border border-[#dce4f3] bg-white shadow-[0_24px_80px_rgba(30,45,69,0.24)]">
            <div className="border-b border-[#e5ecf7] bg-[#fbfcff] px-7 py-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#c9d9f8] bg-[#eef3ff] text-[13px] font-black text-[#3a5fd9] shadow-[0_8px_20px_rgba(58,95,217,0.12)]">
                    {openAreaDetail === "strength" ? "S" : "W"}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-xl border border-[#c9d9f8] bg-[#eef3ff] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#3a5fd9]">
                        핵심 요약
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#7a8699]">
                        {openAreaDetail === "strength" ? "강점 리포트" : "취약점 리포트"}
                      </span>
                    </div>
                    <h2 className="mt-3 text-[26px] font-black tracking-tight text-[#2b3954]">
                      {openAreaDetail === "strength"
                        ? "직무 적합 강점 요약"
                        : "지원 준비 취약점 요약"}
                    </h2>
                    <p className="mt-2 max-w-xl text-[14px] font-medium leading-6 text-[#6a768a]">
                      {openAreaDetail === "strength"
                        ? "현재 전공 교과와 실험 경험이 품질관리 직무에서 어떤 강점으로 읽히는지 빠르게 확인하는 요약 화면입니다."
                        : "현재 지원 단계에서 부족한 자격, 문서, 성과 정리 요소를 먼저 확인하는 요약 화면입니다."}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenAreaDetail(null)}
                  className="rounded-xl border border-[#dce4f3] bg-white px-4 py-2 text-[12px] font-black text-[#5c697d] shadow-[0_8px_18px_rgba(30,45,69,0.06)] transition-all hover:border-[#c9d9f8] hover:bg-[#f8fbff] hover:text-[#3a5fd9]"
                >
                  닫기
                </button>
              </div>
            </div>
            <div className="px-7 py-6">
              <div className="rounded-[28px] border border-[#dce4f3] bg-gradient-to-br from-white via-[#fbfcff] to-[#f4f7fd] p-6 shadow-[0_10px_24px_rgba(30,45,69,0.06)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[#7a8699]">
                      {areaDetailContent[openAreaDetail].label}
                    </div>
                    <p className="mt-2 text-[16px] font-black leading-7 text-[#344257]">
                      {openAreaDetail === "strength"
                        ? "교과 이수와 실험 기록 경험이 품질관리 업무 설명력으로 바로 연결되는 상태입니다."
                        : "직무 적합도는 높지만 자격, 문서, 성과 정리 단계가 아직 서류 제출 수준까지 올라오지 않은 상태입니다."}
                    </p>
                  </div>
                  <div
                    className={`shrink-0 rounded-2xl border px-4 py-3 shadow-[0_8px_18px_rgba(30,45,69,0.05)] ${
                      openAreaDetail === "strength"
                        ? "border-[#d6ead9] bg-[#f3faf4]"
                        : "border-[#f6d8df] bg-[#fff7f8]"
                    }`}
                  >
                    <div className="text-[10px] font-black uppercase tracking-[0.14em] text-[#7a8699]">
                      핵심 판정
                    </div>
                    <div
                      className={`mt-1 text-[22px] font-black tracking-tight ${openAreaDetail === "strength" ? "text-[#2e7d32]" : "text-[#f55d78]"}`}
                    >
                      {openAreaDetail === "strength" ? "강점 우세" : "보완 필요"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {areaDetailContent[openAreaDetail].bullets.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#dce4f3] bg-[#fbfcff] px-5 py-4 shadow-[0_8px_18px_rgba(30,45,69,0.04)] transition-all hover:border-[#c9d9f8]"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-[11px] font-black shadow-[0_6px_14px_rgba(30,45,69,0.06)] ${
                          openAreaDetail === "strength"
                            ? "bg-[#eef7f0] text-[#2e7d32]"
                            : "bg-[#fff1f4] text-[#f55d78]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] font-black uppercase tracking-[0.14em] text-[#7a8699]">
                          Insight {index + 1}
                        </div>
                        <p className="mt-1 text-[14px] leading-6 text-[#556276]">{item}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isFitReportOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e2d45]/45 px-4 py-8">
          <div className="max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[32px] border border-[#dce4f3] bg-white shadow-[0_24px_80px_rgba(30,45,69,0.24)]">
            <div className="border-b border-[#e5ecf7] bg-[linear-gradient(135deg,#fbfcff_0%,#f3f7ff_100%)] px-8 py-7">
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-[#c9d9f8] bg-[#eef3ff] text-[14px] font-black text-[#3a5fd9] shadow-[0_10px_24px_rgba(58,95,217,0.12)]">
                    03
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-xl border border-[#c9d9f8] bg-[#eef3ff] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#3a5fd9]">
                        리포트 요약본
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#7a8699]">
                        직무 적합도 분석
                      </span>
                    </div>
                    <h2 className="mt-3 text-[30px] font-black tracking-tight text-[#2b3954]">
                      품질관리 직무 상세 리포트
                    </h2>
                    <p className="mt-2 max-w-2xl text-[14px] font-medium leading-6 text-[#6a768a]">
                      학점, 전공 이수, 프로젝트 경험, 자격 준비 상태를 종합해 현재 직무 정합도를
                      계산한 결과입니다.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsFitReportOpen(false)}
                  className="rounded-xl border border-[#dce4f3] bg-white px-4 py-2 text-[12px] font-black text-[#5c697d] shadow-[0_8px_18px_rgba(30,45,69,0.06)] transition-all hover:border-[#c9d9f8] hover:bg-[#f8fbff] hover:text-[#3a5fd9]"
                >
                  닫기
                </button>
              </div>
            </div>

            <div className="max-h-[calc(90vh-118px)] overflow-y-auto px-8 py-7">
              <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-5">
                  <section className="rounded-[28px] border border-[#dce4f3] bg-gradient-to-br from-white via-[#fbfcff] to-[#f4f7fd] p-6 shadow-[0_12px_28px_rgba(30,45,69,0.06)]">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[#7a8699]">
                          종합 판정
                        </div>
                        <div className="mt-3 text-[34px] font-black tracking-tight text-[#1e2d45]">
                          품질관리
                        </div>
                        <p className="mt-3 max-w-md text-[14px] leading-6 text-[#5c697d]">
                          교과 이수 흐름과 실험·기록형 활동이 품질관리 핵심 역할과 가장 높은
                          정합도를 보입니다.
                        </p>
                      </div>
                      <div className="rounded-[24px] border border-[#c9d9f8] bg-white px-5 py-4 text-center shadow-[0_10px_22px_rgba(58,95,217,0.1)]">
                        <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[#7a8699]">
                          Best Fit
                        </div>
                        <div className="mt-2 text-[40px] font-black tracking-tight text-[#316bff]">
                          94%
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 md:grid-cols-3">
                      {[
                        { label: "품질관리", score: "94%", active: true },
                        { label: "품질안전", score: "88%" },
                        { label: "식품 연구개발", score: "82%" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className={`rounded-2xl border px-4 py-4 ${
                            item.active
                              ? "border-[#c9d9f8] bg-[#eef3ff] shadow-[0_8px_18px_rgba(58,95,217,0.08)]"
                              : "border-[#e8eef6] bg-white"
                          }`}
                        >
                          <div className="text-[11px] font-black uppercase tracking-[0.14em] text-[#7a8699]">
                            {item.label}
                          </div>
                          <div
                            className={`mt-2 text-[24px] font-black tracking-tight ${item.active ? "text-[#316bff]" : "text-[#344257]"}`}
                          >
                            {item.score}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-[28px] border border-[#dce4f3] bg-white p-6 shadow-[0_10px_24px_rgba(30,45,69,0.05)]">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[#7a8699]">
                          분석 지표
                        </div>
                        <div className="mt-2 text-[18px] font-black tracking-tight text-[#344257]">
                          핵심 입력 데이터
                        </div>
                      </div>
                      <span className="rounded-xl border border-[#dce4f3] bg-[#f8fbff] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#3a5fd9]">
                        Evidence
                      </span>
                    </div>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {fitEvidence.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-[#e8eef6] bg-[#fbfcff] p-4"
                        >
                          <div className="text-[11px] font-black uppercase tracking-[0.14em] text-[#7a8699]">
                            {item.label}
                          </div>
                          <div className="mt-2 text-[22px] font-black tracking-tight text-[#344257]">
                            {item.value}
                          </div>
                          <div className="mt-1 text-[12px] leading-5 text-[#64748b]">
                            {item.note}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="space-y-5">
                  {fitReportSections.map((section, index) => (
                    <section
                      key={section.title}
                      className="rounded-[28px] border border-[#dce4f3] bg-white p-6 shadow-[0_10px_24px_rgba(30,45,69,0.05)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#c9d9f8] bg-[#eef3ff] text-[12px] font-black text-[#3a5fd9] shadow-[0_8px_18px_rgba(58,95,217,0.08)]">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="flex-1">
                          <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[#7a8699]">
                            핵심 인사이트
                          </div>
                          <div className="mt-2 text-[18px] font-black tracking-tight text-[#344257]">
                            {section.title}
                          </div>
                          <p className="mt-2 text-[14px] leading-6 text-[#64748b]">
                            {section.summary}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2.5">
                        {section.items.map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-[#e8eef6] bg-[#fbfcff] px-4 py-3.5 text-[14px] leading-6 text-[#556276]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}

                  <section className="rounded-[28px] border border-[#c9d9f8] bg-gradient-to-br from-[#f6f9ff] to-[#eef3ff] p-6 shadow-[0_12px_26px_rgba(58,95,217,0.08)]">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[#7a8699]">
                          추천 후속 액션
                        </div>
                        <div className="mt-2 text-[18px] font-black tracking-tight text-[#344257]">
                          다음 단계 제안
                        </div>
                      </div>
                      <span className="rounded-xl bg-[#3a5fd9] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">
                        Action Plan
                      </span>
                    </div>
                    <div className="mt-4 space-y-2.5">
                      {[
                        "식품기사 취득 일정을 확정해 자격 기반 가산점을 실제 경쟁력으로 전환",
                        "캡스톤과 실험 경험을 수치 중심 포트폴리오로 재정리",
                        "품질관리 직무용 자기소개서 초안을 작성한 뒤 진로취업 상담에서 검토",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3.5 text-[14px] leading-6 text-[#556276] shadow-[0_6px_16px_rgba(30,45,69,0.04)]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
