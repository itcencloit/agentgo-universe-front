import React, { useEffect, useMemo, useState } from "react";
import { recommendedActions } from "../../data/unisync";
import {
  getRoadmapModeByTask,
  roadmapDescriptions,
  roadmapItems,
  roadmapModes,
  type RoadmapSelection,
  type RoadmapViewMode,
} from "../../data/roadmap";
import { SectionCard } from "../ui/SectionCard";

type RoadmapPageProps = {
  onSelectionChange: (selection: RoadmapSelection) => void;
  selection: RoadmapSelection;
};

const yearRoadmapColumns = ["1", "2", "3", "4"];
const yearRoadmapRows = [
  {
    stage: "1단계 목표설정",
    item: "졸업 후 계획",
    values: ["식품기업 취업", "품질관리 확정", "품질·연구 병행", "상시 지원"],
  },
  { stage: "1단계 목표설정", item: "진로적성검사", values: ["완료", "완료", "91점", "직무 확정"] },
  {
    stage: "1단계 목표설정",
    item: "목표직업탐색",
    values: ["품질관리", "품질·연구", "품질안전", "최종 지원"],
  },
  {
    stage: "1단계 목표설정",
    item: "직업기초역량진단",
    values: ["실시", "82점", "보완중", "재점검"],
  },
  {
    stage: "1단계 목표설정",
    item: "목표가치선정",
    values: ["부산 우선", "전공 적합", "성장 가능성", "근무환경"],
  },
  { stage: "2단계 역량개발", item: "학점", values: ["3.82", "3.94", "4.05", "4.12"] },
  {
    stage: "2단계 역량개발",
    item: "수상실적",
    values: ["전공 기초 팀프로젝트", "캡스톤 장려", "학술발표 1건", "품질 프로젝트 정리"],
  },
  {
    stage: "2단계 역량개발",
    item: "취업 프로그램",
    values: ["기초 2건", "실전 4건", "자소서 6건", "면접 7건"],
  },
  {
    stage: "3단계 실전준비",
    item: "취업준비도검사",
    values: ["기초 확인", "중간 점검", "68점", "보완 실행"],
  },
  {
    stage: "3단계 실전준비",
    item: "목표기업탐색",
    values: ["희창유업", "코카콜라", "CJ제일제당", "삼양그룹"],
  },
  {
    stage: "3단계 실전준비",
    item: "맞춤채용정보",
    values: ["품질관리", "품질·연구", "추천채용", "면접 준비"],
  },
  {
    stage: "3단계 실전준비",
    item: "이력서작성",
    values: ["기본 정보 입력", "초안 작성", "1차 첨삭", "최종 보완"],
  },
  {
    stage: "마지막 점검 과제",
    item: "커리어로드맵",
    values: ["초기 작성", "경력 정리", "지원 전략", "최종 점검"],
  },
];

function getStageColor(stage: string) {
  if (stage.startsWith("1단계")) return "bg-[#4ea29a] text-white";
  if (stage.startsWith("2단계")) return "bg-[#6287f4] text-white";
  if (stage.startsWith("3단계")) return "bg-[#f0b03f] text-white";
  return "bg-[#b7aea5] text-white";
}

