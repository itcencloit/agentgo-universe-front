import React, { useState } from "react";
import { pivotMatches, transferableSkills } from "../../data/unisync";
import { mentorProfiles } from "../../data/foodEngineering";
import { SectionCard } from "../ui/SectionCard";

const MENTORS_PER_PAGE = 4;

const additionalMentors = [
  {
    mentor: "정유진",
    company: "엠에스씨",
    job: "품질안전",
    score: 85,
    summary: "품질안전팀에서 위생 기준 점검, 공정 이탈 확인, 개선 이력 문서화를 담당하고 있습니다.",
    advice: "위생 기준 해석 경험은 현장 점검 역량으로 연결해서 설명해야 설득력이 높아집니다.",
    prep: ["HACCP 기준 정리", "현장 점검 사례 정리", "위생 관련 자격 검토"],
    faq: [
      "품질안전 직무의 점검 루틴",
      "위생 기준을 서류에 쓰는 방법",
      "신입에게 요구되는 문서화 역량",
    ],
  },
  {
    mentor: "최다은",
    company: "CJ제일제당",
    job: "품질보증",
    score: 83,
    summary:
      "식품 품질보증 직무에서 기준서 검토, 클레임 대응 자료 정리, 내부 점검 지원 업무를 맡고 있습니다.",
    advice: "품질보증은 전공지식보다도 기준서와 기록을 정확히 다루는 태도가 중요하게 보입니다.",
    prep: ["기준서 읽기 연습", "클레임 대응 사례 조사", "문서 정리 포트폴리오 준비"],
    faq: ["품질관리와 품질보증 차이", "기준서 검토 방식", "신입 평가 포인트"],
  },
  {
    mentor: "한예진",
    company: "대상웰라이프",
    job: "생산품질",
    score: 81,
    summary:
      "생산품질 파트에서 공정 데이터 확인, 생산 이슈 기록, 품질 편차 분석을 지원하고 있습니다.",
    advice:
      "생산 현장 경험이 없더라도 실험 데이터 정리 습관은 생산품질 직무에서 충분히 강점이 됩니다.",
    prep: ["공정 흐름 이해", "데이터 해석 사례 정리", "생산품질 직무 비교"],
    faq: ["생산품질의 실무 범위", "현장 커뮤니케이션 방식", "실험 경험이 도움이 되는 지점"],
  },
  {
    mentor: "윤서진",
    company: "식품안전정보원",
    job: "식품안전 분석",
    score: 79,
    summary:
      "식품안전 데이터 분석과 기준 검토 업무를 하며, 공공기관 성격의 식품안전 지원 업무를 수행하고 있습니다.",
    advice:
      "직무 선택 폭을 넓히려면 품질관리뿐 아니라 식품안전 행정·분석 직무도 함께 보는 것이 좋습니다.",
    prep: ["식품안전 법규 정리", "공공기관 직무 조사", "분석형 문서 작성 연습"],
    faq: ["공공기관 식품안전 업무", "식품위생학 활용 방식", "민간기업과의 차이"],
  },
  {
    mentor: "강지수",
    company: "일화",
    job: "음료 품질관리",
    score: 78,
    summary:
      "음료 제품 품질관리 업무에서 샘플 검사, 품질지표 확인, 생산 이슈 모니터링을 담당하고 있습니다.",
    advice:
      "음료 직무 지원 시에는 미생물과 안정성 평가 경험을 한 묶음으로 정리하는 것이 효과적입니다.",
    prep: ["음료 품질 이슈 사례", "미생물 실험 정리", "품질지표 해석 연습"],
    faq: ["음료 품질관리 핵심 역량", "미생물 실험 활용 방식", "품질 이슈 대응 프로세스"],
  },
];

function mentorBadgeTone(score: number) {
  return score >= 90 ? "bg-[#e8f5e9] text-[#2e7d32]" : "bg-[#e3f0ff] text-[#1a56b0]";
}

