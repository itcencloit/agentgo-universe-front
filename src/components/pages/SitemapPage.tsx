import React from "react";
import { SectionCard } from "../ui/SectionCard";

const sitemapGroups = [
  { title: "HOME", items: ["MY HOME", "나의 이수현황", "공지사항", "취업자료·기업분석"] },
  { title: "My로드맵", items: ["학업계획서", "연구실적", "비교과 실적", "액션 플랜"] },
  {
    title: "졸업선배 노하우·멘토링",
    items: ["졸업선배 정보검색", "멘토링상담", "취업·진학후기", "직무간담회"],
  },
  {
    title: "취업자료·기업분석",
    items: ["취업자료실", "기업 분석 리포트", "직무 참고자료", "기업정보"],
  },
  { title: "채용정보", items: ["추천채용", "일반채용", "인턴채용", "채용설명회"] },
  {
    title: "역량진단",
    items: ["직업기초역량진단", "진로성숙도검사", "취업준비도검사", "직무적성검사"],
  },
];

const aiRecommendedItems = ["MY HOME", "액션 플랜", "추천채용"];

export const SitemapPage: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-[#c9d9f8] bg-gradient-to-r from-[#eef3ff] to-[#f3f6fb] px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">
            AI
          </div>
          <span className="text-sm font-semibold text-[#364457]">AI 경로 가이드</span>
          <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white ml-1">
            학생 기준 분석
          </span>
        </div>
        <p className="mt-1 text-sm text-[#64748b]">
          현재 클로잇 학생의 학년, 목표 직무, 준비 현황을 기준으로 이번 학기에 우선 확인해야 할
          메뉴를 하이라이트 했습니다.
        </p>
      </div>

      <SectionCard eyebrow="사이트맵" title="전체 메뉴">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sitemapGroups.map((group) => (
            <div key={group.title} className="rounded-md border border-[#dce4f3] bg-[#f8fbff] p-5">
              <div className="text-[17px] font-semibold text-[#344257] mb-4">{group.title}</div>
              <div className="space-y-2 text-sm text-[#647387]">
                {group.items.map((item) => {
                  const isRecommended = aiRecommendedItems.includes(item);
                  return (
                    <div
                      key={item}
                      className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 transition-colors ${
                        isRecommended
                          ? "bg-[#eef2fb] border border-[#c9d9f8] font-semibold text-[#3a5fd9]"
                          : "hover:bg-white/50"
                      }`}
                    >
                      <span>{item}</span>
                      {isRecommended && (
                        <span className="rounded-full bg-[#3a5fd9] px-1.5 py-0.5 text-[9px] font-bold text-white uppercase">
                          AI Next
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
