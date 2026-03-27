import { Fragment, useState } from 'react'
import { departmentCompanies, departmentEmploymentPosts, studentProfile } from '../../data/foodEngineering'
import { SectionCard } from '../ui/SectionCard'

const regionGroups = [
  { region: '부산', count: '8' },
  { region: '서울', count: '6' },
  { region: '경남', count: '4' },
  { region: '사하구', count: '2' },
  { region: '강서구', count: '2' },
  { region: '금정구', count: '1' },
  { region: '강남구', count: '3' },
  { region: '마포구', count: '1' },
  { region: '송파구', count: '2' },
]

const resourceSummaries: Record<string, string> = {
  '[AI 추천] 희창유업 품질관리 직무 합격 가이드':
    '희창유업 품질관리 직무 기준으로 전공 교과, 자격 준비, 학과 게시판 채용 패턴을 묶어 지원 전략을 정리한 요약 자료입니다. 품질평가·위생 계열 과목을 어떤 경험 문장으로 바꿔야 하는지까지 포함합니다.',
  '[AI 추천] 식품기사 실기 핵심 요약집 (품질관리 특화)':
    '품질관리 직무 지원자를 기준으로 식품기사 실기 범위를 우선순위별로 압축한 자료입니다. HACCP, 위생 기준, 품질 판정과 직접 연결되는 파트를 먼저 보도록 구성했습니다.',
  '[이수그룹] 2026 이수그룹 신입사원 공개채용 (~4/14(화) 오전 10시)':
    '대기업 공개채용 일정과 모집 직무 범위를 정리한 공고입니다. 식품 계열 학생이 지원 가능한 직무와 제출 일정, 확인해야 할 기본 요건을 빠르게 파악할 수 있습니다.',
  '[삼성웰스토리] 2026년 푸드페스타 사전신청 안내':
    '푸드 산업 직무 이해와 기업 접점 확보에 활용할 수 있는 행사 안내입니다. 직무 탐색 단계에서 업계 트렌드와 기업 포지셔닝을 파악하는 데 도움이 됩니다.',
  '[CJ제일제당] 2026 상반기 CJ제일제당 식품사업부문 신입사원 모집 (~4/1 17시)':
    'CJ제일제당 식품사업부문 채용 공고 핵심만 요약한 자료입니다. 전공 적합도, 우대 자격, 지원 마감 시점, 품질·연구 직무 지원 시 체크해야 할 포인트를 중심으로 읽을 수 있습니다.',
}

const personalizedNoticeRecommendations = [
  {
    category: '프로그램 추천',
    title: '식품기사 실기 핵심 요약집 우선 열람',
    reason: '식품위생학, 품질평가, HACCP 학습 흐름이 이어져 자격증 자료 활용도가 높습니다.',
  },
  {
    category: '채용 공지',
    title: 'CJ제일제당 식품사업부문 공고 확인',
    reason: '관심 직무와 전공 적합도가 모두 높아 이번 주 우선 확인 공지로 분류됩니다.',
  },
]

