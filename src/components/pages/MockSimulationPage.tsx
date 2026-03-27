import { useState } from 'react'
import { alumniPath } from '../../data/unisync'
import { SectionCard } from '../ui/SectionCard'

const resourceRows = [
  { category: '기타', title: '2026 상반기 채용 대비: 기업이 실제로 묻는 면접 질문 트렌드 분석', views: '56', date: '2026-02-26' },
  { category: '기타', title: '산업·직무별 유망 분야 분석', views: '34', date: '2026-02-26' },
  { category: '취업뉴스', title: '2026년 10대 주요 기업 신년사 핵심 정리', views: '16', date: '2026-02-24' },
  { category: '기타', title: '기업이 같이 일하고 싶은 사람을 뽑는 이유', views: '15', date: '2026-02-23' },
]

const companyRows = [
  { state: '선배', name: '현대모템', type: '중견기업', area: '서울', sales: '2,229,836', pay: '3,300' },
  { state: '학과/선배', name: '삼성전자', type: '대기업', area: '경기', sales: '154,772,900', pay: '4,051' },
  { state: '학과/선배', name: '현대자동차', type: '대기업', area: '서울', sales: '49,155,690', pay: '4,051' },
  { state: '선배', name: '에스케이하이닉스', type: '대기업', area: '경기', sales: '25,320,760', pay: '4,058' },
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