export const RoadmapPage: React.FC<RoadmapPageProps> = ({ onSelectionChange, selection }) => {
  const [selectedTaskId, setSelectedTaskId] = useState(selection.taskId);
  const [selectedDeadline, setSelectedDeadline] = useState<"전체" | "이번주" | "상시" | "이번달">(
    "전체"
  );
  const [viewMode, setViewMode] = useState<RoadmapViewMode>(selection.viewMode);

  useEffect(() => {
    setSelectedTaskId(selection.taskId);
    setViewMode(selection.viewMode);
  }, [selection.taskId, selection.viewMode]);

  const selectedMode = getRoadmapModeByTask(selectedTaskId);
  const selectedRoadmap = roadmapModes.find((mode) => mode.id === selectedMode) ?? roadmapModes[0];
  const selectedTask =
    roadmapItems[selectedMode].find((item) => item.id === selectedTaskId) ??
    roadmapItems[selectedMode][0];

  const visibleActions = useMemo(() => {
    const filteredByMode = recommendedActions.filter((action) => {
      const haystack = `${action.title} ${action.insight}`;

      if (selectedMode === "career") {
        return ["기초", "방향", "진단", "직업"].some((keyword) => haystack.includes(keyword));
      }

      if (selectedMode === "growth") {
        return ["교과", "프로그램", "경력", "상담"].some((keyword) => haystack.includes(keyword));
      }

      return ["학업", "연구", "실적", "시험"].some((keyword) => haystack.includes(keyword));
    });

    if (selectedDeadline === "전체") {
      return filteredByMode;
    }

    return filteredByMode.filter((action) => action.deadline === selectedDeadline);
  }, [selectedDeadline, selectedMode]);

  const handleTaskSelect = (taskId: string) => {
    const mode = getRoadmapModeByTask(taskId);
    setSelectedTaskId(taskId);
    setViewMode("detail");
    onSelectionChange({ mode, taskId, viewMode: "detail" });
  };

  const handleModeSelect = (mode: RoadmapSelection["mode"]) => {
    const nextTaskId = roadmapItems[mode][0].id;
    setSelectedTaskId(nextTaskId);
    setViewMode("detail");
    onSelectionChange({ mode, taskId: nextTaskId, viewMode: "detail" });
  };

  const handleViewChange = (nextViewMode: RoadmapViewMode) => {
    setViewMode(nextViewMode);
    onSelectionChange({ mode: selectedMode, taskId: selectedTaskId, viewMode: nextViewMode });
  };

  const executionStrategyCards = [
    {
      title: "이번 학기 실행 전략",
      items: ["식품기사 접수 일정 확정", "캡스톤 결과 수치화 완료", "품질관리 자소서 초안 작성"],
      note: "역량진단 기준 취약점이 큰 순서대로 실행 항목을 배치했습니다.",
    },
    {
      title: "자격증 준비 순서",
      items: ["1순위 식품기사", "2순위 위생사", "3순위 수산제조기사"],
      note: "현재 희망 직무는 품질·위생 계열이라 식품기사 우선순위가 가장 높습니다.",
    },
    {
      title: "직무 포트폴리오 가이드",
      items: ["실험 결과표 1건 정리", "캡스톤 개선 수치 3개 추출", "품질관리 용어 기준으로 재서술"],
      note: "프로젝트 경험을 수업 이력이 아닌 직무 증빙 자료로 바꾸는 단계입니다.",
    },
  ];

  return (
    <div className="space-y-4">
      <section className="overflow-hidden rounded-md border border-[#d6def0] bg-white shadow-sm">
        <div className={`bg-gradient-to-r ${selectedRoadmap.gradient} px-8 py-8 text-white`}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                My로드맵
              </div>
              <h1 className="mt-2 text-[34px] font-semibold tracking-[-0.03em]">
                {selectedRoadmap.title}
              </h1>
              <p className="mt-4 max-w-[760px] text-sm leading-7 text-white/90">
                {roadmapDescriptions[selectedMode]}
              </p>
            </div>
            <div className="flex gap-2 self-start lg:self-auto">
              <button
                type="button"
                onClick={() => handleViewChange("detail")}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  viewMode === "detail" ? "bg-white text-[#26456d]" : "bg-white/15 text-white"
                }`}
              >
                상세 로드맵
              </button>
              <button
                type="button"
                onClick={() => handleViewChange("yearly")}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  viewMode === "yearly" ? "bg-white text-[#26456d]" : "bg-white/15 text-white"
                }`}
              >
                학년별로드맵
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#eef2f7] bg-[#fbfcfe] px-6 py-5">
          <div className="grid gap-3 lg:grid-cols-[repeat(3,minmax(0,1fr))_180px]">
            {roadmapModes.map((mode) => {
              const isActive = selectedMode === mode.id && viewMode === "detail";
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => handleModeSelect(mode.id)}
                  className={`rounded-xl border px-4 py-4 text-left transition ${
                    isActive
                      ? "border-[#bfd4ff] bg-white shadow-sm"
                      : "border-[#e3e9f2] bg-[#f7f9fc] hover:border-[#cfd8e6] hover:bg-white"
                  }`}
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8a97a8]">
                    {mode.step}
                  </div>
                  <div className="mt-2 text-[20px] font-semibold text-[#364457]">{mode.title}</div>
                  <div className="mt-2 text-sm leading-6 text-[#66758b]">{mode.description}</div>
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => handleViewChange("yearly")}
              className={`rounded-xl border px-4 py-4 text-left transition ${
                viewMode === "yearly"
                  ? "border-[#bfd4ff] bg-white shadow-sm"
                  : "border-[#e3e9f2] bg-[#f7f9fc] hover:border-[#cfd8e6] hover:bg-white"
              }`}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8a97a8]">
                overview
              </div>
              <div className="mt-2 text-[20px] font-semibold text-[#364457]">학년별로드맵</div>
              <div className="mt-2 text-sm leading-6 text-[#66758b]">
                학년별 이력과 강점/약점을 한 번에 확인합니다.
              </div>
            </button>
          </div>
        </div>
      </section>

      {viewMode === "detail" ? (
        <>
          <section className="rounded-md border border-[#d6def0] bg-white p-6 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
              <div className="rounded-xl border border-[#e5ebf4] bg-[#fbfcfe] p-5">
                <div className="text-sm font-semibold text-[#7a879a]">세부 항목</div>
                <div className="mt-4 space-y-2">
                  {roadmapItems[selectedMode].map((item) => {
                    const isSelected = selectedTaskId === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleTaskSelect(item.id)}
                        className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left text-sm transition ${
                          isSelected
                            ? "border-[#bfd4ff] bg-[#eef4ff] text-[#2f5fb8]"
                            : "border-[#e5ebf4] bg-white text-[#4f5f76] hover:border-[#d5ddeb] hover:bg-[#fbfcff]"
                        }`}
                      >
                        <span>{item.title}</span>
                        <span>›</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-xl border border-[#e5ebf4] bg-white p-6">
                <div className="text-[18px] font-bold text-[#4b9f9c]">
                  {selectedTask.id.split("-")[1].padStart(2, "0")}
                </div>
                <div className="mt-2 text-[26px] font-semibold text-[#3d4a5c]">
                  {selectedTask.title}
                </div>
                <div className="mt-4 text-sm leading-7 text-[#5d6b7e]">
                  {selectedTask.description}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button
                    type="button"
                    className="rounded-full border border-[#9fd2cf] px-5 py-2 text-sm font-semibold text-[#4b9f9c]"
                  >
                    이동하기
                  </button>
                  <div className="text-sm font-semibold text-[#8cb7b5]">{selectedTask.icon}</div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="overflow-hidden rounded-md border border-[#d6def0] bg-white shadow-sm">
          <div className="bg-[linear-gradient(90deg,#a1be52_0%,#f0d67b_100%)] px-8 py-8 text-white">
            <h1 className="text-[34px] font-semibold tracking-[-0.03em]">
              클로잇 님의 학년별로드맵
            </h1>
            <p className="mt-4 max-w-[760px] text-sm leading-7 text-white/90">
              학년별로드맵을 통해 나의 이력을 한눈에 확인할 수 있습니다. 현재 학년과 강점/약점
              부분을 함께 살펴보세요.
            </p>
          </div>

          <div className="p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className="rounded-full bg-[#eef4d9] px-6 py-3 text-sm font-semibold text-[#87a33f]">
                4학년 실행률 33%
              </div>
              <div className="flex items-center gap-10 text-[#95b34a]">
                {yearRoadmapColumns.map((year, index) => (
                  <div key={year} className="flex items-center gap-10">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg font-bold ${
                        index === 3
                          ? "border-[#95b34a] bg-[#95b34a] text-white"
                          : "border-[#95b34a] bg-white"
                      }`}
                    >
                      {year}
                    </div>
                    {index < yearRoadmapColumns.length - 1 ? (
                      <div className="h-px w-20 bg-[#95b34a]" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="w-[190px] border border-[#dfe6ef] bg-white px-4 py-3 text-left text-[#536174]">
                      구분
                    </th>
                    <th className="w-[190px] border border-[#dfe6ef] bg-white px-4 py-3 text-left text-[#536174]">
                      항목
                    </th>
                    {yearRoadmapColumns.map((year) => (
                      <th
                        key={year}
                        className="border border-[#dfe6ef] bg-white px-4 py-3 text-center text-[#536174]"
                      >
                        {year}학년
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {yearRoadmapRows.map((row) => (
                    <tr key={`${row.stage}-${row.item}`}>
                      <td
                        className={`border border-[#dfe6ef] px-4 py-4 text-center font-semibold ${getStageColor(row.stage)}`}
                      >
                        {row.stage}
                      </td>
                      <td className="border border-[#dfe6ef] bg-[#fdfefe] px-4 py-4 font-semibold text-[#536174]">
                        {row.item}
                      </td>
                      {row.values.map((value, index) => (
                        <td
                          key={`${row.item}-${index}`}
                          className={`border border-[#dfe6ef] px-4 py-4 text-center text-[#56657a] ${
                            index === 3 ? "bg-[#f8fbef]" : "bg-[#f6f7f9]"
                          }`}
                        >
                          {value === "미완료" ? (
                            <span className="rounded-full bg-[#f55d78] px-3 py-1 text-xs font-semibold text-white">
                              미완료
                            </span>
                          ) : (
                            value
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <div className="rounded-xl border border-[#c9d9f8] bg-gradient-to-r from-[#eef3ff] to-[#f3f6fb] px-5 py-4">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">
            AI
          </div>
          <span className="text-sm font-semibold text-[#364457]">AI 맞춤 로드맵 분석</span>
          <span className="ml-auto rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white">
            학생 기준 분석
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 border border-[#dce4f3]">
            <div className="text-xs font-semibold text-[#3a5fd9] uppercase tracking-wide mb-2">
              역량 GAP 분석
            </div>
            <ul className="space-y-1.5 text-sm text-[#4a5568]">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f55d78]" />
                식품기사 자격증 준비 필요
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f55d78]" />
                품질·위생 실습 경험의 직무형 정리 부족
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0b03f]" />
                캡스톤디자인·HACCP 경험 증빙 보완 필요
              </li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-4 border border-[#dce4f3]">
            <div className="text-xs font-semibold text-[#3a5fd9] uppercase tracking-wide mb-2">
              자격증 취득 권장 순서
            </div>
            <ol className="space-y-1.5 text-sm text-[#4a5568]">
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">
                  1
                </span>
                식품기사 (3개월, D-60)
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6b8ef5] text-[10px] font-bold text-white">
                  2
                </span>
                위생사 (위생·안전 직무 연계)
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#a0b4f5] text-[10px] font-bold text-white">
                  3
                </span>
                수산제조기사 (가공 직무 확장)
              </li>
            </ol>
          </div>
          <div className="rounded-lg bg-white p-4 border border-[#dce4f3]">
            <div className="text-xs font-semibold text-[#3a5fd9] uppercase tracking-wide mb-2">
              졸업까지 남은 학기 기준
            </div>
            <div className="text-3xl font-bold text-[#364457] mb-1">2학기</div>
            <p className="text-sm text-[#64748b] leading-6">
              목표 기업(희창유업·코카콜라) 지원 기준으로 자소서와 포트폴리오는{" "}
              <span className="font-semibold text-[#3a5fd9]">2026년 2월</span>까지 상시 지원 가능
              상태로 준비하는 것이 적절합니다.
            </p>
          </div>
        </div>
      </div>

      <SectionCard eyebrow="실행 전략" title="남은 학기 준비 플랜">
        <div className="grid gap-4 xl:grid-cols-3">
          {executionStrategyCards.map((card) => (
            <div key={card.title} className="rounded-xl border border-[#dce4f3] bg-white p-5">
              <div className="text-[18px] font-semibold text-[#1e2d45]">{card.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-[#4f5f76]">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3a5fd9]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-6 text-[#7b8798]">{card.note}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        eyebrow="추천 액션"
        title={`${selectedRoadmap.title} 수행 항목`}
        headerRight={
          <div className="flex flex-wrap gap-2">
            {(["전체", "이번주", "상시", "이번달"] as const).map((deadline) => (
              <button
                key={deadline}
                type="button"
                onClick={() => setSelectedDeadline(deadline)}
                className={`rounded px-3 py-1 text-xs font-semibold ${
                  selectedDeadline === deadline
                    ? "bg-[#316bff] text-white"
                    : "bg-[#f3f6fb] text-[#66758b]"
                }`}
              >
                {deadline}
              </button>
            ))}
          </div>
        }
      >
        <div className="space-y-3">
          {visibleActions.length > 0 ? (
            visibleActions.map((action) => (
              <div key={action.id} className="rounded-md border border-[#dce4f3] bg-[#f8fbff] p-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="font-semibold text-[#344257]">{action.title}</div>
                    <div className="mt-2 text-sm text-[#647387]">{action.insight}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {action.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded bg-white px-2.5 py-1 text-xs text-[#66758b]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-col gap-2">
                    <div className="rounded bg-[#4a5568] px-3 py-1 text-center text-xs font-semibold text-white">
                      {action.deadline}
                    </div>
                    <button
                      type="button"
                      className="rounded bg-[#316bff] px-4 py-2 text-sm font-semibold text-white"
                    >
                      실행하기
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-md border border-dashed border-[#d6deeb] bg-[#fbfcfe] p-5 text-sm text-[#6a778a]">
              현재 선택한 로드맵에서는 식품기사 준비, 자소서 초안, 포트폴리오 정리 항목이 우선
              추천됩니다.
            </div>
          )}
        </div>
      </SectionCard>
    </div>
  );
}