export function MockSimulationPage() {
  const [mode] = useState<'resource' | 'company'>('resource')
  const [openedResourceTitle, setOpenedResourceTitle] = useState<string | null>(null)

  // AI 추천 우선순위가 반영된 정렬된 리스트 (가상)
  const sortedPosts = [
    { no: 'AI', category: '기업분석', title: '[AI 추천] 희창유업 품질관리 직무 합격 가이드', author: 'AI 컨설턴트', date: '26-03-20', views: '1,245', hasAttachment: true, recommended: true },
    { no: 'AI', category: '자격증', title: '[AI 추천] 식품기사 실기 핵심 요약집 (품질관리 특화)', author: 'AI 컨설턴트', date: '26-03-15', views: '3,892', hasAttachment: true, recommended: true },
    ...departmentEmploymentPosts
  ]
  const previewPosts = sortedPosts.slice(0, 5)
  const resourceRefDate = '2026-03-28'

  return (
    <div className="space-y-4">
      {mode === 'resource' ? (
        <SectionCard
          eyebrow="취업자료·기업분석"
          title="취업자료실"
          headerRight={
            <button type="button" className="text-sm font-semibold text-[#3a5fd9]">
              더보기 &gt;
            </button>
          }
        >
          <div className="rounded-2xl border border-[#dce4f3] bg-[linear-gradient(180deg,#f8fbff_0%,#f3f6fb_100%)] px-5 py-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-[#3a5fd9]">자료 요약</div>
                <div className="mt-1 text-sm font-semibold text-[#364457]">취업 준비에 바로 쓰이는 자료만 우선 정리했습니다.</div>
              </div>
              <span className="rounded-full border border-[#d6e0f4] bg-white px-3 py-1 text-[11px] font-semibold text-[#64748b]">
                기준일 {resourceRefDate}
              </span>
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-xl bg-[#5d84f0] px-4 py-4 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-white/75">전체 자료</div>
                <div className="mt-2 text-4xl font-bold">23</div>
                <div className="mt-2 text-sm text-white/90">채용공고, 기업분석, 자격증 자료를 한곳에서 관리합니다.</div>
              </div>
              <div className="rounded-xl border border-[#dce4f3] bg-white px-4 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-[#3a5fd9]">AI 우선 추천</div>
                <div className="mt-2 text-4xl font-bold text-[#1e2d45]">5건</div>
                <div className="mt-2 text-sm leading-6 text-[#64748b]">학생 프로필 적합도와 최근 등록일을 함께 반영한 우선 열람 콘텐츠입니다.</div>
              </div>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: '채용공고', value: '18건' },
                { label: '기업분석보고서', value: '2건' },
                { label: '자격증 정보', value: '3건' },
                { label: '기타', value: '0건' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-[#e8eef6] bg-white px-4 py-3">
                  <div className="text-[11px] text-[#7d8798]">{item.label}</div>
                  <div className="mt-1 text-lg font-semibold text-[#344257]">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-[#c9d9f8] bg-white px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-[#3a5fd9]">AI 개인화 공지 추천</div>
                  <div className="mt-1 text-sm font-semibold text-[#364457]">수강 이력과 관심 직무 기준으로 지금 확인할 공지를 먼저 골랐습니다.</div>
                </div>
                <span className="rounded-full bg-[#eef2fb] px-3 py-1 text-[11px] font-semibold text-[#3a5fd9]">추천 2건</span>
              </div>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {personalizedNoticeRecommendations.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[#dce4f3] bg-[#f8fbff] px-4 py-4">
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-[#7d8798]">{item.category}</div>
                    <div className="mt-2 text-sm font-semibold text-[#344257]">{item.title}</div>
                    <div className="mt-2 text-[11px] leading-5 text-[#64748b]">{item.reason}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-[#364457]">최근 등록 콘텐츠</div>
              <div className="mt-1 text-xs text-[#8a9ab5]">AI 정렬 기준일 {resourceRefDate} · 최근 등록일과 학생 프로필 적합도 반영</div>
            </div>
          </div>

          <div className="space-y-3">
            {previewPosts.map((row, i) => {
              const isOpen = openedResourceTitle === row.title

              return (
                <Fragment key={`${row.title}-${i}`}>
                  <div className={`rounded-xl border p-4 transition-colors ${isOpen ? 'border-[#bfd4ff] bg-[#f8fbff]' : 'border-[#dce4f3] bg-white'}`}>
                    <button
                      type="button"
                      onClick={() => setOpenedResourceTitle((current) => (current === row.title ? null : row.title))}
                      className="w-full text-left"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`rounded px-2 py-0.5 text-[10px] font-semibold ${
                              row.category === '채용공고' ? 'bg-[#e3f0ff] text-[#1a56b0]' :
                              row.category === '기업행사' ? 'bg-[#e8f5e9] text-[#2e7d32]' :
                              row.category === '공모전' ? 'bg-[#fff3e0] text-[#e65100]' :
                              row.category === '기업분석' ? 'bg-[#f3f0ff] text-[#5b3fa6]' :
                              'bg-[#f1f3f7] text-[#546173]'
                            }`}>
                              {row.category}
                            </span>
                            {'recommended' in row && row.recommended ? (
                              <span className="rounded bg-[#3a5fd9] px-2 py-0.5 text-[9px] font-bold text-white uppercase">AI Best</span>
                            ) : null}
                            {row.hasAttachment ? (
                              <span className="rounded bg-[#eef2fb] px-2 py-0.5 text-[10px] font-semibold text-[#64748b]">첨부</span>
                            ) : null}
                          </div>
                          <div className="mt-3 text-[15px] font-semibold leading-6 text-[#344257]">{row.title}</div>
                          <div className="mt-2 flex items-center gap-3 text-[11px] text-[#8a9ab5]">
                            <span>등록일 {row.date}</span>
                            {'views' in row ? <span>조회 {row.views}</span> : null}
                          </div>
                        </div>
                        <div className="shrink-0 rounded-full border border-[#dce4f3] px-2.5 py-1 text-[11px] font-semibold text-[#64748b]">
                          {isOpen ? '닫기' : '요약'}
                        </div>
                      </div>
                    </button>

                    {isOpen ? (
                      <div className="mt-4 border-t border-[#e8eef6] pt-4">
                        <div className="rounded-xl border border-[#dce4f3] bg-[#f8fbff] px-4 py-4">
                          <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">AI</div>
                            <div className="text-[11px] font-semibold uppercase tracking-wide text-[#3a5fd9]">요약본</div>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-[#556276]">
                            {resourceSummaries[row.title] ?? '선택한 콘텐츠의 핵심 내용을 요약해 보여주는 영역입니다.'}
                          </p>
                          <div className="mt-3 rounded-lg border border-[#e8eef6] bg-white px-3 py-2 text-[11px] leading-5 text-[#64748b]">
                            학생 프로필, 관심 직무, 게시판 분류 기준으로 읽어야 할 포인트만 먼저 정리했습니다.
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </Fragment>
              )
            })}
          </div>
        </SectionCard>
      ) : (
        <div className="space-y-4">
          <div className="rounded-xl border border-[#dce4f3] bg-white px-5 py-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">AI</div>
              <span className="text-[15px] font-bold text-[#1e2d45]">{studentProfile.targetCompany} 채용 패턴 정밀 분석</span>
              <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white ml-1">전략 분석</span>
            </div>
            
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-[#f8fafd] border border-[#e8eef6] p-4">
                <div className="text-[11px] font-bold text-[#536174] mb-3 uppercase tracking-wider">선호 전공 및 스펙</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#64748b]">식품공학 전공</span>
                    <span className="font-bold text-[#2e7d32]">매우 선호</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#64748b]">학점 3.5 이상</span>
                    <span className="font-bold text-[#3a5fd9]">82% 합격</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#64748b]">주요 자격증</span>
                    <span className="font-bold text-[#1e2d45]">식품기사 필수</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl bg-[#f8fafd] border border-[#e8eef6] p-4">
                <div className="text-[11px] font-bold text-[#536174] mb-3 uppercase tracking-wider">채용 시기 및 경쟁</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#64748b]">주요 공고 시점</span>
                    <span className="font-bold text-[#3a5fd9]">4월, 9월</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#64748b]">채용 유형</span>
                    <span className="font-bold text-[#1e2d45]">수시/학과추천</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#64748b]">예상 경쟁률</span>
                    <span className="font-bold text-[#f55d78]">높음 (15:1)</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-[linear-gradient(135deg,#eef2fb_0%,#dce4f3_100%)] border border-[#c9d9f8] p-4">
                <div className="text-[11px] font-bold text-[#3a5fd9] mb-3 uppercase tracking-wider">AI 맞춤형 필승 전략</div>
                <p className="text-[11px] leading-5 text-[#4a5d8a] font-medium">
                  희창유업은 학과 게시판을 통한 **수시 채용** 비중이 매우 높습니다. 4학년 1학기에 **식품기사**를 반드시 취득하고, 캡스톤 프로젝트의 **품질 개선 사례**를 강조하여 지도교수 추천 채용을 공략하는 것이 가장 효과적입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
            <SectionCard eyebrow="기업정보" title="추천 기업 목록">
              <div className="overflow-hidden rounded-md border border-[#d6def0]">
                <table className="min-w-full border-collapse text-sm">
                  <thead className="bg-[#f3f5f8] text-[#536174]">
                    <tr>
                      <th className="px-4 py-3 text-left">상태</th>
                      <th className="px-4 py-3 text-left">기업명</th>
                      <th className="px-4 py-3 text-left">기업분류</th>
                      <th className="px-4 py-3 text-left">지역</th>
                      <th className="px-4 py-3 text-left">매출(억)</th>
                      <th className="px-4 py-3 text-left">초봉(만)</th>
                      <th className="px-4 py-3 text-left">보기</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentCompanies.map((row) => (
                      <tr key={row.name} className="border-t border-[#e7edf6] text-[#46556c]">
                        <td className="px-4 py-3">{row.state}</td>
                        <td className="px-4 py-3">{row.name}</td>
                        <td className="px-4 py-3">{row.type}</td>
                        <td className="px-4 py-3">{row.area}</td>
                        <td className="px-4 py-3">{row.sales}</td>
                        <td className="px-4 py-3">{row.pay}</td>
                        <td className="px-4 py-3">
                          <button type="button" className="rounded border border-[#cfd9ea] bg-white px-3 py-1 text-xs font-semibold text-[#536174]">
                            보기
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>

            <SectionCard eyebrow="우리지역" title="지역별 기업 현황">
              <div className="grid grid-cols-3 border border-[#d6def0] text-center text-sm">
                {regionGroups.map((item, index) => (
                  <div
                    key={`${item.region}-${item.count}`}
                    className={`px-3 py-4 ${index % 3 !== 2 ? 'border-r border-[#e6ecf5]' : ''} ${index < 6 ? 'border-b border-[#e6ecf5]' : ''}`}
                  >
                    <div className="font-semibold text-[#4a5c74]">{item.region}</div>
                    <div className="mt-2 text-[#68768a]">{item.count}</div>
                  </div>
                ))}
              </div>
            </SectionCard>

          <div className="rounded-xl border border-[#dce4f3] bg-white px-5 py-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">AI</div>
              <span className="text-sm font-semibold text-[#364457]">AI 기업 분석</span>
              <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white ml-1">시나리오 시연</span>
              <span className="ml-auto text-xs text-[#8a9ab5]">관심 기업: {studentProfile.targetCompany}</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#536174] uppercase tracking-wide">채용 패턴 분석</div>
                {[
                  { label: '채용 시기', value: '상반기 학과게시판 중심 수시채용 비중이 높음' },
                  { label: '선호 전공', value: '식품공학, 식품과학, 생명공학, 화학 관련 전공' },
                  { label: '선호 경험', value: '식품위생 실험, 품질평가, 캡스톤디자인, 공정 실습' },
                  { label: '합격 자격증', value: '식품기사, 위생사, 수산제조기사' },
                ].map(row => (
                  <div key={row.label} className="flex gap-3 rounded-lg bg-[#f8fafd] border border-[#e8eef6] px-3 py-2 text-sm">
                    <span className="w-24 shrink-0 font-semibold text-[#536174]">{row.label}</span>
                    <span className="text-[#46556c]">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#536174] uppercase tracking-wide">현재 스펙 대비 GAP</div>
                {[
                  { item: '식품기사 자격증', status: '준비중', color: 'text-[#f55d78]' },
                  { item: '식품위생·품질 실습 경험', status: '전공 수업 이수 (부분 충족)', color: 'text-[#f0b03f]' },
                  { item: '캡스톤·종합설계 사례', status: '정리 필요', color: 'text-[#f0b03f]' },
                  { item: '전공 적합도', status: '식품공학전공 (충족)', color: 'text-[#2e7d32]' },
                ].map(row => (
                  <div key={row.item} className="flex items-center justify-between rounded-lg bg-[#f8fafd] border border-[#e8eef6] px-3 py-2 text-sm">
                    <span className="text-[#364457]">{row.item}</span>
                    <span className={`text-xs font-semibold ${row.color}`}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      )}

    </div>
  )
}
