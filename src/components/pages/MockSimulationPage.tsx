import { useState } from 'react'
import { alumniPath } from '../../data/unisync'
import { SectionCard } from '../ui/SectionCard'

const resourceRows = [
  { category: '취업뉴스', title: '식품 대기업 R&D 인력 수요 확대…CJ제일제당·농심 상반기 채용 확대', views: '89', date: '2026-02-26' },
  { category: '기타', title: '식품기사 vs 영양사: R&D 직무 합격자 자격증 현황 분석', views: '67', date: '2026-02-25' },
  { category: '기타', title: '대체단백질·기능성 식품 시장 트렌드와 R&D 역할 변화 2026', views: '52', date: '2026-02-24' },
  { category: '기타', title: 'CJ제일제당 R&D 합격자 스펙과 면접 질문 트렌드 완전 분석', views: '45', date: '2026-02-23' },
]

const companyRows = [
  { state: '학과/선배', name: 'CJ제일제당', type: '대기업', area: '서울', sales: '115,700,000', pay: '4,200' },
  { state: '학과/선배', name: '농심', type: '대기업', area: '서울', sales: '23,800,000', pay: '3,900' },
  { state: '선배', name: '풀무원', type: '중견기업', area: '서울', sales: '15,200,000', pay: '3,600' },
  { state: '선배', name: '오뚜기', type: '대기업', area: '경기', sales: '32,000,000', pay: '3,800' },
]

const regionGroups = [
  { region: '서울', count: '19518' },
  { region: '강남구', count: '3958' },
  { region: '강동구', count: '304' },
  { region: '강북구', count: '65' },
  { region: '강서구', count: '595' },
  { region: '관악구', count: '172' },
  { region: '광진구', count: '326' },
  { region: '구로구', count: '1044' },
  { region: '금천구', count: '1333' },
]