function buildPageNumbers(currentPage: number, totalPages: number) {
  if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i);

  const pages = new Set<number>([0, totalPages - 1, currentPage]);
  if (currentPage - 1 > 0) pages.add(currentPage - 1);
  if (currentPage + 1 < totalPages - 1) pages.add(currentPage + 1);

  return Array.from(pages).sort((a, b) => a - b);
}

export const PivotLabPage: React.FC = () => {
  const [selectedMatchId, setSelectedMatchId] = useState(pivotMatches[0]?.id ?? "");
  const [selectedMentorName, setSelectedMentorName] = useState<string | null>(null);
  const [mentorPage, setMentorPage] = useState(0);
  const [openedSkillId, setOpenedSkillId] = useState<string | null>(null);

  // 김민서 멘토 데이터 (요청 사양 반영)
  const minseoMentor = {
    mentor: "김민서",
    company: "희창유업",
    job: "품질관리",
    score: 96,
    summary:
      "부산 식품기업 품질관리 직무에 입사해 원료 입고 검사, 공정 위생 점검, 클레임 원인 분석을 담당하고 있습니다.",
    advice:
      "식품위생학, 품질평가 실험, 캡스톤 결과를 한 흐름으로 묶어 설명하면 서류 설득력이 높아집니다.",
    prep: ["식품기사 준비", "품질관리 자소서", "실험 결과 수치화"],
    faq: [
      "현업에서 가장 자주 보는 품질 지표",
      "신입이 맡는 검사 업무 범위",
      "현장 실무에 도움 된 전공 과목",
    ],
  };

  const mentorCandidates = [
    minseoMentor,
    mentorProfiles[1],
    mentorProfiles[2],
    ...additionalMentors,
  ];
  const selectedMentor =
    mentorCandidates.find((mentor) => mentor.mentor === selectedMentorName) ?? null;
  const totalMentorPages = Math.ceil(mentorCandidates.length / MENTORS_PER_PAGE);
  const pagedMentors = mentorCandidates.slice(
    mentorPage * MENTORS_PER_PAGE,
    (mentorPage + 1) * MENTORS_PER_PAGE
  );
  const pageNumbers = buildPageNumbers(mentorPage, totalMentorPages);

  const openMentorPanel = (name: string) => {
    setSelectedMentorName((current) => (current === name ? null : name));
  };

  return (
    <div className="space-y-4">
      <SectionCard eyebrow="졸업생 노하우" title="클로잇 학생에게 바로 연결되는 선배 인사이트">
        <div className="rounded-xl border border-[#c9d9f8] bg-gradient-to-r from-[#eef3ff] to-[#f3f6fb] px-5 py-4">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-xs font-bold text-white">
              AI
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-[#364457]">
                  AI 멘토 자동 매칭 리포트
                </span>
                <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white">
                  학생 기준 분석
                </span>
              </div>
              <p className="mt-1 text-sm text-[#64748b]">
                클로잇 학생의 전공 실험 이력과 희창유업 품질관리 직무의 연관성을 분석한 결과입니다.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-[#64748b]">
                <span className="rounded-full border border-[#c9d9f8] bg-white px-3 py-1 font-semibold text-[#3a5fd9]">
                  총 {mentorCandidates.length}명 추천
                </span>
                <span>
                  {mentorPage + 1} / {totalMentorPages} 페이지
                </span>
                <span>행 클릭 시 상세 드롭다운 확인</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-[#dce4f3] bg-white">
          <div className="grid grid-cols-[120px_220px_1fr_92px_56px] bg-[#f3f6fb] px-5 py-3 text-[11px] font-semibold text-[#6b778c]">
            <span>이름</span>
            <span>직무</span>
            <span>현직 요약</span>
            <span className="text-center">매칭도</span>
            <span className="text-center">상세</span>
          </div>
          <div className="divide-y divide-[#e8eef6]">
            {pagedMentors.map((mentor) => {
              const isOpen = selectedMentor?.mentor === mentor.mentor;
              return (
                <div key={mentor.mentor} className="overflow-hidden">
                  <button
                    type="button"
                    onClick={() => openMentorPanel(mentor.mentor)}
                    className={`grid w-full grid-cols-[120px_220px_1fr_92px_56px] items-center gap-4 px-5 py-4 text-left transition-all ${
                      isOpen ? "bg-[#f7fbff]" : "hover:bg-[#f8fbff]"
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="text-[15px] font-bold text-[#1e2d45]">{mentor.mentor}</div>
                    </div>
                    <div className="min-w-0 text-sm text-[#64748b]">
                      {mentor.company} · {mentor.job}
                    </div>
                    <div className="min-w-0 text-sm text-[#64748b] truncate">{mentor.summary}</div>
                    <div className="flex justify-center">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-bold ${mentorBadgeTone(mentor.score)}`}
                      >
                        {mentor.score}%
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <span
                        className={`text-xs font-bold text-[#7d8798] transition-transform ${isOpen ? "rotate-180" : ""}`}
                      >
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
                              <div className="text-[11px] font-bold tracking-[0.14em] text-[#3a5fd9] uppercase">
                                TOP MENTOR INSIGHT
                              </div>
                              <div className="mt-2 text-[22px] font-bold text-[#1e2d45]">
                                {mentor.mentor}{" "}
                                <span className="text-sm font-normal text-[#64748b]">
                                  · {mentor.company} {mentor.job}
                                </span>
                              </div>
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-[#3a5fd9] text-lg font-black text-[#3a5fd9] shadow-sm">
                              {mentor.score}%
                            </div>
                          </div>

                          <div className="mt-6 rounded-xl bg-white/90 p-5 border border-[#dce4f3] relative">
                            <div className="absolute -top-3 left-4 bg-[#3a5fd9] text-white px-2 py-0.5 text-[10px] font-bold rounded">
                              선배 한 줄 조언
                            </div>
                            <p className="text-[14.5px] leading-7 text-[#344257] font-semibold italic">
                              "{mentor.advice}"
                            </p>
                          </div>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {mentor.prep.map((item) => (
                              <span
                                key={item}
                                className="rounded-full bg-[#eef2fb] px-4 py-1.5 text-xs font-bold text-[#3a5fd9] border border-[#c9d9f8]"
                              >
                                #{item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-xl border border-[#dce4f3] bg-white p-5 shadow-sm">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-[11px] font-bold tracking-[0.14em] text-[#7d8798] uppercase">
                              MENTOR FAQ
                            </div>
                            <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[9px] font-bold text-white">
                              AI 정리
                            </span>
                          </div>
                          <div className="space-y-3">
                            {mentor.faq.map((question, index) => (
                              <div
                                key={question}
                                className="group rounded-lg border border-[#e8eef6] bg-[#f8fbff] p-4"
                              >
                                <div className="flex items-start gap-3">
                                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-[11px] font-bold text-white">
                                    {index + 1}
                                  </span>
                                  <span className="text-sm font-semibold text-[#344257]">
                                    {question}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 rounded-lg bg-[#f3f6fb] p-3 border border-dashed border-[#c9d9f8]">
                            <p className="text-[11px] leading-5 text-[#647387]">
                              AI가 현재 학생의 목표 직무와 가장 가까운 선배 질문 주제를 먼저
                              정리했습니다. 필요한 항목만 확인한 뒤 상담 질문 초안으로 바로 옮길 수
                              있습니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-1.5 border-t border-[#e8eef6] bg-[#fbfcfe] px-4 py-3">
            <button
              type="button"
              onClick={() => setMentorPage((current) => Math.max(0, current - 1))}
              disabled={mentorPage === 0}
              className="px-2.5 py-1 text-[11px] font-semibold text-[#536174] disabled:opacity-40"
            >
              이전
            </button>
            {pageNumbers.map((pageNumber, index) => {
              const previousPage = pageNumbers[index - 1];
              const showEllipsis = previousPage !== undefined && pageNumber - previousPage > 1;

              return (
                <div key={pageNumber} className="flex items-center gap-1.5">
                  {showEllipsis ? (
                    <span className="px-1 text-[11px] text-[#8a9ab5]">...</span>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setMentorPage(pageNumber)}
                    className={`min-w-8 px-2.5 py-1 text-[11px] font-semibold ${
                      pageNumber === mentorPage ? "text-[#3a5fd9]" : "text-[#536174]"
                    }`}
                  >
                    {pageNumber + 1}
                  </button>
                </div>
              );
            })}
            <button
              type="button"
              onClick={() =>
                setMentorPage((current) => Math.min(totalMentorPages - 1, current + 1))
              }
              disabled={mentorPage === totalMentorPages - 1}
              className="px-2.5 py-1 text-[11px] font-semibold text-[#536174] disabled:opacity-40"
            >
              다음
            </button>
          </div>
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
                  className={`block w-full rounded-xl border p-4 text-left transition-colors ${
                    selectedMatchId === match.id
                      ? "border-[#bfd4ff] bg-[#eef4ff]"
                      : "border-[#dce4f3] bg-[#f8fbff]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm text-[#6d7a8e]">{match.company}</div>
                      <div className="mt-1 font-semibold text-[#344257]">{match.role}</div>
                    </div>
                    <div className="rounded bg-[#316bff] px-3 py-1 text-sm font-semibold text-white">
                      {match.fit}
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-[#647387]">{match.evidence}</div>
                </button>
              ))}
            </div>
          </SectionCard>

          <SectionCard eyebrow="상담 준비" title="전환 가능 역량">
            <div className="space-y-3">
              {transferableSkills.map((skill) => {
                const isOpen = openedSkillId === skill.id;
                return (
                  <div
                    key={skill.id}
                    className={`rounded-xl border transition-colors ${isOpen ? "border-[#bfd4ff] bg-[#eef4ff]" : "border-[#dce4f3] bg-[#f8fbff]"}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenedSkillId(isOpen ? null : skill.id)}
                      className="w-full p-4 text-left"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <div className="shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#3a5fd9] text-[9px] font-bold text-white">
                              AI
                            </div>
                            <span className="text-sm text-[#6d7a8e]">{skill.from}</span>
                          </div>
                          <div className="mt-1 font-semibold text-[#344257]">{skill.skill}</div>
                        </div>
                        <span className="shrink-0 text-[11px] font-semibold text-[#5b86f7]">
                          {isOpen ? "닫기" : "상세 보기"}
                        </span>
                      </div>
                      {!isOpen && (
                        <div className="mt-3 text-sm text-[#647387]">{skill.evidence}</div>
                      )}
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#cce0f5] px-4 pb-4 pt-3 space-y-3">
                        <div>
                          <div className="mb-1 text-[10px] font-bold uppercase tracking-wide text-[#7b8597]">
                            보유 근거
                          </div>
                          <p className="text-[12px] leading-5 text-[#536174]">{skill.evidence}</p>
                        </div>
                        <div>
                          <div className="mb-1 text-[10px] font-bold uppercase tracking-wide text-[#7b8597]">
                            면접 활용 포인트
                          </div>
                          <p className="text-[12px] leading-5 text-[#3a5fd9]">
                            {skill.interviewTip}
                          </p>
                        </div>
                        <div>
                          <div className="mb-1 text-[10px] font-bold uppercase tracking-wide text-[#7b8597]">
                            상담 전 준비 항목
                          </div>
                          <ul className="space-y-1">
                            {skill.consultingCheck.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-1.5 text-[12px] text-[#64748b]"
                              >
                                <span className="shrink-0 text-[#aab4c4]">·</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {skill.relatedCompanies.map((c) => (
                            <span
                              key={c}
                              className="rounded bg-[#dbeeff] px-2 py-0.5 text-[10px] text-[#3a5fd9]"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
