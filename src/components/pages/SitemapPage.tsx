import { SectionCard } from '../ui/SectionCard'

const sitemapGroups = [
  { title: 'HOME', items: ['MY HOME', '나의 이수현황', '공지사항', '취업정보'] },
  { title: 'My로드맵', items: ['학업계획서', '연구실적', '비교과 실적', '액션 플랜'] },
  { title: '졸업선배 노하우·멘토링', items: ['졸업선배 정보검색', '멘토링상담', '취업·진학후기', '직무간담회'] },
  { title: '취업정보', items: ['취업자료실', '기업정보', '동영상특강', '프로그램 안내'] },
  { title: '채용정보', items: ['추천채용', '일반채용', '인턴채용', '채용설명회'] },
  { title: '진단실시', items: ['직업기초역량진단', '진로성숙도검사', '취업준비도검사', '직무적성검사'] },
  { title: '상담예약', items: ['기초조사지', '교수님 상담', '취업지원관 상담', '외부컨설턴트 컨설팅'] },
]

export function SitemapPage() {
  return (
    <SectionCard eyebrow="사이트맵" title="전체 메뉴">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sitemapGroups.map((group) => (
          <div key={group.title} className="rounded-md border border-[#dce4f3] bg-[#f8fbff] p-5">
            <div className="text-[17px] font-semibold text-[#344257]">{group.title}</div>
            <div className="mt-4 space-y-2 text-sm text-[#647387]">
              {group.items.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}