export function MockSimulationPage() {
  const [mode, setMode] = useState<'resource' | 'company'>('resource')

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-[#dce4f3] bg-[#f3f6fb] px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-xs font-bold text-white">AI</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-[#364457]">AI 채용 시장 트렌드 요약</span>
              <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white">시나리오 시연</span>
              <span className="ml-auto text-xs text-[#8a9ab5]">2026년 상반기 기준 · 관심직무: 식품 R&D</span>
            </div>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg bg-white border border-[#dce4f3] p-4">
                <div className="text-xs font-semibold text-[#3a5fd9] mb-2">직무 수요 변화</div>
                <div className="text-2xl font-bold text-[#364457]">+18%</div>
                <div className="mt-1 text-xs text-[#64748b]">식품 R&D 직무 공고 수 전년 동기 대비 증가 (건강기능·대체단백질 중심)</div>
              </div>
              <div className="rounded-lg bg-white border border-[#dce4f3] p-4">
                <div className="text-xs font-semibold text-[#3a5fd9] mb-2">핵심 요구 역량</div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {['HACCP', '관능평가', 'GC-MS', '배합실험', '소재분석', '식품기사'].map(tag => (
                    <span key={tag} className="rounded bg-[#eef2fb] px-2 py-0.5 text-[11px] text-[#3a5fd9] font-medium">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-white border border-[#dce4f3] p-4">
                <div className="text-xs font-semibold text-[#3a5fd9] mb-2">학생 프로필 적합도</div>
                <div className="text-2xl font-bold text-[#364457]">84%</div>
                <div className="mt-1 text-xs text-[#64748b]">현재 스펙 기준, 식품기사 취득 시 93%로 향상 예측</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionCard eyebrow="취업정보" title="취업자료실 및 기업정보">
        <div className="grid gap-3 md:grid-cols-5">
          <div className="rounded-2xl bg-[#5d84f0] px-4 py-5 text-center text-white">
            <div className="text-sm">전체</div>
            <div className="mt-2 text-4xl font-bold">1316</div>
          </div>
          <div className="rounded-2xl bg-[#f1f3f7] px-4 py-5 text-center text-[#546173]">
            <div className="text-sm">취업뉴스</div>
            <div className="mt-2 text-4xl font-bold">1191</div>
          </div>
          <div className="rounded-2xl bg-[#f1f3f7] px-4 py-5 text-center text-[#546173]">
            <div className="text-sm">기업분석보고서</div>
            <div className="mt-2 text-4xl font-bold">11</div>
          </div>
          <div className="rounded-2xl bg-[#f1f3f7] px-4 py-5 text-center text-[#546173]">
            <div className="text-sm">프로그램후기</div>
            <div className="mt-2 text-4xl font-bold">13</div>
          </div>
          <div className="rounded-2xl bg-[#f1f3f7] px-4 py-5 text-center text-[#546173]">
            <div className="text-sm">기타</div>
            <div className="mt-2 text-4xl font-bold">101</div>
          </div>
        </div>

        <div className="mt-4 rounded-md bg-[#dff3fb] px-4 py-4">
          <div className="grid gap-3 md:grid-cols-[1fr_170px_156px]">
            <input
              readOnly
              value={mode === 'resource' ? '제목을 입력해주세요.' : '기업명을 두 글자 이상 입력해주세요.'}
              className="rounded border border-[#d6def0] bg-white px-4 py-3 text-sm text-[#7c8799]"
            />
            <div className="rounded border border-[#d6def0] bg-white px-4 py-3 text-sm text-[#5f6d82]">상세검색</div>
            <button type="button" className="rounded bg-[#5d84f0] px-4 py-3 text-sm font-semibold text-white">
              검색
            </button>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => setMode('resource')}
            className={`rounded px-4 py-2 text-sm font-semibold ${
              mode === 'resource' ? 'bg-[#316bff] text-white' : 'bg-[#f3f6fb] text-[#66758b]'
            }`}
          >
            취업자료실
          </button>
          <button
            type="button"
            onClick={() => setMode('company')}
            className={`rounded px-4 py-2 text-sm font-semibold ${
              mode === 'company' ? 'bg-[#316bff] text-white' : 'bg-[#f3f6fb] text-[#66758b]'
            }`}
          >
            기업정보
          </button>
        </div>
      </SectionCard>

      {mode === 'resource' ? (
        <SectionCard eyebrow="취업자료실" title="콘텐츠 목록">
          <div className="overflow-hidden rounded-md border border-[#d6def0]">
            <table className="min-w-full border-collapse text-sm">
              <thead className="bg-[#f3f5f8] text-[#536174]">
                <tr>
                  <th className="px-4 py-3 text-left">분류</th>
                  <th className="px-4 py-3 text-left">제목</th>
                  <th className="px-4 py-3 text-left">조회수</th>
                  <th className="px-4 py-3 text-left">작성일</th>
                  <th className="px-4 py-3 text-left">보기</th>
                </tr>
              </thead>
              <tbody>
                {resourceRows.map((row) => (
                  <tr key={row.title} className="border-t border-[#e7edf6] text-[#46556c]">
                    <td className="px-4 py-3">{row.category}</td>
                    <td className="px-4 py-3">{row.title}</td>
                    <td className="px-4 py-3">{row.views}</td>
                    <td className="px-4 py-3">{row.date}</td>
                    <td className="px-4 py-3">
                      <button type="button" className="rounded bg-[#7b63f6] px-3 py-1 text-xs font-semibold text-white">
                        보기
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      ) : (
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
                  {companyRows.map((row) => (
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
        </div>
      )}

      <div className="rounded-xl border border-[#dce4f3] bg-white px-5 py-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">AI</div>
          <span className="text-sm font-semibold text-[#364457]">AI 기업 분석</span>
          <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white ml-1">시나리오 시연</span>
          <span className="ml-auto text-xs text-[#8a9ab5]">관심 기업: CJ제일제당</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-[#536174] uppercase tracking-wide">채용 패턴 분석</div>
            {[
              { label: '채용 시기', value: '상반기 3~4월·하반기 9~10월 공채 정기화' },
              { label: '선호 전공', value: '식품영양학, 식품공학, 생명공학, 화학공학' },
              { label: '선호 경험', value: '연구실 인턴, 관능평가, 캡스톤 프로젝트' },
              { label: '합격 자격증', value: '식품기사, 영양사, HACCP 관리사' },
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
              { item: '식품기사 자격증', status: '미보유', color: 'text-[#f55d78]' },
              { item: '연구실 인턴 경험', status: '미이수', color: 'text-[#f0b03f]' },
              { item: '관능평가 실무 경험', status: '동아리 실습 (부분 충족)', color: 'text-[#f0b03f]' },
              { item: '전공 적합도', status: '식품영양학과 (충족)', color: 'text-[#2e7d32]' },
            ].map(row => (
              <div key={row.item} className="flex items-center justify-between rounded-lg bg-[#f8fafd] border border-[#e8eef6] px-3 py-2 text-sm">
                <span className="text-[#364457]">{row.item}</span>
                <span className={`text-xs font-semibold ${row.color}`}>{row.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SectionCard eyebrow="지원 흐름" title="추천 준비 경로">
        <div className="grid gap-4 md:grid-cols-4">
          {alumniPath.map((path, index) => (
            <div key={path.id} className="rounded-md border border-[#dce4f3] bg-[#f8fbff] p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#316bff] text-sm font-semibold text-white">
                {index + 1}
              </div>
              <div className="mt-3 text-sm text-[#6d7a8e]">{path.stage}</div>
              <div className="mt-1 font-semibold text-[#344257]">{path.milestone}</div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
